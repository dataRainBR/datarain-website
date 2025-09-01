import React from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { WordPressStatus } from '@/components/wordpress/WordPressStatus';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WordPressBlog: React.FC = () => {
  const navigate = useNavigate();



  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGoHome}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleGoHome}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Início
          </Button>
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              Blog WordPress
            </CardTitle>
            <p className="text-muted-foreground">
              Conteúdo gerenciado pelo WordPress
            </p>
          </CardHeader>
        </Card>
      </div>

      {/* Status do WordPress */}
      <div className="mb-8">
        <WordPressStatus showDetails={true} />
      </div>

      {/* Lista de Posts */}
      <WordPressPostsList
        postsPerPage={9}
        showSearch={true}
        showFilters={true}
      />

      {/* Informações sobre a configuração */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Como configurar o WordPress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">1. Instalar WordPress</h4>
            <p className="text-sm text-muted-foreground">
              Instale o WordPress em seu servidor ou localmente (XAMPP, MAMP, etc.)
            </p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2. Configurar variáveis de ambiente</h4>
            <p className="text-sm text-muted-foreground">
              Crie um arquivo .env na raiz do projeto com:
            </p>
            <code className="block bg-background p-2 rounded mt-2 text-xs">
              VITE_WORDPRESS_URL=https://seusite.com
            </code>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">3. Habilitar API REST</h4>
            <p className="text-sm text-muted-foreground">
              A API REST do WordPress deve estar habilitada (padrão em versões recentes)
            </p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">4. Criar conteúdo</h4>
            <p className="text-sm text-muted-foreground">
              Crie posts, páginas e mídia no painel administrativo do WordPress
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordPressBlog;
