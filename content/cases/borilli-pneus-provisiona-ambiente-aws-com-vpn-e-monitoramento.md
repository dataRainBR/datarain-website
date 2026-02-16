---
title: "Borilli Pneus provisiona ambiente AWS com VPN e monitoramento"
date: "2020-03-01T00:00:00"
slug: "borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento"
excerpt: "Como a Borilli Pneus provisionou ambiente AWS completo com 4 EC2, VPN OpenVPN, firewall Sophos XG 105, monitoramento Site24x7 e backup automatizado para sua aplicação Wildfly/Junsoft."
featuredImage: "/content-images/cases/borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento/borilli-logo.png"
categories: [17]
tags: []
author: 4
pilar: "Cloud & AWS"
oferta: "Infraestrutura"
setor: "Indústria"
---

A **Borilli Pneus** é uma empresa do setor automotivo especializada em pneus, com operações que dependem de sistemas ERP e aplicações de gestão para o dia a dia do negócio. Com a necessidade de modernizar sua infraestrutura de TI, a empresa buscou a dataRain para provisionar um ambiente completo na AWS.

## Desafio

A Borilli Pneus precisava migrar seus servidores de aplicação para a nuvem, garantindo conectividade segura para os usuários e proteção adequada para os dados do negócio:

- **Servidores de aplicação** rodando **Wildfly** com sistema **Junsoft** (ERP)
- Necessidade de **VPN Client-to-Site** para que funcionários acessem os sistemas remotamente
- **Firewall** dedicado para proteção de rede e controle de tráfego
- **Monitoramento contínuo** para garantir disponibilidade dos serviços
- **Backup automatizado** para proteção contra perda de dados
- Controle de acesso com **MFA** e gestão segura de credenciais

## Solução

A **dataRain** provisionou um ambiente AWS completo, cobrindo infraestrutura, segurança, conectividade e operações:

### Infraestrutura Computacional
- **3 instâncias EC2 t3a.large** para servidores de aplicação Wildfly/Junsoft
- **1 NAT Instance** para controle de tráfego de saída
- **VPC** com subnets públicas e privadas para isolamento de rede
- **Security Groups** com regras restritivas por função

### Conectividade e Segurança
- **VPN Client-to-Site** com **OpenVPN** para acesso remoto seguro dos funcionários
- **Sophos XG 105** como firewall dedicado para inspeção e controle de tráfego
- **IAM** com **MFA obrigatório** para todos os acessos administrativos
- **AWS Secrets Manager** para armazenamento seguro de credenciais e chaves

### Monitoramento e Backup
- **Site24x7** para monitoramento de disponibilidade e performance das aplicações
- **AWS Systems Manager (SSM)** para gestão remota e inventário de instâncias
- Backup automatizado com **snapshots EBS** programados
- **Amazon S3** para armazenamento de backups de longo prazo
- **AWS Lambda** para automação de tarefas operacionais recorrentes

## Resultados

- Ambiente AWS **provisionado** com 4 servidores operacionais
- Aplicação **Wildfly/Junsoft** em produção na nuvem
- **VPN OpenVPN** configurada para acesso remoto seguro
- **Firewall Sophos XG 105** ativo para proteção de rede
- **Monitoramento** contínuo com Site24x7 + SSM
- **Backup automatizado** com snapshots EBS + S3
- Segurança reforçada com **MFA** e **Secrets Manager**
