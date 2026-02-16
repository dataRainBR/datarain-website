---
title: "MPRN implementa EKS Fargate e POC de rastreio de dados pessoais"
date: "2023-06-01T00:00:00"
slug: "mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais"
excerpt: "Como o Ministério Público do Rio Grande do Norte modernizou sua infraestrutura com cluster EKS Fargate, perfis separados dev/prd e uma POC de rastreio de dados pessoais para conformidade com a LGPD."
featuredImage: "/content-images/cases/mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais/mprn-logo.png"
categories: [17,19,25]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Containers e Kubernetes"
setor: "Governo"
---

O **Ministério Público do Rio Grande do Norte (MPRN)** é o órgão responsável pela defesa da ordem jurídica, do regime democrático e dos interesses sociais no estado. Com a crescente digitalização dos serviços públicos e a necessidade de conformidade com a LGPD, o MPRN buscou modernizar sua infraestrutura de TI com containers Kubernetes na AWS.

## Desafio

O MPRN enfrentava a necessidade de modernizar sua infraestrutura em duas frentes simultâneas:

- **Modernização de infraestrutura** — migrar de servidores tradicionais para containers Kubernetes gerenciados, com ambientes separados para desenvolvimento e produção
- **Conformidade LGPD** — como órgão público que lida com dados pessoais de cidadãos, o MPRN precisava de ferramentas para rastrear e mapear dados pessoais em seus sistemas
- **Otimização de custos** — o billing AWS precisava ser analisado e otimizado para uso eficiente dos recursos públicos
- **Operação simplificada** — a equipe de TI do MPRN precisava de uma solução que reduzisse a complexidade operacional

## Solução

A **dataRain** implementou uma solução em duas frentes: modernização com containers e conformidade com dados pessoais.

### Cluster EKS Fargate
- **Amazon EKS** com **AWS Fargate** para execução serverless de containers — sem necessidade de provisionar ou gerenciar instâncias EC2
- Perfis separados: **dev** (desenvolvimento) e **prd** (produção) com configurações distintas de recursos e permissões
- Configuração via manifesto YAML (cluster-fargate.yml) para reprodutibilidade
- **Namespaces isolados** por ambiente, garantindo que workloads de desenvolvimento não impactem produção
- Políticas de rede e RBAC para controle de acesso granular

### POC — Rastreio de Dados Pessoais
- Prova de conceito para **sistema de rastreio de dados pessoais** nos sistemas do MPRN
- Mapeamento de onde dados pessoais de cidadãos são armazenados e processados
- Alinhamento com requisitos da **LGPD** (Lei Geral de Proteção de Dados)
- Solicitação e gestão de **créditos AWS** para execução da POC

### Otimização de Custos
- Análise detalhada de billing com identificação de oportunidades de economia
- **Fargate** elimina custos de instâncias ociosas — pagamento apenas pelo tempo de execução dos containers
- Recomendações de rightsizing e uso eficiente de recursos

## Resultados

- Cluster **EKS Fargate** operacional com perfis dev/prd isolados
- **POC de rastreio** de dados pessoais executada com sucesso
- Ambiente **serverless** para containers — zero instâncias EC2 para gerenciar
- **Otimização de custos** com modelo pay-per-use do Fargate
- MPRN com infraestrutura moderna e preparada para conformidade LGPD
