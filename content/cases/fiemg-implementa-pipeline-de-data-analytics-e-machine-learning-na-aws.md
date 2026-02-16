---
title: "FIEMG implementa pipeline de Data Analytics e Machine Learning na AWS"
date: "2024-06-01T00:00:00"
slug: "fiemg-implementa-pipeline-de-data-analytics-e-machine-learning-na-aws"
excerpt: "Como a FIEMG construiu um pipeline completo de Data Analytics na AWS com apoio da dataRain, incluindo Data Lake em 4 camadas, modelos de ML com SageMaker e visualização em Power BI."
featuredImage: "/content-images/cases/fiemg-implementa-pipeline-de-data-analytics-e-machine-learning-na-aws/fiemg-logo.png"
categories: [17,18,21]
tags: []
author: 4
pilar: "GenAI e Dados"
oferta: "Arquitetura e Engenharia de Dados"
setor: "Indústria"
---

A **FIEMG** (Federação das Indústrias do Estado de Minas Gerais) é uma das maiores federações industriais do Brasil, representando e apoiando o desenvolvimento do setor industrial mineiro. Com o objetivo de gerar inteligência a partir de dados para apoiar decisões estratégicas, a FIEMG buscou a dataRain para construir um pipeline completo de Data Analytics e Machine Learning na AWS.

## Desafio

A FIEMG precisava transformar dados brutos de seus sistemas em insights acionáveis para a indústria mineira. O projeto envolvia desafios em múltiplas frentes:

- **Ingestão de dados** de SQL Server on-premises para a nuvem, com conectividade segura
- Construção de um **Data Lake em camadas** com validação automatizada de qualidade
- **Processamento ETL** complexo com orquestração de múltiplos jobs
- **Machine Learning** para predição e clusterização de dados industriais
- **Mineração de dados** com extração de variáveis latentes via Dynamic Factor Analysis
- **Visualização** em Power BI integrada à infraestrutura AWS
- **Capacitação de equipes** em 5 áreas técnicas distintas

## Solução

A **dataRain** projetou e implementou um pipeline completo de ponta a ponta:

**Ingestão e Data Lake**

- **Airbyte** em **EC2** (rede privada com VPN) conectando SQL Server on-premises ao **Amazon S3**
- Data Lake em **4 camadas**: Transição, Crua, Tratada e Processada
- **AWS Glue Data Quality** para validação automatizada dos dados em cada camada

**Processamento e Orquestração**

- ETL com **AWS Glue** + **Step Functions** orquestrando procedures no **Amazon Redshift**
- **EventBridge** para agendamento e disparo de pipelines
- **Glue Crawlers** para catalogação automática dos dados

**Machine Learning e Mineração**

- **Amazon SageMaker** com notebooks, **Feature Store** e **Batch Transform**
- Análise exploratória com testes de estacionariedade (**ADF**), compatibilidade com análise de fatores (**KMO**, **Bartlett**) e normalidade (**Shapiro-Wilk**)
- **Dynamic Factor Analysis (DFA)** para extração de variáveis latentes
- **PCA**, clusterização e modelos de predição


**Visualização e Consumo**

- Pipeline de ETL alimentando **Power BI** via **Amazon Athena** + Data Gateway
- Dashboards interativos para tomada de decisão

**Infraestrutura e Segurança**

- **VPN Site-to-Site** com **Transit Gateway** para conectividade segura com on-premises
- **Landing Zone** configurada seguindo melhores práticas AWS
- Pipeline **CI/CD** com Azure DevOps → **ECR** → **ECS** (Docker, task definitions)

## Capacitação

A dataRain conduziu um programa de capacitação com certificação em **5 áreas**:

- **Arquitetura** de soluções em nuvem
- **Ciência de Dados** com SageMaker
- **Engenharia de Dados** com Glue e Redshift
- **Mineração de Dados** e análise estatística
- **Clusterização** e modelos preditivos

## Resultados

- Pipeline de **Data Analytics completo** em produção na AWS
- **Data Lake em 4 camadas** com Data Quality automatizado
- Modelos de **ML para predição e clusterização** implementados e validados
- **Mineração de dados com DFA** para extração de variáveis latentes
- Pipeline **CI/CD** Azure DevOps → AWS (ECR/ECS) operacional
- Equipes **capacitadas em 5 áreas** com certificação
- Documentação técnica completa com mais de **26 páginas**
