---
title: "Aarin migra GitLab entre instâncias com automação via API"
date: "2024-01-01T00:00:00"
slug: "aarin-migra-gitlab-entre-instancias-com-automacao-via-api"
excerpt: "Como a Aarin TechFin migrou projetos, pipelines CI/CD e usuários entre instâncias GitLab na AWS com scripts automatizados via API, garantindo continuidade das operações de desenvolvimento."
featuredImage: "/content-images/cases/aarin-migra-gitlab-entre-instancias-com-automacao-via-api/aarin-logo.png"
categories: [19]
tags: []
author: 4
pilar: "Cloud"
oferta: "Migração e CI/CD"
setor: "Financeiro"
---

A **Aarin TechFin** é uma fintech brasileira que desenvolve soluções financeiras digitais. Com uma operação de desenvolvimento ativa e múltiplos repositórios de código, a empresa utiliza o GitLab como plataforma central de versionamento, CI/CD e colaboração entre equipes de engenharia.

## Desafio

A Aarin precisava migrar toda sua infraestrutura GitLab de uma instância para outra — uma operação delicada que envolvia preservar não apenas o código-fonte, mas todo o ecossistema de desenvolvimento:

- **Projetos e grupos** organizados em estrutura hierárquica que precisava ser preservada
- **Pipelines CI/CD** com configurações específicas de build, test e deploy
- **Imagens de dependência** utilizadas nos pipelines (Docker images de base)
- **Usuários e permissões** — cada desenvolvedor com roles específicos por projeto
- A migração precisava ser feita com **mínimo downtime** para não impactar as entregas

O desafio adicional era que o GitLab não oferece uma ferramenta nativa de migração completa entre instâncias self-hosted, exigindo uma abordagem customizada via API.

## Solução

A **dataRain** desenvolveu uma suíte de automação completa utilizando a API REST do GitLab:

### Assessment e Planejamento
- Mapeamento completo da **estrutura de grupos e subgrupos** na instância de origem
- Inventário de todos os projetos, branches protegidas e configurações de CI/CD
- Identificação de dependências entre projetos e imagens de pipeline

### Scripts de Migração via API
- Scripts **cURL** automatizados para **export/import** de projetos via API GitLab
- Migração de repositórios com **histórico completo** de commits, branches e tags
- Transferência de **imagens de dependência** utilizadas nos pipelines de CI/CD
- Validação automatizada pós-migração para garantir integridade dos dados

### Migração de Usuários e Permissões
- Script automatizado de **invite de usuários** na nova instância
- Mapeamento e replicação de **roles e permissões** por projeto e grupo
- Reorganização da **estrutura de grupos** aproveitando a migração para otimizar a organização

### Validação de Pipelines
- Execução de pipelines de teste na nova instância para validar configurações
- Ajuste de variáveis de ambiente e secrets para o novo contexto
- Verificação de integração com registries de imagens Docker

## Resultados

- Migração completa de **projetos GitLab** entre instâncias sem perda de dados
- **Pipelines CI/CD** ajustadas e validadas na nova instância
- **Usuários migrados** via script automatizado com permissões preservadas
- Estrutura de grupos **reorganizada** para melhor governança
- **Zero downtime** significativo para as equipes de desenvolvimento
