import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Customizar componentes se necessário
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-lg shadow-md my-4" loading="lazy" />
          ),
          a: ({ node, ...props }) => (
            <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" />
          ),
          code: ({ node, inline, ...props }: any) => (
            inline ? 
              <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-sm" /> :
              <code {...props} className="block bg-muted p-4 rounded-lg overflow-x-auto" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
