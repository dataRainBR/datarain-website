---
title: "Xerox opera múltiplos projetos na AWS com monitoramento 24x7"
date: "2023-06-01T00:00:00"
slug: "xerox-opera-multiplos-projetos-na-aws-com-monitoramento-24x7"
excerpt: "Como a Xerox gerencia múltiplos sub-projetos na AWS — incluindo Uniasselvi, TIM Multicanal e POC Aurora Babelfish — com monitoramento Zabbix 24x7 e Terraform para IaC."
featuredImage: "/content-images/cases/xerox-opera-multiplos-projetos-na-aws-com-monitoramento-24x7/xerox-logo.png"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Managed Services e Migração"
setor: "Tecnologia"
---

A **Xerox** é uma multinacional de tecnologia reconhecida globalmente por suas soluções de impressão, documentos e serviços de TI. No Brasil, a empresa opera múltiplos projetos na AWS para diferentes clientes e linhas de negócio, exigindo uma gestão unificada de infraestrutura com monitoramento contínuo.

## Desafio

A Xerox precisava gerenciar **múltiplos sub-projetos** na AWS de forma centralizada, cada um com requisitos distintos:

- **Xerox-Uniasselvi:** plataforma educacional com 7+ servidores, incluindo pfSense, PostgreSQL e SQL Server
- **Xerox-TIM Multicanal:** infraestrutura para telecom com necessidade de IaC
- **POC Aurora Babelfish:** prova de conceito para migração de SQL Server para Aurora PostgreSQL, eliminando custos de licenciamento
- **Monitoramento unificado:** necessidade de visibilidade 24x7 sobre todos os ambientes com alertas proativos

O desafio era manter todos esses ambientes operacionais com backup frequente, monitoramento contínuo e capacidade de resposta rápida a incidentes.

## Solução

A **dataRain** implementou uma gestão unificada com monitoramento proativo:

### Xerox-Uniasselvi
- **7+ servidores EC2** para plataforma educacional
- **PostgreSQL** e **SQL Server** como bancos de dados
- **AWS Backup** a cada 2 horas com retenção de 15 dias
- Documentação técnica completa (v1 e v2)
- Evidências de auditoria e controle de custos detalhado

### Xerox-TIM Multicanal
- **Terraform** para Infrastructure as Code
- Infraestrutura dedicada para operações de telecom
- Ambientes segregados com chaves de acesso dedicadas

### POC Aurora Babelfish
- Prova de conceito para migração **SQL Server → Aurora PostgreSQL**
- **Aurora Babelfish** para compatibilidade com T-SQL sem reescrita de código
- Avaliação de redução de custos de licenciamento Microsoft

### Monitoramento 24x7
- **Zabbix** integrado para monitoramento contínuo de todos os ambientes
- Alertas por severidade: Warning, High e Disaster
- Rastreamento de métricas: CPU, memória, disco, disponibilidade
- Relatórios de problemas exportados com histórico completo
- **Amazon CloudWatch** complementar para métricas AWS nativas

## Resultados

- **POC Aurora Babelfish** validada para migração SQL Server
- **7+ servidores Uniasselvi** operacionais com backup a cada 2h
- Monitoramento **Zabbix 24x7** com alertas proativos
- **Terraform** implementado para IaC no projeto TIM
- Gestão unificada de **múltiplos sub-projetos** na AWS
- Relatórios de incidentes e auditoria documentados
