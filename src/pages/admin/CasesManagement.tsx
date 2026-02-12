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
  importAllCases, 
  mergeImportedPosts, 
  savePost,
  isPostEdited 
} from '@/lib/markdownConverter';

const CasesManagement: React.FC = () => {
  const [cases, setCases] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCase, setEditingCase] = useState<Post | undefined>();
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = () => {
    // Carregar cases importados do Markdown
    const importedCases = importAllCases();
    
    // Carregar cases criados/editados no admin
    const stored = localStorage.getItem('admin_cases');
    const adminCases: Post[] = stored ? JSON.parse(stored) : [];
    
    // Mesclar cases
    const merged = mergeImportedPosts(importedCases, adminCases);
    setCases(merged);
  };

  const handleImport = () => {
    setIsImporting(true);
    setTimeout(() => {
      loadCases();
      setIsImporting(false);
    }, 500);
  };

  const handleSave = (caseData: Post) => {
    savePost(caseData, 'case');
    loadCases();
    setIsEditing(false);
    setEditingCase(undefined);
  };

  const handleEdit = (caseData: Post) => {
    setEditingCase(caseData);
    setIsEditing(true);
  };

  const handleDelete = (caseId: string) => {
    if (confirm('Tem certeza que deseja excluir este case?')) {
      const stored = localStorage.getItem('admin_cases');
      const adminCases: Post[] = stored ? JSON.parse(stored) : [];
      const updatedCases = adminCases.filter((c) => c.id !== caseId);
      localStorage.setItem('admin_cases', JSON.stringify(updatedCases));
      loadCases();
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingCase(undefined);
  };

  if (isEditing) {
    return (
      <AdminLayout>
        <PostEditor
          post={editingCase}
          type="case"
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
            <h1 className="text-3xl font-bold">Gerenciar Cases</h1>
            <p className="text-muted-foreground">
              Gerencie os cases de sucesso (importados e novos)
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
              Novo Case
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cases de Sucesso</CardTitle>
            <CardDescription>
              {cases.length} {cases.length === 1 ? 'case' : 'cases'} (
              {cases.filter(c => c.id.startsWith('imported-')).length} importados,{' '}
              {cases.filter(c => !c.id.startsWith('imported-')).length} criados no admin)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {cases.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Nenhum case encontrado.</p>
                <p className="text-sm">Clique em "Reimportar" para carregar cases existentes ou "Novo Case" para criar.</p>
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
                  {cases.map((caseData) => (
                    <TableRow key={caseData.id}>
                      <TableCell className="font-medium">{caseData.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {caseData.id.startsWith('imported-') ? (
                            <>
                              <Download className="h-3 w-3 mr-1" />
                              Importado
                              {isPostEdited(caseData.id, 'case') && ' (Editado)'}
                            </>
                          ) : (
                            'Criado no Admin'
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={caseData.status === 'published' ? 'default' : 'secondary'}>
                          {caseData.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(caseData.updatedAt).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(caseData)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          {!caseData.id.startsWith('imported-') && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(caseData.id)}
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

export default CasesManagement;
