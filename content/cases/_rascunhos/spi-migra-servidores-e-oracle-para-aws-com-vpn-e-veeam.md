---
title: "SPI migra servidores e Oracle para AWS com VPN e Veeam"
date: "2022-05-01T00:00:00"
slug: "spi-migra-servidores-e-oracle-para-aws-com-vpn-e-veeam"
excerpt: "Como a SP Intervention migrou 4 servidores on-premises para a AWS com VPN IPsec, backup Veeam e migração Oracle 11g para 19g no RDS, atendendo múltiplas empresas do grupo."
featuredImage: "/content-images/cases/spi-migra-servidores-e-oracle-para-aws-com-vpn-e-veeam/spi-logo.png"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Migração Cloud"
setor: "Tecnologia"
---

A **SP Intervention** (SPI) é uma empresa de serviços que opera sistemas ERP para múltiplas empresas do grupo, incluindo EndoLog, CT International, ASP e ENE Medical. Com servidores on-premises envelhecendo e a necessidade de modernizar o banco de dados Oracle, a SPI buscou migrar para a nuvem AWS.

## Desafio

A SPI operava **4 servidores on-premises** que hospedavam serviços críticos para múltiplas empresas do grupo. Os principais desafios incluíam:

- Migração de **4 servidores** com sistemas operacionais atualizados para a AWS
- Criação de **túnel VPN IPsec** para comunicação segura entre ambiente on-premises e AWS
- Implementação de **backup** confiável com software Veeam
- Migração do banco de dados **Oracle 11g para Oracle 19g** no Amazon RDS
- Atendimento a múltiplas empresas do grupo com ambientes compartilhados
- Necessidade de **CloudFront + WAF** para entrega de conteúdo e segurança web

## Solução

A **dataRain** conduziu o projeto em etapas coordenadas com a equipe SPI:

### Migração de Infraestrutura
- Provisionamento de **VPC, subnets e infraestrutura AWS** completa
- **4 servidores EC2** provisionados com sistemas operacionais atualizados
- Configuração de **VPN IPsec Site-to-Site** para conectividade segura
- Validação de acesso ao ambiente em conjunto com equipe SPI

### Migração de Banco de Dados
- Migração do **Oracle 11g para Oracle 19g** no **Amazon RDS**
- Atendimento ao sistema VM System (ERP) utilizado por múltiplas empresas
- Testes de validação e performance pós-migração

### Segurança e Entrega
- **Amazon CloudFront** para CDN e entrega de conteúdo
- **AWS WAF** para proteção contra ataques web
- **Veeam Backup** configurado para proteção de dados

### Gestão do Projeto
- Cronograma estruturado com etapas e responsáveis definidos
- Execução coordenada entre dataRain (infraestrutura) e equipe SPI (configuração de aplicações)
- Documentação de rede e diagramas de arquitetura entregues

## Resultados

- **4 servidores** migrados com sucesso para a AWS
- **Oracle 11g → 19g** migrado para Amazon RDS
- **VPN IPsec** configurada para conectividade segura
- **Veeam Backup** operacional para proteção de dados
- **CloudFront + WAF** ativos para segurança e performance
- Múltiplas empresas do grupo atendidas na mesma infraestrutura
