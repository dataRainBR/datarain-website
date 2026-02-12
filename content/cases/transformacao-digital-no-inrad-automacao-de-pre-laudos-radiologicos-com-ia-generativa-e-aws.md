---
title: "Transformação Digital no InRad: Automação de Pré-Laudos Radiológicos com IA Generativa e AWS"
date: "2025-03-11T10:51:38"
slug: "transformacao-digital-no-inrad-automacao-de-pre-laudos-radiologicos-com-ia-generativa-e-aws"
excerpt: "O Instituto de Radiologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (InRad) é um centro de referência em diagnóstico por imagem e oncologia terapêutica, com atuação voltada a ensino, pesquisa e assistência. Para sustentar a qualidade do atendimento, o InRad investe continuamente em infraestrutura, tecnologia e capacitação de equipes, [&#8230;]"
featuredImage: ""
categories: [18,17,1]
tags: []
author: 10
---

O Instituto de Radiologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (InRad) é um centro de referência em diagnóstico por imagem e oncologia terapêutica, com atuação voltada a ensino, pesquisa e assistência. Para sustentar a qualidade do atendimento, o InRad investe continuamente em infraestrutura, tecnologia e capacitação de equipes, além de desenvolver parcerias que viabilizam projetos inovadores.

O Instituto conta com estruturas como o Centro de Diagnóstico por Imagem das Doenças da Mama (CEDIM) e o Núcleo Técnico-Científico de Diagnóstico por Imagem (NDI), responsável por iniciativas de digitalização e distribuição de imagens, ampliando o acesso às informações em diferentes unidades do hospital. Anualmente, são realizados cerca de **330 mil exames de alta complexidade** no Instituto.

## Contexto do Projeto

O projeto foi iniciado com o objetivo de automatizar a geração de **pré-laudos radiológicos** utilizando **IA Generativa (GenAI)**, elevando produtividade e padronização na etapa de elaboração do laudo.

A **dataRain Consulting** foi responsável por liderar a implementação e evoluir a solução, garantindo maior robustez técnica e adequação ao fluxo clínico do hospital.

## Objetivo Principal

Criar uma solução baseada em GenAI que agregue valor ao trabalho dos radiologistas, utilizando diferentes fontes de dados (formulários médicos, pedidos de exame e históricos clínicos) para otimizar e padronizar a elaboração de laudos radiológicos.

## Principais Desafios Identificados

**1. Processo Manual:** O fluxo inicial envolvia muitas etapas manuais, dificultando a escalabilidade e a adoção da solução.
**2. Volume de Dados:** A primeira iteração do projeto contou com apenas 1000 pacientes, o que foi considerado insuficiente para validação robusta do modelo de IA.
**3. Integração com Sistemas:** O sistema precisava ser integrado ao MV (prontuário eletrônico utilizado no hospital), mas a definição do escopo de integração ainda estava em andamento.
**4. Qualidade das Sumarizações:** A equipe identificou que os pré-laudos gerados não estavam suficientemente detalhados, demandando aprimoramentos.

## Arquitetura da Solução

**1. Integração com PEP e PACS:** As informações dos diversos documentos gerados pelo MV são ingeridas, processadas e disponibilizadas para os médicos no sistema de PACS.
**2. Armazenamento e Processamento:** Os dados são armazenados no Amazon S3 e processados por AWS Step Functions e AWS Lambda, que organizam e anonimiza os arquivos por paciente.
**3. Geração do Pré-Laudo:** Um modelo LLM da Amazon Bedrock recebe os dados e gera um sumário clínico do paciente.
**4. Validação e Acesso:** Os médicos acessam os pré-laudos por meio de um link armazenado no S3. A informação é então validada antes de ser incorporada ao fluxo clínico.
**5. Segurança e Compliance:** Após a validação, os dados são removidos do ambiente AWS para garantir conformidade com regras de segurança do hospital.

## Resultados Iniciais

- 83,3% dos sumários gerados receberam nota 4 ou 5 (máxima)

- 93,3% dos sumários foram considerados livres de alucinações (erro comum em modelos de IA)

- Economia de tempo para os radiologistas, que passaram a visualizar informações organizadas de forma mais rápida e estruturada.