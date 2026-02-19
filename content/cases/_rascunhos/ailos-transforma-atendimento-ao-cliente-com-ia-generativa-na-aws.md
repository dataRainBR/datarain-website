---
title: "Ailos transforma atendimento ao cliente com IA Generativa na AWS"
date: "2025-07-01T00:00:00"
slug: "ailos-transforma-atendimento-ao-cliente-com-ia-generativa-na-aws"
excerpt: "Como o Sistema Ailos implementou um copiloto de IA Generativa com Amazon Bedrock para apoiar atendentes do SAC, buscando reduzir o tempo médio de atendimento em 80 mil interações mensais."
featuredImage: "/content-images/cases/ailos-transforma-atendimento-ao-cliente-com-ia-generativa-na-aws/ailos-logo.png"
categories: [17,18,1]
tags: []
author: 4
pilar: "GenAI e Dados"
oferta: "GenAI e ML"
setor: "Financeiro"
---

O **Sistema Ailos** é uma cooperativa de crédito com múltiplas filiadas, dedicada a oferecer soluções financeiras acessíveis e personalizadas para seus cooperados. Com uma operação de atendimento robusta, o Ailos processa uma média de **80 mil atendimentos mensais** entre ligações telefônicas e WhatsApp.

## Desafio

O SAC do Ailos enfrentava dificuldades que impactavam diretamente a experiência dos cooperados:

- **Alto TMA** (Tempo Médio de Atendimento) — atendentes precisavam consultar múltiplas fontes para encontrar informações
- **TME elevado** no WhatsApp — tempo de espera acima do desejado
- **Taxa de abandono significativa** — cooperados desistindo antes de serem atendidos
- **Falta de padronização** nas respostas entre diferentes atendentes
- **Base de conhecimento fragmentada** — informações dispersas por cooperativa e produto (Cartões, Canais de Relacionamento, Conta)
- Necessidade de conformidade com **LGPD**, criptografia **TLS 1.2+** e **AES-256**, e mascaramento automático de dados sensíveis

## Solução

A **dataRain** desenvolveu um piloto de **IA Generativa** aplicado ao SAC, utilizando **Amazon Bedrock** como motor de inteligência artificial. A solução consiste em um **agente virtual inteligente (copiloto)** integrado ao **Microsoft Teams**, que sugere respostas contextualizadas aos atendentes em tempo real.

**Arquitetura RAG (Retrieval-Augmented Generation)**

- **Amazon Bedrock Knowledge Bases** como motor de busca semântica
- **Amazon OpenSearch** como banco vetorial para embeddings
- **Cohere** como modelo de embeddings para representação semântica dos documentos
- **Chunking hierárquico**: chunks primários de **512 tokens** com overlap de **64 tokens**, child chunks de **256 tokens**
- Manual de atendimento de **~1.500 páginas** convertido para Markdown, com **50% do conteúdo em imagens** processadas via OCR com **Claude Sonnet** para geração de descrições textuais
- **Amazon S3** para repositório de conhecimento versionado e segmentado

**Pipeline do Agent (4 fases)**

- **Pre-processing**: classificador que filtra entradas em 5 categorias (maliciosa, manipulação, fora do escopo, respondível via manual, resposta a pergunta anterior)
- **Orquestração**: extrai e valida contexto da conversa, otimiza chamadas de função, segue regras rígidas de não assumir parâmetros
- **KB Response Generation**: responde apenas com informações dos resultados de busca do manual, formato estruturado XML com sources
- **Post-processing**: transforma resposta bruta em formato final (Resposta Direta, Passo-a-Passo, Informações Complementares, Taxa de Certeza)

**Infraestrutura e segurança**

- **Amazon Bedrock** como LLM, com flexibilidade para troca de modelo (Anthropic, Mistral, Meta)
- **Middleware** para integração com sistemas legados do Ailos
- Módulo de **autenticação AD** para controle de acesso
- **Cache inteligente** para otimizar chamadas à API Bedrock
- **CloudWatch** para monitoramento, **WAF** para proteção, **KMS** para criptografia

**Funcionalidades do copiloto**

- Sugestão de respostas em tempo real durante atendimentos WhatsApp e telefone
- **Feedback thumbs up/down** para melhoria contínua do modelo
- **Fallback** para especialista humano quando necessário
- Histórico completo de interações
- Suporte **multilíngue** (PT/EN/ES)
- **Content filtering** e circuit breaker para segurança
- **Feature flags** para rollout gradual


## Métricas do piloto

O piloto foi validado com perguntas reais do SAC, cobrindo os principais temas de atendimento:

- **Cartões de crédito**: fatura, limite, bloqueio, estorno, parcelamento, débito automático
- **Conta e aplicativo**: senhas, bloqueio de acesso, limites de pagamento/transferência/PIX/TED
- **Operações**: contestação de PIX, erros no app, consultas gerais

Métricas iniciais do piloto:
- **Recall (cobertura)**: 45% — a IA encontra resposta em quase metade das perguntas
- **Accuracy (precisão)**: 50% das respostas encontradas estão corretas
- **Desafio principal**: ~50% do manual é composto por imagens, exigindo OCR e descrição visual

As metas de evolução visam atingir **≥ 90% de acurácia** e **≤ 10% de alucinação** com refinamento contínuo da base de conhecimento e dos prompts do Agent.

## Governança de IA

O projeto inclui um framework robusto de governança:

- **Comitê de IA** para decisões estratégicas sobre o uso da tecnologia
- **Curadoria contínua** da base de conhecimento
- **Logs auditáveis** de todas as interações com o modelo
- **Framework de IA** para escalonamento futuro a outros canais e processos
- **CI/CD** com testes automatizados para evolução segura da solução

## Metas e critérios de aceite

- **Acurácia de resposta** ≥ 90%
- **Taxa de alucinação** ≤ 10%
- **Tempo de resposta** < 10 segundos
- **Disponibilidade** 99,5%
- Suporte a **100 consultas simultâneas**
- **Satisfação** ≥ 90% dos usuários piloto
- Validação com grupo piloto de **5 a 10 atendentes**

## Resultados esperados

- **Redução do TMA** — atendentes com acesso instantâneo a informações contextualizadas
- **Redução do TME** — respostas mais rápidas diminuem a fila de espera
- **Aumento do CSAT** — respostas padronizadas e precisas melhoram a satisfação
- **Redução do custo por atendimento** — eficiência operacional com IA
- **Melhoria do FCR** (First Call Resolution) — mais problemas resolvidos no primeiro contato
- **Redução da taxa de abandono** — atendimento mais ágil retém cooperados na fila
