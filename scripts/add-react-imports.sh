#!/bin/bash

# Script para adicionar "import React from 'react'" em todos os arquivos .tsx que não o têm

echo "🔍 Procurando arquivos .tsx sem import do React..."

# Encontrar todos os arquivos .tsx que não têm import do React
files=$(find src -name "*.tsx" -type f -exec grep -L "^import.*React.*from.*['\"]react['\"]" {} \;)

count=0
for file in $files; do
  # Verificar se o arquivo não está vazio
  if [ -s "$file" ]; then
    # Adicionar import no início do arquivo
    echo "import React from 'react';" | cat - "$file" > temp && mv temp "$file"
    echo "✅ Adicionado em: $file"
    ((count++))
  fi
done

echo ""
echo "✨ Concluído! $count arquivos atualizados."
