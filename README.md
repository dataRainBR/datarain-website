# dataRain Website

Site institucional da dataRain desenvolvido com React, TypeScript e Vite.

## 🎉 Migração WordPress → Markdown Concluída!

O site agora usa arquivos Markdown locais ao invés de integração WordPress.

- ✅ 41 posts de blog migrados
- ✅ 24 cases migrados  
- ✅ ~150+ imagens baixadas
- ✅ Performance melhorada
- ✅ Sem dependências externas

## 🚀 Início Rápido

### Pré-requisitos
- Bun instalado (ou Node.js)

### Instalação

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun run dev

# Build de produção
bun run build

# Preview da build
bun run preview
```

## 📁 Estrutura do Projeto

```
datarain-rebrand-hero/
├── content/              # Conteúdo em Markdown
│   ├── blog/            # Posts do blog
│   └── cases/           # Cases de sucesso
├── public/
│   └── content-images/  # Imagens dos posts
│       ├── blog/
│       └── cases/
├── src/
│   ├── components/
│   │   ├── markdown/    # Componentes Markdown
│   │   ├── layout/
│   │   └── ui/
│   ├── lib/
│   │   └── markdown.ts  # Biblioteca de posts
│   ├── pages/
│   └── hooks/
└── scripts/
    └── fetch-wordpress-content.ts  # Script de migração
```

## 📝 Adicionar Novo Conteúdo

### Novo Post de Blog

1. Criar arquivo em `content/blog/meu-post.md`
2. Adicionar frontmatter:

```markdown
---
title: "Título do Post"
date: "2024-02-12T10:00:00"
slug: "meu-post"
excerpt: "Resumo do post"
featuredImage: "/content-images/blog/meu-post/capa.jpg"
categories: []
tags: []
author: 1
---

# Conteúdo

Seu conteúdo aqui...
```

3. Adicionar imagens em `public/content-images/blog/meu-post/`

### Novo Case

Mesmo processo, mas em `content/cases/` e `public/content-images/cases/`

## 📚 Documentação

- [MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md) - Resumo da migração
- [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - Guia completo da migração
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Referência rápida
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guia de deploy
- [CLEANUP_WORDPRESS.md](CLEANUP_WORDPRESS.md) - Remover arquivos WordPress

## 🛠️ Tecnologias

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Markdown**: react-markdown + gray-matter
- **Routing**: React Router
- **State**: TanStack Query (React Query)

## 🌐 Páginas Principais

- `/` - Home
- `/quem-somos` - Sobre a empresa
- `/solucoes` - Soluções
- `/servicos` - Serviços
- `/cases` - Cases de sucesso
- `/blog` - Blog
- `/academy` - Academy
- `/fale-conosco` - Contato

## 📊 Estatísticas

- 41 posts de blog
- 24 cases de sucesso
- ~150+ imagens otimizadas
- 100% TypeScript
- 0 dependências WordPress

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod
```

Veja [DEPLOYMENT.md](DEPLOYMENT.md) para mais opções.

## 🧹 Limpeza (Opcional)

Para remover arquivos WordPress antigos:
```bash
rm -rf src/components/wordpress/
rm src/hooks/useWordPress.ts
rm src/hooks/useWordPressPosts.ts
rm src/lib/wordpress.ts
rm src/config/wordpress.config.ts
```

Veja [CLEANUP_WORDPRESS.md](CLEANUP_WORDPRESS.md) para detalhes.

## 📄 Licença

Propriedade da dataRain.

## 🤝 Contribuindo

1. Clone o repositório
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:
- Consulte a documentação em `/docs`
- Abra uma issue no repositório
- Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido com ❤️ pela equipe dataRain**
