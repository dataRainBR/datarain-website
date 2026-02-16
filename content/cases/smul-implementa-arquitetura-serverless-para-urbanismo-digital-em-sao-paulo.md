---
title: "SMUL implementa arquitetura serverless para urbanismo digital em São Paulo"
date: "2021-09-01T00:00:00"
slug: "smul-implementa-arquitetura-serverless-para-urbanismo-digital-em-sao-paulo"
excerpt: "Como a Secretaria Municipal de Urbanismo e Licenciamento de São Paulo modernizou o sistema Aprova Digital com arquitetura serverless na AWS, integrando API Gateway, Lambda, SQS/SNS e MongoDB para processar licenciamentos urbanos."
featuredImage: "/content-images/cases/smul-implementa-arquitetura-serverless-para-urbanismo-digital-em-sao-paulo/smul-logo.png"
categories: [17,25]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Arquitetura Cloud"
setor: "Governo"
---

A **Secretaria Municipal de Urbanismo e Licenciamento (SMUL)** da Prefeitura de São Paulo é responsável pelo planejamento urbano e licenciamento de obras e atividades na maior cidade da América Latina. O sistema **Aprova Digital** é a plataforma que digitaliza e automatiza os processos de licenciamento urbano, integrando-se com sistemas como o SEI (Sistema Eletrônico de Informações) e bases de dados geoespaciais.

## Desafio

A SMUL precisava migrar o sistema Aprova Digital de um ambiente on-premises para a nuvem AWS, mantendo a integração com múltiplos sistemas municipais:

- **5 APIs middleware** em Python: SEI-SP, Taxas-SP, Integrações-SP, BDT-SP (dados geoespaciais) e API Aprova Digital
- **MongoDB** como banco de dados principal com necessidade de réplica e backup
- **Docker** para containerização das aplicações
- Integração com sistemas legados da prefeitura via middlewares dedicados
- Necessidade de **alta disponibilidade** para um serviço público essencial

O desafio era criar uma arquitetura que combinasse componentes serverless para novos microserviços com containers Docker para as aplicações existentes, tudo com segurança e CDN para entrega de conteúdo.

## Solução

A **dataRain** projetou uma arquitetura híbrida combinando serverless e containers:

### Camada Serverless
- **Amazon API Gateway** + **AWS Lambda** para novos microserviços
- **Amazon SQS** e **Amazon SNS** para mensageria assíncrona e desacoplamento
- Processamento event-driven para integrações com sistemas municipais

### Camada de Aplicação
- **Amazon EC2** com Docker para as 5 APIs middleware Python
- MongoDB em EC2 com **réplica configurada** e backup automatizado para S3
- **Monit** para supervisão e restart automático dos processos middleware
- Scripts de userdata para provisionamento automatizado de instâncias

### Entrega e Segurança
- **Amazon CloudFront** como CDN para entrega de conteúdo estático
- **AWS WAF** para proteção contra ataques web
- **Amazon Route 53** para DNS gerenciado
- **AWS CloudFormation** para Infrastructure as Code

### Backup e Operações
- **AWS Backup** para proteção de dados
- Scripts automatizados de backup do MongoDB para **Amazon S3**
- Procedimentos de restore documentados e testados

## Resultados

- Arquitetura **serverless** em produção com API Gateway + Lambda + SQS/SNS
- **5 APIs middleware** operacionais para integração com sistemas municipais
- **MongoDB** com réplica e backup automatizado
- **CDN com CloudFront** + proteção **WAF** ativa
- Infrastructure as Code com **CloudFormation**
- Sistema **Aprova Digital** operacional na AWS para licenciamento urbano de São Paulo
