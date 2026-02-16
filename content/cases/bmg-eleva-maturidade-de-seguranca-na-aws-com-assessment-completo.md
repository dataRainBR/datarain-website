---
title: "BMG eleva maturidade de segurança na AWS com assessment completo"
date: "2023-08-01T00:00:00"
slug: "bmg-eleva-maturidade-de-seguranca-na-aws-com-assessment-completo"
excerpt: "Como o Grupo BMG identificou e priorizou mais de 19 findings críticos de segurança na AWS com apoio da dataRain, elevando sua postura de segurança com workshops dedicados e guardrails automatizados."
featuredImage: "/content-images/cases/bmg-eleva-maturidade-de-seguranca-na-aws-com-assessment-completo/bmg-logo.png"
categories: [17,20]
tags: []
author: 4
pilar: "Cybersecurity"
oferta: "Landing Zone"
setor: "Financeiro"
---

O **Grupo BMG** é uma das maiores instituições financeiras do Brasil, com décadas de atuação no mercado de crédito e serviços bancários. Após migrar sua infraestrutura para a AWS, o banco identificou a necessidade de elevar sua postura de segurança para atender aos rigorosos padrões do setor financeiro.

## Desafio

Apesar de já operar na AWS, o Grupo BMG apresentava lacunas significativas de segurança identificadas por meio de varredura automatizada com **Prowler** e assessment dedicado. O cenário incluía:

- Mais de **19 findings críticos** em Data Protection, incluindo certificados **ACM** próximos da expiração, **CloudWatch** sem criptografia **KMS**, snapshots **EBS** sem criptografia, e buckets **S3** sem versionamento, HTTPS obrigatório ou Object Lock
- **ELBs** sem deletion protection e com ciphers SSL inseguros
- Rotação de chaves **KMS** desabilitada
- **API Gateway** sem certificado de cliente
- Logs sem política de retenção definida
- Ausência de classificação automatizada de dados

O assessment revelou um score de maturidade de **1.6 em 10**, com gaps em documentação técnica, processos de backup sem testes documentados e ausência de automação para resposta a incidentes.

## Solução

A **dataRain** conduziu um **AWS Security Assessment** completo, estruturado em workshops dedicados e entregas progressivas:

**Varredura e diagnóstico**

- **Prowler** para varredura automatizada de conformidade em toda a organização AWS
- **Security Report** detalhado com findings categorizados por domínio (Data Protection, Detective Controls, Incident Response)
- Cada finding documentado com **risco, recomendação e owner** atribuído

**Workshops práticos**

- **Data Protection:** criptografia at-rest e in-transit, políticas de S3, gestão de chaves KMS
- **Detective Controls:** monitoramento, alertas e auditoria com **CloudTrail** e **AWS Config**
- **Incident Response:** automação de resposta, playbooks e escalação

**Governança e guardrails**

- Implementação de **SCPs** (Service Control Policies) para prevenção de configurações inseguras
- Estratégia de notificações para alertas de segurança
- **Backlog de segurança** priorizado com owners e prazos definidos

## Resultados

- Assessment completo com mais de **19 findings** documentados e priorizados
- **Workshops** de Data Protection, Detective Controls e Incident Response realizados com equipes BMG
- **Backlog de segurança** criado com owners e prazos para remediação
- **Guardrails e SCPs** implementados para prevenção automatizada
- **Heatmap de maturidade** por domínio gerado (General Security, Data Protection, Infrastructure Security, IAM, Detective Controls, Incident Response)
- Estratégia de **notificações** definida e implementada
- Equipe BMG **capacitada** em práticas de segurança AWS
