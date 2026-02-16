---
title: "Maxion migra 186 VMs do Azure para AWS com Landing Zone enterprise"
date: "2023-01-01T00:00:00"
slug: "maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise"
excerpt: "Como a Iochpe-Maxion, líder mundial em rodas automotivas com 32 fábricas em 14 países, migrou 186 VMs e ~1 PB de backup do Azure para a AWS com MAP, MGN e Landing Zone multi-região."
featuredImage: "/content-images/cases/maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise/maxion-logo.png"
categories: [17,19,20]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Migração e Landing Zone"
setor: "Indústria"
---

A **Iochpe-Maxion** é líder mundial na produção de rodas automotivas, com **17.000 funcionários**, **32 fábricas em 14 países** e presença nos cinco continentes. A empresa fornece componentes estruturais e rodas para os principais fabricantes de veículos do mundo.

## Desafio

A Maxion precisava migrar toda sua infraestrutura do **Microsoft Azure para a AWS**, um projeto de escala enterprise global:

- **186 VMs** para migrar (146 Windows + 40 Linux)
- **~1 PB de backup** (Commvault/Nasuni) para transferir
- Arquitetura **multi-região** (US, EU, AP, SA) com contas segregadas
- Necessidade de **Landing Zone enterprise** com Organizations e Account Factory
- **SDWAN Silver Peak** para conectividade global entre fábricas
- **IoT Data Bartender** para captura de dados industriais do chão de fábrica
- **Licensing Assurance** para otimização de licenças Windows Server e SQL Server
- **DataSync cross-account** para migração de dados entre contas S3

## Solução

A **dataRain** conduziu o projeto via **MAP** (Migration Acceleration Program) com prazo de 6 meses:

### Landing Zone Enterprise
- **AWS Organizations** com contas segregadas: Network, Dev, Quality, Prod, Backup, WebApp
- **AWS Control Tower** com Account Factory para provisionamento padronizado
- **Transit Gateway** para conectividade entre VPCs e regiões
- **Direct Connect** para conexão dedicada com data centers

### Migração
- Estratégia **Rehost** (Lift & Shift) com **AWS MGN** (Application Migration Service)
- Migração de **186 VMs** em ondas coordenadas
- **AWS DataSync** cross-account para migração de ~1 PB de backup para S3

### Segurança
- Security Framework completo: **GuardDuty**, **Inspector**, **Config**, **SecurityHub** e **KMS**
- **Secrets Manager** para gestão de credenciais
- Políticas de segurança centralizadas via Organizations

### IoT e Analytics
- **IoT Data Bartender** integrado para captura de dados de fábricas
- Pipeline: IoT → **Data Lake** → **Amazon QuickSight** para analytics industrial
- Dashboards de produção em tempo real

### Conectividade Global
- **SDWAN Silver Peak** para conectividade entre fábricas em 14 países
- Networking multi-região com Transit Gateway e Direct Connect

### FinOps
- **Saving Plans** e **Reserved Instances** para otimização de custos
- **Licensing Assurance** para licenças Microsoft

## Resultados

- **186 VMs** migradas do Azure para AWS com sucesso
- **~1 PB de backup** migrado via DataSync
- **Landing Zone enterprise** com Organizations e contas segregadas
- **Security Framework** com 5 serviços nativos AWS
- **IoT Data Bartender → Data Lake → QuickSight** operacional
- Networking **multi-região** (US/EU/AP/SA) configurado
- **DataSync cross-account** para movimentação de dados
- **Licensing Assurance** otimizado para licenças Microsoft
