# Troubleshooting - Problemas Resolvidos

## Problemas Encontrados e Soluções

### 1. ❌ Erro: `Sonner` não exportado
**Erro:** `The requested module '/src/components/ui/sonner.tsx' does not provide an export named 'Sonner'`

**Causa:** Import incorreto no App.tsx

**Solução:**
```typescript
// Antes
import { Sonner } from "@/components/ui/sonner";

// Depois
import { Toaster as Sonner } from "@/components/ui/sonner";
```

---

### 2. ❌ Erro: `Buffer is not defined`
**Erro:** `Uncaught ReferenceError: Buffer is not defined`

**Causa:** `gray-matter` precisa do polyfill do Node.js Buffer no navegador

**Solução:**
1. Instalar dependências:
```bash
bun add -D buffer vite-plugin-node-polyfills
```

2. Configurar `vite.config.ts`:
```typescript
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['buffer'],
      globals: {
        Buffer: true,
      },
    }),
  ],
});
```

---

### 3. ❌ Erro: `React is not defined`
**Erro:** `Uncaught ReferenceError: React is not defined`

**Causa:** Vários arquivos `.tsx` não importavam React explicitamente

**Solução:**
Adicionar `import React from 'react'` nos seguintes arquivos:
- `src/main.tsx`
- `src/components/SolutionServiceCard.tsx`
- `src/components/sections/CertificationsSection.tsx`

---

### 4. ⚠️ Aviso: Glob option deprecated
**Aviso:** `The glob option "as" has been deprecated`

**Causa:** Sintaxe antiga do `import.meta.glob` no Vite

**Solução:**
```typescript
// Antes
const blogFiles = import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true });

// Depois
const blogFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
```

---

## Verificações Realizadas

### ✅ Arquivos Verificados
- [x] `src/main.tsx` - React importado
- [x] `src/App.tsx` - Imports corretos
- [x] `src/lib/markdown.ts` - Glob syntax atualizada
- [x] `src/components/markdown/*` - Todos os componentes OK
- [x] `src/pages/WordPressBlog.tsx` - Usando Markdown
- [x] `src/pages/Cases.tsx` - Usando Markdown
- [x] `vite.config.ts` - Polyfills configurados
- [x] `tsconfig.json` - JSX configurado corretamente

### ✅ Dependências Instaladas
- [x] `gray-matter` - Parser de frontmatter
- [x] `react-markdown` - Renderização de Markdown
- [x] `remark-gfm` - GitHub Flavored Markdown
- [x] `rehype-raw` - Suporte a HTML
- [x] `rehype-sanitize` - Sanitização
- [x] `buffer` - Polyfill do Node.js
- [x] `vite-plugin-node-polyfills` - Plugin Vite
- [x] `date-fns` - Formatação de datas

### ✅ Configurações
- [x] Vite configurado com polyfills
- [x] TypeScript configurado com `jsx: "react-jsx"`
- [x] Tailwind com plugin Typography
- [x] Rotas atualizadas para Markdown

---

## Possíveis Problemas Futuros

### 1. Imagens não carregam
**Sintoma:** Imagens aparecem quebradas

**Verificar:**
- Path das imagens deve começar com `/content-images/`
- Arquivos devem estar em `public/content-images/`
- Extensão do arquivo (.jpg, .png, etc)

**Solução:**
```markdown
<!-- Correto -->
![Alt text](/content-images/blog/slug-do-post/imagem.jpg)

<!-- Incorreto -->
![Alt text](content-images/blog/slug-do-post/imagem.jpg)
```

---

### 2. Post não aparece na listagem
**Sintoma:** Post criado mas não aparece

**Verificar:**
- Arquivo está em `content/blog/` ou `content/cases/`
- Frontmatter está correto (YAML válido)
- Slug é único
- Data está no formato ISO 8601

**Solução:**
```yaml
---
title: "Título"
date: "2024-02-12T10:00:00"  # ISO 8601
slug: "slug-unico"
excerpt: "Resumo"
featuredImage: "/content-images/blog/slug/image.jpg"
categories: []
tags: []
author: 1
---
```

---

### 3. Erro de build
**Sintoma:** `bun run build` falha

**Verificar:**
- Sintaxe do Markdown está correta
- Frontmatter é YAML válido
- Todas as imagens referenciadas existem
- Não há imports circulares

**Solução:**
```bash
# Verificar erros
bun run build

# Limpar cache e tentar novamente
rm -rf node_modules/.vite
bun run build
```

---

### 4. Performance lenta
**Sintoma:** Site carrega devagar

**Otimizações:**
1. Comprimir imagens:
```bash
# Usar ferramentas como TinyPNG ou ImageOptim
```

2. Lazy loading já está implementado:
```tsx
<img loading="lazy" />
```

3. Verificar tamanho do bundle:
```bash
bun run build
# Verificar dist/assets/
```

---

## Comandos Úteis

### Desenvolvimento
```bash
bun run dev              # Iniciar servidor
bun run build            # Build de produção
bun run preview          # Testar build
```

### Diagnóstico
```bash
# Verificar erros TypeScript
bun run tsc --noEmit

# Limpar cache
rm -rf node_modules/.vite
rm -rf dist

# Reinstalar dependências
rm -rf node_modules
bun install
```

### Logs
```bash
# Ver logs do servidor
# Já visível no terminal onde rodou bun run dev

# Verificar erros no navegador
# Abrir DevTools (F12) > Console
```

---

## Status Atual

### ✅ Funcionando
- [x] Servidor rodando em http://localhost:8080
- [x] Blog em `/blog` com 41 posts
- [x] Cases em `/cases` com 24 cases
- [x] Busca funcional
- [x] Renderização de Markdown
- [x] Imagens carregando
- [x] Rotas funcionando
- [x] Hot Module Replacement (HMR)

### 🎯 Pronto para Produção
- [x] Sem dependências WordPress
- [x] Conteúdo versionado
- [x] Performance otimizada
- [x] Build funcional
- [x] TypeScript sem erros
- [x] Todos os componentes testados

---

## Suporte

Se encontrar novos problemas:

1. Verificar console do navegador (F12)
2. Verificar terminal onde o servidor está rodando
3. Consultar esta documentação
4. Verificar `MIGRATION_GUIDE.md`
5. Verificar `QUICK_REFERENCE.md`

---

**Última atualização:** 12 de fevereiro de 2024
**Status:** ✅ Todos os problemas resolvidos
