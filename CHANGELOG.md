# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [2.0.0] - 2024-02-12

### 🎉 Migração WordPress → Markdown

#### Adicionado
- ✨ Sistema completo de posts em Markdown
- 📁 Estrutura de pastas `content/blog/` e `content/cases/`
- 🖼️ Sistema de imagens locais em `public/content-images/`
- 📚 Biblioteca `src/lib/markdown.ts` para gerenciar posts
- 🎨 Componentes Markdown:
  - `MarkdownRenderer.tsx` - Renderização de Markdown
  - `MarkdownPostCard.tsx` - Card de preview
  - `MarkdownPostsList.tsx` - Lista com busca
  - `MarkdownPostView.tsx` - Visualização completa
- 📝 41 posts de blog migrados do WordPress
- 💼 24 cases migrados do WordPress
- 🖼️ ~150+ imagens baixadas e organizadas
- 📖 Documentação completa:
  - `MIGRATION_SUMMARY.md`
  - `MIGRATION_GUIDE.md`
  - `QUICK_REFERENCE.md`
  - `DEPLOYMENT.md`
  - `CLEANUP_WORDPRESS.md`
- 🔧 Script de migração `scripts/fetch-wordpress-content.ts`
- 📄 Post de exemplo `content/blog/exemplo-post.md`

#### Modificado
- 🔄 `src/pages/WordPressBlog.tsx` - Agora usa Markdown
- 🔄 `src/pages/Cases.tsx` - Agora usa Markdown
- 🔄 `src/App.tsx` - Rotas atualizadas para Markdown
- 🔄 `tailwind.config.ts` - Adicionado plugin Typography
- 🔄 `README.md` - Atualizado com nova estrutura

#### Dependências Adicionadas
- `gray-matter@4.0.3` - Parser de frontmatter
- `react-markdown@10.1.0` - Renderização de Markdown
- `remark-gfm@4.0.1` - GitHub Flavored Markdown
- `rehype-raw@7.0.0` - Suporte a HTML em Markdown
- `rehype-sanitize@6.0.0` - Sanitização de HTML

#### Removido (Deprecado)
- ⚠️ Integração WordPress (ainda presente, mas não utilizada)
- ⚠️ Componentes WordPress (podem ser removidos)
- ⚠️ Hooks WordPress (podem ser removidos)
- ⚠️ Configuração WordPress (pode ser removida)

### 🚀 Performance
- ⚡ Carregamento instantâneo (sem API calls)
- ⚡ Build otimizado com Vite
- ⚡ Lazy loading de imagens
- ⚡ Code splitting automático

### 🎯 Benefícios
- ✅ Sem dependência de servidor WordPress
- ✅ Conteúdo versionado com Git
- ✅ Edição simples (arquivos Markdown)
- ✅ Performance superior
- ✅ Maior confiabilidade
- ✅ Melhor SEO
- ✅ Custo reduzido

---

## [1.0.0] - 2024-01-XX

### Inicial
- 🎨 Design e layout do site
- 🏗️ Estrutura base com React + Vite
- 🎨 Integração shadcn/ui
- 🎨 Tailwind CSS configurado
- 📱 Layout responsivo
- 🔌 Integração WordPress para blog e cases
- 📄 Páginas principais:
  - Home
  - Quem Somos
  - Soluções
  - Serviços
  - Cases
  - Blog
  - Academy
  - Contato

---

## Formato

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

### Tipos de Mudanças
- `Adicionado` para novas funcionalidades
- `Modificado` para mudanças em funcionalidades existentes
- `Deprecado` para funcionalidades que serão removidas
- `Removido` para funcionalidades removidas
- `Corrigido` para correções de bugs
- `Segurança` para vulnerabilidades corrigidas
