---
title: "Grupo Autoglass Eleva Governança e Segurança na AWS com Implementação de Landing Zone  "
date: "2025-10-14T09:41:09"
slug: "grupo-autoglass-eleva-governanca-e-seguranca-na-aws-com-implementacao-de-landing-zone"
excerpt: "Como o Grupo Autoglass implementou uma Landing Zone na AWS para segmentar cinco unidades de negócio em contas dedicadas, elevando governança, segurança e rastreabilidade de custos com AWS Control Tower e Organizations."
featuredImage: "/content-images/cases/grupo-autoglass-eleva-governanca-e-seguranca-na-aws-com-implementacao-de-landing-zone/logo-autoglass-RGB_LOGO-ORIGINAL-para-fundos-claros-3.png"
categories: [33,17,19,20]
tags: []
author: 4
youtubeVideoId: "Q8w1PnnrjaA"
pilar: "Cybersecurity"
oferta: "Landing Zone"
setor: "Indústria"
---

O Grupo Autoglass é um ecossistema de soluções que vai além do setor automotivo. Sua história começou com a **Autoglass**, referência em vidros e peças automotivas, presente em mais de 85 lojas no Brasil e na Colômbia e com um e-commerce em constante crescimento. 

O grupo expandiu sua atuação para outros segmentos e hoje é composto por: a **Maxpar**, especializada em assistências para seguradoras; e a **B4B.tech**, unidade de tecnologia focada em digitalização e BPO de operações de seguros. 

A diversidade e a autonomia de cada unidade de negócio, aliadas à crescente complexidade de sua operação de TI, motivaram a busca por uma infraestrutura mais moderna, segura e escalável, resultando na parceria para a implementação da Landing Zone. 

## **Quais eram os desafios?**  

O Grupo buscava aprimorar seu ambiente AWS para atender às demandas de um negócio em crescimento e cada vez mais dependente de tecnologia. As cerca de seis contas AWS existentes eram compartilhadas entre cinco diferentes Business Units (BUs), o que gerava a necessidade de maior autonomia para cada unidade. Do ponto de vista técnico, havia dificuldades para garantir o isolamento entre os recursos e a segurança das aplicações. Organizacionalmente, a falta de controle sobre os gastos de cada BU dificultava a alocação de custos e a governança financeira. Além disso, a infraestrutura apresentava controles de segurança insuficientes para sua complexidade, como a ausência de controle sobre as regiões AWS utilizadas, a descentralização dos logs de segurança e a falta de políticas preventivas e detectivas no nível da organização. O Grupo buscava uma solução que proporcionasse autonomia e flexibilidade para cada BU, sem comprometer a segurança e a rastreabilidade de custos.   

## **Que solução foi implementada?**   

Para resolver esses desafios, foi implementada uma **Landing Zone** no ambiente AWS, seguindo as melhores práticas da AWS, com adaptações para atender às necessidades específicas do cliente. A solução incluiu a criação de Unidades Organizacionais (OUs) segmentadas, como uma OU exclusiva para a conta Master, outra para serviços de infraestrutura e uma para contas excluídas, com políticas de segurança específicas para cada uma. Além disso, foram criadas contas dedicadas para gerenciar serviços como backups, acessos (IAM Identity Center) e configurações de rede. A solução também envolveu a configuração de serviços nativos de segurança, como AWS CloudTrail, AWS Config, AWS GuardDuty, AWS Security Hub e AWS Backup, para aumentar a maturidade de segurança do ambiente. Políticas de backups e tags foram implementadas para garantir a centralização das cópias de segurança e a rastreabilidade dos custos por BU.   

**Um dos grandes diferenciais desse projeto foi o atendimento próximo e colaborativo da nossa equipe da dataRain.** Em vez de simplesmente substituir o time do cliente, **trabalhamos lado a lado com seus profissionais, capacitando-os e transferindo conhecimento ao longo de todo o processo**. Isso incluiu treinamentos práticos, documentação detalhada e suporte contínuo para garantir que o time interno do cliente pudesse operar e manter a nova infraestrutura com autonomia e confiança. Essa abordagem incluiu uma série de reuniões e sessões colaborativas com o time do cliente, onde juntos foram alinhadas expectativas, definido prioridades e implementação das soluções. Esse processo fortaleceu a capacidade técnica do cliente e criou uma relação de parceria e confiança mútua, garantindo que o time interno estivesse plenamente capacitado para gerenciar a nova infraestrutura com autonomia.

## **Quais foram os benefícios gerados?**

A implementação da Landing Zone trouxe resultados significativos:   

- **Segmentação e isolamento do ambiente**: As BUs passaram a operar em contas AWS exclusivas, garantindo isolamento e segurança entre os recursos.   

- **Governança aprimorada**: A aplicação de políticas de segurança (SCPs) e a configuração de serviços como AWS Control Tower e AWS Organizations aumentaram a governança do ambiente.   

- **Maior maturidade de segurança**: A configuração de serviços como GuardDuty, Security Hub e CloudTrail elevou os níveis de segurança e monitoramento.   

- **Rastreabilidade de custos**: A política de tags permitiu a alocação precisa dos custos por BU, facilitando a gestão financeira.   

- **Agilidade no provisionamento**: A funcionalidade Account Factory do AWS Control Tower agilizou a criação de novas contas, garantindo consistência e segurança.   

- **Capacitação do time interno**: O trabalho colaborativo e a transferência de conhecimento garantiram que o time do cliente estivesse preparado para gerenciar e operar a nova infraestrutura com autonomia.   

##  **Conclusão** 

Com a implementação da nova Landing Zone, o Grupo Autoglass consolidou uma infraestrutura exemplar, alinhada às melhores práticas do mercado e totalmente preparada para sustentar seu crescimento. Hoje, **a organização opera com um nível de segurança acima da média da maioria das empresas**, garantindo proteção avançada para seus dados e aplicações. Além disso, conta com um time maduro, capacitado e dedicado, capaz de administrar e evoluir o ambiente com autonomia e excelência, reforçando a posição de liderança e confiança da empresa no setor automotivo.