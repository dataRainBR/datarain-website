#!/usr/bin/env python3
"""Update NOVOS_CASES_CANDIDATOS.md: add 12 Batch 4 to published, remove from candidates."""

with open("docs/NOVOS_CASES_CANDIDATOS.md", "r") as f:
    content = f.read()

# Update published count
content = content.replace("## Cases já publicados (46)", "## Cases já publicados (58)")

# Add new published entries before the --- after published table
new_published = """| 47 | Maxion (Iochpe-Maxion) | ✅ maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise | Indústria Automotiva |
| 48 | PRODESP/SEDUC — Centro de Mídias SP | ✅ prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws | Educação Estadual |
| 49 | PRODESP/SES-SP — Telemedicina | ✅ prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf | Saúde Pública |
| 50 | Amazon-Synchro | ✅ amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws | Fintech |
| 51 | MPRN | ✅ mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais | Gov/Justiça |
| 52 | Estre Ambiental | ✅ estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans | Meio Ambiente |
| 53 | DoutorIE | ✅ doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication | Tecnologia |
| 54 | ENE Medical | ✅ ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws | Saúde (Dispositivos Médicos) |
| 55 | Aarin | ✅ aarin-migra-gitlab-entre-instancias-com-automacao-via-api | Fintech |
| 56 | BippCare | ✅ bippcare-opera-app-de-saude-containerizado-na-aws | Saúde (Telemedicina) |
| 57 | Borilli Pneus | ✅ borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento | Automotivo (Pneus) |
| 58 | IplanRio | ✅ iplanrio-opera-suporte-continuo-aws-com-gestao-de-tickets | Gov Municipal RJ |"""

content = content.replace(
    "| 46 | Symbiomics | ✅ symbiomics-executa-pipeline-de-genomica-na-aws | Biotech/Genômica |\n\n---",
    "| 46 | Symbiomics | ✅ symbiomics-executa-pipeline-de-genomica-na-aws | Biotech/Genômica |\n" + new_published + "\n\n---"
)

# Remove candidates that are now published
candidates_to_remove = [
    "Maxion (Iochpe-Maxion)",
    "PRODESP/SEDUC",
    "PRODESP/Sec. Saúde",
    "Amazon - Synchro",
    "IplanRio",
    "MPRN (Min. Público RN)",
    "Estre Ambiental",
    "DoutorIE",
    "ENE Medical",
    "Aarin",
    "BippCare",
    "Borilli Pneus",
    # Also remove Lochpe (same group as Maxion, only pricing) and Trisul (already published)
    "Lochpe",
]

lines = content.split("\n")
filtered = []
for line in lines:
    skip = False
    for marker in candidates_to_remove:
        if marker in line and "🆕" in line:
            skip = True
            break
    if not skip:
        filtered.append(line)

content = "\n".join(filtered)

# Renumber candidates
new_lines = []
cand_num = 0
in_cands = False
for line in content.split("\n"):
    if "## Candidatos a novos cases" in line:
        in_cands = True
        new_lines.append(line)
        continue
    if in_cands and line.startswith("---"):
        in_cands = False
        new_lines.append(line)
        continue
    if in_cands and line.startswith("| ") and "🆕" in line:
        cand_num += 1
        parts = line.split("|")
        if len(parts) > 2:
            parts[1] = f" {cand_num} "
            line = "|".join(parts)
    new_lines.append(line)

content = "\n".join(new_lines)

# Update candidates count
content = content.replace("## Candidatos a novos cases (31)", f"## Candidatos a novos cases ({cand_num})")

with open("docs/NOVOS_CASES_CANDIDATOS.md", "w") as f:
    f.write(content)

print(f"✅ NOVOS_CASES_CANDIDATOS.md updated: 58 published, {cand_num} candidates")
