---
title: "IHSL gerencia ambiente híbrido na AWS para hemoterapia de alta complexidade"
date: "2022-05-01T00:00:00"
slug: "ihsl-gerencia-ambiente-hibrido-na-aws-para-hemoterapia-de-alta-complexidade"
excerpt: "Como o Instituto de Hemoterapia do Sírio-Libanês mantém 4.000 bolsas de sangue por mês com ambiente híbrido AWS + on-premises gerenciado pela dataRain, com 100% de sucesso nos backups há mais de 4 anos."
featuredImage: "/content-images/cases/ihsl-gerencia-ambiente-hibrido-na-aws-para-hemoterapia-de-alta-complexidade/ihsl-logo.png"
categories: [17,19,26]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Saúde"
---

O **IHSL** (Instituto de Hemoterapia e Terapia Celular Hospital Sírio-Libanês) atua em captação, doação, coleta, armazenamento, interfaces e transfusão sanguínea, além de imunohematologia e tipagem. O instituto processa aproximadamente **4.000 bolsas de sangue por mês** em **2 laboratórios** que operam **24 horas por dia, 7 dias por semana**. Entre seus clientes estão o **Hospital Sírio-Libanês**, **AC Camargo**, **Beneficência Portuguesa** e **Oswaldo Cruz**.

## Desafio

O IHSL opera um ambiente híbrido complexo que exige gestão especializada:

**Na AWS:**
- **4 instâncias EC2** em produção + **2 EC2** em homologação
- **4 bancos RDS Aurora MySQL** em produção + **3 RDS** em homologação
- Sistemas críticos: **WebLIS** (laboratório de Sorologia, Node.js/AngularJS), **Dashboard** (React) e **CQ** (Controle de Qualidade de Hemocomponentes, Java/Spring Boot)

**On-premises:**
- Cluster **Hyper-V** com 2 nodes e **20 VMs**
- **ERP Hemato** (client-server) para gestão do banco de sangue
- Troca de arquivos txt/xml/json entre sistemas AWS e on-premises

A operação **24x7** dos laboratórios exige **zero tolerância a falhas** nos sistemas de gestão de sangue e hemoderivados.

## Solução

A **dataRain** fornece suporte gerenciado completo desde maio de 2022, cobrindo tanto o ambiente AWS quanto o on-premises:

**Administração AWS**

- Gestão de **EC2**, **RDS Aurora MySQL**, **IAM** e **CloudWatch**
- Monitoramento contínuo de CPU, memória, disco e status check
- Billing AWS no Brasil com gestão de custos

**Backup com Veeam**

- **Veeam** com **275 licenças Enterprise** + 50 licenças Standard
- Políticas de backup para cluster Hyper-V com **100% de sucesso** (30 jobs/mês)
- **Copy jobs para S3** como backup offsite — também com **100% de sucesso**
- Upgrade emergencial do Veeam para versão 12.0.3 realizado

**Desenvolvimento e manutenção**

- Manutenção evolutiva e corretiva dos sistemas **WebLIS**, **Dashboard** e **CQ**
- Stack: **Node.js**, **AngularJS**, **Java/Spring Boot**, **React**
- Gestão de chamados via **Jira** com SLA definido

**Suporte contínuo**

- Média de **43 a 46 horas/mês** (admin 20-30h + suporte 3-14h + desenvolvimento 10h)
- Administração de servidores **Windows** + **Hyper-V** on-premises
- **Relatórios mensais** detalhados (book mensal) com KPIs

## Resultados

- Ambiente híbrido gerenciado com **100% de sucesso nos backups** (30 jobs/mês + 30 copy jobs S3)
- Suporte contínuo desde **maio de 2022** — mais de **4 anos** de parceria
- Sistemas **WebLIS**, **Dashboard** e **CQ** mantidos e evoluídos continuamente
- **20 VMs** on-premises monitoradas e administradas
- **4.000 bolsas/mês** processadas sem interrupção nos sistemas
- Relatórios mensais com KPIs entregues consistentemente
- **Zero incidentes críticos** de segurança ao longo da parceria
