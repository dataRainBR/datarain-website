# Instruções para criação de Cases

Este documento descreve o padrão para criar um novo case de sucesso no site da dataRain. Cada case tem duas partes: o arquivo markdown (conteúdo) e o componente de demo interativo.

---

## 1. Arquivo Markdown

Criar em `content/cases/` com o nome no formato slug (ex: `nome-do-cliente-descricao.md`).

### Frontmatter obrigatório

```yaml
---
title: "Título do case"
date: "YYYY-MM-01T00:00:00"
slug: "slug-do-case"
excerpt: "Resumo de 1-2 linhas descrevendo o que foi feito, para quem e qual o resultado principal."
featuredImage: "/content-images/cases/slug-do-case/logo-cliente.png"
categories: [17,19]
tags: []
author: 4
---
```

Regras:
- `date`: usar apenas mês e ano (dia sempre 01). Representa quando o projeto foi concluído.
- `excerpt`: nunca usar "Lorem ipsum". Escrever um resumo real e objetivo.
- `featuredImage`: logo do cliente em boa qualidade. Colocar em `public/content-images/cases/slug-do-case/`.

### Estrutura do conteúdo

Usar `##` para todas as seções (nunca `###` ou `#`). Estrutura recomendada:

```markdown
Parágrafo introdutório sobre o cliente (quem é, o que faz). Usar **bold** no nome do cliente na primeira menção.

## Desafio

Descrever o problema ou necessidade que motivou o projeto. Usar **bold** em métricas e termos técnicos relevantes.

## Solução

Descrever a abordagem adotada pela dataRain. Mencionar serviços AWS em **bold**.

## Arquitetura / Serviços AWS

Lista dos serviços utilizados:

- **Amazon EC2** — breve descrição do uso
- **AWS Lambda** — breve descrição do uso
- **Amazon S3** — breve descrição do uso

## Resultados

Lista de resultados com métricas em **bold** (o componente detecta automaticamente e renderiza como cards visuais):

- **20% de economia** no custo anual
- Migração concluída em **45 dias**
- **Alta disponibilidade** com três zonas

## (Opcional) Depoimento do cliente

> "*Texto do depoimento entre aspas e itálico.*"
> — Nome, Cargo na Empresa
```

### Regras de formatação

- Serviços AWS sempre em **bold**: **Amazon EC2**, **AWS Lambda**, **Amazon S3**
- Métricas sempre em **bold**: **20%**, **45 dias**, **R$ 186 milhões**
- Listas com `-` (não `*`), sem `;` ou `,` no final
- Depoimentos como blockquote (`>`)
- Não incluir seção "Sobre a dataRain" (já existe no site)
- Não usar HTML dentro do markdown

---

## 2. Imagem do cliente

- Colocar o logo em `public/content-images/cases/slug-do-case/`
- Preferir PNG com fundo transparente ou JPG de boa qualidade
- O logo aparece no card de preview com fundo branco e `object-contain`, então logos horizontais funcionam melhor

---

## 3. Demo interativo

Cada case deve ter um componente de demo em `src/components/cases-demos/`. O demo aparece acima do conteúdo markdown na página do case.

### Criar o componente

Arquivo: `src/components/cases-demos/NomeClienteDemo.tsx`

O padrão é um carrossel de "jornada" com etapas antes/depois. Estrutura:

```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Escolher ícones relevantes do lucide-react
  Building2, Cloud, ShieldCheck, TrendingUp, Rocket,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

interface JourneyStep {
  id: string;
  icon: React.FC<{ className?: string; color?: string }>;
  title: string;
  narrative: string;
  before: string;
  after: string;
  highlight?: string;  // opcional — métrica ou frase de destaque
  color: string;       // cor hex da etapa
}

const steps: JourneyStep[] = [
  {
    id: 'challenge',
    icon: Building2,
    title: 'Título da etapa',
    narrative: 'Descrição narrativa do que aconteceu nesta etapa.',
    before: 'Como era antes (problema)',
    after: 'Como ficou depois (solução)',
    highlight: 'Métrica de destaque',
    color: '#2563eb',
  },
  // ... 4 a 6 etapas no total
];
```

Usar o componente `BluePayDemo.tsx` como referência completa para o layout do carrossel (progress bar, animações, cards antes/depois).

### Registrar no CaseDemo.tsx

Adicionar o import lazy e o mapeamento slug → componente em `src/components/cases-demos/CaseDemo.tsx`:

```tsx
const NomeClienteDemo = lazy(() => import('./NomeClienteDemo').then(m => ({ default: m.NomeClienteDemo })));

// No demoMap:
'slug-do-case': NomeClienteDemo,
```

---

## 4. Checklist

- [ ] Markdown criado com frontmatter completo (date só mês/ano, excerpt real)
- [ ] Logo do cliente em boa qualidade na pasta de imagens
- [ ] Conteúdo usa `##`, **bold** em serviços/métricas, listas limpas
- [ ] Excerpt descreve o case em 1-2 linhas (não Lorem ipsum)
- [ ] Demo criado com 4-6 etapas de jornada
- [ ] Demo registrado no `CaseDemo.tsx`
- [ ] Sem seção "Sobre a dataRain"
- [ ] Sem HTML no markdown
- [ ] Data reflete quando o projeto foi concluído
