---
title: "Estre Ambiental otimiza billing AWS com resizing e Saving Plans"
date: "2023-06-01T00:00:00"
slug: "estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans"
excerpt: "Como a Estre Ambiental, uma das maiores empresas de gestão de resíduos do Brasil, reduziu custos AWS com análise detalhada de billing, resizing de EC2, otimização de snapshots EBS e contratação de Saving Plans."
featuredImage: "/content-images/cases/estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans/estre-logo.png"
categories: [17]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "FinOps e Otimização"
setor: "Energia e Agro"
---

A **Estre Ambiental** é uma das maiores empresas de gestão de resíduos sólidos do Brasil, operando aterros sanitários, centrais de tratamento e soluções ambientais em diversas regiões do país. Com uma infraestrutura AWS que cresceu organicamente, a empresa acumulou ineficiências de custo que precisavam ser endereçadas.

## Desafio

A análise inicial revelou que a infraestrutura AWS da Estre Ambiental apresentava custos não otimizados em múltiplas frentes:

- **Servidores superdimensionados** — instância m5.2xlarge operando com uso médio de apenas **30% de CPU**, e m5a.xlarge com **25% de CPU**. Recursos pagos mas não utilizados
- **Snapshots EBS** acumulados sem política de lifecycle, gerando custos crescentes de armazenamento mês a mês
- **3 Elastic IPs** alocados mas não associados a nenhuma instância — cada IP ocioso gera cobrança contínua
- **Sem Saving Plans** — todas as instâncias rodando no modelo On-Demand, o mais caro disponível, mesmo para workloads previsíveis e estáveis

## Solução

A **dataRain** realizou um relatório técnico detalhado de otimização de billing com análise instância por instância:

### Análise de Utilização via CloudWatch
- Monitoramento de **CPU, memória e I/O** por instância ao longo de semanas
- Identificação de **3 servidores** consistentemente superdimensionados (uso médio abaixo de 35%)
- Mapeamento de padrões de uso para determinar o tipo de instância ideal

### Recomendações de Resizing
- **Resizing** de 3 instâncias EC2 para tipos adequados ao workload real
- Projeção de economia de **~40%** nos custos de compute apenas com rightsizing
- Análise de impacto para garantir que a performance não seria afetada

### Otimização de Storage
- Implementação de **lifecycle policies** para snapshots EBS com retenção otimizada
- Redução de **~18%** nos custos de snapshots com eliminação de cópias desnecessárias
- Remoção de **3 Elastic IPs** não utilizados — economia imediata

### Saving Plans
- Análise de workloads estáveis elegíveis para compromisso de longo prazo
- Contratação de **Saving Plans** com desconto adicional de **4%** sobre On-Demand
- Projeção de economia recorrente mensal

## Resultados

- **Snapshots EBS** otimizados com redução de ~18% nos custos de armazenamento
- **3 Elastic IPs** ociosos removidos com economia imediata
- Recomendações de **resizing** para economia de ~40% em compute
- **Saving Plans** contratados com desconto de 4%
- Relatório técnico completo entregue com análise por instância e projeções de economia
