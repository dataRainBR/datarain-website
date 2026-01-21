import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter, Facebook, ArrowRight, Share2 } from 'lucide-react';
import { useWordPressPost, useWordPressMedia, useWordPressCategoriesByIds, useWordPressPosts } from '@/hooks/useWordPress';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import Footer from '@/components/Footer';
import { sanitizeHTML, stripHTML } from '@/lib/sanitize';

// Extrai texto limpo do HTML
const extractTextFromContent = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

// Estima tempo de leitura
const estimateReadTime = (content: string): number => {
  const text = extractTextFromContent(content);
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

const WordPressPostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useWordPressPost(id || '');
  const { data: media } = useWordPressMedia(post?.featured_media || 0);
  const { data: categories } = useWordPressCategoriesByIds(post?.categories || []);
  const { data: relatedPosts } = useWordPressPosts({ per_page: 4 });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd 'de' MMMM, yyyy", { locale: ptBR });
    } catch {
      return dateString;
    }
  };

  const handleGoBack = () => {
    navigate('/blog');
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title?.rendered ? extractTextFromContent(post.title.rendered) : '';
  const readTime = post?.content?.rendered ? estimateReadTime(post.content.rendered) : 5;

  // Filtra posts relacionados excluindo o atual
  const filteredRelatedPosts = relatedPosts?.filter(p => p.id !== Number(id)).slice(0, 3) || [];

  if (isLoading) {
    return (
      <>
        <UniversalHeader />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-32">
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-lg text-muted-foreground">Carregando artigo...</p>
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
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-destructive mb-4">
                Artigo não encontrado
              </h2>
              <p className="text-muted-foreground mb-6">
                {error?.message || 'Este artigo não está disponível'}
              </p>
              <Button onClick={handleGoBack} variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao blog
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <UniversalHeader />
      
      {/* Hero Section - Clean & Modern */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 sm:pt-36 md:pt-40 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            {categories && categories.length > 0 && (
              <>
                <span className="text-foreground/70">{categories[0].name}</span>
                <span>/</span>
              </>
            )}
            <span className="text-foreground/50 truncate max-w-[200px]">
              {extractTextFromContent(post.title.rendered)}
            </span>
          </nav>

          <div className="max-w-4xl">
            {/* Categories */}
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <Badge 
                    key={cat.id} 
                    className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title.rendered) }}
            />

            {/* Excerpt */}
            {post.excerpt.rendered && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {stripHTML(post.excerpt.rendered)}
              </p>
            )}

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {media && (
        <section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto -mt-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={media.source_url}
                  alt={media.alt_text || extractTextFromContent(post.title.rendered)}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Content Column */}
            <article className="lg:col-span-8">
              <div 
                className="wordpress-content prose prose-lg prose-slate dark:prose-invert max-w-none
                         prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                         prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border
                         prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                         prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                         prose-strong:text-foreground
                         prose-ul:my-6 prose-ul:space-y-3
                         prose-ol:my-6 prose-ol:space-y-3
                         prose-li:text-muted-foreground
                         prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-muted/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-foreground
                         prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content.rendered) }}
              />

              {/* Author/Share Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gostou do artigo?</p>
                    <p className="text-foreground font-medium">Compartilhe com sua rede</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Share Card */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Share2 className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Compartilhar</h4>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-background hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-background hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  </div>
                </div>

                {/* Related Posts */}
                {filteredRelatedPosts.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h4 className="font-semibold text-foreground mb-4">Leia também</h4>
                    <div className="space-y-4">
                      {filteredRelatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h5 
                            className="text-sm text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1"
                            dangerouslySetInnerHTML={{ __html: sanitizeHTML(relatedPost.title.rendered) }}
                          />
                          <p className="text-xs text-muted-foreground">
                            {formatDate(relatedPost.date)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                  <h4 className="text-lg font-bold mb-2">
                    Quer saber mais?
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Converse com nossos especialistas e tire suas dúvidas.
                  </p>
                  <Button 
                    onClick={() => navigate('/fale-conosco')}
                    variant="secondary"
                    className="w-full"
                    size="lg"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Back to Blog */}
      <section className="bg-muted/30 py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Button 
            onClick={handleGoBack}
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ver mais artigos
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WordPressPostView;
