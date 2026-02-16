---
title: "PRODESP/SES-SP implementa telemedicina na AWS com Elastic Beanstalk e WAF"
date: "2023-06-01T00:00:00"
slug: "prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf"
excerpt: "Como a Secretaria de Estado da Saúde de SP implementou o sistema de telemedicina L2D na AWS com Elastic Beanstalk, ALB multi-AZ, ElastiCache e WAF para atender a rede pública de saúde."
featuredImage: "/content-images/cases/prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf/ses-sp-logo.png"
categories: [17,26]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Infraestrutura e Segurança"
setor: "Saúde"
---

A **Secretaria de Estado da Saúde de São Paulo (SES-SP)** é responsável pela gestão do sistema público de saúde do estado mais populoso do Brasil, com mais de 45 milhões de habitantes. O sistema de **telemedicina L2D** foi desenvolvido para ampliar o acesso da população a consultas médicas remotas, especialmente em regiões com carência de especialistas.

## Desafio

A telemedicina pública exige infraestrutura que combine escalabilidade, segurança e alta disponibilidade:

- **Picos de demanda imprevisíveis** — consultas de telemedicina podem ter picos durante campanhas de saúde ou surtos epidêmicos
- **Alta disponibilidade** obrigatória — sistema crítico de saúde pública não pode ter downtime
- **Proteção contra ataques web** — sistemas de saúde são alvos frequentes de ataques cibernéticos
- **Certificados SSL/TLS** para criptografia de dados médicos em trânsito
- Ambiente dentro do contrato guarda-chuva **PRODESP** com governança multi-account

## Solução

A **dataRain** implementou uma arquitetura completa para o sistema de telemedicina na AWS:

### Camada de Aplicação
- **AWS Elastic Beanstalk** com stack IIS/.NET para a aplicação web de telemedicina
- **Application Load Balancer (ALB)** distribuindo tráfego entre **múltiplas zonas de disponibilidade** (multi-AZ)
- **Auto-scaling** configurado de 1 a 3 instâncias, escalando automaticamente conforme a demanda de consultas

### Camada de Dados e Performance
- **Amazon RDS** para banco de dados relacional gerenciado com failover automático
- **Amazon ElastiCache** (Memcached) para cache de sessões — reduzindo latência e melhorando a experiência do usuário durante consultas
- **Amazon S3** para armazenamento seguro de documentos e imagens médicas

### Segurança
- **AWS WAF** (Web Application Firewall) com regras customizadas para proteção contra SQL injection, XSS e outros ataques web
- **AWS Certificate Manager (ACM)** para provisão e renovação automática de certificados SSL/TLS
- **VPC** com subnets privadas para isolamento da aplicação e banco de dados
- **Security Groups** restritivos com princípio do menor privilégio

## Resultados

- Sistema de **telemedicina L2D** operacional na AWS para a rede pública de saúde de SP
- **Alta disponibilidade** garantida com ALB multi-AZ e failover automático
- **Auto-scaling** de 1 a 3 instâncias respondendo a demanda em tempo real
- **Proteção WAF** ativa contra ataques web
- **Documentação técnica V3** entregue com arquitetura e procedimentos operacionais
