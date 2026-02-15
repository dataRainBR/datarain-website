---
title: "DevOps traz mais segurança e escalabilidade ao Banco Ótimo"
date: "2024-02-06T17:05:28"
slug: "devops-traz-mais-seguranca-e-escalabilidade-ao-banco-otimo"
excerpt: "Como o Banco Ótimo construiu uma plataforma financeira 100% online com arquitetura serverless na AWS, acelerando entregas e fortalecendo a segurança com práticas DevOps."
featuredImage: "/content-images/cases/devops-traz-mais-seguranca-e-escalabilidade-ao-banco-otimo/4.png.webp"
categories: [17,19]
tags: []
author: 4
---

O **Banco Ótimo**, Ótimo Sociedade de Crédito Direto (Ótimo SCD S/A), é uma plataforma financeira **100% online** que oferece serviços simplificados e acessíveis. A instituição é autorizada pelo Banco Central e conta com a custódia e a experiência da **CODEPE CVC S/A**, empresa com 34 anos de atuação no mercado financeiro e de capitais.

## Desafio do Banco Ótimo

O Banco Ótimo reconheceu a importância da **bancarização de profissionais autônomos** e prestadores de serviços, visando oferecer-lhes acesso simplificado a serviços financeiros. Por meio da colaboração com a **Helpie** e a **Bluepay**, ampliou seu alcance e oferta de soluções financeiras personalizadas para esse público específico.

Com o suporte do DevOps, o Banco Ótimo foi capaz de agilizar o desenvolvimento e a implementação dessas soluções, permitindo que profissionais autônomos e prestadores de serviços obtivessem, mais facilmente, acesso a serviços bancários essenciais, contribuindo com a inclusão financeira e o crescimento desses negócios.

## A implantação

Uma abordagem **DevOps** seria a solução perfeita para reduzir o tempo de desenvolvimento e implementação de novos recursos e funcionalidades em sua plataforma, e com o apoio da **dataRain** isso seria possível.

A integração contínua, a entrega e a automação de testes e implantação iriam permitir que a equipe do Banco Ótimo respondesse mais rapidamente às demandas do mercado, lançando atualizações e melhorias de forma iterativa.

Com a infraestrutura baseada em nuvem e utilização de serviços **AWS**, seria possível que o Banco Ótimo escalasse seus recursos de forma flexível e eficiente, acompanhando o crescimento da demanda dos clientes. A automação de processos de implantação e monitoramento também iria contribuir para a estabilidade e a confiabilidade dos serviços oferecidos.

Para solucionar esse desafio, o Banco Ótimo optou por adotar uma **arquitetura serverless**, utilizando **AWS Lambda**, **AWS API Gateway** e **AWS DynamoDB/RDS**. A implantação foi realizada na região de **São Paulo**, abrangendo **três zonas de disponibilidade**.

## Soluções aplicadas

- **Arquitetura serverless:** O Banco Ótimo construiu todo o seu ambiente baseado em uma arquitetura serverless. O **AWS Lambda** é responsável pelo processamento, o **AWS API Gateway** permite a acessibilidade via internet e o **AWS DynamoDB/RDS** serve como camada de dados.

- **Gerenciamento de acesso:** Os desenvolvedores possuem acesso programático e por console com permissões personalizadas seguindo o **princípio do menor privilégio**. O **AWS Identity Center** (anteriormente conhecido como AWS SSO) permite o login único entre as contas, utilizando credenciais temporárias. Os usuários do **AWS IAM** são utilizados exclusivamente para acessar o pipeline e construir recursos serverless e implantar aplicações.

- **Monitoramento e logs:** O Banco Ótimo utiliza o **AWS CloudWatch** como sua principal ferramenta de monitoramento para logs e métricas. Eles criaram um painel personalizado que aborda o monitoramento de infraestrutura, aplicação e erros, proporcionando uma visualização fácil das informações essenciais.

- **Segurança:** Todas as Security Groups são configuradas para permitir apenas conexões necessárias, como o acesso ao banco de dados e componentes internos. Os **AWS VPC Flow Logs** estão habilitados na conta de produção. O tráfego externo é criptografado usando certificados **TLS/SSL** gerenciados pelo **AWS ACM**. O **AWS CloudFront** é utilizado para distribuir a interface frontal da aplicação, garantindo conexões HTTPS criptografadas. Tanto o **AWS RDS** quanto o **AWS DynamoDB** possuem criptografia padrão habilitada, com as chaves de criptografia armazenadas no **AWS KMS**.

- **Automação e infraestrutura como código:** O Banco Ótimo utiliza o **Serverless Framework** para construir a infraestrutura usando scripts do **CloudFormation**. As alterações no ambiente de produção são feitas por meio de um pipeline no **GitHub**, que compreende os scripts do Serverless Framework e implanta a infraestrutura e o código.

- **Recuperação de desastres:** O **RPO** (Recovery Point Objective) é de até 24 horas, alcançado por meio de snapshots diários e restauração de volumes. O **RTO** (Recovery Time Objective) é de até 12 horas, permitindo a restauração de volumes a partir dos snapshots mais recentes em caso de recuperação após uma falha.

## Resultados

A adoção de práticas DevOps e arquitetura serverless na AWS permitiu ao Banco Ótimo criar um ambiente bancário escalável, seguro e confiável. O foco em automação, monitoramento e fluxos de trabalho eficientes garante a entrega de serviços de alta qualidade aos seus clientes.

- **Agilidade e Velocidade:** O DevOps permitiu ao Banco Ótimo acelerar o desenvolvimento e a entrega de serviços financeiros, garantindo uma resposta mais rápida às demandas do mercado. A integração contínua e a entrega contínua (CI/CD) possibilitaram o lançamento frequente de novas funcionalidades e atualizações, mantendo a empresa na vanguarda da inovação.

- **Confiabilidade e Estabilidade:** Através da automação de processos e testes automatizados, o DevOps ajudou o Banco Ótimo a melhorar a qualidade e a estabilidade de seus sistemas. A detecção precoce de erros e a resolução rápida de problemas resultaram em uma experiência mais confiável para os clientes, fortalecendo a reputação do banco.

- **Escalabilidade e Flexibilidade:** A arquitetura baseada em nuvem adotada pelo DevOps permitiu ao Banco Ótimo dimensionar facilmente sua infraestrutura para atender às demandas crescentes. Com recursos como a elasticidade dos servidores e o provisionamento automatizado, a empresa pôde lidar com picos de tráfego e adaptar-se rapidamente às mudanças nas necessidades do negócio.

- **Colaboração e Comunicação:** O DevOps promoveu uma cultura de colaboração entre as equipes de desenvolvimento, operações e segurança do Banco Ótimo. A implementação de processos de integração e comunicação contínuos permitiu a troca eficiente de conhecimentos e a resolução colaborativa de problemas, melhorando a eficiência e a produtividade da equipe.

- **Segurança e Conformidade:** O DevOps ajudou o Banco Ótimo a fortalecer suas práticas de segurança e conformidade. A automação de testes de segurança, monitoramento contínuo e implementação de controles de acesso granulares garantiram a proteção dos dados dos clientes e o cumprimento dos regulamentos financeiros.
