import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MarkdownRenderer } from './MarkdownRenderer';
import { getPostBySlug, MarkdownPost } from '@/lib/markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, Clock, Share2, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import UniversalHeader from '@/components/layout/UniversalHeader';
import Footer from '@/components/Footer';
import { CaseDemo } from '@/components/cases-demos/CaseDemo';

interface MarkdownPostViewProps {
  type: 'blog' | 'cases';
  backRoute?: string;
}

export const MarkdownPostView: React.FC<MarkdownPostViewProps> = ({ 
  type, 
  backRoute 
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || '';
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copiado!');
    }
  };
  
  const post = slug ? getPostBySlug(slug, type) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <UniversalHeader showHeroSection={false} />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O post que você está procurando não existe.
            </p>
            <Button onClick={() => navigate(backRoute || `/${type}`)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(post.date), "MMMM 'de' yyyy", { locale: ptBR });
  const readingTime = Math.ceil(post.content.split(' ').length / 200); // ~200 palavras por minuto

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Featured Image */}
      <div className="relative w-full bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]"></div>
        
        <div className="relative container mx-auto px-4 pt-32 pb-12">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate(backRoute || `/${type}`)}
              className="mb-8 hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para {type === 'blog' ? 'Blog' : 'Cases'}
            </Button>
          </div>

          {/* Title Section */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {type === 'blog' ? '📝 Artigo' : '💼 Case de Sucesso'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {post.title}
              </h1>
              {post.excerpt && (
                <div className={type === 'cases' && post.featuredImage ? 'flex items-start gap-6' : ''}>
                  {type === 'cases' && post.featuredImage && (
                    <div className="shrink-0 rounded-2xl border border-border/50 shadow-lg bg-white p-4 flex items-center justify-center">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-auto object-contain max-h-16 md:max-h-20 max-w-[120px] md:max-w-[160px]"
                      />
                    </div>
                  )}
                  <p className="text-xl text-muted-foreground leading-relaxed text-justify">
                    {post.excerpt}
                  </p>
                </div>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{readingTime} min de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>dataRain Team</span>
              </div>
              <button onClick={handleShare} className="ml-auto flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors" aria-label="Compartilhar">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image (blog only — cases show logo next to title) */}
      {post.featuredImage && type !== 'cases' && (
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl p-8 md:p-12">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-justify
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-primary
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:font-semibold
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:border prose-pre:border-border
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6
              prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border
              prose-hr:border-border prose-hr:my-8
              prose-ul:my-6 prose-ol:my-6
              prose-li:my-2
              [&_h2_strong]:text-inherit">
              {(() => {
                if (type === 'cases' && slug) {
                  // Split content: intro (before first ##) and rest (from first ## onwards)
                  const firstH2 = post.content.indexOf('\n## ');
                  if (firstH2 > 0) {
                    const intro = post.content.slice(0, firstH2);
                    const rest = post.content.slice(firstH2);
                    return (
                      <>
                        <MarkdownRenderer content={intro} />
                        <div className="not-prose my-10">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mt-10 mb-2 text-primary tracking-tight flex items-center gap-3">
                              <span className="w-1 h-8 bg-primary rounded-full inline-block shrink-0" />
                              Acompanhe a jornada
                            </h2>
                            <p className="text-sm text-muted-foreground ml-[1.15rem]">Navegue pelas etapas da transformação deste projeto</p>
                          </div>
                          <CaseDemo slug={slug} />
                        </div>
                        <MarkdownRenderer content={rest} />
                        {post.youtubeVideoId && (
                          <div className="not-prose my-10">
                            <div className="mb-6">
                              <h2 className="text-3xl font-bold mt-10 mb-2 text-primary tracking-tight flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full inline-block shrink-0" />
                                Veja o case em vídeo
                              </h2>
                              <p className="text-sm text-muted-foreground ml-[1.15rem]">Assista ao depoimento completo sobre este projeto</p>
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-border/50" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                                title={`Vídeo do case: ${post.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}
                      </>
                    );
                  }
                }
                return <MarkdownRenderer content={post.content} />;
              })()}
            </div>
          </div>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border/50">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Gostou deste conteúdo?</h3>
              <p className="text-muted-foreground mb-6">
                Compartilhe com sua rede e ajude mais pessoas a descobrirem!
              </p>
              <div className="flex justify-center gap-3">
                <Button className="gap-2" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => navigate(backRoute || `/${type}`)}>
                  Ver mais {type === 'blog' ? 'artigos' : 'cases'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};
