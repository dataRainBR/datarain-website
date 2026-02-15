import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Quote, TrendingUp, Building2, Layers, Cloud, Trophy } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Regex to detect metric patterns inside text
const METRIC_REGEX = /\d+[\.,]?\d*\s*(%|milhões|bilhões|mil|TB|GB|MB|dias|horas|minutos|meses|x\b)/i;

function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractTextFromChildren).join('');
  if (React.isValidElement(children) && children.props?.children) {
    return extractTextFromChildren(children.props.children);
  }
  return '';
}

// Recursively find any <strong> element containing a metric anywhere in the children tree
function findMetricInChildren(children: ReactNode): boolean {
  const childArray = React.Children.toArray(children);
  for (const child of childArray) {
    if (React.isValidElement(child)) {
      const isStrong = child.type === 'strong' || (child.props as any)?.node?.tagName === 'strong';
      if (isStrong) {
        const strongText = extractTextFromChildren(child.props.children);
        if (METRIC_REGEX.test(strongText)) return true;
      }
      // Recurse into children (e.g. <p> wrapping <strong>)
      if (child.props?.children && findMetricInChildren(child.props.children)) {
        return true;
      }
    }
  }
  return false;
}

// Check if a li contains any <strong> with a metric value
function isMetricItem(children: ReactNode): boolean {
  return findMetricInChildren(children);
}

// Executive summary table detection — checks if table headers match the expected pattern
const EXECUTIVE_SUMMARY_HEADERS = ['cliente', 'setor', 'resultado'];

function isExecutiveSummaryTable(children: ReactNode): boolean {
  const childArray = React.Children.toArray(children);
  // First child should be <thead>
  const thead = childArray.find(
    (c) => React.isValidElement(c) && (c.type === 'thead' || (c.props as any)?.node?.tagName === 'thead')
  );
  if (!thead || !React.isValidElement(thead)) return false;
  const headerText = extractTextFromChildren(thead.props.children).toLowerCase();
  return EXECUTIVE_SUMMARY_HEADERS.every((h) => headerText.includes(h));
}

// Extract rows from a table body as key-value pairs
function extractTableData(children: ReactNode): Record<string, string>[] {
  const childArray = React.Children.toArray(children);
  const tbody = childArray.find(
    (c) => React.isValidElement(c) && (c.type === 'tbody' || (c.props as any)?.node?.tagName === 'tbody')
  );
  if (!tbody || !React.isValidElement(tbody)) return [];

  const thead = childArray.find(
    (c) => React.isValidElement(c) && (c.type === 'thead' || (c.props as any)?.node?.tagName === 'thead')
  );
  
  // Get header names
  const headers: string[] = [];
  if (thead && React.isValidElement(thead)) {
    const headerRow = React.Children.toArray((thead.props as any).children)[0];
    if (React.isValidElement(headerRow)) {
      React.Children.forEach((headerRow.props as any).children, (th: any) => {
        if (React.isValidElement(th)) {
          headers.push(extractTextFromChildren((th.props as any).children).trim());
        }
      });
    }
  }

  const rows: Record<string, string>[] = [];
  React.Children.forEach((tbody.props as any).children, (tr: any) => {
    if (React.isValidElement(tr)) {
      const row: Record<string, string> = {};
      let colIdx = 0;
      React.Children.forEach((tr.props as any).children, (td: any) => {
        if (React.isValidElement(td)) {
          const key = headers[colIdx] || `col${colIdx}`;
          row[key] = extractTextFromChildren((td.props as any).children).trim();
          colIdx++;
        }
      });
      rows.push(row);
    }
  });
  return rows;
}

const summaryIcons: Record<string, React.FC<{ className?: string }>> = {
  'Cliente': Building2,
  'Setor': Layers,
  'Serviços AWS': Cloud,
  'Resultado': Trophy,
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-xl shadow-lg my-6 border border-border/30" loading="lazy" />
          ),
          a: ({ node, ...props }) => (
            <a {...props} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer" />
          ),
          code: ({ node, inline, ...props }: any) => (
            inline ?
              <code {...props} className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-medium" /> :
              <code {...props} className="block bg-muted p-4 rounded-lg overflow-x-auto border border-border/30" />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className="relative border-l-4 border-primary bg-primary/5 rounded-r-xl py-4 px-6 my-8 not-italic"
            >
              <Quote className="absolute -top-3 -left-2 h-8 w-8 text-primary/30 rotate-180" />
              <div className="text-foreground/80 italic leading-relaxed [&>p]:mb-1 [&>p:last-child]:mb-0">
                {props.children}
              </div>
            </blockquote>
          ),
          h2: ({ node, ...props }) => (
            <h2 {...props} className="text-3xl font-bold mt-10 mb-4 text-primary tracking-tight flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full inline-block shrink-0" />
              {props.children}
            </h2>
          ),
          hr: ({ node, ...props }) => (
            <hr {...props} className="my-10 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="my-6 space-y-3 list-none pl-0 [&>li:not(.metric-card)]:relative [&>li:not(.metric-card)]:pl-6 [&>li:not(.metric-card)]:before:content-[''] [&>li:not(.metric-card)]:before:absolute [&>li:not(.metric-card)]:before:left-0 [&>li:not(.metric-card)]:before:top-[0.6em] [&>li:not(.metric-card)]:before:w-2 [&>li:not(.metric-card)]:before:h-2 [&>li:not(.metric-card)]:before:bg-primary/60 [&>li:not(.metric-card)]:before:rounded-full" />
          ),
          li: ({ node, children, ...props }) => {
            if (isMetricItem(children)) {
              return (
                <li
                  {...props}
                  className="metric-card pl-0 my-3 list-none"
                >
                  <div className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 text-primary">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 text-foreground/80 text-base leading-relaxed [&>strong]:text-primary [&>strong]:font-bold [&>strong]:text-lg">
                      {children}
                    </div>
                  </div>
                </li>
              );
            }

            return <li {...props}>{children}</li>;
          },
          strong: ({ node, ...props }) => (
            <strong {...props} className="text-foreground font-semibold" />
          ),
          table: ({ node, children, ...props }) => {
            if (isExecutiveSummaryTable(children)) {
              const rows = extractTableData(children);
              if (rows.length > 0) {
                const data = rows[0];
                const headers = Object.keys(data);
                return (
                  <div className="not-prose my-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {headers.map((header) => {
                        const Icon = summaryIcons[header] || Layers;
                        return (
                          <div key={header} className="flex items-start gap-3 rounded-xl bg-card/80 border border-border/30 p-4">
                            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{header}</p>
                              <p className="text-sm font-medium text-foreground leading-snug">{data[header]}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            }
            return (
              <div className="overflow-x-auto my-6">
                <table {...props} className="min-w-full border-collapse border border-border/30 rounded-lg overflow-hidden">
                  {children}
                </table>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
