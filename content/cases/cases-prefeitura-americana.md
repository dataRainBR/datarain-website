---
title: "AWS: Serviços digitais diminuem em 50% espera no atendimento público"
date: "2024-08-28T13:59:49"
slug: "cases-prefeitura-americana"
excerpt: "Neste post, vou contar como a 1Doc ajudou a prefeitura da cidade de Americana, localizada no estado de São Paulo, a fazer uma informatização completa dos serviços prestados por todos os órgãos e secretarias da administração municipal."
featuredImage: "/content-images/cases/cases-prefeitura-americana/logo-pma-eleicao-2.png"
categories: [17,19,25]
tags: []
author: 4
---

Quando falamos em novas tecnologias [para o setor público](https://www.datarain.com.br/solucoes/terceiro-setor/), imaginamos uma implementação de sistema complicada, com longas agendas de treinamentos que, depois de meses, são concluídas e então uma nova plataforma deve começar a operacionalizar o trabalho.

Na realidade, não precisa, nem deve ser assim. Novas tecnologias devem ser implantadas nos órgãos públicos para facilitar e simplificar o fluxo de resolução de demandas e não para criar um novo modelo de trabalho muitas vezes ainda mais complexo.

Neste post, vou contar como a 1Doc ajudou a prefeitura da cidade de Americana, localizada no estado de São Paulo, a fazer uma informatização completa dos serviços prestados por todos os órgãos e secretarias da administração municipal.

## **O DESAFIO**

Até março de 2020, a prefeitura de Americana tramitava todos os processos do município de forma analógica, o que gerava mais gastos aos cofres públicos, tornava a resolução de demandas mais burocrática, agredia o meio ambiente e ainda resultava em um tempo de espera alto na tratativa das solicitações da população.

**A SOLUÇÃO**

A arquitetura, em alta disponibilidade, do 1Doc é descrita na figura abaixo:

 

Para guardar os dados da aplicação é usado o [Amazon Aurora](https://www.datarain.com.br/blog/o-que-e-amazon-aurora/). Cada emissão gerada é salva no banco, bem como toda a estrutura de clientes, seus setores, usuários e pessoas/contatos. No banco, é armazenada a referência aos anexos, que são enviados ao [Amazon S3](https://www.datarain.com.br/blog/tecnologia-e-inovacao/o-que-e-amazon-s3/), que também armazena os códigos estáticos da aplicação. [A Amazon RDS](https://www.datarain.com.br/blog/o-que-e-amazon-rds/) era utilizado até o início de 2020, porém, com a chegada do Amazon Aurora na região de São Paulo, foi realizada a migração – chamando a atenção para a melhor performance e o fato de não precisar alocar disco para garantir IOPS. Para as read réplicas, foi criada uma função com o [AWS Lambda](https://www.datarain.com.br/blog/o-que-e-aws-lambda/) a fim de realizar a escala baseada em horário.

Há uma camada de cache utilizando o Amazon ElastiCache para Redis, onde há economia na consulta diretamente ao banco de dados – local no qual grande parte das informações que são consumidas pela aplicação estão armazenadas. Há também uma camada criada para realização de buscas textuais por meio do Amazon ElastiCache.

A arquitetura se beneficia, ainda, de serviços como [Elastic Load Balance](https://www.datarain.com.br/blog/tecnologia-e-inovacao/amazon-elastic-load-balancer-elb/) para balanceamento do tráfego de requisições da aplicação Amazon Elastic Container Service para os serviços da aplicação executarem de forma escalável com containers, Amazon SQS para operações de uso de informações assíncronas, Amazon CloudWatch para o monitoramento e centralização das métricas e gráficos de todos os serviços da soluções e o uso de ferramentas de desenvolvedor na AWS para criar um pipeline de desenvolvimento.

**Pipeline de Desenvolvimento**
Para ter um processo de integração e entrega contínua, o 1Doc utiliza serviços da AWS, como mostra a figura abaixo:

 

Já no versionamento do código é utilizada a hospedagem do Bitbucket, totalmente integrada com os serviços AWS, sendo o AWS CodePipeline responsável pela orquestração do pipeline, o AWS CodeBuild para a construção dos artefatos (containers) – posteriormente armazenados no Amazon Elastic Container Registry, o AWS CodeDeploy para a realização do deployment, tanto em staging no Amazon EC2 e, caso aprovado pela equipe de QA, como em produção no Amazon Elastic Container Service.

**O RESULTADO**

Com a transformação digital, o município passou a adotar uma comunicação digital, possibilitando ao munícipe o contato e pedido de demandas ao poder municipal a qualquer hora do dia – sem que haja a necessidade de deslocamento físico. Ou seja, ele poderá fazer qualquer solicitação [direto de casa.](https://www.datarain.com.br/blog/tecnologia-e-inovacao/armanezamento-nuvem-pandemia/)

A plataforma começou a operar em março de 2020, e a implantação da plataforma aconteceu de forma 100% remota, com as reuniões ocorrendo por meio de videoconferências, bem como todo o treinamento realizado via educação à distância.

A prefeitura de Americana abriu mais de 450.000 atendimentos digitais, representando 85% de todos os atendimentos realizados pela prefeitura desde o início do projeto e reduziu em 10 vezes o tempo para emissão de uma certidão negativa de débitos.

Os processos de análises de projeto e construção digitais já representam 99,9% dos atendimentos. O município conta com 159 tipos de documentos e até o momento já foram analisados mais de 6.000 projetos. Além disso, a digitalização rendeu uma diminuição de 50% no tempo médio de aprovação de projetos.

A ouvidoria do município, que anteriormente era atendida via telefone ou atendimento presencial, já registrou quase 12 mil atendimentos via 1Doc, representando quase 50% destes atendimentos. A prefeitura conta atualmente com 630 serviços online e tem o workplace de atendimento mais acessado entre os clientes 1Doc.

Esta iniciativa já poupou mais de 10.000.000 de impressões, resultando em mais de R$1.000.000,00 em economia aos cofres públicos e uma redução drástica no tempo de resolução de demandas.

		
					

	

### Resultados:

- 40% de aumento na eficiência operacional

- 30% de redução de custos totais

- 25% de salto na disponibilidade geral

### Próximos Passos:

**Expansão da nuvem AWS: **Está sendo avaliada a adoção da nuvem AWS em outras áreas, como pesquisa e ensino, visando potencializar a eficiência e a inovação em toda a instituição.

**Exploração de novas tecnologias:**

Inteligência artificial: para aprimorar a análise de dados e o diagnóstico de doenças;

Blockchain: para garantir a segurança e a confiabilidade dos dados dos pacientes;

IoT: para monitorar pacientes em tempo real e melhorar a qualidade do atendimento.