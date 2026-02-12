# Guia de Deploy - Aplicação com Markdown

## Preparação para Deploy

### 1. Build de Produção

```bash
bun run build
```

Isso irá:
- Compilar o TypeScript
- Otimizar assets
- Gerar bundle de produção em `dist/`
- Incluir todos os arquivos Markdown e imagens

### 2. Testar Build Localmente

```bash
bun run preview
```

Acesse http://localhost:4173 para testar a build de produção.

## Opções de Deploy

### Opção 1: Vercel (Recomendado)

1. Instalar Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Configuração automática:
- Framework: Vite
- Build Command: `bun run build`
- Output Directory: `dist`

### Opção 2: Netlify

1. Criar arquivo `netlify.toml`:
```toml
[build]
  command = "bun run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Opção 3: AWS S3 + CloudFront

1. Build:
```bash
bun run build
```

2. Upload para S3:
```bash
aws s3 sync dist/ s3://seu-bucket --delete
```

3. Invalidar CloudFront:
```bash
aws cloudfront create-invalidation --distribution-id SEU_ID --paths "/*"
```

### Opção 4: GitHub Pages

1. Instalar gh-pages:
```bash
bun add -D gh-pages
```

2. Adicionar script em `package.json`:
```json
{
  "scripts": {
    "deploy": "bun run build && gh-pages -d dist"
  }
}
```

3. Configurar base em `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nome-do-repo/',
  // ...
})
```

4. Deploy:
```bash
bun run deploy
```

## Variáveis de Ambiente

### Desenvolvimento
Arquivo `.env`:
```
# Não há variáveis necessárias para Markdown
# WordPress foi removido
```

### Produção
Configure no seu provedor de hosting (se necessário):
```
NODE_ENV=production
```

## Checklist Pré-Deploy

- [ ] Build funciona sem erros: `bun run build`
- [ ] Preview funciona: `bun run preview`
- [ ] Todas as rotas funcionam
- [ ] Imagens carregam corretamente
- [ ] Posts do blog aparecem
- [ ] Cases aparecem
- [ ] Busca funciona
- [ ] Links internos funcionam
- [ ] SEO tags estão corretas

## Estrutura de Deploy

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── content-images/     # Imagens dos posts
│   ├── blog/
│   └── cases/
└── ...
```

## Performance

### Otimizações Incluídas
- ✅ Code splitting automático (Vite)
- ✅ Tree shaking
- ✅ Minificação de JS/CSS
- ✅ Lazy loading de imagens
- ✅ Compressão de assets

### Otimizações Recomendadas

1. **Comprimir Imagens**:
```bash
# Instalar imagemin
bun add -D imagemin imagemin-mozjpeg imagemin-pngquant

# Criar script de otimização
node scripts/optimize-images.js
```

2. **Adicionar Service Worker** (PWA):
```bash
bun add -D vite-plugin-pwa
```

3. **Configurar Cache Headers** (no servidor):
```
Cache-Control: public, max-age=31536000, immutable  # Para assets
Cache-Control: public, max-age=3600                 # Para HTML
```

## Monitoramento

### Analytics
Adicionar Google Analytics ou similar em `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Error Tracking
Adicionar Sentry ou similar:
```bash
bun add @sentry/react
```

## Rollback

Se algo der errado:

1. **Vercel/Netlify**: Use o dashboard para reverter para deploy anterior
2. **S3**: Restaure versão anterior do bucket
3. **GitHub Pages**: Reverta commit e faça novo deploy

## Domínio Customizado

### Vercel
```bash
vercel domains add seudominio.com
```

### Netlify
```bash
netlify domains:add seudominio.com
```

### CloudFront
Configure CNAME no Route 53 ou seu DNS provider.

## SSL/HTTPS

Todos os provedores mencionados fornecem SSL gratuito via Let's Encrypt automaticamente.

## CI/CD

### GitHub Actions

Criar `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Troubleshooting

### Problema: Rotas 404 em produção
**Solução**: Configurar redirects para SPA:
- Vercel: Automático
- Netlify: Adicionar `_redirects` ou `netlify.toml`
- S3: Configurar error document como `index.html`

### Problema: Imagens não carregam
**Solução**: Verificar paths das imagens (devem ser absolutos: `/content-images/...`)

### Problema: Build muito grande
**Solução**: 
1. Comprimir imagens
2. Verificar imports desnecessários
3. Usar code splitting

## Suporte

Para problemas de deploy:
1. Verificar logs do build
2. Testar localmente com `bun run preview`
3. Verificar configuração do provedor de hosting

---

**Última atualização**: 12 de fevereiro de 2024
