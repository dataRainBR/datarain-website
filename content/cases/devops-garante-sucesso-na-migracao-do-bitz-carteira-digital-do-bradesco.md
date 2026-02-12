---
title: "DevOps garante sucesso na migração do Bitz, carteira digital do Bradesco "
date: "2024-02-06T17:07:08"
slug: "devops-garante-sucesso-na-migracao-do-bitz-carteira-digital-do-bradesco"
excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
featuredImage: "/content-images/cases/devops-garante-sucesso-na-migracao-do-bitz-carteira-digital-do-bradesco/5.png.webp"
categories: [17,19]
tags: []
author: 4
---

O Bitz é a carteira digital do Banco Bradesco. Uma inovação da instituição financeira tradicional que conta com quase 80 anos de mercado. A plataforma moderna de conta de pagamento grátis é operada via aplicativo de smartphone, com isso busca oferecer uma experiência contemporânea e segura para seus usuários, refletindo os valores de confiabilidade e credibilidade do Bradesco. 

### **Desafio do Bitz:** 

O desafio enfrentado pelo Bitz era migrar sua infraestrutura para a nuvem da AWS em um curto prazo, visando transacionar em um novo ambiente durante a última edição da Black Friday. Era necessário garantir a continuidade das operações financeiras de forma inovadora, com menor custo e sem abrir mão da segurança. 

No contexto do desafio enfrentado pelo Bitz, a abordagem DevOps foi fundamental para garantir o sucesso da implantação e migração para a nuvem AWS. DevOps é uma cultura e conjunto de práticas que integra as equipes de desenvolvimento de software e operações de TI, visando a entrega contínua de valor aos usuários finais. 

### **A Implantação:** 

A dataRain, umas das principais parceiras da Amazon Web Services (AWS) na América Latina realizou esta implantação em apenas 60 dias. A nova infraestrutura permitiu que o Bitz colocasse seus serviços no ar antes do previsto, possibilitando a validação de conceitos técnicos, suportando a estratégia de negócio e preparando o terreno para a expansão da base de clientes.  

Foram adotados princípios e práticas DevOps para garantir a escalabilidade, disponibilidade e eficiência da infraestrutura do Bitz.  Desta forma, a abordagem DevOps adotada pela dataRain possibilitou uma implantação bem-sucedida, com menor tempo de entrega, maior agilidade e confiabilidade. A cultura DevOps promoveu a colaboração entre as equipes envolvidas e permitiu que o Bitz atingisse seus objetivos de negócio, oferecendo uma experiência inovadora e segura aos usuários. 

 

### **Soluções aplicadas:** 

- AWS ECS: Configuramos o AWS ECS com Auto Scaling, permitindo dimensionar automaticamente os containers em execução com base em métricas específicas, como uso de CPU, tráfego de rede, entre outros. Isso significa que, se um container falhar, outro será iniciado automaticamente para substituí-lo.

- Gerenciamento de tarefas do AWS ECS: Utilizamos o gerenciamento de tarefas do AWS ECS para monitorar todos os containers. Em caso de falha de uma tarefa, o ECS tentará reiniciá-la automaticamente ou substituí-la por outro em execução. Com o gerenciamento de tarefas do AWS ECS, também podemos dimensionar mais facilmente o número de tarefas de acordo com a demanda.

- Balanceador de carga de aplicativos da AWS: Integrado ao ECS, a solução visa distribuir o tráfego de entrada entre vários containers em execução. Se um container falhar, o tráfego pode ser redirecionado automaticamente.

- Armazenamento de dados e logs: Mantemos os dados e logs armazenados fora dos containers, garantindo que os dados não sejam excluídos após uma interrupção ou reinicialização do pod.

- AWS S3 e CloudFront: O frontend do aplicativo é armazenado no AWS S3 e entregue pelo CloudFront. Ambos os serviços são configurados por padrão para serem escaláveis e altamente disponíveis.

- Banco de dados: Configuramos o banco de dados no AWS RDS. Os bancos de dados críticos são configurados com Multi-AZ, garantindo que, em caso de interrupção em uma zona disponível, as solicitações sejam redirecionadas automaticamente para uma zona de disponibilidade saudável. 

 

### **Resultados:** 

A implementação dessa solução permitiu uma infraestrutura DevOps escalável e altamente disponível. Os principais resultados alcançados foram: 

- Dimensionamento automático dos containers com base em métricas específicas, garantindo uma melhor utilização dos recursos e uma resposta rápida às demandas de tráfego.

- Monitoramento centralizado de todos os containers e capacidade de reiniciar ou substituir containers em caso de falhas, garantindo a disponibilidade contínua do serviço.

- Distribuição eficiente do tráfego de entrada entre os containers em execução, garantindo uma melhor utilização da infraestrutura e uma experiência mais confiável para os usuários.

- Armazenamento seguro e durável de dados e logs fora dos containers, protegendo contra perdas de dados durante interrupções ou reinicializações.

- Escalabilidade e alta disponibilidade do frontend, garantindo uma entrega rápida e confiável do conteúdo aos usuários.

- Configuração resiliente do banco de dados, com failover automático para zonas de disponibilidade saudáveis, garantindo a continuidade do serviço em caso de falhas de zona. 

 

**Sobre a dataRain:**
A dataRain, membro premiado da AWS Partner Network (APN), é uma empresa 100% orientada à computação em nuvem com experiência real, com foco em inovação e transformação digital. Atua fortemente nos setores de Serviços Financeiros, Saúde, Farma, Biotecnologia, Educação e Pesquisa, Governo, Energia e Utilities e Agronegócio. Ostenta cerca de 200 certificações oficiais AWS entre os membros da equipe. Com segurança, confiabilidade, inovação, agilidade e escalabilidade, a dataRain é reconhecida por seu compromisso com o sucesso e o crescimento dos seus clientes e pela excelência técnica de seus serviços.