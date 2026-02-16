import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Sparkles } from 'lucide-react';
import { MarkdownPostMetadata } from '@/lib/markdown';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MarkdownPostCardProps {
  post: MarkdownPostMetadata;
  routePrefix?: string;
}

export const MarkdownPostCard: React.FC<MarkdownPostCardProps> = ({ 
  post, 
  routePrefix = '/blog' 
}) => {
  const formattedDate = format(new Date(post.date), "MMM yyyy", { locale: ptBR });
  const isSuperCase = post.tags?.includes("Super Case");

  return (
    <Link to={`${routePrefix}/${post.slug}`}>
      <Card className={`h-full overflow-hidden hover:shadow-lg transition-all duration-300 group relative ${
        isSuperCase ? 'ring-1 ring-accent/40' : ''
      }`}>
        {/* Badge Super Case — canto superior direito, discreto */}
        {isSuperCase && (
          <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            Super Case
          </div>
        )}

        {post.featuredImage && (
          <div className={`relative h-48 overflow-hidden ${routePrefix === '/cases' ? 'bg-white flex items-center justify-center p-6' : ''}`}>
            <img
              src={post.featuredImage}
              alt={post.title}
              className={routePrefix === '/cases' 
                ? "max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}
              loading="lazy"
            />
          </div>
        )}
        
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between">
          <span className="text-sm text-primary font-medium group-hover:underline">
            Ler mais →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
