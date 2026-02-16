---
title: "Trisul consolida infraestrutura multi-cloud na AWS"
date: "2023-03-01T00:00:00"
slug: "trisul-consolida-infraestrutura-multi-cloud-na-aws"
excerpt: "Como a Trisul, construtora com capital aberto na B3 e mais de 350 edifícios entregues, consolidou seus ambientes Azure, Oracle e on-premises na AWS com migração lift-and-shift e suporte gerenciado."
featuredImage: "/content-images/cases/trisul-consolida-infraestrutura-multi-cloud-na-aws/trisul-logo.png"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Migração Cloud"
setor: "Indústria"
---

A **Trisul** é uma das principais construtoras e incorporadoras do Brasil, com mais de **40 anos de experiência**, **350+ edifícios entregues**, **60 mil unidades** comercializadas e **731 funcionários**. Listada na **B3** (bolsa de valores brasileira), a empresa é referência no mercado imobiliário paulista com foco em empreendimentos residenciais de médio e alto padrão.

## Desafio

A Trisul operava sua infraestrutura de TI fragmentada em **três ambientes distintos**:

- **Microsoft Azure** — servidores Windows com prioridade de cancelamento
- **Oracle Cloud** — workloads legados
- **On-premises** — servidores locais com firewall dedicado

Essa fragmentação gerava complexidade operacional, custos elevados com múltiplos provedores e dificuldade de gestão unificada. A equipe técnica da Trisul não possuía experiência com serviços AWS, mas demonstrava disposição para aprender e se adaptar rapidamente.

O projeto priorizava a migração do ambiente Azure (com cancelamento urgente do contrato) seguida pela consolidação dos demais ambientes.

## Solução

A **dataRain** conduziu a migração com estratégia **lift-and-shift** em fases:

### Fase 1 — Migração e Consolidação
- Migração de **servidores Windows** do Azure, Oracle e on-premises para **Amazon EC2**
- Provisionamento de infraestrutura AWS completa: VPC, subnets, Security Groups
- **VPN Site-to-Site** para conectividade com escritórios e ambientes remanescentes
- Ambientes segregados: produção (ERP), homologação, legados e rede

### Infraestrutura e Operações
- **Amazon S3** para armazenamento de dados e backups
- **Amazon CloudWatch** para monitoramento de instâncias e métricas
- Documentação técnica completa da infraestrutura AWS
- **Suporte gerenciado** de 7,5h/mês (N1, N2 e N3)

### Fase 2 — Modernização (planejada)
- Automação do ambiente com Infrastructure as Code
- Otimização de workloads Windows
- Capacitação da equipe técnica Trisul em serviços AWS

## Resultados

- **Consolidação multi-cloud → AWS** concluída com sucesso
- Infraestrutura **Windows migrada** de 3 provedores para ambiente unificado
- **VPN S2S** configurada para conectividade segura
- **Suporte gerenciado** ativo com 7,5h/mês
- Documentação técnica completa entregue com 5 versões de diagramas de arquitetura
- Empresa de **capital aberto na B3** operando 100% na AWS
