---
title: "Cotrijal protege dados críticos com backup imutável na AWS"
date: "2023-04-01T00:00:00"
slug: "cotrijal-protege-dados-criticos-com-backup-imutavel-na-aws"
excerpt: "Como a Cotrijal, maior cooperativa agropecuária do RS com faturamento de R$ 5,83 bilhões, implementou um repositório de backup imutável na AWS integrado ao Veeam V12 para proteger 20 TB de dados críticos."
featuredImage: "/content-images/cases/cotrijal-protege-dados-criticos-com-backup-imutavel-na-aws/cotrijal-logo.png"
categories: [17,20]
tags: []
author: 4
pilar: "Cybersecurity"
oferta: "Migração e Disaster Recovery"
setor: "Energia e Agro"
---

A **Cotrijal** é a maior cooperativa agropecuária do Rio Grande do Sul, fundada em 1957 em Não-Me-Toque. Com faturamento recorde de **R$ 5,83 bilhões** em 2022, a cooperativa conta com capacidade de armazenamento de **876 mil toneladas**, **33 lojas**, **15 supermercados** e 1 atacado. É também a organizadora da **Expodireto Cotrijal**, uma das maiores feiras agropecuárias do mundo, com **250 mil visitantes**, **500 expositores** e **R$ 2 bilhões** em negócios gerados.

## Desafio

A Cotrijal utilizava **Veeam** como ferramenta de backup local, mas precisava de um **repositório offsite em nuvem** com garantia de imutabilidade para proteger seus dados contra ransomware e desastres. Os requisitos incluíam:

- **Imutabilidade** dos arquivos de backup (proteção contra alteração ou exclusão)
- **Resiliência de 99,999999999%** (11 noves) para os dados armazenados
- **Separação de roles, usuários e permissões** para controle de acesso granular
- Transferência segura de **20 TB** de dados do ambiente on-premises
- Integração nativa com **Veeam V12**

Uma **POC** (Prova de Conceito) já havia sido realizada com sucesso, validando a viabilidade técnica da solução.

## Solução

A **dataRain** implementou um ambiente AWS como repositório imutável para backup, integrado ao Veeam V12:

- **Amazon S3** com **Object Lock** (modo WORM — Write Once, Read Many) para garantir imutabilidade
- Deploy de **múltiplos buckets** para distribuição otimizada de volumes de backup
- Transferência de **20 TB** do ambiente on-premises para a AWS via **SSL/TLS**
- **IAM** com separação rigorosa de roles e permissões
- **CloudTrail** para auditoria completa de acessos
- **Monitoramento e segurança baseline** configurados

O projeto foi estimado em **176 horas** (1 mês de alocação), seguindo a validação técnica da POC prévia.

## Resultados

- **Repositório imutável** AWS implantado e operacional
- **20 TB** transferidos com segurança de on-premises para S3
- Integração **Veeam V12 ↔ S3** configurada e validada
- **Imutabilidade** garantida com Object Lock (proteção contra ransomware)
- **Resiliência de 99,999999999%** com Amazon S3
- **Monitoramento baseline** ativo
- Dados críticos da maior cooperativa agropecuária do RS protegidos na nuvem
