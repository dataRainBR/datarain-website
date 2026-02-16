---
title: "TJSP migra ambiente de homologação do e-SAJ para a AWS"
date: "2021-08-01T00:00:00"
slug: "tjsp-migra-ambiente-de-homologacao-do-e-saj-para-aws"
excerpt: "Como o Tribunal de Justiça de São Paulo, maior tribunal da América Latina, migrou 15+ servidores do sistema e-SAJ para a AWS com CloudFormation, Elasticsearch e Instance Scheduler para otimização de custos."
featuredImage: "/content-images/cases/tjsp-migra-ambiente-de-homologacao-do-e-saj-para-aws/tjsp-logo.png"
categories: [17,25]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Migração e Modernização"
setor: "Governo"
---

O **Tribunal de Justiça do Estado de São Paulo (TJSP)** é o maior tribunal da América Latina, responsável pela prestação jurisdicional para mais de 45 milhões de habitantes. Sua plataforma digital **e-SAJ** (Sistema de Automação da Justiça) é o coração das operações judiciais eletrônicas, processando milhões de petições, consultas e movimentações processuais.

## Desafio

O TJSP precisava migrar seu ambiente de **homologação (HMZ)** do e-SAJ para a nuvem AWS, garantindo que a plataforma pudesse ser testada e validada em um ambiente cloud antes de eventuais migrações de produção. O ambiente era composto por:

- **8 servidores Linux Ubuntu 20.04** para a aplicação e-SAJ (t3.xLarge, 80 GB EBS cada)
- **6 servidores Windows Server 2012** para aplicações Delphi legadas (t3.Medium, 80 GB EBS cada)
- **1 servidor Windows Server 2012** para banco de dados (t3.2xLarge, 650 GB EBS)
- **Elasticsearch** para busca e indexação de documentos judiciais (r6g.large, 200 GB)
- **Bucket S3** para armazenamento de documentos e arquivos do tribunal

O desafio incluía manter a compatibilidade com sistemas legados em Delphi, provisionar toda a infraestrutura como código e implementar mecanismos de **otimização de custos** para um ambiente de homologação que não precisa rodar 24/7.

## Solução

A **dataRain** conduziu a migração com uma abordagem de **Infrastructure as Code** e otimização de custos:

### Infraestrutura como Código
- **AWS CloudFormation** para provisionamento automatizado de toda a rede (VPC, Subnets, Internet Gateway, NAT Gateways, Route Tables)
- Template EKS VPC para preparação de modernização futura com Kubernetes
- Security Groups segmentados por função: SG-Aplicacao-eSaj, SG-Aplicacao-Delphi, SG-DataBase, SG-ElasticSearch

### Ambiente Computacional
- **15+ instâncias EC2** distribuídas em 3 grupos funcionais
- **Amazon Elasticsearch** (r6g.large) para busca full-text em documentos judiciais
- **Amazon S3** com versionamento e criptografia SSE-S3 para documentos

### Otimização de Custos
- **AWS Instance Scheduler** via CloudFormation para desligamento automático de instâncias fora do horário de trabalho
- Redução significativa de custos ao manter o ambiente de homologação ativo apenas durante o expediente

### Modernização Planejada
- Template **Amazon EKS** preparado para futura containerização das aplicações
- Arquitetura projetada para evolução gradual do legado Delphi

## Resultados

- **15+ instâncias** migradas com sucesso para a AWS
- Infraestrutura **100% como código** com CloudFormation
- **Elasticsearch** operacional para busca em documentos judiciais
- **Instance Scheduler** reduzindo custos do ambiente de homologação
- Plataforma **e-SAJ** em homologação na AWS
- Arquitetura preparada para **modernização com EKS**
- Segurança com **Security Groups** segmentados por função
