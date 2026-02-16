---
title: "Sabin moderniza infraestrutura multi-account na AWS com DevOps e Data Lake"
date: "2023-06-01T00:00:00"
slug: "sabin-moderniza-infraestrutura-multi-account-na-aws-com-devops-e-data-lake"
excerpt: "Como o Grupo Sabin estruturou uma arquitetura multi-account com 8+ contas AWS, integrando EKS com CI/CD, Data Lake com Airflow e Redshift, e compliance LGPD para sua rede de medicina diagnóstica."
featuredImage: "/content-images/cases/sabin-moderniza-infraestrutura-multi-account-na-aws-com-devops-e-data-lake/sabin-logo.png"
categories: [17,19,21]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "DevOps e Engenharia de Dados"
setor: "Saúde"
---

O **Grupo Sabin** é uma das maiores redes de medicina diagnóstica do Brasil, com presença em diversas regiões do país e um portfólio que abrange análises clínicas, diagnóstico por imagem e serviços de saúde. Com operações em escala nacional, a empresa precisava de uma infraestrutura cloud robusta, segura e multi-frente para suportar suas diversas linhas de negócio.

## Desafio

O Grupo Sabin enfrentava a complexidade de operar múltiplas frentes tecnológicas simultaneamente:

- **DevOps e e-commerce:** necessidade de containers orquestrados com CI/CD automatizado para suas plataformas digitais
- **Data Lake:** construção de um pipeline de dados completo para análise e inteligência de negócio, integrando dados on-premises com a nuvem
- **Medicina Diagnóstica:** migração de workloads críticos com integração ao Active Directory corporativo e conectividade VPN segura
- **Backup e DR:** proteção de dados multi-account e multi-região para garantir continuidade de negócio
- **Segurança e compliance:** atendimento à **LGPD** com DNSSEC para múltiplos domínios e governança centralizada

Tudo isso precisava funcionar de forma integrada em uma arquitetura **multi-account com 8+ contas AWS**, segregando ambientes de desenvolvimento, produção, data lake, backup e rede.

## Solução

A **dataRain** projetou e implementou uma arquitetura AWS abrangente em múltiplas frentes:

### DevOps e Containers
- **Amazon EKS** com **ECR** para orquestração de containers
- **AWS CodePipeline** para CI/CD automatizado do e-commerce
- Deploy contínuo com pipelines integrados ao repositório de código

### Data Lake (Sabin Data Driven)
- **Apache Airflow** em EC2 (c5.xlarge) para orquestração de pipelines de dados
- **Amazon Redshift** para data warehouse analítico
- **AWS Glue** e **Amazon Athena** para ETL e consultas ad-hoc
- **Amazon S3** como camada de armazenamento do Data Lake
- Integração com ambiente on-premises via PostgreSQL staging e **AWS CodeCommit**
- API de dados em EC2 (c5.9xlarge) com 36 vCPUs para consultas de alta performance

### Infraestrutura e Conectividade
- **AWS Organizations** com **8+ contas** segregadas por função
- **AD Connector** para integração com Active Directory corporativo
- **VPN Site-to-Site** para conectividade segura com data centers
- **Amazon Route 53** com **DNSSEC** para múltiplos domínios

### Segurança e Backup
- **AWS Backup** multi-account e multi-região
- **Amazon CloudWatch** para monitoramento 24x7
- Checklist de compliance **LGPD** implementado
- Governança centralizada com políticas de segurança

## Resultados

- Arquitetura **multi-account (8+ contas)** operacional com segregação por função
- **Data Lake em produção** com pipeline Airflow → S3 → Redshift → API
- **EKS com CI/CD** automatizado via CodePipeline para e-commerce
- Integração **AD Connector** para autenticação corporativa unificada
- **DNSSEC** configurado para proteção de domínios
- **Backup multi-account e multi-região** garantindo continuidade de negócio
- Compliance **LGPD** atendido com checklist de privacidade e segurança
- Monitoramento **24x7** com CloudWatch
- Operação em **multi-região** (sa-east-1 e us-east-1)
