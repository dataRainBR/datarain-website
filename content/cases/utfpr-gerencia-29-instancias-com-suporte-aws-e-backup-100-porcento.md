---
title: "UTFPR gerencia 29 instâncias com suporte AWS e backup 100%"
date: "2025-12-01T00:00:00"
slug: "utfpr-gerencia-29-instancias-com-suporte-aws-e-backup-100-porcento"
excerpt: "Como a Universidade Tecnológica Federal do Paraná mantém 29 instâncias EC2 com 100% de sucesso em backups, 37 alarmes CloudWatch e suporte gerenciado de 42h/mês pela dataRain."
featuredImage: "/content-images/cases/utfpr-gerencia-29-instancias-com-suporte-aws-e-backup-100-porcento/utfpr-logo.png"
categories: [17]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Managed Services"
setor: "Educação"
hidden: true
---

A **Universidade Tecnológica Federal do Paraná (UTFPR)** é a única universidade tecnológica federal do Brasil, com 13 câmpus distribuídos pelo estado do Paraná. Com mais de 35 mil alunos e uma infraestrutura de TI que suporta sistemas acadêmicos, administrativos e de pesquisa, a universidade precisa de operação contínua e confiável de seus serviços na nuvem.

## Desafio

A UTFPR opera **29 instâncias EC2** na AWS que suportam sistemas críticos da universidade. O desafio era manter toda essa infraestrutura operacional com:

- **Backup confiável** de todas as instâncias com política de retenção
- **Monitoramento proativo** de CPU, memória, disco e status check
- **Patch Management** para manter sistemas operacionais atualizados e seguros
- **Sistema de tickets** (GLPI) para gestão de chamados de TI
- **Suporte especializado** para resolução de incidentes e otimização contínua

## Solução

A **dataRain** implementou um modelo de **Managed Services** completo:

### Backup e Continuidade
- **AWS Backup** com política diária e retenção de 30 dias
- Taxa de sucesso: **968 backups bem-sucedidos** por mês
- Monitoramento de falhas (14 falhas identificadas — servidores desligados)
- Plano de teste de restore em desenvolvimento

### Monitoramento e Alertas
- **Amazon CloudWatch** com **37 alarmes** configurados
- Métricas monitoradas: CPU, memória, disco, status check, latência de Load Balancer
- Alertas categorizados por criticidade (Crítico e Aviso)
- Detecção proativa de alto consumo de CPU em tasks ECS

### Gestão de Infraestrutura
- **29 instâncias EC2** gerenciadas com inventário completo
- **Amazon ECS** para aplicação GLPI (sistema de tickets)
- **AWS Systems Manager (SSM)** para Patch Management
- **Application Load Balancer** para distribuição de tráfego
- Revisão mensal de segurança IAM

### Suporte Gerenciado
- **42h/mês** de suporte técnico (N1, N2, N3)
- Distribuição: ~40h administrativas + ~2h de solicitações
- **Book mensal** com KPIs operacionais e relatório executivo
- Gestão de chamados via Jira com SLA definido

## Resultados

- **29 instâncias** gerenciadas com operação contínua
- **968 backups/mês** com taxa de sucesso próxima a **100%**
- **37 alarmes CloudWatch** para monitoramento proativo
- **42h/mês** de suporte gerenciado com book mensal de KPIs
- **ECS** operacional para sistema de tickets GLPI
- **SSM Patch Management** para atualizações de segurança
- Zero crises abertas no período reportado
