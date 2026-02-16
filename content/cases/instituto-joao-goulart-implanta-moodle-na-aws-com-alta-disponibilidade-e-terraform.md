---
title: "Instituto João Goulart implanta Moodle na AWS com alta disponibilidade e Terraform"
date: "2025-07-01T00:00:00"
slug: "instituto-joao-goulart-implanta-moodle-na-aws-com-alta-disponibilidade-e-terraform"
excerpt: "Como o Instituto Municipal João Goulart implantou uma plataforma Moodle na AWS com ECS Fargate, Auto Scaling e infraestrutura 100% como código com Terraform, em 5 fases e 60 dias."
featuredImage: "/content-images/cases/instituto-joao-goulart-implanta-moodle-na-aws-com-alta-disponibilidade-e-terraform/joao-goulart-logo.png"
categories: [17,19,25]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Governo"
---

O **Instituto Municipal de Administração Pública João Goulart**, vinculado ao IplanRio e à Prefeitura do Rio de Janeiro, é responsável pela formação e capacitação de servidores públicos municipais. Para modernizar sua plataforma de ensino à distância, o Instituto buscou a dataRain para implantar o **Moodle** (LMS) na AWS com alta disponibilidade e escalabilidade automática.

## Desafio

O Instituto precisava de uma plataforma de ensino que atendesse a requisitos exigentes:

- Suporte a **múltiplos usuários simultâneos** com performance estável
- **Alta disponibilidade** para garantir acesso contínuo aos cursos
- **Escalabilidade automática** para absorver picos de demanda
- Suporte a **plugins customizados** e autenticação **SSO/LDAP**
- **Infraestrutura como código** para reprodutibilidade e governança
- **Resiliência comprovada** com testes de failover

## Solução

A **dataRain** implantou o Moodle na AWS com uma arquitetura moderna, executada em **5 fases ao longo de 60 dias**:

**Fase 1 — Planejamento e arquitetura**

- Definição da arquitetura com **VPC**, **ECS Fargate**, **RDS**, **EFS** e **ElastiCache**
- Planejamento de rede, segurança e serviços de dados

**Fase 2 — Provisionamento de infraestrutura**

- Toda a infraestrutura provisionada com **Terraform**, com state no **S3** + lock no **DynamoDB**
- Rede segura com **VPC**, subnets públicas e privadas, **NAT Gateway**

**Fase 3 — Deploy da aplicação**

- Moodle rodando em **ECS Fargate** com **ALB** (Application Load Balancer)
- **Auto Scaling** configurado para escalar tasks automaticamente
- Cron jobs via **ECS Scheduled Tasks**
- Envio de e-mails via **Amazon SES**

**Fase 4 — Configuração e validação**

- Configuração de plugins, temas e autenticação
- Teste de **failover** de tasks para validar alta disponibilidade
- Teste de **escalabilidade** com scaling manual de **2 → 4 tasks**

**Fase 5 — Documentação e handover**

- **Runbook** completo para operação
- Documentação técnica detalhada
- **Handover** para a equipe do Instituto

## Resultados

- **Moodle implantado** com alta disponibilidade e auto-scaling na AWS
- Infraestrutura **100% como código** com Terraform
- Testes de **failover e escalabilidade** validados com sucesso
- **Documentação e runbook** completos entregues
- **Handover** realizado para autonomia operacional da equipe
- Plataforma pronta para capacitar servidores públicos do Rio de Janeiro
