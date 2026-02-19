---
title: "Hospital Sabaré protege dados pediátricos com backup imutável na AWS"
date: "2023-03-01T00:00:00"
slug: "hospital-sabare-protege-dados-pediatricos-com-backup-imutavel-na-aws"
excerpt: "Como o Sabará Hospital Infantil implementou um repositório de backup imutável na AWS integrado ao Veeam V12, protegendo 20 TB de dados pediátricos contra ransomware e desastres."
featuredImage: "/content-images/cases/hospital-sabare-protege-dados-pediatricos-com-backup-imutavel-na-aws/sabare-logo.png"
categories: [17,20,26]
tags: []
author: 4
pilar: "Cybersecurity"
oferta: "Migração e Disaster Recovery"
setor: "Saúde"
---

O **Sabará Hospital Infantil**, fundado em 1962 por pediatras das melhores escolas médicas de São Paulo, é referência nacional em atendimento pediátrico. Com décadas de dedicação à saúde infantil, o hospital acumula um volume significativo de dados clínicos e administrativos que precisam de proteção robusta contra ameaças modernas.

## Desafio

O Sabará já utilizava **Veeam** como ferramenta de backup local, mas precisava criar um **repositório offsite em nuvem** fora do ambiente on-premises para proteger seus dados contra:

- **Ransomware** — ataques que criptografam dados e exigem resgate
- **Desastres físicos** — incêndios, inundações ou falhas de hardware
- **Exclusão acidental** — erros humanos que comprometem backups locais

Os requisitos eram claros:

- **Imutabilidade** dos arquivos de backup (proteção WORM)
- **Resiliência de 99,999999999%** (11 noves) para os dados armazenados
- **Separação de roles e permissões** para controle de acesso granular
- Transferência segura de **20 TB** via SSL/TLS
- Integração nativa com **Veeam V12**

## Solução

A **dataRain** implementou um ambiente AWS como repositório imutável para backup, integrado ao Veeam V12:

- **Amazon S3** com **Object Lock** (modo WORM) para garantir que backups não possam ser alterados ou excluídos
- Deploy de **múltiplos buckets** para distribuição otimizada de volumes de backup
- Transferência de **20 TB** do ambiente on-premises para a AWS via **SSL/TLS**
- **IAM** com separação rigorosa de roles e permissões
- **CloudTrail** para auditoria completa de todos os acessos
- **AWS Organizations** para governança da conta
- Monitoramento e segurança baseline configurados

## Resultados

- **Repositório imutável** AWS implantado e operacional
- **20 TB** de dados pediátricos transferidos com segurança para S3
- Integração **Veeam V12 ↔ S3** configurada e validada
- **Imutabilidade** garantida com Object Lock (proteção contra ransomware)
- **Resiliência de 99,999999999%** com Amazon S3
- Dados clínicos do hospital infantil de referência **protegidos na nuvem**
- Suporte mensal contínuo para manutenção do ambiente
