---
title: "Implementação de DevOps garante economia para a Prevent Senior"
date: "2024-02-06T16:57:50"
slug: "implementacao-de-devops-garante-economia-para-a-prevent-senior"
excerpt: "Como a Prevent Senior otimizou sua infraestrutura de TI com DevOps na AWS, alcançando redução de 18% nos custos mensais e maior agilidade nas entregas."
featuredImage: "/content-images/cases/implementacao-de-devops-garante-economia-para-a-prevent-senior/2.png.webp"
categories: [17,19]
tags: []
author: 4
pilar: "Cloud"
oferta: "DevOps e Modernization"
setor: "Saúde"
---

Especializada em serviços de saúde, a **Prevent Senior** é dedicada a oferecer soluções inovadoras e de alta qualidade para seus clientes, com abordagem focada na prevenção e em busca de uma experiência diferenciada e abrangente no setor de saúde. Conta com uma gama de serviços e uma rede integrada de atendimento que oferece **planos de saúde, cuidados médicos, hospitais próprios e centros de diagnóstico**.

Tem como missão promover a qualidade de vida e o bem-estar dos seus beneficiários por meio da adoção de práticas inovadoras e de tecnologia avançada. Por isso, investe constantemente em modernização e atualização de seus processos, levando soluções cada vez mais eficientes e personalizadas.

## Desafio da Prevent Senior

Com forte relação com a tecnologia e foco em inovação, a empresa precisava aprimorar seus sistemas robustos e integrados para gerenciar suas operações e garantir um fluxo eficiente de **informações médicas e administrativas**. A empresa incorpora tecnologia de ponta em suas práticas médicas, incluindo equipamentos avançados de diagnóstico, terapias inovadoras e soluções médicas baseadas em evidências científicas. Além de investir em **telemedicina e inteligência artificial**.

Por essa razão, buscou a **dataRain** para implementar uma solução de DevOps eficiente para otimizar processos de desenvolvimento e implantação de aplicativos, garantindo **alta disponibilidade, escalabilidade e segurança**.

## Implantação

A arquitetura da solução executada segue um fluxo de trabalho de **DevOps** eficiente para o frontend e backend da aplicação, incorporando diversas ferramentas e serviços para processos de desenvolvimento e implantação simplificados.

## Soluções Aplicadas

- **Pipeline de Integração Contínua (CI):** A equipe de DevOps da dataRain responde a tickets relacionados à aplicação, que disparam o pipeline de CI interno. O pipeline de CI é gerenciado em um repositório do **Bitbucket** e utiliza o **Nexus** como repositório de artefatos. O **Jenkins** é usado como servidor de automação, sendo acionado por commits no Git. O pipeline do Jenkins atualiza recursos da AWS, como o **CloudFront** e o **S3**, garantindo a disponibilidade e entrega da aplicação frontend.

- **Balanceamento de carga e escalabilidade:** A arquitetura no AWS expõe os serviços por meio de um **Application Load Balancer (ALB)** para instâncias **EC2** e outro ALB para as aplicações em contêineres no cluster **EKS**. Isso permite o balanceamento de carga e roteamento eficiente do tráfego. Os registros de contêineres são gerenciados usando o **Docker Registry** e o processo de implantação é automatizado com o **ArgoCD**. O **Karpenter** é utilizado para dimensionar de forma eficiente as aplicações em contêineres de acordo com as demandas de carga de trabalho.

- **Gerenciamento de dados e serviços da AWS:** A arquitetura inclui vários serviços da AWS para suportar a funcionalidade da aplicação e a gestão de dados. O **RDS Multi-AZ** fornece alta disponibilidade para o banco de dados relacional, o **DynamoDB** oferece uma solução de banco de dados NoSQL, o **Kinesis Streams** permite o processamento de dados em tempo real, e o **ElastiCache** melhora o desempenho da aplicação por meio do cache na memória.

- **Autenticação e gerenciamento de acesso:** A integração entre o **Azure AD** e o **AWS SSO** permite uma autenticação e gerenciamento de acesso perfeitos em ambos os ambientes. O gerenciamento de DNS externo e interno é feito pelo **Route 53**, garantindo resolução confiável e escalável de nomes de domínio.

- **Armazenamento seguro e criptografia de dados:** Para centralizar os logs e garantir a segurança, eles são armazenados em uma **conta de auditoria separada**. O **Vault** é utilizado para armazenamento seguro e criptografia de dados sensíveis, aprimorando a proteção e conformidade dos dados.

## Resultados

- **Redução de 18,18% nos custos mensais da AWS**, com impacto financeiro significativo

- Processos de desenvolvimento e implantação otimizados com serviços essenciais da AWS: **CodePipeline**, **CodeBuild**, **CodeDeploy**, **ECS**, **Lambda**, **CloudFormation**, **Elastic Beanstalk** e **X-Ray**

- Segurança reforçada com **AWS IAM**, integração **Azure AD** e **princípio do menor privilégio**

- Monitoramento eficaz com **Prometheus**, **Grafana** e **New Relic**, mantendo alta confiabilidade

- Arquitetura de rede segura com **segmentação de VPC**, sub-redes públicas e privadas, **NAT Gateways** e controle de acesso **EKS**

- Gerenciamento confiável de dados com **RDS Multi-AZ**, **DynamoDB**, **Kinesis Streams** e **ElastiCache**
