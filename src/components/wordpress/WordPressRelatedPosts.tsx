import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { WordPressPostCard } from '@/components/wordpress/WordPressPostCard';
import { ChevronRight } from 'lucide-react';

interface WordPressRelatedPostsProps {
  currentPostId: number;
}

const WordPressRelatedPosts: React.FC<WordPressRelatedPostsProps> = ({ currentPostId }) => {
  const { data: posts, isLoading } = useWordPressPosts({ per_page: 8 });

  // Filter out current post and get related posts
  const relatedPosts = posts?.filter(post => post.id !== currentPostId) || [];

  if (isLoading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl">Posts Relacionados</CardTitle>
        </div>
        <p className="text-muted-foreground text-sm">
          Descubra mais conteúdo interessante
        </p>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {relatedPosts.slice(0, 6).map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <WordPressPostCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default WordPressRelatedPosts;