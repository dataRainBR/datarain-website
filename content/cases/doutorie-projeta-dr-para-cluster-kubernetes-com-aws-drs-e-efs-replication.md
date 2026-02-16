---
title: "DoutorIE projeta DR para cluster Kubernetes com AWS DRS e EFS Replication"
date: "2025-11-01T00:00:00"
slug: "doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication"
excerpt: "Como a DoutorIE projetou um plano completo de Disaster Recovery para seu cluster Kubernetes com 34 workers e 225 pods, usando AWS DRS, EFS Replication, Velero e Terraform."
featuredImage: "/content-images/cases/doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication/doutorie-logo.png"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Disaster Recovery"
setor: "Tecnologia"
---

A **DoutorIE** é uma empresa de tecnologia que opera um ambiente Kubernetes de produção complexo e de missão crítica. Com um cluster gerenciado pelo **Rancher Server**, **34 worker nodes** e **225 pods** em execução, a empresa depende dessa infraestrutura para entregar seus serviços. A ausência de um plano de Disaster Recovery representava um risco significativo para a continuidade do negócio.

## Desafio

O ambiente Kubernetes da DoutorIE apresentava riscos críticos de continuidade:

- **Rancher Server** como ponto central de gestão — se o Rancher cair, a capacidade de gerenciar o cluster inteiro é comprometida
- **34 worker nodes** executando **225 pods** em produção — qualquer interrupção afeta múltiplos serviços simultaneamente
- **Amazon EFS** como storage persistente para dados críticos das aplicações
- Necessidade de **RPO mínimo** (Recovery Point Objective) — perda de dados deve ser medida em minutos, não horas
- Proteção necessária tanto para a camada de **computação** (servidores e containers) quanto de **dados** (volumes persistentes e configurações)
- Configurações Kubernetes (YAMLs, CRDs, Secrets) precisavam de backup independente da infraestrutura

## Solução

A **dataRain** projetou um plano de DR completo com múltiplas camadas de proteção, cada uma otimizada para o componente que protege:

### Rancher Server — RTO menor que 20 minutos
- **AWS DRS** (Elastic Disaster Recovery) para replicação contínua block-level do Rancher Server
- RPO de **segundos** com replicação em tempo real para a região de DR
- Failover automatizado com launch templates pré-configurados
- Rancher Server é o componente mais crítico — sem ele, não há gestão do cluster

### Dados Persistentes — RPO de 15 minutos
- **EFS Replication** nativa da AWS para replicação cross-region dos volumes persistentes
- RPO de aproximadamente **15 minutos** com replicação assíncrona
- Dados de aplicações protegidos sem impacto na performance de produção

### Workers e Pods — Recriação via IaC
- Workers recriados via **Terraform** e **Auto Scaling Groups** na região de DR
- Infraestrutura como código garante recriação rápida e idêntica ao ambiente de produção
- Pods redeployados automaticamente pelo Rancher após restauração do cluster

### Backup de Configurações Kubernetes
- **Velero** para backup de YAMLs, CRDs, ConfigMaps e Secrets do Kubernetes para S3 replicado
- **AWS Backup** com **Vault Lock** para retenção de longo prazo (5+ anos) com proteção WORM
- Proteção contra exclusão acidental ou maliciosa (ransomware)

### Documentação e Plano de Implantação
- **Matriz de proteção** detalhada por componente: o que protege, como protege, RPO e RTO de cada camada
- Plano de implantação estimado em **40 horas** de trabalho
- Procedimentos de failover e failback documentados

## Resultados

- Plano de DR completo com **RTO menor que 20 minutos** para o Rancher Server
- **RPO de segundos** para computação (DRS) e **15 minutos** para dados (EFS Replication)
- **Matriz de proteção** por componente documentada e validada
- Backup de configurações K8s com **Velero** + retenção longa com **Vault Lock**
- Plano de implantação de **40 horas** pronto para execução
