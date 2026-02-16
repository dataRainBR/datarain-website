---
title: "ENE Medical implementa backup imutável com Veeam e Saving Plans na AWS"
date: "2023-07-01T00:00:00"
slug: "ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws"
excerpt: "Como a ENE Medical, spin-off da SPI especializada em dispositivos médico-hospitalares, implementou Veeam Backup for AWS com repositório S3 imutável via CloudFormation e otimizou custos com Saving Plans."
featuredImage: "/content-images/cases/ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws/ene-logo.png"
categories: [17,26]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Backup e FinOps"
setor: "Saúde"
---

A **ENE Medical** é uma spin-off da SP Intervention (SPI), especializada na comercialização de produtos médico-hospitalares de alta tecnologia. Ao se tornar uma entidade independente em 2023, a empresa precisava de sua própria infraestrutura AWS com proteção robusta de dados e otimização de custos desde o início.

## Desafio

Como empresa do setor de saúde lidando com dados sensíveis de dispositivos médicos, a ENE Medical enfrentava requisitos específicos:

- **Backup com granularidade** para dados críticos — registros de dispositivos, documentação regulatória e dados operacionais
- **Proteção contra ransomware** — ameaça crescente no setor de saúde que exige repositório imutável
- Infraestrutura AWS **completa** para operação independente da empresa-mãe SPI
- **Otimização de custos** desde o primeiro dia — migração de modelo On-Demand para compromissos de longo prazo
- Deploy automatizado e reproduzível via **Infrastructure as Code**

## Solução

A **dataRain** implementou infraestrutura completa com foco em proteção de dados e eficiência financeira:

### Backup Imutável com Veeam
- **Veeam Backup for AWS** implantado via **AWS CloudFormation** para deploy automatizado e reproduzível
- Bucket **Amazon S3 com Object Lock** (modo WORM — Write Once, Read Many) para imutabilidade
- Mapeamento completo de todos os recursos AWS para configuração dos jobs de backup
- Políticas de **retenção** configuradas conforme requisitos regulatórios do setor de saúde
- Proteção contra exclusão acidental ou maliciosa dos backups

### Infraestrutura AWS
- **Amazon EC2** para servidores de aplicação dimensionados ao workload
- **Amazon RDS** para banco de dados relacional gerenciado com backups automáticos
- **VPC** com subnets privadas, Security Groups restritivos e isolamento de rede
- **IAM** com políticas de **menor privilégio** e separação de responsabilidades

### Otimização Financeira (FinOps)
- Análise de workloads para identificar padrões de uso previsíveis
- Migração de modelo **On-Demand** para **Saving Plans de 1 ano**
- Redução significativa nos custos mensais com compromisso de uso

## Resultados

- **Veeam Backup for AWS** implantado e operacional via CloudFormation
- Repositório **S3 imutável** com Object Lock protegendo contra ransomware
- Infraestrutura AWS completa (**EC2 + RDS + VPC**) operacional
- Modelo comercial migrado para **Saving Plans 1 ano** com economia recorrente
- ENE Medical operando de forma **independente** na AWS com proteção de dados robusta
