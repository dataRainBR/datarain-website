---
title: "DevOps com mais segurança e escalabilidade para BluePay"
date: "2024-02-06T16:40:35"
slug: "devops-com-mais-seguranca-e-escalabilidade-para-bluepay"
excerpt: "Como a BluePay construiu uma plataforma de pagamentos PIX escalável e segura com arquitetura serverless na AWS, acelerando entregas com práticas DevOps e automação de ponta a ponta."
featuredImage: "/content-images/cases/devops-com-mais-seguranca-e-escalabilidade-para-bluepay/BluePay.webp"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Financeiro"
---

A **BluePay Fintech** é uma plataforma de pagamentos especializada em **PIX**, focada em escala, alta disponibilidade, segurança e custos adequados ao cliente.

## Quem é o cliente

A BluePay reconheceu a importância da bancarização de profissionais autônomos e prestadores de serviços, visando oferecer acesso simplificado a serviços financeiros. Com uma operação em crescimento acelerado, a fintech precisava de uma base tecnológica que acompanhasse esse ritmo.

## Desafio

O principal desafio era **reduzir o tempo de desenvolvimento e implementação** de novos recursos na plataforma, sem comprometer segurança ou estabilidade. A BluePay precisava:

- Responder rapidamente às demandas do mercado de pagamentos
- Escalar recursos de forma flexível conforme o crescimento da base de clientes
- Garantir **alta disponibilidade** e confiabilidade dos serviços
- Manter controles rígidos de segurança e conformidade

## Solução

Com o apoio da **dataRain**, a BluePay adotou uma abordagem **DevOps** combinada com **arquitetura serverless** na AWS. A implantação foi realizada na região de **São Paulo**, abrangendo **três zonas de disponibilidade**.

A estratégia se apoiou em integração contínua, entrega contínua e automação completa de testes e deploys, permitindo lançamentos iterativos e seguros.

## Arquitetura e serviços

- **AWS Lambda** para processamento serverless
- **AWS API Gateway** para acessibilidade via internet
- **AWS DynamoDB / RDS** como camada de dados
- **AWS CloudWatch** com painel personalizado para monitoramento de infraestrutura, aplicação e erros
- **AWS CloudFront** para distribuição do frontend com HTTPS
- **AWS KMS** para gerenciamento de chaves de criptografia
- **AWS ACM** para certificados TLS/SSL
- **Serverless Framework** com scripts CloudFormation para infraestrutura como código
- **GitHub Pipeline** para CI/CD automatizado

## Segurança

- Security Groups configuradas com **princípio do menor privilégio**
- **AWS Identity Center** (SSO) para login único entre contas com credenciais temporárias
- **VPC Flow Logs** habilitados em produção
- Criptografia padrão em **RDS** e **DynamoDB** com chaves no **AWS KMS**
- Tráfego externo protegido com **TLS/SSL** via AWS ACM

## Recuperação de desastres

- **RPO de até 24 horas** — snapshots diários com restauração de volumes
- **RTO de até 12 horas** — restauração a partir dos snapshots mais recentes

## Resultados

- **Agilidade nas entregas** — CI/CD possibilitou lançamentos frequentes de funcionalidades, mantendo a BluePay na vanguarda da inovação em pagamentos
- **Maior confiabilidade** — automação de testes e detecção precoce de erros resultaram em uma experiência mais estável para os clientes
- **Escalabilidade sob demanda** — arquitetura serverless permite dimensionar a infraestrutura automaticamente em picos de tráfego
- **Colaboração entre times** — cultura DevOps integrou desenvolvimento, operações e segurança com comunicação contínua
- **Segurança reforçada** — testes automatizados de segurança, monitoramento contínuo e controles de acesso granulares protegem os dados dos clientes
