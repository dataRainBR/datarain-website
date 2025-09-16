import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Tag, ExternalLink, Clock } from 'lucide-react';
import { useWordPressPost, useWordPressMedia } from '@/hooks/useWordPress';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import WordPressRelatedPosts from '@/components/wordpress/WordPressRelatedPosts';

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
      <>
        <UniversalHeader />
        <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
          <div className="container mx-auto px-4 py-16">
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-lg text-muted-foreground">Carregando post...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <UniversalHeader />
        <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto">
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
        </div>
      </>
    );
  }

  return (
    <>
      <UniversalHeader />
      
      {/* Hero Section com título do post */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Background splashes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Background image overlay se tiver imagem destacada */}
        {media && (
          <div className="absolute inset-0">
            <img
              src={media.source_url}
              alt={media.alt_text || post.title.rendered}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
          </div>
        )}

        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb/Navigation */}
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={handleGoBack}
                className="mb-6 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao blog
              </Button>
            </div>

            {/* Post meta */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                <span>5 min de leitura</span>
              </div>
            </div>
            
            {/* Post title */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Post excerpt if available */}
            {post.excerpt.rendered && (
              <div 
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Featured image full width */}
            {media && (
              <div className="mb-12">
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={media.source_url}
                      alt={media.alt_text || post.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {media.caption.rendered && (
                    <CardContent className="p-4 bg-muted/50">
                      <p 
                        className="text-sm text-muted-foreground text-center italic"
                        dangerouslySetInnerHTML={{ __html: media.caption.rendered }}
                      />
                    </CardContent>
                  )}
                </Card>
              </div>
            )}

            {/* Post content */}
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-lg prose-slate dark:prose-invert max-w-none
                           prose-headings:text-foreground prose-headings:font-bold
                           prose-p:text-muted-foreground prose-p:leading-relaxed
                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                           prose-strong:text-foreground prose-em:text-muted-foreground
                           prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                           prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                           prose-pre:bg-muted prose-pre:border
                           prose-img:rounded-lg prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </CardContent>
            </Card>

            {/* Tags and categories */}
            {(post.categories.length > 0 || post.tags.length > 0) && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {post.categories.length > 0 && (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-semibold text-muted-foreground">Categorias:</span>
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 5).map((categoryId) => (
                            <Badge key={categoryId} variant="secondary" className="text-xs">
                              Categoria {categoryId}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-semibold text-muted-foreground">Tags:</span>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 8).map((tagId) => (
                            <Badge key={tagId} variant="outline" className="text-xs">
                              #{tagId}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Posts Carousel */}
            <WordPressRelatedPosts currentPostId={Number(id)} />

            {/* Actions */}
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold mb-1">Gostou do conteúdo?</h3>
                    <p className="text-sm text-muted-foreground">Compartilhe ou acesse o post original no WordPress</p>
                  </div>
                  
                  <div className="flex gap-3">
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
        </div>
      </main>
    </>
  );
};

export default WordPressPostView;
