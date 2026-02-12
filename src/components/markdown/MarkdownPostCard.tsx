import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
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
  const formattedDate = format(new Date(post.date), 'dd MMM yyyy', { locale: ptBR });

  return (
    <Link to={`${routePrefix}/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
        {post.featuredImage && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
