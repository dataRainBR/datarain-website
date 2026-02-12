---
title: "Website em ambiente de alta performance, disponibilidade e velocidade."
date: "2024-02-06T17:25:42"
slug: "website-em-ambiente-de-alta-performance-disponibilidade-e-velocidade"
excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
featuredImage: "/content-images/cases/website-em-ambiente-de-alta-performance-disponibilidade-e-velocidade/9.png.webp"
categories: [17,19]
tags: []
author: 4
---

A Igreja Pentecostal Deus É Amor (IPDA) é uma instituição pentecostal brasileira de ideologia e fundamentalismo cristão. Tem sua sede na cidade de São Paulo, sendo fundada em 1962 pelo Missionário David Martins Miranda (1936 – 2015) e hoje presidida por sua esposa, Ereni de Oliveira Miranda.

Atualmente conta com mais de 17 mil templos e igrejas espalhadas pelo Brasil e outras milhares distribuídas em 88 países. Seu principal tempo, denominado de Templo da Glória de Deus, é considerada um dos maiores templos evangélicos do mundo.

Segundo as próprias informações da instituição, hoje a IPDA conta com mais de um milhão de fiéis pelo mundo.

### Desafio da IPDA: Indisponibilidade do website durante início da pandemia de Coronavírus

Com o início da quarentena no Brasil para combater os crescentes casos do COVID-19, houve um grande aumento de visitantes ao website da igreja, a fim de acompanhar os cultos que agora eram exibidos online. No pico desse aumento de tráfego no website, chegaram a ser contabilizados mais de 310 mil acessos mensais, sendo que antes da pandemia os picos normalmente chegavam a 150 mil visitas no mês.

Sendo assim, a igreja precisa ajustar sua infraestrutura para atender essas novas demandas. Porém, por ser uma instituição sem fins lucrativos, a IPDA possuía recursos financeiros limitados. Dessa maneira, ela precisava de uma solução escalável, fácil e rápida de ser implementável e que também fornecesse elasticidade para que fosse possível ajustar os recursos conforme a demanda. As tecnologias de computação em nuvem da AWS foram cruciais para manter o website em funcionamento durante o período de alta demanda.

No mês de junho de 2020 houve o evento virtual de aniversário da igreja. Nesse evento foi previsto um tráfego massivo que seria ainda maior do que estava sendo enfrentado durante a quarentena, porém, com a nova infraestrutura do site, não só houve a disponibilidade dos serviços durante todo o evento, como o desempenho do site foi registrado como melhor do que nunca.

### Por que a dataRain

A dataRain possui uma característica marcante que é a constante colaboração entre os integrantes da sua equipe com os integrantes do cliente envolvidos no projeto. Dessa maneira foi construído um forte relacionamento entre a dataRain e a IPDA, de forma que ela se tornou um parceiro de confiança para assuntos relacionados à TI e inovação tecnológica.

Para garantir o sucesso desse projeto a dataRain aceitou resolver algumas pendências vindas do provedor de soluções anterior, como problemas na programação do website, configurações de rede, correções de acessos às bases de dados e suporte na migração do site.

Como disse o Diretor de Tecnologia da dataRain: “Trabalhamos muito próximos do time da IPDA, conseguimos sentir a dor deles, calçar os sapatos do cliente. Essa era a única forma de oferecer a experiência da nuvem que eles merecem.”

### A solução

Objetivos:

- Melhorar a disponibilidade do site

- Aumentar a segurança do site

- Promover segurança na integração no acesso ao active directory

- Provisionar uma infraestrutura elástica para suportar o tráfego massivo de visitantes em poucas horas no evento virtual de aniversário.

### Como fizemos

A IPDA está usando a Amazon Virtual Private Cloud (Amazon VPC) para gerenciar sua própria rede dentro da Cloud, o Amazon Elastic Compute Cloud (Amazon EC2) como plataforma de recursos computacionais, Amazon Route 53 como servidor DNS, o Amazon Cloud Front para criar uma CDN (Content Delivery Network) a fim de otimizar a entrega e o desempenho de conteúdo, Amazon Auto Scaling para estabelecer uma base elasticidade que se ajusta conforme demanda do site e o Amazon ElastiCache para aliviar a carga nos servidores de banco de dados e melhorar seu desempenho.

Também foi integrado ao site o active directory, dessa maneira habilitando a autenticação dos usuários em no backoffice.
Esse projeto, desde sua concepção até a finalização, ocorreu em fevereiro de 2020 e terminou em junho de 2020.

### Marcos do Projeto

Planejamento:

- Assessment ao antigo ambiente de TI.

- Planejamento da entrega.

- Configuração da conta.

- Definição da topologia da rede (VPC – Virtual Private Cloud).

- Distribuição de cargas de trabalho.

- Gerenciamento de identidades e acesso dos usuários.

- Audiencia.

- Criação de novos acessos e atualização de acessos antigos baseados nas novas políticas de segurança.

- Criação e gerenciamento de grupos de política de segurança.

- Autenticação das identidades.

Execução:

- Instalação e Hospedagem do site na nuvem AWS.

- Implementação da nova topologia de rede e comunicação dos servidores de database e servidores web.

- Migração do banco de dados MySQL.

- Migração do servidor web.

- Configuração do CloudFront.

- Configuração do ElastiCache.

- Configuração de certificado SSL.

- Configuração do Autoscaling.

- Testes de carga.

- Configuração do agente do Cloud Watch

- Configuração de regras de Firewalls e sua implementação.

- Definição de registros de domínios e DNS

- Configuração do Backup

### Produtos AWS utilizados:

- Amazon VPN

- Amazon CloudFront

- AWS Auto Scaling

- AWS CloudWatch

- Amazon ElastiCache

- AWS Elemental MediaLive

- AWS Key Management Service (KMS)

- AWS Lambda

- Amazon EC2

- Amazon Route 53

### Resultados

Com vários serviços gerenciados como Amazon Relational Database Service (Amazon RDS), Amazon CloudWatch, Amazon ElastiCache, foi possível maximizar a eficiência da operação e melhorar a disponibilidade do serviço para 99,99%.

Forneceu um aumento de aproximadamente 500% na velocidade de carregamento dos conteúdos das páginas do site graças ao Amazon CloudFront. Conseguiu também, de forma fácil e rápida, implementar diversas funcionalidades da nuvem AWS como alta disponibilidade e controle de políticas de acesso por geolocalização, dessa maneira transmitindo conteúdo de maneira mais segura e eficiente aos visitantes.

Aumentou a segurança do site bloqueando até 2 vezes mais tráfego malicioso que o ambiente anterior.
Além disso, implementou a verdadeira escalabilidade automática, com um tempo de resposta mínimo. Dessa maneira a IPDA passou a operar seus servidores de forma flexível através da possibilidade de contar com mais instancias de EC2 a medida que o tráfego aumenta, diminui ou atravessa altos picos de tráfego.

### Benefícios

Como uma organização sem fins lucrativos possuí recursos financeiros limitados, o modelo comercial de pagamento sob demanda foi um ótimo benefício à organização. Além, claro, de fornecer e democratizar o acesso às mais novas tecnologias de forma economicamente viável.

### Outros benefícios

A tomada de decisões perante períodos sazonais de alta demanda estão mais fáceis de serem tomadas. Dessa maneira, há uma otimização na disponibilidade de serviços e custos e um ambiente que responde automaticamente a alterações na demanda. Comparado com o antigo provedor, hoje tem um ambiente de desempenho estável e preparado para altas demandas.

### Próximos passos:

Incorporação do sistema de doações através do website.