---
title: "A PQ moderniza sua infraestrutura de dados industriais com uma arquitetura escalável na AWS."
date: "2025-09-17T14:18:18"
slug: "a-pq-moderniza-sua-infraestrutura-de-dados-industriais-com-uma-arquitetura-escalavel-na-aws"
excerpt: "Como a PQ modernizou a coleta de dados industriais com uma arquitetura serverless na AWS, reduzindo latência e ganhando autonomia operacional no chão de fábrica."
featuredImage: "/content-images/cases/a-pq-moderniza-sua-infraestrutura-de-dados-industriais-com-uma-arquitetura-escalavel-na-aws/pq-logo.jpg"
categories: [17,21]
tags: []
author: 4
---

| Cliente | Setor | Resultado |
|---------|-------|-----------|
| PQ | Indústria Química | Redução de latência e autonomia operacional com arquitetura serverless na AWS |

## Como a PQ modernizou a coleta de dados industriais

No setor químico, onde a precisão e a eficiência são decisivas para a competitividade, a **PQ** sempre buscou inovar. Com mais de quatro décadas de atuação e presença em segmentos que vão do tratamento de água à indústria automotiva, a empresa já nasceu com DNA inquieto. Mas, como toda organização em crescimento acelerado, chegou o momento em que a infraestrutura digital precisava dar um salto.

## Quando a eficiência esbarra nos sistemas legados

A PQ gerenciava seus dados industriais com um historiador tradicional, complementado pelo **Kepware** e pelo **TimescaleDB** na AWS. Por anos, essa combinação manteve estabilidade e confiabilidade.

Com o crescimento da empresa, porém, surgiram limitações: a administração desse sistema histórico era complexa, exigindo especialistas e concentrando boa parte da lógica de negócios no próprio ambiente, o que dificultava evoluções. Além disso, o modelo de licenciamento não acompanhava a dinâmica do negócio, que pedia flexibilidade e custos sob demanda — pontos fortes da nuvem AWS.

O desafio ficou claro: simplificar a gestão dos dados industriais, dar mais autonomia aos times e potencializar os recursos já presentes na infraestrutura AWS, migrando para um modelo mais ágil e escalável.

## A parceria com a dataRain: reestruturando o pipeline industrial

Com o desafio de reconstruir toda a cadeia de captura, tratamento e visualização de dados industriais, a proposta era clara: manter a qualidade e confiabilidade das informações, mas com uma arquitetura mais leve, distribuída e inteligente.

A estratégia apostou em três pilares:

- Processar localmente apenas o necessário (na borda), reduzindo latência e tráfego desnecessário
- Transportar os dados de forma segura e contínua para a nuvem
- Utilizar serviços **serverless** e escaláveis da AWS, com custos alinhados ao uso real e suporte a múltiplas requisições simultâneas

## Arquitetura fluida: da fábrica à nuvem, sem gargalos

Tudo começa onde os dados nascem: no chão de fábrica. Sensores e máquinas enviam dados continuamente para PLCs. Um gateway IoT com **Kepware** capta essas informações e as transmite para o **Amazon Greengrass**, que executa scripts em Python para filtragem e pré-processamento dos dados.

O fluxo segue para o **Amazon Kinesis**, que gerencia o volume em tempo real. Em seguida, funções **AWS Lambda** automatizam a ingestão dos dados no **TimescaleDB**, banco otimizado para séries temporais.

Os dados mestres ficam centralizados em um ambiente **Microsoft SQL Server**, acessível via Excel. Na ponta, a plataforma **Seeq** transforma tudo em dashboards e análises visuais.

## Resultados na prática: da complexidade à fluidez operacional

Com a nova arquitetura, a PQ ganhou uma visão clara e acionável da operação. Dados que antes demoravam a chegar agora fluem quase em tempo real, com dashboards acessíveis e confiáveis.

O primeiro impacto foi a **redução da latência**: informações chegam prontas para análise, sem ruídos ou sobrecarga. Isso acelerou a manutenção preditiva e o acompanhamento de performance, sem depender de intermediários.

O processamento inteligente na borda cortou o tráfego de dados irrelevantes. Resultado: menor custo de transporte, menos execuções desnecessárias na nuvem e um pipeline mais enxuto.

Menos latência, mais decisões em tempo real.

## Parceria que faz a diferença

> "*A dataRain tem sido nossa parceira estratégica há alguns anos e esteve ao nosso lado em todos os projetos de sucesso da jornada de transformação de dados da PQ, contribuindo com excelência, inovação e dedicação para que cada etapa se tornasse realidade.*"
> — Adriana Adrioli, IT Manager at PQ

## Autonomia e escalabilidade

Os times internos ganharam mais autonomia. Com dados mestres no **SQL Server** e acesso via Excel, engenheiros consultam e atualizam informações sem depender de sistemas legados ou especialistas externos.

Tudo isso com uma arquitetura elástica, baseada em serviços **serverless** da AWS, que acompanha e suporta o crescimento contínuo da operação.
