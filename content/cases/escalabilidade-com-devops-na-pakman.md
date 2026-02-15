---
title: "Escalabilidade com DevOps na Pakman"
date: "2024-02-06T16:32:27"
slug: "escalabilidade-com-devops-na-pakman"
excerpt: "Como a Pakman construiu uma infraestrutura serverless escalável na AWS para acompanhar o crescimento exponencial da logística de last mile no e-commerce."
featuredImage: "/content-images/cases/escalabilidade-com-devops-na-pakman/pakman-logo.png"
categories: [17,19]
tags: []
author: 4
---

A **Pakman** é uma Logtech especializada em serviços de **Last Mile**. Desde desenvolvimento à execução de soluções para empresas que possuem necessidade de entrega com excelência, pontualidade e rastreamento para otimizar a experiência do cliente.

## Desafio

O maior desafio da Pakman é intrinsecamente ligado à necessidade de uma **entrega eficiente e pontual**. Antes de migrarmos para a infraestrutura da AWS, a Pakman confrontava desafios consideráveis, tais como a gestão inadequada do tempo de entrega, falta de visibilidade em tempo real e limitações na otimização dinâmica das rotas.

A incapacidade de oferecer entregas rápidas e precisas resultava em insatisfação dos clientes, que buscam cada vez mais a conveniência e a agilidade nas últimas etapas do processo logístico. A ausência de visibilidade em tempo real dificultava a resposta eficaz a eventos imprevistos, comprometendo a capacidade de adaptação a mudanças nas condições de tráfego ou variações na demanda.

## Início da solução

A implantação apresenta uma abordagem técnica para solucionar desafios específicos no domínio da logística, com foco na **escalabilidade**. Diante do crescimento exponencial nos pedidos de logística provenientes do comércio eletrônico, a empresa desenvolveu uma arquitetura robusta e altamente escalável.

A estrutura técnica implementada foi projetada para lidar eficientemente com o aumento substancial na demanda logística, oferecendo uma solução eficaz para os desafios inerentes à gestão de pedidos em grande escala. Ao priorizar a escalabilidade, com a infraestrutura da AWS conseguimos crescer de maneira sinérgica com o aumento das operações do e-commerce, proporcionando uma experiência de logística ágil e confiável.

## Resolução

- **Arquitetura sem servidor:** A Pakman desenvolveu toda a sua estrutura com base em uma arquitetura sem servidor. O **AWS Lambda** é encarregado do processamento, enquanto o **AWS API Gateway** possibilita a acessibilidade pela internet, e o **AWS DynamoDB/RDS** atua como camada de dados.

- **Gestão de acesso:** Os programadores têm acesso programático e por console, com permissões personalizadas em conformidade com o **princípio do menor privilégio**. Os usuários do **AWS IAM** são utilizados exclusivamente para acessar o pipeline, construir recursos sem servidor e implementar aplicações.

- **Monitoramento e registros:** A Pakman utiliza o **AWS CloudWatch** como sua principal ferramenta de monitoramento para logs e métricas. Desenvolveram um painel personalizado que abrange o monitoramento da infraestrutura, aplicação e erros, proporcionando uma visualização simplificada das informações essenciais.

- **Segurança:** As Security Groups são configuradas para permitir apenas conexões necessárias, como o acesso ao banco de dados e componentes internos. Os **AWS VPC Flow Logs** estão ativados na conta de produção. O tráfego externo é criptografado por certificados **TLS/SSL** gerenciados pelo **AWS ACM**. O **AWS CloudFront** é empregado para distribuir a interface frontal da aplicação, assegurando conexões HTTPS criptografadas. Ambos o **AWS RDS** e o **AWS DynamoDB** têm a criptografia padrão ativada, com as chaves de criptografia armazenadas no **AWS KMS**.

- **Automatização e infraestrutura como código:** A Pakman utiliza o **Serverless Framework** para criar a infraestrutura por meio de scripts do **CloudFormation**.

- **Recuperação de desastres:** O **RPO** (Recovery Point Objective) é de até 24 horas, alcançado por meio de snapshots diários e restauração de volumes. O **RTO** (Recovery Time Objective) é de até 12 horas, permitindo a restauração de volumes a partir dos snapshots mais recentes em caso de recuperação após uma falha.

## Serviços AWS utilizados

- **Lambda**
- **Step Functions**
- **SQS** e SQS Lambda Trigger
- **AWS CDK**
- **RDS Aurora MySQL**
- **DynamoDB** e DynamoDB Stream
- **S3**
- **API Gateway**
- **SNS**
- **IAM**
- **CloudFront**
- **Route 53 Resolver**
- **Fargate**
- **CloudFormation**
