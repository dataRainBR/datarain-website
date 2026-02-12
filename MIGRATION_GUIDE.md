# Guia de Migração: WordPress para Markdown

## Resumo

Este projeto foi migrado de uma integração WordPress para arquivos Markdown locais. Todos os posts de blog e cases foram convertidos e salvos localmente com suas respectivas imagens.

## Estrutura de Arquivos

```
content/
├── blog/           # Posts do blog em Markdown
│   └── *.md
├── cases/          # Cases em Markdown
│   └── *.md
public/
└── content-images/ # Imagens dos posts
    ├── blog/
    │   └── [slug]/
    │       └── *.jpg, *.png
    └── cases/
        └── [slug]/
            └── *.jpg, *.png
```

## Formato dos Arquivos Markdown

Cada arquivo `.md` possui um frontmatter YAML com metadados:

```markdown
---
title: "Título do Post"
date: "2024-01-15T10:00:00"
slug: "slug-do-post"
excerpt: "Resumo do post"
featuredImage: "/content-images/blog/slug-do-post/imagem.jpg"
categories: [6]
tags: [1, 2, 3]
author: 1
---

Conteúdo do post em Markdown...
```

## Componentes Criados

### 1. `src/lib/markdown.ts`
Biblioteca principal para trabalhar com arquivos Markdown:
- `getAllBlogPosts()` - Retorna todos os posts do blog
- `getAllCases()` - Retorna todos os cases
- `getPostBySlug(slug, type)` - Busca post específico
- `searchPosts(posts, searchTerm)` - Busca em posts

### 2. `src/components/markdown/MarkdownRenderer.tsx`
Componente para renderizar Markdown com suporte a:
- GitHub Flavored Markdown (GFM)
- Sanitização de HTML
- Estilização com Tailwind Typography

### 3. `src/components/markdown/MarkdownPostCard.tsx`
Card para exibir preview de posts na listagem

### 4. `src/components/markdown/MarkdownPostsList.tsx`
Lista de posts com busca e paginação

### 5. `src/components/markdown/MarkdownPostView.tsx`
Visualização completa de um post individual

## Páginas Atualizadas

### `src/pages/WordPressBlog.tsx`
- Removida integração WordPress
- Agora usa `getAllBlogPosts()` e `MarkdownPostsList`

### `src/pages/Cases.tsx`
- Removida integração WordPress
- Agora usa `getAllCases()` e `MarkdownPostsList`

### `src/App.tsx`
- Rotas atualizadas para usar `MarkdownPostView`
- `/blog/:slug` - Visualizar post do blog
- `/cases/:slug` - Visualizar case

## Script de Migração

O script `scripts/fetch-wordpress-content.ts` foi usado para:
1. Buscar todos os posts do WordPress via API REST
2. Converter HTML para Markdown
3. Baixar todas as imagens
4. Salvar arquivos `.md` com frontmatter

Para executar novamente (se necessário):
```bash
bun run scripts/fetch-wordpress-content.ts
```

## Dependências Adicionadas

```json
{
  "gray-matter": "^4.0.3",
  "react-markdown": "^10.1.0",
  "remark-gfm": "^4.0.1",
  "rehype-raw": "^7.0.0",
  "rehype-sanitize": "^6.0.0"
}
```

## Vantagens da Migração

1. **Performance**: Sem chamadas de API externas
2. **Confiabilidade**: Conteúdo sempre disponível
3. **Versionamento**: Posts versionados com Git
4. **Simplicidade**: Sem dependência de servidor WordPress
5. **SEO**: Melhor controle sobre metadados
6. **Offline**: Funciona sem conexão com internet

## Arquivos WordPress Antigos (podem ser removidos)

Os seguintes arquivos não são mais necessários:
- `src/components/wordpress/*`
- `src/hooks/useWordPress.ts`
- `src/hooks/useWordPressPosts.ts`
- `src/lib/wordpress.ts`
- `src/config/wordpress.config.ts`
- `WORDPRESS_SETUP.md`

## Manutenção

### Adicionar Novo Post

1. Criar arquivo em `content/blog/` ou `content/cases/`
2. Adicionar frontmatter com metadados
3. Escrever conteúdo em Markdown
4. Adicionar imagens em `public/content-images/[tipo]/[slug]/`

### Exemplo de Novo Post

```markdown
---
title: "Meu Novo Post"
date: "2024-02-12T10:00:00"
slug: "meu-novo-post"
excerpt: "Descrição breve do post"
featuredImage: "/content-images/blog/meu-novo-post/capa.jpg"
categories: [6]
tags: []
author: 1
---

# Título

Conteúdo do post...

![Imagem](/content-images/blog/meu-novo-post/imagem.jpg)
```

## Estatísticas da Migração

- **Posts de Blog**: 41 posts migrados
- **Cases**: 24 cases migrados
- **Total de Imagens**: ~150+ imagens baixadas
- **Tempo de Migração**: ~2 minutos

## Suporte

Para dúvidas ou problemas, consulte:
- Documentação do react-markdown: https://github.com/remarkjs/react-markdown
- Documentação do gray-matter: https://github.com/jonschlinkert/gray-matter
