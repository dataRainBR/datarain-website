---
title: "Symbiomics executa pipeline de genômica na AWS"
date: "2023-01-01T00:00:00"
slug: "symbiomics-executa-pipeline-de-genomica-na-aws"
excerpt: "Como a Symbiomics implementou um pipeline de análise genômica na AWS com instâncias EC2 otimizadas para workloads de bioinformática e acesso seguro via OpenVPN."
featuredImage: "/content-images/cases/symbiomics-executa-pipeline-de-genomica-na-aws/symbiomics-logo.png"
categories: [17,18]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Arquitetura Cloud para Ciência"
setor: "Saúde"
---

A **Symbiomics** é uma empresa de biotecnologia especializada em análise genômica e metagenômica, atuando na fronteira entre bioinformática e ciência de dados. Seus pipelines de análise processam grandes volumes de dados de sequenciamento genético — desde genomas completos até amostras ambientais de microbiomas — exigindo infraestrutura computacional de alta performance com capacidade de escalar sob demanda. Até então, a empresa operava com recursos computacionais limitados que restringiam a escala e a velocidade das análises.

## Desafio

A análise genômica é uma das cargas de trabalho mais intensivas em computação na ciência moderna. Cada corrida de sequenciamento pode gerar centenas de gigabytes de dados brutos que precisam passar por múltiplas etapas de processamento — alinhamento, montagem, anotação e análise estatística. A Symbiomics enfrentava:

- **Pipelines de bioinformática** que exigem alto poder computacional (CPU e memória) por períodos prolongados, com etapas que podem levar horas ou dias
- Necessidade de **instâncias otimizadas** para workloads de genômica — tipos de instância com alta relação memória/CPU para etapas de montagem de genomas
- **Acesso seguro** ao ambiente de processamento para pesquisadores distribuídos em diferentes localidades
- **Custos variáveis** — os pipelines rodam em rajadas intensas durante projetos de pesquisa, seguidas de períodos de baixa utilização
- Necessidade de dimensionamento correto para equilibrar performance e custo, evitando tanto o subdimensionamento (que atrasa análises) quanto o superdimensionamento (que desperdiça orçamento de pesquisa)
- **Armazenamento escalável** para datasets genômicos que crescem continuamente a cada novo projeto

## Solução

A **dataRain** projetou a infraestrutura AWS sob medida para workloads de genômica da Symbiomics:

### Computação Otimizada para Genômica
- **Amazon EC2** com instâncias da família R (memory-optimized) dimensionadas para pipelines de bioinformática — etapas como montagem de genomas exigem dezenas de GB de RAM
- Análise de pricing comparando On-Demand, Reserved e Spot Instances para otimização de custos em workloads de rajada
- Capacidade de escalar verticalmente conforme a complexidade da análise — genomas maiores ou metagenomas ambientais exigem mais recursos

### Acesso e Segurança
- **OpenVPN** para acesso seguro dos pesquisadores ao ambiente de processamento, permitindo que cientistas trabalhem remotamente com a mesma segurança de uma rede local
- Controle de acesso com chaves dedicadas por pesquisador
- Isolamento de rede com VPC e subnets privadas para proteção dos dados genômicos — dados de sequenciamento podem conter informações sensíveis

### Arquitetura do Pipeline
- Pipeline de análise genômica executado em EC2 com ferramentas de bioinformática (alinhadores, montadores, anotadores)
- **Amazon S3** para armazenamento de dados genômicos brutos e resultados processados, com lifecycle policies para mover dados antigos para classes de armazenamento mais econômicas
- Apresentação de arquitetura e modelo de pipeline documentados para a equipe científica
- Estrutura preparada para escalar com novos projetos de pesquisa

## Resultados

- **Pipeline de genômica** operacional na AWS, acelerando o tempo de análise em comparação com a infraestrutura anterior
- Infraestrutura **dimensionada e precificada** para workloads de bioinformática com otimização de custos
- **Acesso seguro** via OpenVPN para pesquisadores distribuídos
- Modelo de arquitetura documentado e replicável para novos projetos de pesquisa
- Capacidade de processar **datasets maiores** que antes eram inviáveis com a infraestrutura local
