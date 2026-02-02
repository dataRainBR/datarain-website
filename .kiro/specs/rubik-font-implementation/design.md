# Design Document: Rubik Font Implementation

## Overview

Esta implementação substituirá a fonte padrão do sistema por Rubik em todo o site dataRain Consulting. A solução envolve três componentes principais: carregamento da fonte via Google Fonts, configuração do Tailwind CSS, e aplicação global através de CSS base. A abordagem garante performance otimizada através de preconnect e carregamento assíncrono, mantendo fontes fallback apropriadas para casos de falha no carregamento.

## Architecture

A arquitetura segue um padrão de três camadas:

1. **Camada de Carregamento**: Google Fonts CDN fornece os arquivos da fonte Rubik
2. **Camada de Configuração**: Tailwind CSS define Rubik como fonte padrão no sistema de design
3. **Camada de Aplicação**: CSS base aplica a fonte globalmente através do body element

```mermaid
graph TD
    A[index.html] -->|preconnect| B[Google Fonts CDN]
    A -->|link stylesheet| B
    B -->|fornece| C[Rubik Font Files]
    D[tailwind.config.ts] -->|define fontFamily| E[Tailwind CSS]
    F[index.css] -->|@layer base| G[Global Styles]
    E -->|gera classes| H[Compiled CSS]
    G -->|aplica ao body| H
    H -->|renderiza| I[Site com Rubik]
```

## Components and Interfaces

### 1. Google Fonts Integration (index.html)

**Responsabilidade**: Carregar a fonte Rubik do Google Fonts com performance otimizada

**Implementação**:
```html
<!-- Preconnect já existe, adicionar link da fonte -->
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Parâmetros da URL**:
- `family=Rubik:wght@300;400;500;600;700`: Define a família e pesos
- `display=swap`: Usa font-display: swap para evitar FOIT (Flash of Invisible Text)

### 2. Tailwind Configuration (tailwind.config.ts)

**Responsabilidade**: Definir Rubik como fonte padrão no sistema de design do Tailwind

**Modificação na seção theme.extend**:
```typescript
extend: {
  fontFamily: {
    sans: ['Rubik', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  },
  // ... resto da configuração existente
}
```

**Fontes Fallback** (em ordem de prioridade):
1. `Rubik`: Fonte principal
2. `system-ui`: Fonte do sistema operacional
3. `-apple-system`: Fonte do sistema iOS/macOS
4. `BlinkMacSystemFont`: Fonte do sistema Chrome OS
5. `Segoe UI`: Fonte do sistema Windows
6. `Roboto`: Fonte do sistema Android
7. `sans-serif`: Fallback genérico

### 3. Global CSS Application (src/index.css)

**Responsabilidade**: Aplicar a fonte Rubik globalmente através do elemento body

**Modificação na seção @layer base**:
```css
@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans;
  }
}
```

**Nota**: A classe `font-sans` do Tailwind aplicará automaticamente a família de fontes definida em `fontFamily.sans` na configuração.

## Data Models

Não há modelos de dados específicos para esta feature, pois trata-se de uma mudança de configuração e estilo.

## Correctness Properties

*Uma propriedade é uma característica ou comportamento que deve ser verdadeiro em todas as execuções válidas de um sistema - essencialmente, uma declaração formal sobre o que o sistema deve fazer. Propriedades servem como ponte entre especificações legíveis por humanos e garantias de correção verificáveis por máquina.*


### Property Reflection

Após análise do prework, identifiquei que a maioria dos critérios de aceitação são verificações de configuração específicas (examples) ou testes visuais/de integração que não são adequados para testes unitários automatizados. 

Os critérios testáveis são principalmente verificações estáticas de configuração:
- Presença e formato correto do link do Google Fonts
- Configuração correta do Tailwind com Rubik e fallbacks
- Preservação de fontes monospace para elementos de código

Não há propriedades universais (que se aplicam a "todos" os inputs) neste caso, pois estamos lidando com configurações estáticas específicas. Os testes apropriados são examples que verificam a presença e formato correto das configurações.

### Correctness Properties

Baseado na análise de prework, as seguintes propriedades podem ser verificadas através de testes de exemplo:

**Property 1: Google Fonts Link Presence**
*Para o* arquivo index.html, deve existir um elemento link que referencia fonts.googleapis.com com a família Rubik e os pesos 300, 400, 500, 600, 700.
**Validates: Requirements 1.1, 1.2**

**Property 2: Preconnect Optimization**
*Para o* arquivo index.html, devem existir elementos link com rel="preconnect" apontando para fonts.googleapis.com e fonts.gstatic.com.
**Validates: Requirements 1.3**

**Property 3: Tailwind Font Configuration**
*Para o* arquivo tailwind.config.ts, a propriedade theme.extend.fontFamily.sans deve ter 'Rubik' como primeiro elemento do array, seguido por fontes fallback apropriadas (system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif).
**Validates: Requirements 2.1, 2.2, 1.4**

**Property 4: Monospace Font Preservation**
*Para* elementos HTML com tags code e pre, o CSS não deve aplicar font-sans, preservando as fontes monospace padrão.
**Validates: Requirements 4.3**

**Nota sobre Testes Visuais**: Os requisitos 3.1-3.5 e 4.1-4.2 relacionados à aplicação visual da fonte em elementos renderizados devem ser validados através de inspeção manual ou testes E2E, não através de testes unitários. A aplicação correta das propriedades 1-3 garante que a configuração está correta, e a renderização seguirá automaticamente.

## Error Handling

### Cenários de Erro

1. **Falha no Carregamento do Google Fonts**
   - **Causa**: Rede indisponível, bloqueio de CDN, timeout
   - **Tratamento**: Fontes fallback (system-ui, etc.) serão aplicadas automaticamente pelo navegador
   - **Impacto**: Usuário verá fontes do sistema, mas o site permanece funcional e legível

2. **Configuração Incorreta do Tailwind**
   - **Causa**: Erro de sintaxe no tailwind.config.ts
   - **Tratamento**: Build do Vite falhará com mensagem de erro clara
   - **Prevenção**: Validação através de TypeScript e testes de configuração

3. **Conflito com CSS Existente**
   - **Causa**: Regras CSS específicas que sobrescrevem font-family
   - **Tratamento**: Usar especificidade CSS apropriada e !important apenas se necessário
   - **Prevenção**: Revisar CSS customizado e garantir que não há sobrescritas indesejadas

### Estratégias de Mitigação

- **Font Display Swap**: Usar `display=swap` na URL do Google Fonts para evitar FOIT
- **Preconnect**: Otimizar carregamento com preconnect para reduzir latência
- **Fallback Stack Robusto**: Incluir múltiplas fontes fallback para cobertura cross-platform
- **CSS Layer Order**: Usar @layer base do Tailwind para garantir ordem de aplicação correta

## Testing Strategy

### Dual Testing Approach

Esta feature utilizará uma combinação de testes de exemplo (example tests) e validação manual:

**Example Tests**: Verificam configurações estáticas específicas
- Presença e formato do link do Google Fonts
- Configuração correta do Tailwind
- Preservação de fontes monospace

**Manual Validation**: Verifica aplicação visual
- Inspeção visual em diferentes páginas
- Verificação via DevTools da fonte computada
- Teste em diferentes navegadores

### Example Test Configuration

Os testes de exemplo devem verificar:

1. **HTML Configuration Test**
   - Verificar presença de link para Google Fonts com Rubik
   - Verificar presença de preconnect tags
   - **Feature: rubik-font-implementation, Property 1 & 2**

2. **Tailwind Configuration Test**
   - Verificar que fontFamily.sans começa com 'Rubik'
   - Verificar presença de todas as fontes fallback
   - **Feature: rubik-font-implementation, Property 3**

3. **CSS Monospace Preservation Test**
   - Verificar que elementos code/pre não têm font-sans aplicado
   - **Feature: rubik-font-implementation, Property 4**

### Manual Testing Checklist

Após implementação, validar manualmente:

- [ ] Abrir site em Chrome e verificar fonte via DevTools
- [ ] Abrir site em Firefox e verificar fonte via DevTools
- [ ] Abrir site em Safari e verificar fonte via DevTools
- [ ] Verificar headings (h1-h6) em diferentes páginas
- [ ] Verificar parágrafos e texto corrido
- [ ] Verificar botões e elementos interativos
- [ ] Verificar conteúdo WordPress (se disponível)
- [ ] Verificar que elementos code/pre mantêm fonte monospace
- [ ] Testar com DevTools Network throttling (simular carregamento lento)
- [ ] Verificar que fallback fonts funcionam (bloquear Google Fonts)

### Testing Tools

- **TypeScript**: Validação de tipos na configuração do Tailwind
- **Vite Build**: Validação de sintaxe e build correto
- **Browser DevTools**: Inspeção de fontes computadas
- **Manual Testing**: Validação visual cross-browser
