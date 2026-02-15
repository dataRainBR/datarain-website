---
title: "AWS: Serviços digitais diminuem em 50% espera no atendimento público"
date: "2024-08-28T13:59:49"
slug: "cases-prefeitura-americana"
excerpt: "Como a plataforma 1Doc, hospedada na AWS, digitalizou os serviços da prefeitura de Americana, reduzindo em 50% o tempo de aprovação de projetos e economizando mais de R$1 milhão em impressões."
featuredImage: "/content-images/cases/cases-prefeitura-americana/logo-pma-eleicao-2.png"
categories: [17,19,25]
tags: []
author: 4
---

Quando falamos em novas tecnologias para o setor público, imaginamos uma implementação de sistema complicada, com longas agendas de treinamentos que, depois de meses, são concluídas e então uma nova plataforma deve começar a operacionalizar o trabalho.

Na realidade, não precisa, nem deve ser assim. Novas tecnologias devem ser implantadas nos órgãos públicos para facilitar e simplificar o fluxo de resolução de demandas e não para criar um novo modelo de trabalho muitas vezes ainda mais complexo.

Neste post, vamos contar como o **1Doc** ajudou a prefeitura da cidade de **Americana**, localizada no estado de São Paulo, a fazer uma informatização completa dos serviços prestados por todos os órgãos e secretarias da administração municipal.

## O Desafio

Até março de 2020, a prefeitura de Americana tramitava todos os processos do município de forma analógica, o que gerava mais gastos aos cofres públicos, tornava a resolução de demandas mais burocrática, agredia o meio ambiente e ainda resultava em um tempo de espera alto na tratativa das solicitações da população.

## A Solução

A arquitetura, em alta disponibilidade, do 1Doc utiliza diversos serviços AWS:

Para guardar os dados da aplicação é usado o **Amazon Aurora**. Cada emissão gerada é salva no banco, bem como toda a estrutura de clientes, seus setores, usuários e pessoas/contatos. No banco, é armazenada a referência aos anexos, que são enviados ao **Amazon S3**, que também armazena os códigos estáticos da aplicação. O **Amazon RDS** era utilizado até o início de 2020, porém, com a chegada do Amazon Aurora na região de São Paulo, foi realizada a migração — chamando a atenção para a melhor performance e o fato de não precisar alocar disco para garantir IOPS. Para as read réplicas, foi criada uma função com o **AWS Lambda** a fim de realizar a escala baseada em horário.

Há uma camada de cache utilizando o **Amazon ElastiCache** para Redis, onde há economia na consulta diretamente ao banco de dados — local no qual grande parte das informações que são consumidas pela aplicação estão armazenadas. Há também uma camada criada para realização de buscas textuais por meio do **Amazon ElastiCache**.

A arquitetura se beneficia, ainda, de serviços como **Elastic Load Balancing** para balanceamento do tráfego de requisições da aplicação, **Amazon Elastic Container Service** para os serviços da aplicação executarem de forma escalável com containers, **Amazon SQS** para operações de uso de informações assíncronas, **Amazon CloudWatch** para o monitoramento e centralização das métricas e gráficos de todos os serviços da solução, e o uso de ferramentas de desenvolvedor na AWS para criar um pipeline de desenvolvimento.

## Pipeline de Desenvolvimento

Para ter um processo de integração e entrega contínua, o 1Doc utiliza serviços da AWS:

No versionamento do código é utilizada a hospedagem do **Bitbucket**, totalmente integrada com os serviços AWS, sendo o **AWS CodePipeline** responsável pela orquestração do pipeline, o **AWS CodeBuild** para a construção dos artefatos (containers) — posteriormente armazenados no **Amazon Elastic Container Registry**, o **AWS CodeDeploy** para a realização do deployment, tanto em staging no **Amazon EC2** e, caso aprovado pela equipe de QA, como em produção no **Amazon Elastic Container Service**.

## Resultados

Com a transformação digital, o município passou a adotar uma comunicação digital, possibilitando ao munícipe o contato e pedido de demandas ao poder municipal a qualquer hora do dia — sem que haja a necessidade de deslocamento físico.

A plataforma começou a operar em março de 2020, e a implantação aconteceu de forma **100% remota**, com as reuniões ocorrendo por meio de videoconferências, bem como todo o treinamento realizado via educação à distância.

- A prefeitura abriu mais de **450.000 atendimentos digitais**, representando **85%** de todos os atendimentos realizados desde o início do projeto
- Reduziu em **10 vezes** o tempo para emissão de uma certidão negativa de débitos
- Os processos de análises de projeto e construção digitais já representam **99,9%** dos atendimentos
- O município conta com **159 tipos de documentos** e até o momento já foram analisados mais de **6.000 projetos**
- A digitalização rendeu uma diminuição de **50% no tempo médio** de aprovação de projetos
- A ouvidoria já registrou quase **12 mil atendimentos** via 1Doc, representando quase **50%** dos atendimentos
- A prefeitura conta atualmente com **630 serviços online** e tem o workplace de atendimento mais acessado entre os clientes 1Doc
- A iniciativa já poupou mais de **10.000.000 de impressões**, resultando em mais de **R$1.000.000,00 em economia** aos cofres públicos e uma redução drástica no tempo de resolução de demandas
