import React, { useState, useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  GripVertical, 
  Trash2, 
  Image as ImageIcon,
  Type,
  Heading,
  Quote,
  Code,
  Minus,
  Upload,
  X,
} from 'lucide-react';
import { ContentBlock as ContentBlockType } from '@/types/admin';

interface ContentBlockProps {
  block: ContentBlockType;
  onUpdate: (block: ContentBlockType) => void;
  onDelete: () => void;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ block, onUpdate, onDelete }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  const handleContentChange = (content: string) => {
    onUpdate({ ...block, content });
  };

  const handleMetadataChange = (key: string, value: any) => {
    onUpdate({
      ...block,
      metadata: { ...block.metadata, [key]: value },
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Block image upload triggered, file:', file);
    
    if (!file) {
      console.log('No file selected for block, keeping current image');
      return; // Não limpar a imagem se não houver arquivo
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log('Block image loaded, setting imageUrl');
      handleMetadataChange('imageUrl', reader.result as string);
    };
    reader.onerror = (error) => {
      console.error('Error reading block image:', error);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    handleMetadataChange('imageUrl', '');
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  const renderBlockContent = () => {
    switch (block.type) {
      case 'header':
        return (
          <div className="space-y-2">
            <div className="flex gap-2">
              <select
                value={block.metadata?.level || 2}
                onChange={(e) => handleMetadataChange('level', parseInt(e.target.value))}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value={1}>H1</option>
                <option value={2}>H2</option>
                <option value={3}>H3</option>
                <option value={4}>H4</option>
              </select>
            </div>
            <Input
              placeholder="Digite o título..."
              value={block.content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="text-lg font-semibold"
            />
          </div>
        );

      case 'title':
        return (
          <Input
            placeholder="Digite o título..."
            value={block.content}
            onChange={(e) => handleContentChange(e.target.value)}
            className="text-2xl font-bold"
          />
        );

      case 'text':
        return (
          <Textarea
            placeholder="Digite o texto..."
            value={block.content}
            onChange={(e) => handleContentChange(e.target.value)}
            rows={6}
            className="resize-none"
          />
        );

      case 'image':
        return (
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="URL da imagem ou faça upload"
                value={block.metadata?.imageUrl?.startsWith('data:') ? '' : (block.metadata?.imageUrl || '')}
                onChange={(e) => handleMetadataChange('imageUrl', e.target.value)}
                disabled={block.metadata?.imageUrl?.startsWith('data:')}
              />
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => imageInputRef.current?.click()}
              >
                <Upload className="h-4 w-4" />
              </Button>
              {block.metadata?.imageUrl && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input
              placeholder="Texto alternativo"
              value={block.metadata?.imageAlt || ''}
              onChange={(e) => handleMetadataChange('imageAlt', e.target.value)}
            />
            {block.metadata?.imageUrl && (
              <div className="relative">
                <img
                  src={block.metadata.imageUrl}
                  alt={block.metadata.imageAlt || ''}
                  className="w-full rounded-lg max-h-64 object-cover"
                />
                {block.metadata?.imageUrl?.startsWith('data:') && (
                  <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    Imagem Local
                  </span>
                )}
              </div>
            )}
          </div>
        );

      case 'quote':
        return (
          <Textarea
            placeholder="Digite a citação..."
            value={block.content}
            onChange={(e) => handleContentChange(e.target.value)}
            rows={4}
            className="resize-none italic"
          />
        );

      case 'code':
        return (
          <div className="space-y-2">
            <Input
              placeholder="Linguagem (ex: javascript, python)"
              value={block.metadata?.language || ''}
              onChange={(e) => handleMetadataChange('language', e.target.value)}
            />
            <Textarea
              placeholder="Digite o código..."
              value={block.content}
              onChange={(e) => handleContentChange(e.target.value)}
              rows={8}
              className="resize-none font-mono text-sm"
            />
          </div>
        );

      case 'divider':
        return (
          <div className="py-4">
            <hr className="border-t-2 border-border" />
          </div>
        );

      default:
        return null;
    }
  };

  const getBlockIcon = () => {
    switch (block.type) {
      case 'header':
        return <Heading className="h-4 w-4" />;
      case 'title':
        return <Type className="h-4 w-4" />;
      case 'text':
        return <Type className="h-4 w-4" />;
      case 'image':
        return <ImageIcon className="h-4 w-4" />;
      case 'quote':
        return <Quote className="h-4 w-4" />;
      case 'code':
        return <Code className="h-4 w-4" />;
      case 'divider':
        return <Minus className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getBlockLabel = () => {
    switch (block.type) {
      case 'header':
        return `Header H${block.metadata?.level || 2}`;
      case 'title':
        return 'Título';
      case 'text':
        return 'Texto';
      case 'image':
        return 'Imagem';
      case 'quote':
        return 'Citação';
      case 'code':
        return 'Código';
      case 'divider':
        return 'Divisor';
      default:
        return 'Bloco';
    }
  };

  return (
    <Card ref={setNodeRef} style={style} className={`p-4 transition-all duration-200 ${
      isDragging ? 'scale-95 shadow-lg' : 'hover:shadow-md'
    }`}>
      <div className="flex items-start gap-3">
        {/* Drag Handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing pt-2 hover:text-primary transition-colors"
        >
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {getBlockIcon()}
            <span className="font-medium">{getBlockLabel()}</span>
          </div>
          {renderBlockContent()}
        </div>

        {/* Delete Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
