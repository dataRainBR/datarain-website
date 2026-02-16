#!/usr/bin/env python3
"""Remove Xgen from published cases in both doc files and renumber."""

# --- TABELA_CASES.md ---
with open("docs/TABELA_CASES.md", "r") as f:
    content = f.read()

# Remove Xgen row
lines = content.split("\n")
filtered = [l for l in lines if "| Xgen |" not in l]
content = "\n".join(filtered)

# Update header 58 -> 57
content = content.replace("## Cases publicados (58)", "## Cases publicados (57)")

# Renumber published rows
new_lines = []
pub_num = 0
in_pub = False
for line in content.split("\n"):
    if "## Cases publicados" in line:
        in_pub = True
        new_lines.append(line)
        continue
    if in_pub and line.startswith("---"):
        in_pub = False
        new_lines.append(line)
        continue
    if in_pub and line.startswith("| ") and not line.startswith("| #"):
        pub_num += 1
        parts = line.split("|")
        if len(parts) > 2:
            parts[1] = f" {pub_num} "
            line = "|".join(parts)
    new_lines.append(line)

content = "\n".join(new_lines)

with open("docs/TABELA_CASES.md", "w") as f:
    f.write(content)
print(f"✅ TABELA_CASES.md: {pub_num} published")

# --- NOVOS_CASES_CANDIDATOS.md ---
with open("docs/NOVOS_CASES_CANDIDATOS.md", "r") as f:
    content = f.read()

# Remove Xgen row from published
lines = content.split("\n")
filtered = [l for l in lines if "Xgen" not in l or "🆕" in l]
content = "\n".join(filtered)

# Update header 58 -> 57
content = content.replace("## Cases já publicados (58)", "## Cases já publicados (57)")

# Renumber published
new_lines = []
pub_num = 0
in_pub = False
for line in content.split("\n"):
    if "## Cases já publicados" in line:
        in_pub = True
        new_lines.append(line)
        continue
    if in_pub and line.startswith("---"):
        in_pub = False
        new_lines.append(line)
        continue
    if in_pub and line.startswith("| ") and not line.startswith("| #"):
        pub_num += 1
        parts = line.split("|")
        if len(parts) > 2:
            parts[1] = f" {pub_num} "
            line = "|".join(parts)
    new_lines.append(line)

content = "\n".join(new_lines)

with open("docs/NOVOS_CASES_CANDIDATOS.md", "w") as f:
    f.write(content)
print(f"✅ NOVOS_CASES_CANDIDATOS.md: {pub_num} published")
