# Limpeza de Arquivos WordPress

Agora que a migração para Markdown está completa, você pode remover os arquivos relacionados ao WordPress que não são mais necessários.

## Arquivos e Pastas para Remover

### Componentes WordPress
```bash
rm -rf src/components/wordpress/
```

Arquivos:
- `src/components/wordpress/CaseStudyView.tsx`
- `src/components/wordpress/WordPressPostCard.tsx`
- `src/components/wordpress/WordPressPostView.tsx`
- `src/components/wordpress/WordPressPostsList.tsx`
- `src/components/wordpress/WordPressRelatedPosts.tsx`

### Hooks WordPress
```bash
rm src/hooks/useWordPress.ts
rm src/hooks/useWordPressPosts.ts
```

### Biblioteca WordPress
```bash
rm src/lib/wordpress.ts
```

### Configuração WordPress
```bash
rm src/config/wordpress.config.ts
rm src/config/local.env.ts
rm src/config/production.env.ts
```

### Documentação WordPress
```bash
rm WORDPRESS_SETUP.md
```

### Script de Migração (opcional)
Se você não precisar executar a migração novamente:
```bash
rm scripts/fetch-wordpress-content.ts
```

## Variáveis de Ambiente

Você pode remover as seguintes variáveis do arquivo `.env`:
```
VITE_WORDPRESS_URL
VITE_WORDPRESS_POSTS_PER_PAGE
VITE_WORDPRESS_ENABLE_CACHE
VITE_WORDPRESS_CACHE_TIME
VITE_WORDPRESS_BLOG_CATEGORY_ID
VITE_WORDPRESS_CASES_CATEGORY_ID
```

## Dependências (opcional)

Se quiser remover dependências não utilizadas:
```bash
bun remove @wordpress/api-fetch @wordpress/url
```

## Comando Único para Limpeza

Execute este comando para remover todos os arquivos WordPress de uma vez:

```bash
rm -rf src/components/wordpress/ && \
rm src/hooks/useWordPress.ts && \
rm src/hooks/useWordPressPosts.ts && \
rm src/lib/wordpress.ts && \
rm src/config/wordpress.config.ts && \
rm src/config/local.env.ts && \
rm src/config/production.env.ts && \
rm WORDPRESS_SETUP.md && \
echo "✅ Arquivos WordPress removidos com sucesso!"
```

## Verificação

Após a limpeza, execute:
```bash
bun run dev
```

E verifique se:
1. O blog está funcionando em `/blog`
2. Os cases estão funcionando em `/cases`
3. Posts individuais abrem corretamente
4. Não há erros no console

## Rollback (se necessário)

Se você precisar reverter a migração, os arquivos WordPress ainda estão no histórico do Git:
```bash
git checkout HEAD~1 -- src/components/wordpress/
git checkout HEAD~1 -- src/hooks/useWordPress.ts
git checkout HEAD~1 -- src/hooks/useWordPressPosts.ts
git checkout HEAD~1 -- src/lib/wordpress.ts
git checkout HEAD~1 -- src/config/wordpress.config.ts
```
