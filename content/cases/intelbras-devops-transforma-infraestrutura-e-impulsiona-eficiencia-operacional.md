---
title: "Intelbras: DevOps transforma infraestrutura e impulsiona eficiência operacional"
date: "2024-02-06T17:03:21"
slug: "intelbras-devops-transforma-infraestrutura-e-impulsiona-eficiencia-operacional"
excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
featuredImage: "/content-images/cases/intelbras-devops-transforma-infraestrutura-e-impulsiona-eficiencia-operacional/3.png.webp"
categories: [17,19]
tags: []
author: 4
---

A Intelbras fornece soluções em segurança, controle de acesso, redes, comunicação, além de produtos e serviços relacionados à geração de energia e ao aproveitamento da energia solar.

Com mais de 40 anos de experiência, é referência no mercado, principalmente pelo foco em tecnologia para impulsionar a inovação e enfrentar os desafios do mercado em constante evolução.

 

### **Desafio da Intelbras:** 

A Intelbras precisava estabelecer uma infraestrutura capaz de acompanhar o crescimento e as demandas do seu negócio de energia. Carecia de uma abordagem que garantisse escalabilidade, segurança e confiabilidade em seu ambiente de TI. Por isso, buscou a implementação de soluções de DevOps, visando garantir uma infraestrutura tecnológica robusta e eficiente, a fim de estabelecer processos automatizados de desenvolvimento, entrega e operação, agilizando o ciclo de vida de seus produtos e serviços.

Por meio de uma parceria estratégica com a dataRain, a Intelbras pôde assegurar a capacidade de se adaptar rapidamente às demandas do mercado, fornecendo soluções inovadoras e de alto desempenho aos seus clientes. 

 

### **Soluções AWS aplicadas:** 

A dataRain implementou uma solução baseada em DevOps utilizando uma variedade de serviços AWS. Os principais destaques são: 

- Abordagem Serverless: A Intelbras adotou uma abordagem serverless utilizando AWS Lambda e AWS Fargate. A infraestrutura foi construída com o auxílio do Serverless Framework, que simplifica o processo de implantação por meio do AWS CloudFormation. A arquitetura abrange três zonas de disponibilidade na região de São Paulo. 

- Controle de acesso e segurança: Os desenvolvedores têm acesso programático e ao console com permissões personalizadas, seguindo o princípio do menor privilégio. O AWS Identity Center (anteriormente AWS SSO) fornece autenticação única entre as contas. Os usuários IAM da AWS são usados exclusivamente para acesso aos pipelines, construção de recursos serverless e implantação de aplicativos. 

- Monitoramento e logs: Foi desenvolvida uma aplicação personalizada para monitorar a saúde da aplicação, verificando conexões de banco de dados, conectividade de APIs internas, filas de mensagens e de dead letter. O AWS CloudWatch é a principal ferramenta para coleta e análise de logs, com um painel personalizado. Mudanças na infraestrutura seguem um fluxo de trabalho estruturado usando o Terraform. 

- Testes automatizados: O pipeline inclui testes automatizados com testes unitários em Node.js usando o Vitest. Isso garante a validação das funcionalidades da aplicação. Os grupos de segurança são configurados para permitir apenas conexões necessárias, como acesso ao banco de dados e cluster AWS ECS. Os logs de fluxo da VPC da AWS estão ativados para as contas de produção. O tráfego externo é criptografado usando certificados TLS/SSL gerenciados pelo AWS ACM. A criptografia padrão é habilitada para todos os bancos de dados, aproveitando o AWS RDS e o AWS DynamoDB com chaves de criptografia RSA armazenadas no AWS KMS. 

- Automação de processos: A Intelbras utiliza o Serverless Framework e um pipeline do GitLab para gerenciar alterações, construir a infraestrutura, realizar testes e publicar código. A empresa adere a métricas definidas de RPO (Recovery Point Objective) e RTO (Recovery Time Objective), com snapshots diários para backup e recuperação de falhas de banco de dados. 

 

### **Resultados:** 

 Após a implantação de uma solução de DevOps, a Intelbras obteve os seguintes resultados significativos: 

- Gestão eficiente da infraestrutura: com a adoção do Serverless Framework e ferramentas como AWS Lambda e AWS Fargate, a Intelbras conseguiu gerenciar sua infraestrutura de forma mais eficiente. A automação proporcionada pela solução de DevOps permitiu provisionar e gerenciar recursos de maneira simplificada, garantindo a disponibilidade e otimizando o uso dos serviços em nuvem. 

- Processo de implantação automatizado: Com a solução de DevOps, a Intelbras conseguiu automatizar o processo de implantação de serviços e recursos na nuvem, trazendo maior agilidade na entrega de novas versões de aplicativos e na configuração correta dos ambientes, reduzindo erros humanos e proporcionando maior eficiência operacional. 

- Alta disponibilidade e escalabilidade: Ao distribuir sua arquitetura em três zonas de disponibilidade na região de São Paulo, a Intelbras alcançou maior disponibilidade e escalabilidade dos serviços. A solução de DevOps permitiu o gerenciamento eficaz dessas zonas, garantindo que os serviços estejam sempre disponíveis e escaláveis, mesmo diante do crescimento da demanda. 

- Gerenciamento de configuração e monitoramento aprimorados: Através da adoção de práticas de gerenciamento de configuração e monitoramento, a Intelbras conseguiu garantir uma infraestrutura corretamente configurada e consistente. Isso resultou em maior segurança e estabilidade dos serviços, bem como na identificação proativa de problemas, permitindo uma resposta mais rápida a eventuais incidentes. 

 

### **Sobre a dataRain:**

A dataRain, membro premiado da AWS Partner Network (APN), é uma empresa 100% orientada à computação em nuvem com experiência real, com foco em inovação e transformação digital. Atua fortemente nos setores de Serviços Financeiros, Saúde, Farma, Biotecnologia, Educação e Pesquisa, Governo, Energia e Utilities e Agronegócio. Ostenta cerca de 200 certificações oficiais AWS entre os membros da equipe. Com segurança, confiabilidade, inovação, agilidade e escalabilidade, a dataRain é reconhecida por seu compromisso com o sucesso e o crescimento dos seus clientes e pela excelência técnica de seus serviços.