import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { WORDPRESS_CONFIG, validateWordPressConfig } from '@/config/wordpress.config';
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, ExternalLink } from 'lucide-react';

interface WordPressStatusProps {
  showDetails?: boolean;
}

export const WordPressStatus: React.FC<WordPressStatusProps> = ({ showDetails = true }) => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error' | 'unknown'>('checking');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const checkWordPressConnection = async () => {
    setStatus('checking');
    setErrorMessage('');
    
    try {
      // Verificar configuração
      const configValidation = validateWordPressConfig();
      
      if (!configValidation.isValid) {
        setStatus('error');
        setErrorMessage(configValidation.issues.join(', '));
        return;
      }

      // Testar conexão com a API
      const response = await fetch(`${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts?per_page=1`);
      
      if (response.ok) {
        setStatus('connected');
        setLastCheck(new Date());
      } else {
        setStatus('error');
        setErrorMessage(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro desconhecido');
    }
  };

  useEffect(() => {
    checkWordPressConnection();
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'checking':
        return <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'connected':
        return 'Conectado';
      case 'error':
        return 'Erro de Conexão';
      case 'checking':
        return 'Verificando...';
      default:
        return 'Desconhecido';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'checking':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const openWordPressAdmin = () => {
    window.open(`${WORDPRESS_CONFIG.BASE_URL}/wp-admin`, '_blank');
  };

  const openWordPressAPI = () => {
    window.open(`${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts`, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Status do WordPress
          {getStatusIcon()}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Status Principal */}
        <div className="flex items-center justify-between">
          <Badge className={getStatusColor()}>
            {getStatusText()}
          </Badge>
          
          <Button
            variant="outline"
            size="sm"
            onClick={checkWordPressConnection}
            disabled={status === 'checking'}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Verificar
          </Button>
        </div>

        {/* Última verificação */}
        {lastCheck && (
          <p className="text-sm text-muted-foreground">
            Última verificação: {lastCheck.toLocaleString('pt-BR')}
          </p>
        )}

        {/* Detalhes da configuração */}
        {showDetails && (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">URL do WordPress:</span>
              <span className="text-sm text-muted-foreground font-mono">
                {WORDPRESS_CONFIG.BASE_URL}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Posts por página:</span>
              <span className="text-sm text-muted-foreground">
                {WORDPRESS_CONFIG.POSTS_PER_PAGE}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Cache habilitado:</span>
              <span className="text-sm text-muted-foreground">
                {WORDPRESS_CONFIG.ENABLE_CACHE ? 'Sim' : 'Não'}
              </span>
            </div>
          </div>
        )}

        {/* Mensagem de erro */}
        {status === 'error' && errorMessage && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}

        {/* Ações */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={openWordPressAdmin}
            className="flex-1"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Painel Admin
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={openWordPressAPI}
            className="flex-1"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Testar API
          </Button>
        </div>

        {/* Dicas */}
        {status === 'error' && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Dicas para resolver:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Verifique se o WordPress está rodando</li>
              <li>• Confirme se a URL está correta</li>
              <li>• Teste se a API REST está habilitada</li>
              <li>• Verifique se há posts publicados</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
