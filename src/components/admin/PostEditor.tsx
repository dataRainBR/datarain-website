import React, { useState, useRef, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  UniqueIdentifier,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Plus,
  Heading,
  Type,
  Image as ImageIcon,
  Quote,
  Code,
  Minus,
  Eye,
  Save,
  Upload,
  X,
  GripVertical,
  Calendar,
  Clock,
  User,
  Share2,
} from 'lucide-react';
import { ContentBlock } from './ContentBlock';
import { DroppableBlock } from './DroppableBlock';
import { Post, ContentBlock as ContentBlockType } from '@/types/admin';
import { toast } from 'sonner';

interface BlockType {
  id: string;
  type: ContentBlockType['type'];
  label: string;
  icon: React.ReactNode;
}

const BLOCK_TYPES: BlockType[] = [
  { id: 'new-header', type: 'header', label: 'Header', icon: <Heading className="h-5 w-5" /> },
  { id: 'new-title', type: 'title', label: 'Título', icon: <Type className="h-5 w-5" /> },
  { id: 'new-text', type: 'text', label: 'Texto', icon: <Type className="h-5 w-5" /> },
  { id: 'new-image', type: 'image', label: 'Imagem', icon: <ImageIcon className="h-5 w-5" /> },
  { id: 'new-quote', type: 'quote', label: 'Citação', icon: <Quote className="h-5 w-5" /> },
  { id: 'new-code', type: 'code', label: 'Código', icon: <Code className="h-5 w-5" /> },
  { id: 'new-divider', type: 'divider', label: 'Divisor', icon: <Minus className="h-5 w-5" /> },
];

interface PostEditorProps {
  post?: Post;
  type: 'blog' | 'case';
  onSave: (post: Post) => void;
  onCancel: () => void;
}

export const PostEditor: React.FC<PostEditorProps> = ({
  post,
  type,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [coverImage, setCoverImage] = useState(post?.coverImage || '');
  const [blocks, setBlocks] = useState<ContentBlockType[]>(post?.blocks || []);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const coverImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('coverImage state changed:', coverImage ? `${coverImage.substring(0, 50)}...` : 'empty');
  }, [coverImage]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event: DragOverEvent) => {
    setOverId(event.over?.id || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    setActiveId(null);
    setOverId(null);

    if (!over) return;

    // Se está arrastando um novo bloco da gaveta
    if (active.id.toString().startsWith('new-')) {
      const blockType = BLOCK_TYPES.find(bt => bt.id === active.id)?.type;
      if (!blockType) return;

      const newBlock: ContentBlockType = {
        id: `block-${Date.now()}`,
        type: blockType,
        content: '',
        order: blocks.length,
        metadata: {},
      };

      // Encontrar a posição onde soltar
      const overIndex = blocks.findIndex((item) => item.id === over.id);
      
      if (overIndex === -1) {
        // Adicionar no final
        setBlocks([...blocks, newBlock]);
      } else {
        // Inserir na posição
        const newBlocks = [...blocks];
        newBlocks.splice(overIndex, 0, newBlock);
        setBlocks(newBlocks);
      }
    } else {
      // Reordenando blocos existentes
      if (active.id !== over.id) {
        setBlocks((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
    setOverId(null);
  };

  const addBlock = (blockType: ContentBlockType['type']) => {
    const newBlock: ContentBlockType = {
      id: `block-${Date.now()}`,
      type: blockType,
      content: '',
      order: blocks.length,
      metadata: {},
    };
    setBlocks([...blocks, newBlock]);
  };

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Upload triggered, file:', file);
    
    if (!file) {
      console.log('No file selected, keeping current image');
      return; // Não limpar a imagem se não houver arquivo
    }
    
    console.log('File size:', file.size, 'bytes');
    const reader = new FileReader();
    
    reader.onload = (event) => {
      console.log('onload triggered');
      const result = event.target?.result;
      if (result) {
        console.log('Image loaded successfully, result length:', (result as string).length);
        setCoverImage(result as string);
      }
    };
    
    reader.onloadend = () => {
      console.log('onloadend triggered, result:', reader.result ? 'exists' : 'null');
      if (reader.result) {
        setCoverImage(reader.result as string);
      }
    };
    
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    
    console.log('Starting to read file...');
    reader.readAsDataURL(file);
  };

  const removeCoverImage = () => {
    setCoverImage('');
    if (coverImageInputRef.current) {
      coverImageInputRef.current.value = '';
    }
  };

  const updateBlock = (blockId: string, updatedBlock: ContentBlockType) => {
    setBlocks(blocks.map((b) => (b.id === blockId ? updatedBlock : b)));
  };

  const deleteBlock = (blockId: string) => {
    setBlocks(blocks.filter((b) => b.id !== blockId));
  };

  const handleSave = () => {
    const postData: Post = {
      id: post?.id || `post-${Date.now()}`,
      title,
      slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
      excerpt,
      coverImage,
      author: 'Admin',
      authorId: '1',
      type,
      status: 'published',
      blocks: blocks.map((b, index) => ({ ...b, order: index })),
      tags: [],
      categories: [],
      createdAt: post?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
    };
    
    console.log('Saving post with coverImage:', coverImage ? 'exists' : 'empty');
    onSave(postData);
    
    toast.success('Salvo com sucesso!', {
      description: coverImage?.startsWith('data:') 
        ? 'Post salvo com imagem local' 
        : 'Post salvo',
    });
  };

  const renderPreview = () => {
    const readingTime = Math.ceil(blocks.reduce((acc, block) => acc + block.content.split(' ').length, 0) / 200);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {type === 'blog' ? 'Artigo' : 'Case de Sucesso'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
              {title || 'Título do Post'}
            </h1>
            {excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {excerpt}
              </p>
            )}
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{new Date().toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{readingTime} min de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>dataRain Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {coverImage && (
          <div className="max-w-5xl mx-auto px-4 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img
                src={coverImage}
                alt={title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl p-8 md:p-12">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-primary
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6
              prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border">
              {blocks.map((block) => {
                switch (block.type) {
                  case 'header':
                    const HeaderTag = `h${block.metadata?.level || 2}` as keyof JSX.IntrinsicElements;
                    return <HeaderTag key={block.id}>{block.content || 'Header'}</HeaderTag>;
                  case 'title':
                    return <h2 key={block.id}>{block.content || 'Título'}</h2>;
                  case 'text':
                    return <p key={block.id}>{block.content || 'Texto...'}</p>;
                  case 'image':
                    return block.metadata?.imageUrl ? (
                      <img
                        key={block.id}
                        src={block.metadata.imageUrl}
                        alt={block.metadata.imageAlt || ''}
                        className="rounded-xl shadow-lg"
                      />
                    ) : (
                      <div key={block.id} className="bg-muted rounded-xl h-64 flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-12 w-12" />
                      </div>
                    );
                  case 'quote':
                    return <blockquote key={block.id}>{block.content || 'Citação...'}</blockquote>;
                  case 'code':
                    return (
                      <pre key={block.id}>
                        <code>{block.content || '// código...'}</code>
                      </pre>
                    );
                  case 'divider':
                    return <hr key={block.id} className="my-8" />;
                  default:
                    return null;
                }
              })}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Gostou deste conteúdo?</h3>
              <p className="text-muted-foreground mb-6">
                Compartilhe com sua rede e ajude mais pessoas a descobrirem!
              </p>
              <div className="flex justify-center gap-3">
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {post ? 'Editar' : 'Novo'} {type === 'blog' ? 'Post' : 'Case'}
            </h2>
            {coverImage && coverImage.startsWith('data:') && (
              <p className="text-sm text-amber-600 mt-1">
                ⚠️ Imagem carregada - clique em "Salvar" para aplicar as mudanças
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="relative">
              <Save className="h-4 w-4 mr-2" />
              Salvar
              {coverImage && coverImage.startsWith('data:') && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-amber-500 rounded-full animate-pulse"></span>
              )}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList>
            <TabsTrigger value="edit">Editar</TabsTrigger>
            <TabsTrigger value="preview">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Digite o título..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="slug-do-post"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Resumo</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Breve descrição..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage">Imagem de Capa</Label>
                <div className="flex gap-2">
                  <Input
                    id="coverImage"
                    type="url"
                    value={coverImage?.startsWith('data:') ? '' : coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://... ou faça upload"
                    disabled={coverImage?.startsWith('data:')}
                  />
                  <input
                    ref={coverImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => coverImageInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                  {coverImage && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={removeCoverImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {coverImage && (
                  <div className="relative" key={coverImage.substring(0, 100)}>
                    <img
                      src={coverImage}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => console.error('Image failed to load:', e)}
                      onLoad={() => console.log('Image rendered successfully')}
                    />
                    {coverImage?.startsWith('data:') && (
                      <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        Imagem Local
                      </span>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Content Blocks */}
          <div className="grid grid-cols-12 gap-6">
            {/* Gaveta de Blocos - Sidebar */}
            <div className="col-span-3">
              <Card className={`sticky top-6 transition-all duration-200 ${
                blocks.length === 0 && !activeId ? 'ring-2 ring-primary ring-offset-2 animate-pulse' : ''
              }`}>
                <CardHeader>
                  <CardTitle className="text-sm">Blocos Disponíveis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs text-muted-foreground mb-4">
                    {blocks.length === 0 && !activeId 
                      ? '👈 Arraste um bloco para começar'
                      : 'Arraste os blocos para o editor'}
                  </p>
                  {BLOCK_TYPES.map((blockType) => (
                    <DroppableBlock
                      key={blockType.id}
                      id={blockType.id}
                      icon={blockType.icon}
                      label={blockType.label}
                    />
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Editor de Conteúdo */}
            <div className="col-span-9">
              <Card className={`transition-all duration-200 ${
                activeId && activeId.toString().startsWith('new-') 
                  ? 'ring-2 ring-primary ring-offset-2' 
                  : ''
              }`}>
                <CardHeader>
                  <CardTitle>Conteúdo</CardTitle>
                </CardHeader>
                <CardContent>
                  {blocks.length === 0 ? (
                    <div className={`text-center py-16 border-2 border-dashed rounded-lg transition-all duration-200 ${
                      activeId && activeId.toString().startsWith('new-')
                        ? 'border-primary bg-primary/5 scale-[1.02]'
                        : 'border-muted-foreground/25'
                    }`}>
                      <Plus className={`h-12 w-12 mx-auto mb-4 transition-all duration-200 ${
                        activeId && activeId.toString().startsWith('new-')
                          ? 'opacity-100 text-primary scale-110'
                          : 'opacity-50'
                      }`} />
                      <p className="text-muted-foreground font-medium">
                        {activeId && activeId.toString().startsWith('new-')
                          ? 'Solte o bloco aqui'
                          : 'Arraste blocos da gaveta lateral'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activeId && activeId.toString().startsWith('new-')
                          ? 'para adicionar ao seu conteúdo'
                          : 'para começar a criar seu conteúdo'}
                      </p>
                    </div>
                  ) : (
                    <SortableContext
                      items={blocks.map((b) => b.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-4">
                        {blocks.map((block, index) => {
                          const isOver = overId === block.id;
                          const isBeforeOver = index > 0 && overId === blocks[index - 1]?.id;
                          
                          return (
                            <div key={block.id} className="relative">
                              {/* Drop indicator antes do bloco */}
                              {isOver && activeId && (
                                <div className="absolute -top-10 left-0 right-0 h-16 mb-2 z-10">
                                  <div className="h-full border-2 border-dashed border-primary bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg flex items-center justify-center animate-pulse shadow-lg">
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                                      <Plus className="h-5 w-5 animate-bounce" />
                                      <span className="text-sm">Solte aqui</span>
                                      <Plus className="h-5 w-5 animate-bounce" />
                                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              <div className={`transition-all duration-300 ${
                                isOver && activeId ? 'mt-20 scale-[0.98]' : 
                                isBeforeOver && activeId ? 'scale-[0.98]' : 
                                'mt-0 scale-100'
                              }`}>
                                <ContentBlock
                                  block={block}
                                  onUpdate={(updated) => updateBlock(block.id, updated)}
                                  onDelete={() => deleteBlock(block.id)}
                                />
                              </div>
                            </div>
                          );
                        })}
                        
                        {/* Drop zone no final quando arrastando */}
                        {activeId && (
                          <div className="h-16 border-2 border-dashed border-primary bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg flex items-center justify-center animate-pulse shadow-md transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <div className="h-1 w-8 bg-primary rounded-full"></div>
                              <Plus className="h-5 w-5" />
                              <span className="text-sm">
                                {activeId.toString().startsWith('new-') 
                                  ? 'Solte aqui para adicionar no final'
                                  : 'Mover para o final'}
                              </span>
                              <Plus className="h-5 w-5" />
                              <div className="h-1 w-8 bg-primary rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </SortableContext>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardContent className="pt-6">{renderPreview()}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>

      {/* Drag Overlay - mostra o item sendo arrastado */}
      <DragOverlay dropAnimation={{
        duration: 200,
        easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
      }}>
      {activeId ? (
        activeId.toString().startsWith('new-') ? (
          // Arrastando um bloco novo da gaveta
          <Card className="p-3 shadow-2xl rotate-3 scale-105 border-2 border-primary bg-background">
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
              {BLOCK_TYPES.find(bt => bt.id === activeId)?.icon}
              <span className="text-sm font-medium">
                {BLOCK_TYPES.find(bt => bt.id === activeId)?.label}
              </span>
            </div>
          </Card>
        ) : (
          // Arrastando um bloco existente
          <Card className="p-4 shadow-2xl rotate-2 scale-105 border-2 border-primary bg-background">
            <div className="flex items-start gap-3">
              <GripVertical className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  {blocks.find(b => b.id === activeId)?.type}
                </div>
                <div className="text-sm opacity-50">Arrastando...</div>
              </div>
            </div>
          </Card>
        )
      ) : null}
      </DragOverlay>
    </DndContext>
  );
};
