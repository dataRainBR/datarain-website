import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://datarain.com.br';

// Rotas estáticas do site
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/quem-somos', priority: '0.8', changefreq: 'monthly' },
  { path: '/solucoes', priority: '0.8', changefreq: 'monthly' },
  { path: '/solucoes/cloud', priority: '0.7', changefreq: 'monthly' },
  { path: '/solucoes/cloud/migracao', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cloud/finops', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cloud/devops', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cloud/arquitetura', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/dados', priority: '0.7', changefreq: 'monthly' },
  { path: '/solucoes/dados/arquitetura', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/dados/pilot-ai', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/dados/ia-ml', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { path: '/solucoes/cybersecurity/landing-zone', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cybersecurity/gaas', priority: '0.6', changefreq: 'monthly' },
  { path: '/solucoes/cybersecurity/assessment', priority: '0.6', changefreq: 'monthly' },
  { path: '/servicos', priority: '0.8', changefreq: 'monthly' },
  { path: '/servicos/squad-alocacao', priority: '0.6', changefreq: 'monthly' },
  { path: '/servicos/suporte', priority: '0.6', changefreq: 'monthly' },
  { path: '/servicos/desenvolvimento-360', priority: '0.6', changefreq: 'monthly' },
  { path: '/console', priority: '0.7', changefreq: 'monthly' },
  { path: '/cases', priority: '0.8', changefreq: 'weekly' },
  { path: '/academy', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/fale-conosco', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacidade', priority: '0.3', changefreq: 'yearly' },
];

function getMarkdownSlugs(dir, routePrefix, priority) {
  const dirPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) return [];

  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const content = fs.readFileSync(path.join(dirPath, f), 'utf-8');
      const { data } = matter(content);
      const slug = f.replace('.md', '');
      return {
        path: `${routePrefix}/${slug}`,
        priority,
        changefreq: 'monthly',
        lastmod: data.date ? new Date(data.date).toISOString().split('T')[0] : undefined,
      };
    });
}

function generateSitemap() {
  const blogRoutes = getMarkdownSlugs('content/blog', '/blog', '0.7');
  const casesRoutes = getMarkdownSlugs('content/cases', '/cases', '0.7');
  const allRoutes = [...staticRoutes, ...blogRoutes, ...casesRoutes];
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const outDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
  console.log(`✅ Sitemap gerado com ${allRoutes.length} URLs`);
}

generateSitemap();
