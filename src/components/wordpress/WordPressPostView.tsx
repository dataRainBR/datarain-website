import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useWordPressPost, useWordPressMedia } from '@/hooks/useWordPress';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import WordPressRelatedPosts from '@/components/wordpress/WordPressRelatedPosts';
import Footer from '@/components/Footer';
import { sanitizeHTML } from '@/lib/sanitize';

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
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title.rendered) }}
            />

            {/* Post excerpt if available */}
            {post.excerpt.rendered && (
              <div 
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.excerpt.rendered) }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            

            {/* Post content */}
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="wordpress-content prose prose-lg prose-slate dark:prose-invert max-w-none
                           prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                           prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6
                           prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                           prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                           prose-h4:text-lg prose-h4:mt-5 prose-h4:mb-2
                           prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                           prose-strong:text-foreground prose-strong:font-semibold
                           prose-em:text-muted-foreground prose-em:italic
                           prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc prose-ul:space-y-2
                           prose-ol:my-4 prose-ol:pl-6 prose-ol:list-decimal prose-ol:space-y-2
                           prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-1
                           prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic
                           prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                           prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6 prose-pre:overflow-x-auto
                           prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6
                           prose-hr:my-8 prose-hr:border-border
                           prose-table:w-full prose-table:my-6 prose-table:border-collapse
                           prose-thead:bg-muted prose-thead:border-b prose-thead:border-border
                           prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:border prose-th:border-border
                           prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-border prose-td:text-muted-foreground
                           prose-tr:border-b prose-tr:border-border prose-tr:even:bg-muted/30
                           prose-figure:my-6 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-2"
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content.rendered) }}
                />
              </CardContent>
            </Card>


            {/* Related Posts Carousel */}
            <WordPressRelatedPosts currentPostId={Number(id)} />

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default WordPressPostView;
