import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { useWordPressPost, useWordPressMedia } from '@/hooks/useWordPress';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';

const WordPressPostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useWordPressPost(id || '');
  const { data: media } = useWordPressMedia(post?.featured_media || 0);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd MMM yyyy', { locale: ptBR });
    } catch {
      return dateString;
    }
  };

  const handleGoBack = () => {
    navigate('/blog');
  };

  const handleGoToWordPress = () => {
    if (post?.link) {
      window.open(post.link, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-lg text-muted-foreground">Carregando post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Erro ao carregar post
            </h2>
            <p className="text-muted-foreground mb-6">
              {error?.message || 'Post não encontrado'}
            </p>
            <Button onClick={handleGoBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao blog
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header com navegação */}
      <div className="mb-8">
        <Button
          variant="outline"
          onClick={handleGoBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao blog
        </Button>
        
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            
            <CardTitle 
              className="text-3xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </CardHeader>
        </Card>
      </div>

      {/* Imagem destacada */}
      {media && (
        <Card className="mb-8">
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img
              src={media.source_url}
              alt={media.alt_text || post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
          {media.caption.rendered && (
            <CardContent className="p-4">
              <p 
                className="text-sm text-muted-foreground text-center italic"
                dangerouslySetInnerHTML={{ __html: media.caption.rendered }}
              />
            </CardContent>
          )}
        </Card>
      )}

      {/* Conteúdo do post */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </CardContent>
      </Card>

      {/* Metadados e ações */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {post.categories.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Categorias:</span>
                  <div className="flex gap-1">
                    {post.categories.slice(0, 3).map((categoryId) => (
                      <Badge key={categoryId} variant="secondary">
                        Categoria {categoryId}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  <div className="flex gap-1">
                    {post.tags.slice(0, 3).map((tagId) => (
                      <Badge key={tagId} variant="outline">
                        Tag {tagId}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleGoToWordPress}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Ver no WordPress
              </Button>
              
              <Button
                onClick={handleGoBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao blog
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordPressPostView;
