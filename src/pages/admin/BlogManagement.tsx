import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { PostEditor } from '@/components/admin/PostEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Pencil, Trash2, Download, RefreshCw } from 'lucide-react';
import { Post } from '@/types/admin';
import { 
  importAllBlogPosts, 
  mergeImportedPosts, 
  savePost,
  isPostEdited 
} from '@/lib/markdownConverter';

const BlogManagement: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>();
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    // Carregar posts importados do Markdown
    const importedPosts = importAllBlogPosts();
    
    // Carregar posts criados/editados no admin
    const stored = localStorage.getItem('admin_blog_posts');
    const adminPosts: Post[] = stored ? JSON.parse(stored) : [];
    
    // Mesclar posts
    const merged = mergeImportedPosts(importedPosts, adminPosts);
    setPosts(merged);
  };

  const handleImport = () => {
    setIsImporting(true);
    setTimeout(() => {
      loadPosts();
      setIsImporting(false);
    }, 500);
  };

  const handleSave = (post: Post) => {
    savePost(post, 'blog');
    loadPosts();
    setIsEditing(false);
    setEditingPost(undefined);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleDelete = (postId: string) => {
    if (confirm('Tem certeza que deseja excluir este post?')) {
      const stored = localStorage.getItem('admin_blog_posts');
      const adminPosts: Post[] = stored ? JSON.parse(stored) : [];
      const updatedPosts = adminPosts.filter((p) => p.id !== postId);
      localStorage.setItem('admin_blog_posts', JSON.stringify(updatedPosts));
      loadPosts();
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingPost(undefined);
  };

  if (isEditing) {
    return (
      <AdminLayout>
        <PostEditor
          post={editingPost}
          type="blog"
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Gerenciar Blog</h1>
            <p className="text-muted-foreground">
              Gerencie os posts do blog (importados e novos)
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleImport}
              disabled={isImporting}
            >
              {isImporting ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Download className="h-4 w-4 mr-2" />
              )}
              Reimportar do Markdown
            </Button>
            <Button onClick={() => setIsEditing(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Novo Post
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Posts do Blog</CardTitle>
            <CardDescription>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} (
              {posts.filter(p => p.id.startsWith('imported-')).length} importados,{' '}
              {posts.filter(p => !p.id.startsWith('imported-')).length} criados no admin)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {posts.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Nenhum post encontrado.</p>
                <p className="text-sm">Clique em "Reimportar" para carregar posts existentes ou "Novo Post" para criar.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Origem</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {post.id.startsWith('imported-') ? (
                            <>
                              <Download className="h-3 w-3 mr-1" />
                              Importado
                              {isPostEdited(post.id, 'blog') && ' (Editado)'}
                            </>
                          ) : (
                            'Criado no Admin'
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(post.updatedAt).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(post)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          {!post.id.startsWith('imported-') && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BlogManagement;
