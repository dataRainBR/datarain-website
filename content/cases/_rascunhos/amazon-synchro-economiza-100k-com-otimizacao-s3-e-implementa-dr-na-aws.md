---
title: "Amazon-Synchro economiza R$100k com otimização S3 e implementa DR na AWS"
date: "2023-11-01T00:00:00"
slug: "amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws"
excerpt: "Como a equipe FinTech Brasil da Amazon economizou R$100.000 eliminando 2.4 PB de logs S3 desnecessários e implementou DR pilot light com Systems Manager e AWS Backup."
featuredImage: "/content-images/cases/amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws/synchro-logo.png"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Otimização e DR"
setor: "Financeiro"
---

A equipe **FinTech Brasil da Amazon** desenvolve plataformas para obrigações fiscais utilizando o aplicativo **Synchro**, uma solução especializada em gerar conformidade com o **SPED** (Sistema Público de Escrituração Digital). Após migrar para a AWS em 2020, a equipe enfrentava dificuldades operacionais por falta de expertise em infraestrutura cloud.

## Desafio

Três anos após a migração inicial para a AWS, a equipe acumulou uma série de problemas operacionais:

- **Acúmulo de tickets** de infraestrutura sem resolução — a equipe de desenvolvimento não tinha conhecimento suficiente em AWS para resolver questões de infra
- **Questões de segurança** pendentes — instâncias desatualizadas, patches não aplicados e configurações de segurança defasadas
- Infraestrutura baseada em EC2 **sem gerenciamento centralizado** — cada servidor era gerenciado individualmente, sem visibilidade unificada
- **Ausência total de plano de DR** (Disaster Recovery) — nenhuma estratégia de recuperação em caso de desastre
- Um bucket S3 com **2.4 PB de logs desnecessários** acumulados ao longo de anos, gerando custos mensais excessivos que ninguém havia questionado

## Solução

A **dataRain** atuou em múltiplas frentes para estabilizar, proteger e otimizar o ambiente:

### Gerenciamento Centralizado
- Implementação do **AWS Systems Manager** para gerenciamento centralizado de todas as instâncias EC2
- Inventário completo de recursos, patches e configurações
- Resolução sistemática dos chamados técnicos acumulados
- Documentação de configurações e melhores práticas para a equipe

### Disaster Recovery
- Implementação de **AWS Backup** com metodologia **pilot light** — recursos mínimos mantidos na região de DR, prontos para escalar em caso de desastre
- Plano de recuperação documentado com procedimentos passo a passo
- Testes de restore validados

### Otimização de Custos (o achado de R$100k)
- Análise via **S3 Storage Lens** revelou um bucket com **2.4 PB de logs** acumulados desde a migração — dados que não tinham utilidade operacional nem regulatória
- Eliminação controlada do bucket resultou em economia imediata de **~R$100.000**
- Implementação de lifecycle policies para evitar reacúmulo

### Capacitação e Autonomia
- Treinamento hands-on da equipe FinTech Brasil para gestão independente da infraestrutura AWS
- Documentação completa de procedimentos operacionais, runbooks e arquitetura
- Transferência de conhecimento para que a equipe pudesse operar sem dependência externa

## Resultados

- Economia de **~R$100.000** com eliminação de bucket S3 de 2.4 PB
- Equipe **capacitada** para gestão independente da infraestrutura
- Plano de **DR pilot light** implementado e testado com AWS Backup
- **Gerenciamento centralizado** via Systems Manager para todas as instâncias
- Backlog de tickets de infraestrutura **zerado**
- Documentação completa de infraestrutura e procedimentos operacionais
