---
title: "PRODESP/SEDUC — Centro de Mídias SP: streaming educacional na AWS"
date: "2023-06-01T00:00:00"
slug: "prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws"
excerpt: "Como a SEDUC-SP implementou o Centro de Mídias de São Paulo na AWS com 50 EC2 para streaming educacional, integração Datami 4G e Transit Gateway multi-account."
featuredImage: "/content-images/cases/prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws/cmsp-logo.png"
categories: [17,25]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Streaming e Infraestrutura"
setor: "Educação"
---

A **Secretaria da Educação do Estado de São Paulo (SEDUC-SP)** opera o **Centro de Mídias de São Paulo (CMSP)**, uma das maiores plataformas de streaming educacional do Brasil. Criado para democratizar o acesso à educação de qualidade, o CMSP transmite aulas ao vivo para milhões de alunos da rede estadual de ensino — desde escolas na capital até comunidades rurais do interior paulista. A plataforma ganhou protagonismo durante a pandemia e se consolidou como ferramenta permanente de ensino híbrido.

## Desafio

Operar streaming de vídeo ao vivo para uma rede educacional com milhões de alunos simultâneos impõe exigências severas de infraestrutura:

- Suportar **aulas ao vivo** para milhões de alunos da rede estadual, com picos de audiência no início das aulas matutinas e vespertinas
- Integração com **Datami** para fornecer acesso 4G gratuito aos alunos — garantindo que estudantes sem Wi-Fi doméstico pudessem assistir às aulas pelo celular sem consumir seu plano de dados
- **Alta disponibilidade e escalabilidade** para picos de demanda — uma queda durante o horário de aula afeta centenas de milhares de estudantes simultaneamente
- Ambiente dentro do contrato guarda-chuva **PRODESP** com Organizations multi-account, exigindo governança e conectividade entre contas
- Conectividade segura via **Direct Connect** (2 links Equinix) e **Transit Gateway** para integração com o datacenter PRODESP
- **Custos operacionais** precisavam ser controlados — servidores de encoding de vídeo são caros e não precisam rodar 24/7

## Solução

A **dataRain** implementou uma arquitetura completa de streaming educacional na AWS, dimensionada para a escala da rede estadual paulista:

### Processamento de Vídeo
- **27x EC2 c5.4xlarge** + **23x EC2 c5.large** (~50 instâncias) em VPC dedicada
- Instâncias da família C5 (compute-optimized) escolhidas especificamente para encoding de vídeo em tempo real
- Capacidade de processamento dimensionada para suportar múltiplas transmissões simultâneas durante o horário escolar

### Conectividade e Acesso
- Integração **Datami** para acesso 4G gratuito aos alunos — o tráfego do CMSP é zero-rated nas operadoras parceiras, permitindo que alunos assistam aulas sem consumir dados móveis
- **Transit Gateway** para conectividade multi-account PRODESP, interligando a conta do CMSP com as demais contas do ecossistema PRODESP
- **NAT Gateway** para acesso seguro à internet
- **Route 53 Resolver** multi-account para resolução DNS entre contas

### Otimização de Custos
- **AWS Lambda** para automação de liga/desliga de servidores fora do horário de aulas — as 50 instâncias de encoding não precisam rodar à noite nem nos finais de semana
- Redução significativa de custos com instâncias desligadas nos períodos ociosos
- Scheduling alinhado ao calendário escolar para máxima economia

### Segurança e Governança
- **Amazon GuardDuty** para detecção contínua de ameaças
- **S3** para armazenamento de conteúdo educacional gravado
- Infraestrutura dentro do modelo **Organizations** PRODESP com **Direct Connect** via Equinix (2 links redundantes)
- Isolamento de rede com VPC dedicada e security groups restritivos

## Resultados

- Plataforma de **streaming educacional** operacional atendendo milhões de alunos da rede estadual de SP
- **~50 EC2 compute-optimized** dedicados para processamento de vídeo ao vivo
- Integração **4G Datami** garantindo acesso gratuito dos alunos via celular
- **Automação de custos** com Lambda para liga/desliga alinhado ao calendário escolar
- Conectividade segura via **Transit Gateway + Direct Connect** com datacenter PRODESP
