---
title: "CordVida implementa alta disponibilidade na AWS para seus portais de saúde"
date: "2023-06-01T00:00:00"
slug: "cordvida-implementa-alta-disponibilidade-na-aws-para-seus-portais-de-saude"
excerpt: "Como a CordVida eliminou pontos únicos de falha em seus 4 portais de saúde com arquitetura de alta disponibilidade na AWS, incluindo ALB, RDS Multi-AZ, WAF e EFS."
featuredImage: "/content-images/cases/cordvida-implementa-alta-disponibilidade-na-aws-para-seus-portais-de-saude/cordvida-logo.png"
categories: [17,19,26]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Saúde"
---

A **CordVida** é uma empresa brasileira especializada em coleta e armazenamento de **células-tronco do cordão umbilical**, oferecendo serviços de criopreservação para famílias que desejam garantir uma reserva biológica para o futuro. Com portais web que atendem tanto a CordVida quanto a **CordCell**, a empresa depende de alta disponibilidade para manter seus serviços acessíveis a clientes e parceiros.

## Desafio

A CordVida operava **4 servidores na AWS** (WordPress, Landing Page CordVida, Site CordCell e Site & Blog CordVida), onde cada aplicação e banco de dados rodavam no **mesmo servidor**. Essa arquitetura apresentava riscos críticos:

- **Ponto único de falha** — qualquer problema no SO ou banco causava indisponibilidade total
- **Sem alta disponibilidade** — nenhuma redundância entre zonas
- **Sem separação app/banco** — aplicação e dados compartilhando recursos
- **Sem load balancing** — todo o tráfego direcionado a um único servidor
- Necessidade adicional de **migrar o sistema Totvs** para a nuvem

## Solução

A **dataRain** projetou e implementou uma arquitetura de alta disponibilidade completa:

**Separação e redundância**

- **Separação de aplicação e banco de dados** em camadas independentes
- Criação de servidores em paralelo com **Multi-AZ** (múltiplas zonas de disponibilidade)
- **Application Load Balancer (ALB)** para distribuição inteligente de tráfego entre instâncias

**Banco de dados gerenciado**

- Migração dos bancos para **RDS Multi-AZ** (MySQL) com **failover automático**
- Eliminação do risco de perda de dados por falha de instância
- Backups automatizados e snapshots gerenciados

**Segurança e armazenamento**

- **WAF** (Web Application Firewall) para proteção contra ataques web
- **EFS** (Elastic File System) para armazenamento compartilhado entre instâncias
- **VPC** e subnets configuradas para isolamento e segurança
- **Route 53** para gerenciamento de DNS

**Migração Totvs**

- Migração do sistema **Totvs** para a infraestrutura AWS documentada e executada separadamente

## Resultados

- **Alta disponibilidade** implementada para todos os 4 portais
- **ALB** distribuindo tráfego com balanceamento inteligente
- **RDS Multi-AZ** com failover automático — zero downtime em caso de falha
- **WAF** protegendo contra ataques web
- **EFS** garantindo armazenamento compartilhado e consistente
- Migração do **Totvs** realizada com sucesso
- Pontos únicos de falha **eliminados** da arquitetura
