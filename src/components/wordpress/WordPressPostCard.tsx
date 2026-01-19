import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';
import { WordPressPost } from '@/lib/wordpress';
import { useWordPressMedia } from '@/hooks/useWordPress';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { sanitizeHTML, stripHTML } from '@/lib/sanitize';

interface WordPressPostCardProps {
  post: WordPressPost;
  onReadMore?: (post: WordPressPost) => void;
  showExcerpt?: boolean;
  showCategories?: boolean;
  showTags?: boolean;
}

export const WordPressPostCard: React.FC<WordPressPostCardProps> = ({
  post,
  onReadMore,
  showExcerpt = true,
  showCategories = true,
  showTags = false,
}) => {
  const navigate = useNavigate();
  const { data: media } = useWordPressMedia(post.featured_media);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd MMM yyyy', { locale: ptBR });
    } catch {
      return dateString;
    }
  };


  return (
    <Card className="h-full flex flex-col">
      {media && (
        <div className="aspect-video overflow-hidden rounded-t-lg bg-white flex items-center justify-center">
          <img
            src={media.source_url}
            alt={media.alt_text || post.title.rendered}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(post.date)}</span>
        </div>
        
        <CardTitle 
          className="line-clamp-2 text-lg"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title.rendered) }}
        />
        
        {showExcerpt && post.excerpt.rendered && (
          <CardDescription className="line-clamp-3 mt-2">
            {stripHTML(post.excerpt.rendered)}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-end">

        {showTags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.slice(0, 3).map((tagId) => (
              <Badge key={tagId} variant="outline" className="text-xs">
                Tag {tagId}
              </Badge>
            ))}
          </div>
        )}

        <Button 
          onClick={() => navigate(`/blog/${post.id}`)}
          className="w-full"
          variant="outline"
        >
          Ler mais
        </Button>
      </CardContent>
    </Card>
  );
};
