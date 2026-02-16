---
title: "CEMIG constrói Data Lake na AWS para transformar atendimento ao cliente"
date: "2022-09-01T00:00:00"
slug: "cemig-constroi-data-lake-na-aws-para-transformar-atendimento-ao-cliente"
excerpt: "Como a CEMIG construiu um Data Lake em 8 camadas na AWS com apoio da dataRain, integrando 76 milhões de registros SAP para alimentar canais digitais de atendimento com tempo de resposta de 0,03s."
featuredImage: "/content-images/cases/cemig-constroi-data-lake-na-aws-para-transformar-atendimento-ao-cliente/cemig-logo.png"
categories: [17,21]
tags: []
author: 4
pilar: "GenAI e Dados"
oferta: "Arquitetura e Engenharia de Dados"
setor: "Energia e Agro"
---

A **CEMIG** (Companhia Energética de Minas Gerais) é uma das maiores empresas de energia do Brasil, responsável pela geração, transmissão e distribuição de energia elétrica para milhões de consumidores em Minas Gerais. Com décadas de operação, a companhia acumula volumes massivos de dados em seus sistemas legados, essenciais para o atendimento ao cliente e a gestão operacional.

## Desafio

A CEMIG precisava modernizar a forma como seus dados eram acessados pelos canais digitais de atendimento ao cliente. Os sistemas legados **SAP CCS** (Customer Care & Service) concentravam informações críticas distribuídas em múltiplas tabelas com volumes expressivos:

- **Parceiro de negócios:** mais de **76 milhões** de registros
- **Endereços:** mais de **38 milhões** de registros
- **Instalações:** mais de **12 milhões** de registros
- **Medidores:** mais de **13 milhões** de registros
- Além de dados de débitos, faturamento, tarifa social, geração distribuída e muito mais

O desafio envolvia construir um **Data Lake moderno** capaz de ingerir esses dados massivos, integrá-los ao barramento SOA existente com mais de **20 operações de consulta**, implementar **CDC** (Change Data Capture) para replicação contínua e expor **APIs REST** para os canais digitais — tudo com **SLA 24/7** e tempo de resposta de **0,03s em 85% das chamadas**.

## Solução

A **dataRain** projetou e implementou um Data Lake completo na AWS com arquitetura em **8 camadas**, utilizando **CDK** (Infrastructure as Code):

- **Armazenamento:** **Amazon S3** com zonas crua, processada e consumo em formato parquet
- **Ingestão:** ETL com **AWS Glue** (jobs Python, workers G.2X, 20 workers paralelos) para transformação SAP → JSON → **DynamoDB**
- **Processamento:** **Glue Jobs** com triggers schedulados e crawlers automatizados
- **Consumo:** APIs via **API Gateway** + **AWS Lambda** para consultas de parceiro de negócios, instalações, débitos e medidores
- **CDC:** Replicação contínua via **SAP SLT** + Data Intelligence + Cloud Connector
- **Barramento:** Mais de **20 especificações de dados** documentadas e implementadas
- **Orquestração:** Pipelines coordenados com controle de dependências
- **Catálogo de Dados:** Metadados centralizados para governança


O modelo de dados canônico mapeou as principais tabelas SAP (BUT000, EANL, EVER, FKKVKP, EASTL, EGERH, entre outras), criando uma camada de abstração que desacopla os canais digitais da complexidade do ERP.

## Validação e testes

O piloto foi realizado com a entidade **Parceiro de Negócios**, incluindo:

- **Testes unitários e de regressão** para validação funcional
- **Testes de stress:** 10.000 acessos em 2 minutos (100 threads × 100 chamadas)
- Execução em **us-east-1** e **sa-east-1** para medir latência entre regiões
- Validação do SLA de **0,03s** em 85% das chamadas

## Gestão do projeto

O projeto seguiu uma metodologia estruturada com **Kick-Off**, sprints de desenvolvimento, **LOG_RAID semanal**, **Comitê Executivo mensal**, Comitê de Crise e plano de comunicação formal — garantindo visibilidade e controle em todas as etapas.

## Resultados

- Arquitetura **Data Lake completa em 8 camadas** documentadas e em produção
- Mais de **20 operações de consulta** especificadas e implementadas via barramento
- Piloto validado com **testes de stress** (10k acessos em 2 minutos)
- **SLA 24/7** com tempo de resposta de **0,03s** em 85% das chamadas
- Ingestão de dados massivos SAP com **76M+ registros** de parceiro de negócios
- **CDC contínuo** via SAP SLT para manter dados sempre atualizados
- **Modelo de dados canônico** documentado, desacoplando canais digitais do SAP
- Relatório final de Dados e Integração entregue
