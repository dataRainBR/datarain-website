---
title: "Melhorando o MTTI e MTTR através de uma plataforma de observabilidade"
date: "2021-11-01T00:00:00"
slug: "melhorando-o-mtti-e-mttr-atraves-de-uma-plataforma-de-observabilidade"
excerpt: "Como o Bitz implementou uma plataforma de observabilidade integrada à AWS para reduzir significativamente o tempo de identificação e resolução de incidentes em sua plataforma de pagamentos com 12 milhões de clientes."
featuredImage: "/content-images/cases/melhorando-o-mtti-e-mttr-atraves-de-uma-plataforma-de-observabilidade/5.png.webp"
categories: [17,21]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Financeiro"
---

O **Bitz**, carteira digital do **Banco Bradesco**, chegou para facilitar e organizar a vida financeira de seus clientes. Por meio de um aplicativo, é possível guardar dinheiro e cartões, da mesma forma que em uma carteira física. Mas, além de reunir estas vantagens, com o Bitz é possível realizar transações, como por exemplo receber pagamentos, transferir dinheiro e outros benefícios, como descontos exclusivos.

Atrativo, o Bitz é totalmente gratuito, tanto para o download como para adesão à conta, porém, alguns serviços e transações podem ter algum custo ao usar.

Prático, o Bitz oferece a opção de pagamento via QRCode, nas máquinas de cartão da **Cielo** — com mais de **1,6 milhão de estabelecimentos** cadastrados em todo país. Também oferece o cartão de débito **ELO Bitz**, que pode ser físico ou virtual para fazer compras à vista na internet.

## Desafio

O Bitz precisava melhorar o acompanhamento das fases de **desenvolvimento, testes, homologação e produção** da sua plataforma de pagamentos. Os principais pontos de dor incluíam:

- **Monitoramento fragmentado** dos microserviços internos e de terceiros
- Dificuldade em **identificar proativamente** comportamentos anômalos e erros
- Falta de **correlação entre causa e efeito** nos incidentes
- Impacto negativo nas **métricas de qualidade** por incidentes detectados apenas em "post-mortem"

## Por que a dataRain?

A **dataRain**, membro premiado da **AWS Partner Network (APN)**, é uma empresa 100% orientada à computação em nuvem, com experiência comprovada em projetos de observabilidade e monitoramento para ambientes de missão crítica.

Com profundo conhecimento em arquiteturas de microserviços e ferramentas de observabilidade integradas à **AWS**, a dataRain foi a parceira ideal para desenhar e implementar a plataforma que o Bitz precisava para ganhar visibilidade sobre toda a sua stack de pagamentos.

## A solução

A partir de fevereiro de 2022, após análise de diferentes cenários técnicos, foi implementada uma solução **Best-of-The-Breed de observabilidade**, integrada à plataforma de pagamentos na **Amazon Web Services**, com suporte e sustentação da **dataRain**. A solução abrange:

- Monitoramento completo dos **microserviços** e suas dependências entre **APIs**, **Bancos de Dados** e **Containers**
- **Alarmes proativos** que antecipam situações antes que impactem os clientes
- **Dashboards técnicos e de negócios** com visibilidade em tempo real
- **Correlação automática** entre eventos para identificação precisa de causa-raiz

## Resultados

Com a plataforma de observabilidade cobrindo **12 milhões de clientes cadastrados**, os resultados foram expressivos:

- **Redução significativa do MTTI e MTTR** — tempo de identificação e resolução de incidentes caiu drasticamente
- **Correlação superior a 95%** entre causa e efeito de incidentes, comportamentos anômalos e erros de microserviços
- **Identificação proativa de anomalias**, antecipando eventos que antes só eram detectados em "post-mortem"
- **Minimização do impacto** sobre os serviços prestados aos clientes, com melhoria direta nas métricas de qualidade
