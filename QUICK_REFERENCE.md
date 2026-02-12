# Referência Rápida - Markdown Blog

## 🚀 Comandos Principais

```bash
# Desenvolvimento
bun run dev              # Iniciar servidor de desenvolvimento
bun run build            # Build de produção
bun run preview          # Testar build localmente

# Migração (se necessário)
bun run scripts/fetch-wordpress-content.ts  # Buscar conteúdo do WordPress
```

## 📝 Adicionar Novo Post

### 1. Criar arquivo
```bash
touch content/blog/meu-novo-post.md
```

### 2. Adicionar conteúdo
```markdown
---
title: "Título do Post"
date: "2024-02-12T10:00:00"
slug: "meu-novo-post"
excerpt: "Resumo breve do post"
featuredImage: "/content-images/blog/meu-novo-post/capa.jpg"
categories: []
tags: []
author: 1
---

# Conteúdo

Seu conteúdo aqui...
```

### 3. Adicionar imagens (opcional)
```bash
mkdir -p public/content-images/blog/meu-novo-post
# Copiar imagens para esta pasta
```

## 📁 Adicionar Novo Case

Mesmo processo, mas em `content/cases/`:
```bash
touch content/cases/novo-case.md
mkdir -p public/content-images/cases/novo-case
```

## 🔍 Estrutura de Pastas

```
content/
├── blog/           # Posts do blog (.md)
└── cases/          # Cases (.md)

public/
└── content-images/
    ├── blog/       # Imagens dos posts
    │   └── [slug]/
    └── cases/      # Imagens dos cases
        └── [slug]/
```

## 📋 Frontmatter Completo

```yaml
---
title: "Título"                    # Obrigatório
date: "2024-02-12T10:00:00"       # Obrigatório (ISO 8601)
slug: "slug-do-post"              # Obrigatório (único)
excerpt: "Resumo"                 # Obrigatório
featuredImage: "/path/image.jpg"  # Opcional
categories: [1, 2]                # Opcional
tags: [1, 2, 3]                   # Opcional
author: 1                         # Opcional
---
```

## 🎨 Sintaxe Markdown

### Texto
```markdown
**Negrito**
*Itálico*
`Código inline`
~~Riscado~~
```

### Títulos
```markdown
# H1
## H2
### H3
#### H4
```

### Listas
```markdown
- Item 1
- Item 2
  - Subitem

1. Primeiro
2. Segundo
```

### Links e Imagens
```markdown
[Texto do link](https://url.com)
![Alt text](/path/image.jpg)
```

### Código
````markdown
```javascript
const exemplo = "código";
```
````

### Tabelas
```markdown
| Col 1 | Col 2 |
|-------|-------|
| A     | B     |
```

### Citações
```markdown
> Citação em bloco
```

## 🔗 URLs Importantes

- Blog: http://localhost:8080/blog
- Cases: http://localhost:8080/cases
- Post exemplo: http://localhost:8080/blog/exemplo-post

## 📦 Arquivos Importantes

```
src/
├── lib/markdown.ts                    # Lógica de posts
├── components/markdown/
│   ├── MarkdownRenderer.tsx          # Renderiza Markdown
│   ├── MarkdownPostCard.tsx          # Card de post
│   ├── MarkdownPostsList.tsx         # Lista de posts
│   └── MarkdownPostView.tsx          # Visualização completa
└── pages/
    ├── WordPressBlog.tsx             # Página do blog
    └── Cases.tsx                     # Página de cases
```

## 🛠️ Funções Úteis

### Em qualquer componente:
```typescript
import { getAllBlogPosts, getAllCases, getPostBySlug, searchPosts } from '@/lib/markdown';

// Obter todos os posts
const posts = getAllBlogPosts();

// Obter todos os cases
const cases = getAllCases();

// Buscar post específico
const post = getPostBySlug('slug-do-post', 'blog');

// Buscar posts
const results = searchPosts(posts, 'termo de busca');
```

## 🧹 Limpeza

### Remover arquivos WordPress antigos:
```bash
rm -rf src/components/wordpress/
rm src/hooks/useWordPress.ts
rm src/hooks/useWordPressPosts.ts
rm src/lib/wordpress.ts
rm src/config/wordpress.config.ts
rm WORDPRESS_SETUP.md
```

### Remover dependências WordPress:
```bash
bun remove @wordpress/api-fetch @wordpress/url
```

## 🐛 Troubleshooting

### Post não aparece
1. Verificar se arquivo está em `content/blog/` ou `content/cases/`
2. Verificar frontmatter (especialmente `slug` e `date`)
3. Reiniciar servidor: `Ctrl+C` e `bun run dev`

### Imagem não carrega
1. Verificar path: deve começar com `/content-images/`
2. Verificar se arquivo existe em `public/content-images/`
3. Verificar extensão do arquivo (.jpg, .png, etc)

### Erro de build
1. Verificar sintaxe do Markdown
2. Verificar frontmatter (YAML válido)
3. Executar: `bun run build` para ver erros

## 📚 Documentação Completa

- `MIGRATION_SUMMARY.md` - Resumo da migração
- `MIGRATION_GUIDE.md` - Guia completo
- `CLEANUP_WORDPRESS.md` - Remover WordPress
- `DEPLOYMENT.md` - Como fazer deploy

## 💡 Dicas

1. **Sempre use slugs únicos** - Evita conflitos
2. **Otimize imagens** - Use ferramentas como TinyPNG
3. **Use datas ISO 8601** - `2024-02-12T10:00:00`
4. **Teste localmente** - Antes de fazer commit
5. **Versionamento** - Commit posts no Git

## 🎯 Checklist para Novo Post

- [ ] Criar arquivo `.md` em `content/blog/` ou `content/cases/`
- [ ] Adicionar frontmatter completo
- [ ] Escrever conteúdo em Markdown
- [ ] Adicionar imagens em `public/content-images/`
- [ ] Testar localmente: `bun run dev`
- [ ] Verificar no navegador
- [ ] Commit e push

---

**Última atualização**: 12 de fevereiro de 2024
