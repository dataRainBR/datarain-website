---
title: "SEBRAE-PR responde a ataque DDoS com auto-scaling na AWS"
date: "2020-11-01T00:00:00"
slug: "sebrae-pr-responde-a-ataque-ddos-com-auto-scaling-na-aws"
excerpt: "Como a dataRain respondeu a um ataque DDoS que derrubou o site da Feira do Empreendedor 2020 do SEBRAE-PR, implementando auto-scaling e proteção contra ataques para suportar 370 mil conexões simultâneas."
featuredImage: "/content-images/cases/sebrae-pr-responde-a-ataque-ddos-com-auto-scaling-na-aws/sebrae-logo.png"
categories: [17,20]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Segurança e Resposta a Incidentes"
setor: "Governo"
---

O **SEBRAE-PR** (Serviço Brasileiro de Apoio às Micro e Pequenas Empresas do Paraná) é a principal instituição de apoio ao empreendedorismo no estado. Em novembro de 2020, o SEBRAE-PR realizou a **Feira do Empreendedor 2020**, um dos maiores eventos de empreendedorismo do Brasil, em formato 100% digital devido à pandemia.

## Desafio

Nos dias **20, 21 e 22 de novembro de 2020**, o site **feiradoempreendedor2020.com.br** ficou completamente indisponível. A análise revelou um cenário crítico:

- O ambiente original era composto por **1 servidor Linux** com 16 cores e 64 GB de RAM
- A configuração suportava até **140 mil conexões simultâneas** — estimado como 10x o necessário
- O site recebeu **370 mil acessos simultâneos**, com picos de **14 mil novas conexões por minuto**
- Às 14:40h do dia 20/11, o servidor saltou de 79 mil para **353 mil requisições em apenas 20 minutos**
- O consumo de CPU atingiu 100%, tornando o site inacessível
- O padrão de tráfego indicava um **ataque DDoS** (Distributed Denial of Service) — picos repentinos e esporádicos incompatíveis com uso normal

## Solução

A **dataRain** foi acionada para resposta imediata ao incidente e implementou um novo ambiente com proteção contra ataques:

### Proteção contra DDoS
- **Amazon CloudFront** como CDN para distribuição de conteúdo e absorção de tráfego
- **AWS WAF** (Web Application Firewall) para filtragem de requisições maliciosas
- **AWS Shield** para proteção nativa contra ataques DDoS volumétricos
- Regras de bloqueio para acessos indevidos identificados

### Escalabilidade Automática
- **Auto Scaling Group** configurado para criar novos servidores automaticamente sob demanda
- Distribuição de carga entre múltiplas instâncias para evitar ponto único de falha
- Capacidade de escalar horizontalmente durante picos de acesso

### Resiliência
- Arquitetura projetada para que, mesmo sob ataque, os serviços de proteção bloqueiem acessos indevidos
- Se o servidor começar a sobrecarregar, novos servidores são criados automaticamente
- Escalabilidade automática de acordo com a demanda, garantindo acesso ao site

## Resultados

- Site **recuperado e protegido** após o ataque DDoS
- **Auto Scaling** implementado para escalabilidade automática
- Proteção **DDoS ativa** com CloudFront + WAF + Shield
- Capacidade de suportar **370 mil+ conexões simultâneas**
- Ambiente resiliente contra futuros ataques
- Relatório técnico completo entregue ao SEBRAE-PR com análise do incidente
