#!/usr/bin/env python3
"""Generate Batch 4 demo components and SVG logos."""
import os

demos = [
    {
        "name": "MaxionDemo",
        "file": "MaxionDemo.tsx",
        "slug": "maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise",
        "logo_dir": "maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise",
        "logo_file": "maxion-logo.png",
        "logo_color": "#003366",
        "logo_text": "MAXION",
        "final_msg": "186 VMs migradas do Azure para AWS com Landing Zone enterprise.",
        "icons": ["Factory", "Server", "Shield", "Globe", "BarChart3"],
        "steps": [
            ("client", "Factory", "Líder mundial em rodas automotivas", "Iochpe-Maxion: 17.000 funcionários, 32 fábricas em 14 países. Precisava migrar 186 VMs (146 Windows + 40 Linux) e ~1 PB de backup do Azure para AWS.", "186 VMs no Azure sem Landing Zone enterprise", "Migração completa para AWS com MAP e MGN", None, "#003366"),
            ("landing", "Server", "Landing Zone enterprise", "AWS Organizations com contas segregadas (Network, Dev, Quality, Prod, Backup, WebApp), Control Tower com Account Factory e Transit Gateway multi-região.", "Ambiente Azure sem segregação de contas", "Organizations + Control Tower + Transit Gateway multi-região", "6 contas segregadas", "#7c3aed"),
            ("security", "Shield", "Security Framework completo", "GuardDuty, Inspector, Config, SecurityHub e KMS para segurança centralizada. Secrets Manager para credenciais. Políticas via Organizations.", "Segurança básica sem framework unificado", "5 serviços nativos AWS de segurança integrados", None, "#dc2626"),
            ("network", "Globe", "Networking multi-região global", "SDWAN Silver Peak para conectividade entre fábricas em 14 países. Direct Connect + Transit Gateway. DataSync cross-account para ~1 PB de backup.", "Conectividade Azure limitada entre regiões", "SDWAN + Direct Connect + Transit Gateway (US/EU/AP/SA)", "~1 PB migrado via DataSync", "#0891b2"),
            ("iot", "BarChart3", "IoT e Analytics industrial", "IoT Data Bartender integrado para captura de dados de fábricas. Pipeline: IoT → Data Lake → Amazon QuickSight para dashboards de produção em tempo real.", "Dados industriais sem analytics centralizado", "IoT → Data Lake → QuickSight com dashboards em tempo real", None, "#059669"),
        ],
    },
    {
        "name": "CMSPDemo",
        "file": "CMSPDemo.tsx",
        "slug": "prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws",
        "logo_dir": "prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws",
        "logo_file": "cmsp-logo.png",
        "logo_color": "#1e3a5f",
        "logo_text": "CMSP",
        "final_msg": "Plataforma de streaming educacional operacional para rede estadual de SP.",
        "icons": ["GraduationCap", "Monitor", "Smartphone", "Zap", "Shield"],
        "steps": [
            ("client", "GraduationCap", "Educação digital em escala", "A SEDUC-SP opera o Centro de Mídias de São Paulo (CMSP), plataforma de streaming educacional para milhões de alunos da rede estadual.", "Aulas presenciais sem plataforma digital escalável", "Streaming educacional na AWS para rede estadual de SP", None, "#1e3a5f"),
            ("streaming", "Monitor", "50 EC2 para processamento de vídeo", "27x c5.4xlarge + 23x c5.large (~50 EC2) em VPC dedicada para encoding e distribuição de vídeo ao vivo.", "Sem infraestrutura para streaming ao vivo", "~50 EC2 dedicados para processamento de vídeo", "27x c5.4xlarge + 23x c5.large", "#7c3aed"),
            ("datami", "Smartphone", "Integração Datami 4G", "Acesso 4G gratuito para alunos via integração Datami, garantindo que estudantes sem Wi-Fi possam assistir às aulas.", "Alunos sem acesso à internet para aulas online", "4G gratuito via Datami para todos os alunos", None, "#059669"),
            ("lambda", "Zap", "Automação de custos com Lambda", "AWS Lambda para liga/desliga automático de servidores fora do horário de aulas, reduzindo custos significativamente.", "Servidores ligados 24/7 mesmo sem aulas", "Lambda automatiza liga/desliga por horário de aulas", None, "#d97706"),
            ("network", "Shield", "Transit Gateway + Direct Connect", "Conectividade multi-account PRODESP via Transit Gateway, NAT Gateway, Route 53 Resolver e GuardDuty. Direct Connect via 2 links Equinix.", "Conectividade básica sem multi-account", "Transit Gateway + Direct Connect (2 links Equinix)", None, "#dc2626"),
        ],
    },
    {
        "name": "TelemedicinaSESDemo",
        "file": "TelemedicinaSESDemo.tsx",
        "slug": "prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf",
        "logo_dir": "prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf",
        "logo_file": "ses-sp-logo.png",
        "logo_color": "#2e7d32",
        "logo_text": "SES-SP",
        "final_msg": "Sistema de telemedicina SES-SP operacional com alta disponibilidade e WAF.",
        "icons": ["Heart", "Server", "Database", "Shield", "Activity"],
        "steps": [
            ("client", "Heart", "Telemedicina para saúde pública", "A SES-SP precisava de infraestrutura escalável para o sistema de telemedicina L2D, atendendo a rede pública de saúde do estado.", "Sistema de telemedicina sem escalabilidade", "Telemedicina L2D na AWS com alta disponibilidade", None, "#2e7d32"),
            ("app", "Server", "Elastic Beanstalk com auto-scaling", "AWS Elastic Beanstalk (IIS/.NET) com ALB multi-AZ e auto-scaling de 1 a 3 instâncias conforme demanda.", "Aplicação sem auto-scaling e single-AZ", "Elastic Beanstalk + ALB multi-AZ + auto-scaling 1-3", "Auto-scaling conforme demanda", "#7c3aed"),
            ("data", "Database", "RDS + ElastiCache", "Amazon RDS para banco de dados relacional e ElastiCache Memcached para cache de sessões e performance.", "Banco de dados sem cache e performance limitada", "RDS + ElastiCache Memcached para cache de sessões", None, "#0891b2"),
            ("security", "Shield", "WAF + ACM/SSL", "AWS WAF para proteção contra ataques web e ACM para certificados SSL/TLS. VPC com subnets privadas.", "Sem proteção WAF e certificados manuais", "WAF ativo + ACM para SSL/TLS automático", None, "#dc2626"),
            ("results", "Activity", "Sistema operacional", "Telemedicina SES-SP em produção com alta disponibilidade, auto-scaling e proteção WAF. Documentação técnica V3 entregue.", "Telemedicina sem infraestrutura cloud", "Sistema L2D operacional com documentação V3", None, "#059669"),
        ],
    },
    {
        "name": "SynchroDemo",
        "file": "SynchroDemo.tsx",
        "slug": "amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws",
        "logo_dir": "amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws",
        "logo_file": "synchro-logo.png",
        "logo_color": "#ff9900",
        "logo_text": "SYNCHRO",
        "final_msg": "Economia de R$100k e DR pilot light implementado para FinTech Brasil.",
        "icons": ["DollarSign", "Server", "Shield", "BookOpen", "TrendingDown"],
        "steps": [
            ("client", "DollarSign", "FinTech Brasil da Amazon", "Equipe FinTech Brasil desenvolve plataformas fiscais com Synchro/SPED. Após migrar para AWS em 2020, enfrentava acúmulo de tickets e custos excessivos.", "Infraestrutura AWS sem gerenciamento centralizado", "Gestão otimizada com Systems Manager e DR", None, "#ff9900"),
            ("ssm", "Server", "Systems Manager centralizado", "AWS Systems Manager para gerenciamento centralizado de todas as instâncias EC2. Documentação de configurações e resolução de chamados acumulados.", "EC2 sem gerenciamento centralizado, tickets acumulados", "Systems Manager para gestão centralizada de EC2", None, "#7c3aed"),
            ("dr", "Shield", "DR pilot light", "AWS Backup com metodologia pilot light para Disaster Recovery. Plano de recuperação documentado e testado.", "Sem plano de Disaster Recovery", "DR pilot light com AWS Backup documentado e testado", None, "#dc2626"),
            ("training", "BookOpen", "Capacitação da equipe", "Treinamento da equipe para gestão independente da infraestrutura AWS. Documentação completa de procedimentos operacionais.", "Equipe sem conhecimento AWS, dependente de suporte", "Equipe capacitada para gestão independente", None, "#0891b2"),
            ("savings", "TrendingDown", "Economia de R$100k", "S3 Storage Lens identificou bucket com 2.4 PB de logs desnecessários. Eliminação resultou em economia de ~R$100.000.", "Bucket S3 com 2.4 PB de logs gerando custos excessivos", "Economia de ~R$100.000 com eliminação de 2.4 PB", "R$100k economizados", "#059669"),
        ],
    },
    {
        "name": "MPRNDemo",
        "file": "MPRNDemo.tsx",
        "slug": "mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais",
        "logo_dir": "mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais",
        "logo_file": "mprn-logo.png",
        "logo_color": "#1a237e",
        "logo_text": "MPRN",
        "final_msg": "EKS Fargate operacional com perfis dev/prd e POC de rastreio executada.",
        "icons": ["Scale", "Container", "Search", "TrendingDown"],
        "steps": [
            ("client", "Scale", "Ministério Público do RN", "O MPRN buscava modernizar infraestrutura com Kubernetes gerenciado e explorar rastreio de dados pessoais para LGPD.", "Infraestrutura tradicional sem containers", "EKS Fargate com perfis dev/prd na AWS", None, "#1a237e"),
            ("eks", "Container", "EKS Fargate serverless", "Amazon EKS com AWS Fargate para execução serverless de containers. Perfis separados dev e prd com namespaces isolados.", "Sem ambiente Kubernetes gerenciado", "EKS Fargate com perfis dev/prd isolados", "Serverless — sem EC2 para gerenciar", "#7c3aed"),
            ("poc", "Search", "POC rastreio de dados pessoais", "Prova de conceito para sistema de rastreio de dados pessoais alinhado com requisitos da LGPD.", "Sem visibilidade sobre dados pessoais armazenados", "POC de rastreio de dados pessoais para LGPD", None, "#059669"),
            ("finops", "TrendingDown", "Otimização de custos", "Análise de billing e recomendações de otimização. Fargate elimina necessidade de gerenciar instâncias EC2.", "Custos não otimizados sem análise de billing", "Fargate serverless + análise de billing otimizada", None, "#d97706"),
        ],
    },
    {
        "name": "EstreDemo",
        "file": "EstreDemo.tsx",
        "slug": "estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans",
        "logo_dir": "estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans",
        "logo_file": "estre-logo.png",
        "logo_color": "#2e7d32",
        "logo_text": "ESTRE",
        "final_msg": "Billing otimizado com resizing, snapshots e Saving Plans.",
        "icons": ["Leaf", "TrendingDown", "HardDrive", "Coins"],
        "steps": [
            ("client", "Leaf", "Gestão de resíduos", "A Estre Ambiental tinha 4 EC2 com custos não otimizados: servidores superdimensionados, snapshots caros e Elastic IPs ociosos.", "4 EC2 com custos não otimizados", "Análise completa de billing e otimização", None, "#2e7d32"),
            ("resizing", "TrendingDown", "Resizing de instâncias", "Análise de CPU via CloudWatch: m5.2xlarge com 30% uso, m5a.xlarge com 25%. Recomendação de resizing para 3 servidores.", "Servidores superdimensionados (25-30% CPU)", "Resizing recomendado para economia de ~40%", "~40% economia em compute", "#7c3aed"),
            ("ebs", "HardDrive", "Snapshots EBS otimizados", "Adequação de lifecycle de snapshots EBS e remoção de 3 Elastic IPs não utilizados.", "Snapshots sem lifecycle e 3 Elastic IPs ociosos", "Snapshots otimizados (~18%) + 3 EIPs removidos", None, "#0891b2"),
            ("savings", "Coins", "Saving Plans", "Contratação de Saving Plans com desconto adicional de 4% para workloads previsíveis.", "Instâncias On-Demand sem desconto", "Saving Plans contratados com 4% desconto", None, "#059669"),
        ],
    },
    {
        "name": "DoutorIEDemo",
        "file": "DoutorIEDemo.tsx",
        "slug": "doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication",
        "logo_dir": "doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication",
        "logo_file": "doutorie-logo.png",
        "logo_color": "#1565c0",
        "logo_text": "DoutorIE",
        "final_msg": "Plano de DR completo com RTO <20min e RPO de segundos para cluster K8s.",
        "icons": ["Shield", "Server", "Database", "Archive", "CheckCircle"],
        "steps": [
            ("client", "Shield", "DR para cluster Kubernetes", "DoutorIE opera cluster K8s com Rancher Server, 34 worker nodes e 225 pods usando EFS. Precisava de plano de DR robusto.", "Cluster K8s sem plano de Disaster Recovery", "DR completo com múltiplas camadas de proteção", None, "#1565c0"),
            ("drs", "Server", "AWS DRS para Rancher Server", "Elastic Disaster Recovery para replicação contínua block-level do Rancher Server. RPO de segundos com RTO <20min.", "Rancher Server sem replicação (ponto único de falha)", "AWS DRS com RPO de segundos e RTO <20min", "RTO < 20 minutos", "#dc2626"),
            ("efs", "Database", "EFS Replication nativa", "EFS Replication para replicação cross-region de dados persistentes com RPO de ~15 minutos.", "EFS sem replicação cross-region", "EFS Replication nativa com RPO ~15min", None, "#7c3aed"),
            ("velero", "Archive", "Velero + AWS Backup", "Velero para backup de YAMLs e CRDs do K8s para S3 replicado. AWS Backup com Vault Lock para retenção 5+ anos.", "Sem backup de configurações Kubernetes", "Velero + AWS Backup Vault Lock (5+ anos)", None, "#0891b2"),
            ("plan", "CheckCircle", "Plano de implantação", "Matriz de proteção por componente documentada. Workers recriados via Terraform/ASG. Plano estimado em 40 horas.", "Sem documentação de DR", "Matriz de proteção + plano de 40h documentado", None, "#059669"),
        ],
    },
    {
        "name": "ENEMedicalDemo",
        "file": "ENEMedicalDemo.tsx",
        "slug": "ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws",
        "logo_dir": "ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws",
        "logo_file": "ene-logo.png",
        "logo_color": "#00838f",
        "logo_text": "ENE",
        "final_msg": "Veeam com S3 imutável e Saving Plans operacionais para ENE Medical.",
        "icons": ["Heart", "Shield", "Server", "Coins"],
        "steps": [
            ("client", "Heart", "Dispositivos médicos", "ENE Medical é spin-off da SPI, comercializando produtos médico-hospitalares de alta tecnologia. Cliente dataRain desde 2023.", "Sem infraestrutura AWS e sem backup", "Infraestrutura AWS completa com backup imutável", None, "#00838f"),
            ("veeam", "Shield", "Veeam + S3 imutável", "Veeam Backup for AWS via CloudFormation. Bucket S3 com Object Lock (imutabilidade WORM) para proteção contra ransomware.", "Sem backup e sem proteção contra ransomware", "Veeam + S3 Object Lock (imutabilidade WORM)", None, "#dc2626"),
            ("infra", "Server", "Infraestrutura completa", "EC2 para aplicação, RDS para banco de dados, VPC com Security Groups e IAM com políticas de menor privilégio.", "Sem infraestrutura cloud", "EC2 + RDS + VPC + IAM operacionais", None, "#7c3aed"),
            ("finops", "Coins", "Saving Plans 1 ano", "Migração de On-Demand para Saving Plans de 1 ano com redução significativa nos custos mensais.", "Instâncias On-Demand sem desconto", "Saving Plans 1 ano com redução de custos", None, "#059669"),
        ],
    },
    {
        "name": "AarinDemo",
        "file": "AarinDemo.tsx",
        "slug": "aarin-migra-gitlab-entre-instancias-com-automacao-via-api",
        "logo_dir": "aarin-migra-gitlab-entre-instancias-com-automacao-via-api",
        "logo_file": "aarin-logo.png",
        "logo_color": "#e65100",
        "logo_text": "AARIN",
        "final_msg": "Migração GitLab completa com projetos, pipelines e usuários automatizados.",
        "icons": ["GitBranch", "Code2", "Users", "CheckCircle"],
        "steps": [
            ("client", "GitBranch", "Migração GitLab", "Aarin TechFin precisava migrar toda infraestrutura GitLab entre instâncias: projetos, grupos, pipelines CI/CD e usuários.", "GitLab em instância antiga sem migração planejada", "Migração completa automatizada via API GitLab", None, "#e65100"),
            ("scripts", "Code2", "Scripts de migração via API", "Scripts cURL via API GitLab para export/dump de projetos entre instâncias. Migração de imagens de dependência de pipeline.", "Migração manual projeto a projeto", "Scripts automatizados via API para export/import", None, "#7c3aed"),
            ("users", "Users", "Migração de usuários", "Script automatizado de invite de usuários na nova instância. Assessment e reorganização da estrutura de grupos.", "Usuários e permissões sem migração", "Script de invite + reorganização de grupos", None, "#0891b2"),
            ("results", "CheckCircle", "Pipeline validada", "Pipelines CI/CD ajustadas e validadas na nova instância. Estrutura de grupos reorganizada.", "Pipelines CI/CD desconfiguradas", "Pipelines ajustadas e validadas pós-migração", None, "#059669"),
        ],
    },
    {
        "name": "BippCareDemo",
        "file": "BippCareDemo.tsx",
        "slug": "bippcare-opera-app-de-saude-containerizado-na-aws",
        "logo_dir": "bippcare-opera-app-de-saude-containerizado-na-aws",
        "logo_file": "bippcare-logo.png",
        "logo_color": "#00897b",
        "logo_text": "BIPP",
        "final_msg": "App de saúde containerizado operacional na AWS com SSL e documentação.",
        "icons": ["Heart", "Container", "Globe", "FileText"],
        "steps": [
            ("client", "Heart", "Plataforma de saúde digital", "BippCare (bipp.care) conecta pacientes a profissionais de saúde com aplicação web containerizada.", "Aplicação sem infraestrutura cloud", "App containerizado na AWS com EC2", None, "#00897b"),
            ("docker", "Container", "Docker Compose multi-serviço", "Frontend Next.js/React + Backend NestJS/TypeScript + PostgreSQL + Redis, todos em containers Docker Compose.", "Serviços sem containerização", "Docker Compose: Next.js + NestJS + PostgreSQL + Redis", None, "#7c3aed"),
            ("nginx", "Globe", "NGINX + SSL/TLS", "NGINX como reverse proxy com SSL/TLS para tráfego seguro. VPC com Security Groups restritivos.", "Sem reverse proxy e sem SSL", "NGINX com SSL/TLS + VPC segura", None, "#dc2626"),
            ("docs", "FileText", "Documentação técnica", "Documentação completa da infraestrutura com procedimentos de deploy e manutenção.", "Sem documentação de infraestrutura", "Documentação completa de deploy e manutenção", None, "#059669"),
        ],
    },
    {
        "name": "BorilliDemo",
        "file": "BorilliDemo.tsx",
        "slug": "borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento",
        "logo_dir": "borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento",
        "logo_file": "borilli-logo.png",
        "logo_color": "#37474f",
        "logo_text": "BORILLI",
        "final_msg": "Ambiente AWS provisionado com 4 EC2, VPN e monitoramento ativo.",
        "icons": ["Server", "Lock", "Shield", "Activity"],
        "steps": [
            ("client", "Server", "Infraestrutura para pneus", "Borilli Pneus precisava de ambiente AWS completo para servidores de aplicação Wildfly/Junsoft.", "Sem infraestrutura cloud para aplicação", "4 EC2 provisionados na AWS", None, "#37474f"),
            ("vpn", "Lock", "VPN + Sophos XG 105", "VPN Client-to-Site com OpenVPN para acesso remoto seguro. Firewall Sophos XG 105 para proteção de rede.", "Sem VPN e sem firewall", "OpenVPN + Sophos XG 105 configurados", None, "#7c3aed"),
            ("security", "Shield", "IAM + MFA + Secrets Manager", "IAM com MFA obrigatório e Secrets Manager para gestão de credenciais. Security Groups restritivos.", "Sem MFA e credenciais em texto plano", "IAM + MFA + Secrets Manager configurados", None, "#dc2626"),
            ("monitoring", "Activity", "Monitoramento + backup", "Site24x7 + SSM para monitoramento. Backup automatizado com snapshots + S3. Lambda para automação.", "Sem monitoramento e backup manual", "Site24x7 + SSM + backup automatizado S3", None, "#059669"),
        ],
    },
    {
        "name": "IplanRioDemo",
        "file": "IplanRioDemo.tsx",
        "slug": "iplanrio-opera-suporte-continuo-aws-com-gestao-de-tickets",
        "logo_dir": "iplanrio-opera-suporte-continuo-aws-com-gestao-de-tickets",
        "logo_file": "iplanrio-logo.png",
        "logo_color": "#0d47a1",
        "logo_text": "IPLAN",
        "final_msg": "Suporte contínuo AWS ativo para Prefeitura do Rio de Janeiro.",
        "icons": ["Building2", "Ticket", "FileText", "Users"],
        "steps": [
            ("client", "Building2", "Prefeitura do Rio de Janeiro", "IplanRio é responsável pela TI da Prefeitura do RJ. A dataRain presta suporte contínuo de infraestrutura AWS.", "Infraestrutura AWS sem suporte gerenciado", "Suporte contínuo com SLA e relatórios mensais", None, "#0d47a1"),
            ("tickets", "Ticket", "Gestão de tickets", "Sistema de chamados técnicos com priorização e SLA. Resolução de incidentes e requisições de infraestrutura.", "Chamados sem priorização e sem SLA", "Gestão de tickets com SLA definido", None, "#7c3aed"),
            ("reports", "FileText", "Relatórios mensais", "Reports mensais com métricas de atendimento, análise de tickets e recomendações de melhorias.", "Sem visibilidade sobre operações", "Relatórios mensais com métricas e recomendações", None, "#0891b2"),
            ("subprojects", "Users", "Subprojetos operacionais", "Suporte ao IPP (migração e VPN) e Instituto João Goulart (Moodle na AWS). Infraestrutura compartilhada.", "Subprojetos sem suporte dedicado", "IPP e João Goulart operacionais na AWS", None, "#059669"),
        ],
    },
]

# Template for demo component
def gen_demo(d):
    icon_imports = ", ".join(d["icons"])
    steps_code = ""
    for s in d["steps"]:
        sid, icon, title, narrative, before, after, highlight, color = s
        hl = f"highlight: '{highlight}', " if highlight else ""
        steps_code += f"  {{ id: '{sid}', icon: {icon}, title: '{title}', narrative: '{narrative}', before: '{before}', after: '{after}', {hl}color: '{color}' }},\n"

    return f"""import React, {{ useState }} from 'react';
import {{ motion, AnimatePresence }} from 'framer-motion';
import {{ {icon_imports}, ChevronLeft, ChevronRight }} from 'lucide-react';

interface JourneyStep {{ id: string; icon: React.FC<{{ className?: string; color?: string }}>; title: string; narrative: string; before: string; after: string; highlight?: string; color: string; }}

const steps: JourneyStep[] = [
{steps_code}];

export const {d['name']}: React.FC = () => {{
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep]; const Icon = step.icon;
  const progressPct = ((activeStep + 1) / steps.length) * 100; const isLast = activeStep === steps.length - 1;
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
        <motion.div className="absolute inset-0 pointer-events-none" animate={{{{ background: `radial-gradient(ellipse 60% 40% at 50% 20%, ${{step.color}}08 0%, transparent 70%)` }}}} transition={{{{ duration: 0.8 }}}} />
        <div className="relative p-5 md:p-8 space-y-6">
          <div className="flex items-center gap-1">{{steps.map((s, i) => {{ const StepIcon = s.icon; const done = i < activeStep; const active = i === activeStep; return (<React.Fragment key={{s.id}}><motion.button onClick={{() => setActiveStep(i)}} className="relative shrink-0" whileHover={{{{ scale: 1.15 }}}} whileTap={{{{ scale: 0.9 }}}} aria-label={{s.title}}><motion.div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300" animate={{{{ borderColor: active ? s.color : done ? '#10b981' : '#e2e8f0', backgroundColor: active ? `${{s.color}}12` : done ? 'rgba(16,185,129,0.08)' : 'white' }}}}>{{done ? <motion.span initial={{{{ scale: 0 }}}} animate={{{{ scale: 1 }}}} className="text-emerald-500 text-xs font-bold">✓</motion.span> : <StepIcon className="w-4 h-4" color={{active ? s.color : '#94a3b8'}} />}}</motion.div></motion.button>{{i < steps.length - 1 && <div className="flex-1 h-0.5 rounded-full overflow-hidden bg-slate-200"><motion.div className="h-full bg-emerald-500" animate={{{{ width: done ? '100%' : '0%' }}}} transition={{{{ duration: 0.4 }}}} /></div>}}</React.Fragment>); }})}}</div>
          <AnimatePresence mode="wait"><motion.div key={{step.id}} initial={{{{ opacity: 0, y: 60 }}}} animate={{{{ opacity: 1, y: 0 }}}} exit={{{{ opacity: 0, y: -40 }}}} transition={{{{ duration: 0.4 }}}} className="space-y-5">
            <div className="flex items-start gap-4"><motion.div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border" style={{{{ borderColor: `${{step.color}}25`, backgroundColor: `${{step.color}}10` }}}}><Icon className="w-6 h-6" color={{step.color}} /></motion.div><div className="min-w-0"><div className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{{{ color: step.color }}}}>Etapa {{activeStep + 1}} de {{steps.length}}</div><h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{{step.title}}</h3><p className="text-sm text-slate-500 leading-relaxed">{{step.narrative}}</p></div></div>
            {{step.highlight && <motion.div initial={{{{ opacity: 0, scale: 0.95 }}}} animate={{{{ opacity: 1, scale: 1 }}}} transition={{{{ delay: 0.2 }}}} className="text-center py-3 rounded-xl border" style={{{{ borderColor: `${{step.color}}20`, background: `linear-gradient(135deg, ${{step.color}}06 0%, transparent 100%)` }}}}><span className="text-base md:text-lg font-bold" style={{{{ color: step.color }}}}>{{step.highlight}}</span></motion.div>}}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3"><motion.div initial={{{{ opacity: 0, x: -15 }}}} animate={{{{ opacity: 1, x: 0 }}}} transition={{{{ delay: 0.1 }}}} className="p-4 rounded-xl border border-red-200 bg-red-50"><div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Antes</div><p className="text-sm text-red-700/70">{{step.before}}</p></motion.div><motion.div initial={{{{ opacity: 0, x: 15 }}}} animate={{{{ opacity: 1, x: 0 }}}} transition={{{{ delay: 0.3 }}}} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Depois</div><p className="text-sm text-emerald-700/70">{{step.after}}</p></motion.div></div>
          </motion.div></AnimatePresence>
          <div className="flex items-center justify-between"><motion.button onClick={{() => setActiveStep(prev => Math.max(0, prev - 1))}} disabled={{activeStep === 0}} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed" whileHover={{{{ scale: 1.05 }}}} whileTap={{{{ scale: 0.95 }}}}><ChevronLeft className="w-3.5 h-3.5" /> Anterior</motion.button><motion.button onClick={{() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}} disabled={{isLast}} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed" whileHover={{{{ scale: 1.05 }}}} whileTap={{{{ scale: 0.95 }}}}>Próxima <ChevronRight className="w-3.5 h-3.5" /></motion.button></div>
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{{{ backgroundColor: step.color }}}} animate={{{{ width: `${{progressPct}}%` }}}} transition={{{{ type: 'spring', stiffness: 200, damping: 25 }}}} /></div>
          {{isLast && <motion.div initial={{{{ opacity: 0, y: 10 }}}} animate={{{{ opacity: 1, y: 0 }}}} className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200"><p className="text-sm text-emerald-700 font-medium">{d['final_msg']}</p></motion.div>}}
        </div>
      </div>
    </div>
  );
}};
"""


def gen_svg(color, text):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
  <rect width="200" height="60" rx="8" fill="{color}"/>
  <text x="100" y="36" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">{text}</text>
</svg>"""


# Generate all files
demos_dir = "src/components/cases-demos"
images_dir = "public/content-images/cases"

for d in demos:
    # Write demo component
    filepath = os.path.join(demos_dir, d["file"])
    with open(filepath, "w") as f:
        f.write(gen_demo(d))
    print(f"✅ {d['file']}")

    # Write SVG logo
    logo_dir = os.path.join(images_dir, d["logo_dir"])
    os.makedirs(logo_dir, exist_ok=True)
    svg_path = os.path.join(logo_dir, d["logo_file"])
    with open(svg_path, "w") as f:
        f.write(gen_svg(d["logo_color"], d["logo_text"]))
    print(f"  📁 {d['logo_file']}")

print(f"\n✅ Generated {len(demos)} demos and logos")
