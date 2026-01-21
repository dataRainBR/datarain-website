import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Linkedin, Twitter, Facebook, ArrowRight, Tag } from 'lucide-react';
import { useWordPressPost, useWordPressMedia, useWordPressPostsByCategorySlug, useWordPressCategoriesByIds } from '@/hooks/useWordPress';
import { Loader2 } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import Footer from '@/components/Footer';
import { sanitizeHTML } from '@/lib/sanitize';
import { Badge } from '@/components/ui/badge';

// Extrai texto limpo do HTML
const extractTextFromContent = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

// Extrai métricas/stats do conteúdo (procura por padrões como "80%", "10x", etc)
const extractStats = (content: string): { value: string; label: string }[] => {
  const text = extractTextFromContent(content);
  const stats: { value: string; label: string }[] = [];
  
  // Padrões comuns de métricas
  const patterns = [
    /(\d+%)\s+(?:de\s+)?(.{5,40}?)(?:\.|,|$)/gi,
    /(\d+x)\s+(?:de\s+)?(.{5,40}?)(?:\.|,|$)/gi,
    /(\d+)\s*(?:milhões?|mil)\s+(?:de\s+)?(.{5,40}?)(?:\.|,|$)/gi,
  ];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null && stats.length < 3) {
      stats.push({
        value: match[1],
        label: match[2].trim()
      });
    }
  }
  
  return stats;
};

// Extrai uma citação do conteúdo (procura por blockquotes ou padrões de citação)
const extractQuote = (html: string): { text: string; author: string } | null => {
  const div = document.createElement('div');
  div.innerHTML = html;
  
  // Procura por blockquotes
  const blockquote = div.querySelector('blockquote');
  if (blockquote) {
    const quoteText = blockquote.textContent || '';
    // Tenta encontrar o autor (geralmente depois de um hífen ou em elemento cite)
    const cite = blockquote.querySelector('cite');
    const author = cite?.textContent || '';
    
    if (quoteText.length > 20) {
      return { text: quoteText.replace(author, '').trim(), author };
    }
  }
  
  return null;
};

// Extrai o nome do cliente do título ou conteúdo
const extractClientName = (title: string, content: string): string => {
  // Tenta extrair do título (geralmente o nome do cliente está no título)
  const cleanTitle = extractTextFromContent(title);
  
  // Padrões comuns: "Case Cliente:", "Cliente X transforma...", etc.
  const patterns = [
    /^(?:case\s+)?(.+?)(?:\s*[-:–]|\s+transforma|\s+reduz|\s+aumenta|\s+implementa)/i,
    /^(.+?)(?:\s+com\s+|\s+usa\s+|\s+adota\s+)/i,
  ];
  
  for (const pattern of patterns) {
    const match = cleanTitle.match(pattern);
    if (match && match[1].length > 2 && match[1].length < 50) {
      return match[1].trim();
    }
  }
  
  // Se não encontrar padrão, retorna vazio
  return '';
};

const CaseStudyView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useWordPressPost(id || '');
  const { data: media } = useWordPressMedia(post?.featured_media || 0);
  const { data: relatedPosts } = useWordPressPostsByCategorySlug('cases', { per_page: 3 });
  const { data: categories } = useWordPressCategoriesByIds(post?.categories || []);

  const handleGoBack = () => {
    navigate('/cases');
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title?.rendered ? extractTextFromContent(post.title.rendered) : '';

  // Filtra posts relacionados excluindo o atual
  const filteredRelatedPosts = relatedPosts?.filter(p => p.id !== Number(id)).slice(0, 2) || [];

  if (isLoading) {
    return (
      <>
        <UniversalHeader />
        <div className="min-h-screen bg-primary">
          <div className="container mx-auto px-4 py-32">
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary-foreground" />
                <p className="text-lg text-primary-foreground/70">Carregando case...</p>
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
                Case não encontrado
              </h2>
              <p className="text-muted-foreground mb-6">
                {error?.message || 'Este case não está disponível'}
              </p>
              <Button onClick={handleGoBack} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos cases
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const clientName = extractClientName(post.title.rendered, post.content.rendered);
  const stats = extractStats(post.content.rendered);
  const quote = extractQuote(post.content.rendered);

  return (
    <>
      <UniversalHeader />
      
      {/* Hero Section - Dark background like Databricks */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Link to="/cases" className="hover:text-primary-foreground transition-colors">
                Cases de Sucesso
              </Link>
              <span>/</span>
              <span className="text-primary-foreground/80 truncate max-w-[200px]">
                {extractTextFromContent(post.title.rendered)}
              </span>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Logo */}
            {media ? (
              <div className="bg-white rounded-xl p-4 shadow-lg shrink-0">
                <img
                  src={media.source_url}
                  alt={media.alt_text || clientName}
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </div>
            ) : clientName ? (
              <div className="bg-white rounded-xl px-5 py-3 shadow-lg shrink-0">
                <span className="text-xl font-bold text-primary">{clientName}</span>
              </div>
            ) : null}
            
            {/* Info bar with Case de Sucesso + Categories - no box */}
            <div className="flex items-center gap-4">
              {/* Case de Sucesso label */}
              <p className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold whitespace-nowrap">
                Case de Sucesso
              </p>
              
              {/* Divider */}
              {categories && categories.length > 0 && (
                <div className="w-px h-4 bg-white/40" />
              )}
              
              {/* Categories */}
              {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span 
                      key={cat.id} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/15 text-white/90 border border-white/20"
                    >
                      {cat.name.replace(/&amp;/g, '&')}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Title - extended width */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mt-10 max-w-5xl"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title.rendered) }}
          />

        </div>
      </section>

      {/* Quote Section - if available */}
      {quote && (
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic">
                  "{quote.text}"
                </p>
                {quote.author && (
                  <footer className="mt-6 text-muted-foreground">
                    — {quote.author}
                  </footer>
                )}
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-8">
              <article 
                className="wordpress-content prose prose-lg prose-slate dark:prose-invert max-w-none
                         prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                         prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                         prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                         prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-foreground
                         prose-ul:my-6 prose-ul:space-y-3
                         prose-ol:my-6 prose-ol:space-y-3
                         prose-li:text-muted-foreground
                         prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-muted prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:my-8 prose-blockquote:not-italic
                         prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content.rendered) }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Compartilhar
                </h4>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">

                {/* Related Cases */}
                {filteredRelatedPosts.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Mais Cases
                    </h4>
                    <div className="space-y-4">
                      {filteredRelatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/cases/${relatedPost.id}`}
                          className="block group"
                        >
                          <h5 
                            className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: sanitizeHTML(relatedPost.title.rendered) }}
                          />
                          <div className="flex items-center gap-1 text-sm text-primary mt-2 group-hover:gap-2 transition-all">
                            <span>Ver case</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-primary-foreground">
                  <h4 className="text-lg font-bold mb-2">
                    Quer resultados assim?
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Converse com nossos especialistas e descubra como podemos transformar seu negócio.
                  </p>
                  <Button 
                    onClick={() => navigate('/fale-conosco')}
                    variant="secondary"
                    className="w-full"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Back to Cases CTA */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <Button 
            onClick={handleGoBack}
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ver todos os cases
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyView;
