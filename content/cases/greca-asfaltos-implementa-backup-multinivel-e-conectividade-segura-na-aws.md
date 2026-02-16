---
title: "Greca Asfaltos implementa backup multinível e conectividade segura na AWS"
date: "2023-03-01T00:00:00"
slug: "greca-asfaltos-implementa-backup-multinivel-e-conectividade-segura-na-aws"
excerpt: "Como a Greca Asfaltos implementou uma arquitetura de backup multinível na AWS com Veeam V12, VPN Site-to-Site, AD Connector e FSx for Windows, integrando nuvem e on-premises com segurança."
featuredImage: "/content-images/cases/greca-asfaltos-implementa-backup-multinivel-e-conectividade-segura-na-aws/greca-logo.png"
categories: [17,20]
tags: []
author: 4
pilar: "Cybersecurity"
oferta: "Migração e Disaster Recovery"
setor: "Indústria"
---

A **Greca Asfaltos** é uma empresa brasileira de referência no setor de infraestrutura rodoviária, atuando na produção e comercialização de asfaltos e soluções para pavimentação. Com operações que dependem de dados críticos de engenharia e gestão, a empresa buscou a dataRain para implementar uma infraestrutura de backup robusta e conectividade segura entre seus ambientes on-premises e a nuvem AWS.

## Desafio

A Greca Asfaltos precisava de uma solução completa que integrasse backup, conectividade e armazenamento compartilhado:

- **Backup com Veeam V12** integrado nativamente ao S3, com migração da versão V11
- **Armazenamento em múltiplas camadas** S3 para otimização de custos (Standard → Glacier)
- **VPN Site-to-Site** com criptografia forte para conectar on-premises à AWS
- **Integração com Active Directory** on-premises para autenticação unificada
- **File server compartilhado** na nuvem com protocolo SMB para equipes

## Solução

A **dataRain** projetou e implementou uma arquitetura completa cobrindo backup, rede e armazenamento:

**Backup multinível com Veeam V12**

- Migração do **Veeam V11 para V12** com suporte nativo a S3
- **Amazon S3** com lifecycle policies em múltiplas camadas: **Standard** → **Intelligent-Tiering** → **Standard-IA** → **One Zone-IA** → **Glacier Instant** → **Glacier Flexible** → **Glacier Deep Archive**
- **Object Lock** com **MFA Delete** para imutabilidade dos backups
- Otimização automática de custos conforme a idade dos dados

**Conectividade segura**

- **VPN Site-to-Site** com **2 túneis em alta disponibilidade**
- Criptografia **AES256-GCM-16** para proteção do tráfego
- Failover automático entre túneis para resiliência

**Integração e armazenamento**

- **AD Connector** para integração com Active Directory on-premises, permitindo autenticação unificada
- **FSx for Windows File Server** com deduplicação, compressão e protocolo **SMB**
- Autenticação via AD para acesso ao file server na nuvem
- **CloudTrail** para auditoria completa de acessos

## Resultados

- Arquitetura de **backup multinível** projetada e implementada com Veeam V12
- **7 camadas de armazenamento** S3 com lifecycle automático para otimização de custos
- **VPN Site-to-Site** com alta disponibilidade (2 túneis) e criptografia AES256
- **AD Connector** integrando autenticação on-premises com AWS
- **FSx for Windows** como file server compartilhado na nuvem com SMB
- **Imutabilidade** garantida com Object Lock e MFA Delete
- Infraestrutura híbrida segura conectando Greca Asfaltos à nuvem AWS
