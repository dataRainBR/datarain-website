#!/usr/bin/env python3
"""Update TABELA_CASES.md: move 12 Batch 4 cases from candidates to published."""

with open("docs/TABELA_CASES.md", "r") as f:
    content = f.read()

# New published entries to add (rows 47-58)
new_published = """
| 47 | Maxion (Iochpe-Maxion) | Indústria Automotiva | 2023-01 | Maxion migra 186 VMs do Azure para AWS com Landing Zone enterprise | Como a Iochpe-Maxion migrou 186 VMs e ~1 PB de backup do Azure para a AWS com MAP, MGN e Landing Zone multi-região. | maxion-logo.png | ✅ MaxionDemo | ❌ | Desafio, Solução, Resultados |
| 48 | PRODESP/SEDUC — Centro de Mídias SP | Educação Estadual | 2023-06 | PRODESP/SEDUC — Centro de Mídias SP: streaming educacional na AWS | Como a SEDUC-SP implementou o CMSP na AWS com 50 EC2 para streaming educacional e Datami 4G. | cmsp-logo.png | ✅ CMSPDemo | ❌ | Desafio, Solução, Resultados |
| 49 | PRODESP/SES-SP — Telemedicina | Saúde Pública | 2023-06 | PRODESP/SES-SP implementa telemedicina na AWS com Elastic Beanstalk e WAF | Como a SES-SP implementou telemedicina L2D na AWS com Elastic Beanstalk, ALB multi-AZ e WAF. | ses-sp-logo.png | ✅ TelemedicinaSESDemo | ❌ | Desafio, Solução, Resultados |
| 50 | Amazon-Synchro | Fintech | 2023-11 | Amazon-Synchro economiza R$100k com otimização S3 e implementa DR na AWS | Como a equipe FinTech Brasil economizou R$100k eliminando 2.4 PB de logs S3 e implementou DR pilot light. | synchro-logo.png | ✅ SynchroDemo | ❌ | Desafio, Solução, Resultados |
| 51 | MPRN | Gov/Justiça | 2023-06 | MPRN implementa EKS Fargate e POC de rastreio de dados pessoais | Como o MPRN implementou EKS Fargate com perfis dev/prd e POC de rastreio de dados pessoais. | mprn-logo.png | ✅ MPRNDemo | ❌ | Desafio, Solução, Resultados |
| 52 | Estre Ambiental | Meio Ambiente | 2023-06 | Estre Ambiental otimiza billing AWS com resizing e Saving Plans | Como a Estre Ambiental reduziu custos com resizing EC2, snapshots EBS e Saving Plans. | estre-logo.png | ✅ EstreDemo | ❌ | Desafio, Solução, Resultados |
| 53 | DoutorIE | Tecnologia | 2025-11 | DoutorIE projeta DR para cluster Kubernetes com AWS DRS e EFS Replication | Como a DoutorIE projetou DR para cluster K8s com 34 workers e 225 pods. | doutorie-logo.png | ✅ DoutorIEDemo | ❌ | Desafio, Solução, Resultados |
| 54 | ENE Medical | Saúde (dispositivos médicos) | 2023-07 | ENE Medical implementa backup imutável com Veeam e Saving Plans na AWS | Como a ENE Medical implementou Veeam + S3 imutável e migrou para Saving Plans. | ene-logo.png | ✅ ENEMedicalDemo | ❌ | Desafio, Solução, Resultados |
| 55 | Aarin | Fintech | 2024-01 | Aarin migra GitLab entre instâncias com automação via API | Como a Aarin migrou projetos, pipelines CI/CD e usuários entre instâncias GitLab. | aarin-logo.png | ✅ AarinDemo | ❌ | Desafio, Solução, Resultados |
| 56 | BippCare | Saúde (telemedicina) | 2022-05 | BippCare opera app de saúde containerizado na AWS | Como a BippCare implementou app Docker (Next.js + NestJS + PostgreSQL + Redis) na AWS. | bippcare-logo.png | ✅ BippCareDemo | ❌ | Desafio, Solução, Resultados |
| 57 | Borilli Pneus | Automotivo (pneus) | 2020-03 | Borilli Pneus provisiona ambiente AWS com VPN e monitoramento | Como a Borilli provisionou 4 EC2, VPN OpenVPN, Sophos XG 105 e monitoramento. | borilli-logo.png | ✅ BorilliDemo | ❌ | Desafio, Solução, Resultados |
| 58 | IplanRio | Gov Municipal RJ | 2025-04 | IplanRio opera suporte contínuo AWS com gestão de tickets | Como o IplanRio mantém suporte contínuo AWS com gestão de tickets para Prefeitura do RJ. | iplanrio-logo.png | ✅ IplanRioDemo | ❌ | Desafio, Solução, Resultados |"""

# Replace header count
content = content.replace("## Cases publicados (46)", "## Cases publicados (58)")

# Insert new published rows before the --- separator after published table
# Find the line with | 46 | Symbiomics and add after it
content = content.replace(
    "| 46 | Symbiomics | Biotech/Genômica | 2023-01 | Symbiomics executa pipeline de genômica na AWS | Como a Symbiomics implementou pipeline de análise genômica na AWS com EC2 e OpenVPN. | symbiomics-logo.png | ✅ SymbiomicsDemo | ❌ | Desafio, Solução, Resultados |\n---",
    "| 46 | Symbiomics | Biotech/Genômica | 2023-01 | Symbiomics executa pipeline de genômica na AWS | Como a Symbiomics implementou pipeline de análise genômica na AWS com EC2 e OpenVPN. | symbiomics-logo.png | ✅ SymbiomicsDemo | ❌ | Desafio, Solução, Resultados |" + new_published + "\n---"
)

# Update candidates header: 32 -> 20
content = content.replace("## Candidatos a novos cases (32)", "## Candidatos a novos cases (20)")

# Remove the 12 candidates that are now published
# Candidates to remove: #2 Maxion, #3 PRODESP/SEDUC, #4 PRODESP/Sec.Saúde, #5 IplanRio, #11 Amazon-Synchro, #13 MPRN, #14 Estre, #15 DoutorIE, #16 Trisul (already published), #17 ENE Medical, #23 Aarin, #24 BippCare, #29 Borilli
# We need to remove rows by their content markers
candidates_to_remove = [
    "| 2 | Maxion (Iochpe-Maxion)",
    "| 3 | PRODESP/SEDUC",
    "| 4 | PRODESP/Sec. Saúde",
    "| 5 | IplanRio",
    "| 11 | Amazon - Synchro",
    "| 13 | MPRN",
    "| 14 | Estre Ambiental",
    "| 15 | DoutorIE",
    "| 16 | Trisul",  # Already published in Batch 3, duplicate
    "| 17 | ENE Medical",
    "| 23 | Aarin",
    "| 24 | BippCare",
    "| 29 | Borilli Pneus",
]

lines = content.split("\n")
filtered_lines = []
for line in lines:
    skip = False
    for marker in candidates_to_remove:
        if marker in line:
            skip = True
            break
    if not skip:
        filtered_lines.append(line)

content = "\n".join(filtered_lines)

# Renumber remaining candidates
# Find the candidates section and renumber
new_lines = []
candidate_num = 0
in_candidates = False
for line in content.split("\n"):
    if "## Candidatos a novos cases" in line:
        in_candidates = True
        new_lines.append(line)
        continue
    if in_candidates and line.startswith("---"):
        in_candidates = False
        new_lines.append(line)
        continue
    if in_candidates and line.startswith("| ") and not line.startswith("| #"):
        candidate_num += 1
        # Replace the number at the start
        parts = line.split("|")
        if len(parts) > 2:
            parts[1] = f" {candidate_num} "
            line = "|".join(parts)
    new_lines.append(line)

content = "\n".join(new_lines)

with open("docs/TABELA_CASES.md", "w") as f:
    f.write(content)

print(f"✅ TABELA_CASES.md updated: 58 published, {candidate_num} candidates")
