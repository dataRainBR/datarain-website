# Configuração do WordPress para o App React

Este guia explica como configurar o WordPress tradicional para funcionar com seu app React.

## 🚀 Opções de Instalação

### Opção 1: WordPress Local (Desenvolvimento)

#### Usando XAMPP (Windows/Linux/macOS)
1. Baixe e instale o [XAMPP](https://www.apachefriends.org/)
2. Inicie o Apache e MySQL
3. Baixe o WordPress de [wordpress.org](https://wordpress.org/download/)
4. Extraia na pasta `htdocs` do XAMPP
5. Acesse `http://localhost/wordpress` no navegador
6. Siga o assistente de instalação

#### Usando MAMP (macOS)
1. Baixe e instale o [MAMP](https://www.mamp.info/)
2. Inicie o MAMP
3. Baixe e extraia o WordPress na pasta `htdocs`
4. Acesse `http://localhost:8888/wordpress`
5. Siga o assistente de instalação

#### Usando Docker
```bash
# Criar diretório para o WordPress
mkdir wordpress && cd wordpress

# Criar docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.1'

services:
  wordpress:
    image: wordpress:latest
    restart: always
    ports:
      - 8080:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress:/var/www/html

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: somewordpress
    volumes:
      - db:/var/lib/mysql

volumes:
  wordpress:
  db:
EOF

# Executar
docker-compose up -d

# Acessar http://localhost:8080
```

### Opção 2: WordPress em Servidor (Produção)

1. Contrate um hosting com suporte a WordPress
2. Instale o WordPress via cPanel ou SSH
3. Configure o domínio e SSL
4. Acesse o painel administrativo

## ⚙️ Configuração do App React

### 1. Criar arquivo .env

Na raiz do seu projeto, crie um arquivo `.env`:

```bash
# Para desenvolvimento local
VITE_WORDPRESS_URL=http://localhost/wordpress

# Para produção
VITE_WORDPRESS_URL=https://seusite.com

# Configurações opcionais
VITE_WORDPRESS_POSTS_PER_PAGE=6
VITE_WORDPRESS_ENABLE_CACHE=true
VITE_WORDPRESS_CACHE_TIME=300000
```

### 2. Verificar configuração

O app verifica automaticamente se a configuração está correta. Se houver problemas, você verá avisos na interface.

## 🔧 Configurações do WordPress

### 1. Habilitar API REST

A API REST do WordPress é habilitada por padrão nas versões recentes. Para verificar:

1. Acesse o painel administrativo
2. Vá em **Configurações > Links Permanentes**
3. Selecione qualquer opção exceto "Simples"
4. Salve as alterações

### 2. Testar a API

Teste se a API está funcionando acessando:
```
http://seusite.com/wp-json/wp/v2/posts
```

Você deve ver um JSON com os posts.

### 3. Configurar Links Permanentes

1. No painel do WordPress, vá em **Configurações > Links Permanentes**
2. Selecione "Nome do Post" ou "Estrutura Personalizada"
3. Salve as alterações

### 4. Criar Conteúdo

1. **Posts**: Vá em **Posts > Adicionar Novo**
2. **Páginas**: Vá em **Páginas > Adicionar Nova**
3. **Mídia**: Faça upload de imagens em **Mídia > Adicionar Nova**
4. **Categorias**: Organize posts em **Posts > Categorias**
5. **Tags**: Adicione tags em **Posts > Tags**

## 🎯 Como Usar no App

### 1. Acessar o Blog

Navegue para `/blog` no seu app para ver a lista de posts.

### 2. Componentes Disponíveis

- `WordPressPostsList`: Lista todos os posts com filtros
- `WordPressPostCard`: Card individual de cada post
- `useWordPressPosts`: Hook para buscar posts
- `useWordPressPost`: Hook para buscar post específico

### 3. Personalização

Você pode personalizar:
- Número de posts por página
- Exibição de categorias e tags
- Filtros de busca
- Layout dos cards

## 🐛 Solução de Problemas

### Erro: "Erro ao carregar posts"

1. Verifique se a URL do WordPress está correta no `.env`
2. Confirme se a API REST está habilitada
3. Teste a URL da API no navegador
4. Verifique se há posts publicados no WordPress

### Erro: "CORS"

Se estiver desenvolvendo localmente:
1. Instale o plugin "CORS" no WordPress
2. Ou configure o servidor web para permitir CORS

### Imagens não carregam

1. Verifique se as imagens foram enviadas via WordPress
2. Confirme se o WordPress tem permissões de leitura
3. Verifique se as URLs das imagens estão corretas

## 📱 Funcionalidades Disponíveis

- ✅ Listagem de posts com paginação
- ✅ Busca por texto
- ✅ Filtros por categoria e tag
- ✅ Exibição de imagens destacadas
- ✅ Formatação de datas em português
- ✅ Cache inteligente com React Query
- ✅ Interface responsiva
- ✅ Loading states e tratamento de erros

## 🔄 Próximos Passos

1. **Post Individual**: Criar página para exibir post completo
2. **Comentários**: Integrar sistema de comentários
3. **Autenticação**: Sistema de login/registro
4. **Editor**: Interface para criar/editar posts
5. **SEO**: Meta tags e otimizações

## 📚 Recursos Úteis

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [WordPress.org](https://wordpress.org/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs do console do navegador
2. Confirme se todas as dependências estão instaladas
3. Teste a API do WordPress diretamente
4. Verifique se o WordPress está funcionando corretamente
