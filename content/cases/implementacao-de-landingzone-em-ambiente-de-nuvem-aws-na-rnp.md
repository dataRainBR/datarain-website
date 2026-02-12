---
title: "Implementação de LandingZone em ambiente de nuvem AWS na RNP"
date: "2024-06-25T20:41:44"
slug: "implementacao-de-landingzone-em-ambiente-de-nuvem-aws-na-rnp"
excerpt: "A nova estrutura de contas AWS foi definida para atender às necessidades da RNP, incluindo unidades  organizacionais para gerenciamento de segurança, recursos compartilhados e contas específicas para  gestão de usuários e acessos."
featuredImage: "/content-images/cases/implementacao-de-landingzone-em-ambiente-de-nuvem-aws-na-rnp/logo.png"
categories: [17,19,20]
tags: []
author: 4
---

A Rede Nacional de Ensino e Pesquisa (RNP) é uma plataforma de comunicação e colaboração digital que
trabalha para promover e implementar a inovação em aplicações de tecnologia da informação. Sua atuação abrange o setor público, focando especialmente na área de Educação, e está intimamente ligada ao uso de tecnologia. 

# DESAFIOS

A infraestrutura de nuvem da RNP, estabelecida em 2018, apresentava lacunas significativas em termos de segurança e conformidade com as melhores práticas da AWS. Desafios incluíam a utilização de uma
Landing Zone desatualizada, incompatibilidade da estrutura de contas com o crescimento da organização
e dificuldades na gestão de usuários e acessos.

**Principais dores: **Falta de um baseline de segurança para o ambiente AWS, estrutura de contas defasada e gestão de usuário e acessos trabalhosa.

A Landing Zone da RNP carecia de configurações essenciais, como criptografia centralizada de logs do
CloudTrail e políticas de controle de serviços (SCPs). A dataRain propôs uma reestruturação da Landing
Zone, em colaboração com a equipe técnica da RNP, para implementar as configurações adequadas do
AWS Control Tower e resolver esses pontos de fragilidade.

# Solução

A nova estrutura de contas AWS foi definida para atender às necessidades da RNP, incluindo unidades
organizacionais para gerenciamento de segurança, recursos compartilhados e contas específicas para
gestão de usuários e acessos.

Além da reestruturação da organização, foram realizadas diversas atividades durante o projeto, como
configuração da nova Landing Zone, implementação de políticas de controle de serviços (SCPs) e federação de usuários entre Azure ADFS e AWS IAM Identity Center.

## Serviços nativos de segurança

Para fortalecer a segurança da infraestrutura, a dataRain recomendou a adoção de diversos serviços nativos da AWS, incluindo Control Tower, CloudTrail, Config, IAM Identity Center, entre outros. Esses serviços foram escolhidos para garantir um alto padrão de segurança e conformidade com as diretrizes da AWS.

# Benefícios da Solução 

- **Reestruturação da Landing Zone: **Segurança e escalabilidade aprimoradas na nuvem AWS.

- **Configuração de contas e recursos:** Organização eficiente e segura das contas AWS.

- **Atualização da federação de usuários: **Integração AD-AWS simplificada e automatizada.

- **Melhorias na governança de segurança: **Controles robustos contra ameaças implementados.

- **Configuração de serviços nativos de segurança:** Proteção aprimorada com serviços AWS essenciais.

- **Automatização e simplificação de processos: **Redução drástica do trabalho operacional na gestão de acessos.

**Maior conformidade com exigências regulatórias:** Conformidade garantida com políticas de retenção de logs.

Isso gerou uma **eficiência de 200% a mais na configurações das contas atuais** e já definimos um padrão de configuração que manterá as diretrizes de segurança e redes sempre atualizadas em toda organização AWS da RNP.

Assim o processo para criação de novas contas se tornou **2x mais rapido pois com as configurações pre definidas e utilizando o AWS organizations** para a administração centralizada.

# Próximos Passos

Para elevar ainda mais a maturidade de segurança na nuvem AWS da RNP, a dataRain sugeriu uma série de atividades adicionais, incluindo a implementação de políticas de tags e backup, definição de estratégia de Disaster Recovery, entre outras iniciativas para fortalecer a segurança e a conformidade da infraestrutura.