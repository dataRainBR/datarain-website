---
title: "Banco ASA unifica backup de múltiplos bancos de dados com Veeam na AWS"
date: "2026-01-01T00:00:00"
slug: "banco-asa-unifica-backup-de-multiplos-bancos-de-dados-com-veeam-na-aws"
excerpt: "Como o Banco ASA implementou uma solução unificada de backup com Veeam para 7+ engines de banco de dados, com restore granular, point-in-time recovery e proteção contra ransomware na AWS."
featuredImage: "/content-images/cases/banco-asa-unifica-backup-de-multiplos-bancos-de-dados-com-veeam-na-aws/banco-asa-logo.png"
categories: [17,20]
tags: []
author: 4
pilar: "Cybersecurity"
oferta: "Migração e Disaster Recovery"
setor: "Financeiro"
---

O **Banco ASA** é uma instituição financeira brasileira que opera com múltiplas tecnologias de banco de dados para suportar suas operações bancárias. Com a crescente sofisticação de ameaças cibernéticas e a necessidade de conformidade regulatória do setor financeiro, o banco buscou a dataRain para implementar uma solução robusta e unificada de backup.

## Desafio

O Banco ASA necessitava de uma solução de backup que cobrisse **7+ engines de banco de dados** diferentes, cada um com suas particularidades:

- **Microsoft SQL Server** — banco principal com necessidade de restore granular
- **Oracle** — integração com ASM e RMAN para recuperação de transações
- **PostgreSQL** — restore de instâncias individuais com point-in-time via WAL
- **MySQL/MariaDB** — recuperação granular com logs binários
- **MongoDB** — restore de coleções e documentos com suporte a replsets e sharding
- **SAP HANA** — banco in-memory de missão crítica
- **IBM Db2** — sistemas legados com necessidade de continuidade

Os requisitos incluíam **restore granular** até nível de tabela, **point-in-time recovery** para minimizar RPO, **instant recovery** para acesso imediato aos dados e **proteção contra ransomware**.

## Solução

A **dataRain** implementou o **Veeam Backup & Replication** com **Veeam Explorers** dedicados para cada engine:

**SQL Server**

- Restore granular de bases, tabelas, schemas e stored procedures
- **Point-in-time** via Transaction Logs
- **Instant Recovery** para acesso imediato aos dados

**Oracle**

- Integração com **ASM** e **RMAN**
- Recuperação de transações específicas
- Suporte a **Data Guard** para ambientes de alta disponibilidade

**PostgreSQL**

- Restore de instâncias e bases individuais
- **Point-in-time** via WAL (Write-Ahead Logging)

**MySQL/MariaDB**

- Recuperação granular com **logs binários**

**MongoDB**

- Restore de coleções e documentos individuais
- Suporte a **replsets** e **sharding**

**Proteção e segurança**

- **Application-Aware Processing** para garantir consistência dos backups
- **Secure Restore** com scan antivírus antes de restaurar
- **Staging Server** para validação de SQL Server e Oracle
- **S3 com Object Lock** (WORM) para proteção contra ransomware

## Resultados

- Solução de backup **unificada** cobrindo **7+ engines** de banco de dados
- **Restore granular** até nível de tabela, schema e documento
- **Point-in-time recovery** implementado para minimizar RPO
- **Instant Recovery** para reduzir RTO ao mínimo
- **Proteção contra ransomware** via WORM/Object Lock no S3
- **Secure Restore** com verificação de malware antes de cada restauração
- Backup do setor financeiro em conformidade com requisitos regulatórios
