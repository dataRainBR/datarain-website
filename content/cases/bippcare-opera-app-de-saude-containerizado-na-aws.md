---
title: "BippCare opera app de saúde containerizado na AWS"
date: "2022-05-01T00:00:00"
slug: "bippcare-opera-app-de-saude-containerizado-na-aws"
excerpt: "Como a BippCare implementou sua plataforma de saúde digital com arquitetura containerizada na AWS, utilizando Docker Compose com Next.js, NestJS, PostgreSQL e Redis em EC2 com NGINX e SSL."
featuredImage: "/content-images/cases/bippcare-opera-app-de-saude-containerizado-na-aws/bippcare-logo.png"
categories: [17,26]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Infraestrutura e Containers"
setor: "Saúde"
hidden: true
---

A **BippCare** (bipp.care) é uma plataforma digital de saúde do Grupo Bipp que conecta pacientes a profissionais de saúde, oferecendo serviços de telemedicina e gestão de atendimentos. Com uma stack moderna baseada em TypeScript, a empresa precisava de infraestrutura confiável e segura na AWS para operar seus serviços de saúde.

## Desafio

A BippCare opera uma aplicação web complexa com múltiplos componentes que precisavam funcionar de forma integrada e segura:

- **Frontend** em Next.js/React — interface do paciente e do profissional de saúde
- **Backend** em NestJS com TypeScript — APIs de negócio, autenticação e gestão de consultas
- **PostgreSQL** como banco de dados relacional para dados de pacientes e atendimentos
- **Redis** para cache de sessões e filas de processamento
- Necessidade de **NGINX** como reverse proxy com terminação SSL/TLS
- Dados de saúde exigem **segurança reforçada** e conformidade com boas práticas

O desafio era orquestrar todos esses componentes de forma eficiente, com deploy reproduzível e manutenção simplificada.

## Solução

A **dataRain** projetou e implementou a infraestrutura na AWS com foco em containerização e segurança:

### Arquitetura Containerizada
- **Docker Compose** para orquestração de todos os serviços em containers isolados
- Container dedicado para **Next.js/React** (frontend) com build otimizado
- Container dedicado para **NestJS** (backend) com TypeScript compilado
- Container **PostgreSQL** para persistência de dados de saúde
- Container **Redis** para cache de sessões e performance

### Infraestrutura AWS
- **Amazon EC2** dimensionado para hospedar o stack completo de containers
- **VPC** com subnets configuradas e Security Groups restritivos
- Regras de firewall limitando acesso apenas às portas necessárias

### Segurança e Rede
- **NGINX** como reverse proxy com terminação **SSL/TLS** para tráfego criptografado
- Certificados configurados para domínio bipp.care
- Isolamento de rede entre containers e acesso externo

### Documentação e Operações
- Documentação técnica completa da infraestrutura e arquitetura
- Procedimentos de **deploy** documentados para reprodutibilidade
- Guia de manutenção e troubleshooting para a equipe

## Resultados

- Plataforma **bipp.care** em produção na AWS com todos os serviços operacionais
- Arquitetura **containerizada** com Docker Compose para deploy reproduzível
- **SSL/TLS** configurado via NGINX para tráfego seguro
- Ambiente **isolado e seguro** para dados de saúde
- Documentação completa para operação e manutenção independente
