---
title: "DevOps com mais segurança e escalabilidade para BluePay"
date: "2024-02-06T16:40:35"
slug: "devops-com-mais-seguranca-e-escalabilidade-para-bluepay"
excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
featuredImage: "/content-images/cases/devops-com-mais-seguranca-e-escalabilidade-para-bluepay/BluePay.webp"
categories: [17,19]
tags: []
author: 4
---

A BluePay Fintech é uma plataforma de pagamentos especializada em PIX, focada em escala, alta disponibilidade, segurança e custos adequados ao cliente.

 

### Desafio da BluePay

 

O BluePay reconheceu a importância da bancarização de profissionais autônomos e prestadores de serviços, visando oferecer-lhes acesso simplificado a serviços financeiros.

Com o suporte do DevOps, a BluePay foi capaz de agilizar o desenvolvimento e a implementação dessas soluções, permitindo que profissionais autônomos e prestadores de serviços obtivessem, mais facilmente, acesso a serviços bancários essenciais, contribuindo com a inclusão financeira e o crescimento desses negócios.

 

### A Implantação

 

Uma abordagem DevOps seria a solução perfeita para reduzir o tempo de desenvolvimento e implementação de novos recursos e funcionalidades em sua plataforma, e com o apoio da dataRain isso seria possível.

A integração contínua, a entrega e a automação de testes e implantação iriam permitir que a equipe da BluePay respondesse mais rapidamente às demandas do mercado, lançando atualizações e melhorias de forma iterativa.

Com a infraestrutura baseada em nuvem e utilização de serviços AWS, seria possível que a BluePay escalasse seus recursos de forma flexível e eficiente, acompanhando o crescimento da demanda dos clientes. A automação de processos de implantação e monitoramento também iria contribuir para a estabilidade e a confiabilidade dos serviços oferecidos.

Para solucionar esse desafio, a BluePay optou por adotar uma arquitetura serverless, utilizando AWS Lambda, AWS API Gateway e AWS DynamoDB/RDS. A implantação foi realizada na região de São Paulo, abrangendo três zonas de disponibilidade.

 

### Soluções Aplicadas:

 

**Arquitetura Serverless:** A BluePay construiu todo o seu ambiente baseado em uma arquitetura serverless. O AWS Lambda é responsável pelo processamento, o AWS API Gateway permite a acessibilidade via internet e o AWS DynamoDB/RDS serve como camada de dados.

**Gerenciamento de Acesso:** Os desenvolvedores possuem acesso programático e por console com permissões personalizadas seguindo o princípio do menor privilégio. O AWS Identity Center (anteriormente conhecido como AWS SSO) permite o login único entre as contas, utilizando credenciais temporárias do AWS Identity Center. Os usuários do AWS IAM são utilizados exclusivamente para acessar o pipeline e construir recursos serverless e implantar aplicações.

**Monitoramento e Logs:** A BluePay utiliza o AWS CloudWatch como sua principal ferramenta de monitoramento para logs e métricas. Eles criaram um painel personalizado que aborda o monitoramento de infraestrutura, aplicação e erros, proporcionando uma visualização fácil das informações essenciais.

**Segurança:** Todas as Security Groups são configuradas para permitir apenas conexões necessárias, como o acesso ao banco de dados e componentes internos. Os AWS VPC Flow Logs estão habilitados na conta de produção. O tráfego externo é criptografado usando certificados TLS/SSL gerenciados pelo AWS ACM. O AWS CloudFront é utilizado para distribuir a interface frontal da aplicação, garantindo conexões HTTPS criptografadas. Tanto o AWS RDS quanto o AWS DynamoDB possuem criptografia padrão habilitada, com as chaves de criptografia armazenadas no AWS KMS.

**Automação e Infraestrutura como Código:** A BluePay utiliza o Serverless Framework para construir a infraestrutura usando scripts do CloudFormation. As alterações no ambiente de produção são feitas por meio de um pipeline no GitHub, que compreende os scripts do Serverless Framework e implanta a infraestrutura e o código.

**Recuperação de Desastres:** O RPO (Recovery Point Objective) é de até 24 horas, alcançado por meio de snapshots diários e restauração de volumes. O RTO (Recovery Time Objective) é de até 12 horas, permitindo a restauração de volumes a partir dos snapshots mais recentes em caso de recuperação após uma falha.

 

### Resultados:

 

A adoção de práticas DevOps e arquitetura serverless na AWS permitiu à BluePay criar um ambiente bancário escalável, seguro e confiável. O foco em automação, monitoramento e fluxos de trabalho eficientes garante a entrega de serviços de alta qualidade aos seus clientes.

 

**Agilidade e Velocidade:** O DevOps permitiu a BluePay acelerar o desenvolvimento e a entrega de serviços financeiros, garantindo uma resposta mais rápida às demandas do mercado. A integração contínua e a entrega contínua (CI/CD) possibilitaram o lançamento frequente de novas funcionalidades e atualizações, mantendo a empresa na vanguarda da inovação.

**Confiabilidade e Estabilidade:** Através da automação de processos e testes automatizados, o DevOps ajudou a BluePay a melhorar a qualidade e a estabilidade de seus sistemas. A detecção precoce de erros e a resolução rápida de problemas resultaram em uma experiência mais confiável para os clientes, fortalecendo a reputação do banco.

**Escalabilidade e Flexibilidade:** A arquitetura baseada em nuvem adotada pelo DevOps permitiu a BluePay dimensionar facilmente sua infraestrutura para atender às demandas crescentes. Com recursos como a elasticidade dos servidores e o provisionamento automatizado, a empresa pôde lidar com picos de tráfego e adaptar-se rapidamente às mudanças nas necessidades do negócio.

**Colaboração e Comunicação:** O DevOps promoveu uma cultura de colaboração entre as equipes de desenvolvimento, operações e segurança da BluePay. A implementação de processos de integração e comunicação contínuos permitiu a troca eficiente de conhecimentos e a resolução colaborativa de problemas, melhorando a eficiência e a produtividade da equipe.

**Segurança e Conformidade:** O DevOps ajudou a BluePay a fortalecer suas práticas de segurança e conformidade. A automação de testes de segurança, monitoramento contínuo e implementação de controles de acesso granulares garantiram a proteção dos dados dos clientes.