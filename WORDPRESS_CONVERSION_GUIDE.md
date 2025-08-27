# Guia de Conversão para WordPress Theme

## Estrutura do Site DataRain

### Seções do Site (em ordem):
1. **Header/Hero** - Navegação + Banner principal
2. **About** - Sobre a empresa
3. **Cases** - Casos de sucesso
4. **Services** - Serviços oferecidos
5. **Certifications** - Certificações AWS
6. **Clients** - Logos dos clientes (marquee)
7. **CTA** - Chamada para ação
8. **Footer** - Rodapé com links

### Assets Necessários:
- `src/assets/hero-background.jpg` - Imagem de fundo do header
- `src/assets/aws-certifications.png` - Certificações AWS
- `src/assets/datarain-logo.png` - Logo da empresa
- `src/assets/client-logos.png` - Logos dos clientes

### Cores do Design System (HSL):
```css
/* Cores principais */
--primary: 210 100% 50% (azul principal)
--accent: 45 100% 60% (amarelo/dourado)
--background: 0 0% 98% (fundo claro)
--muted-foreground: 215 16% 47% (texto secundário)

/* Gradientes */
--gradient-hero: linear-gradient(135deg, hsl(210 100% 50%), hsl(45 100% 60%))
--gradient-modern: linear-gradient(135deg, hsl(210 100% 50%), hsl(220 100% 60%))
```

### Funcionalidades JavaScript:
1. **Menu Mobile** - Toggle do menu hamburger
2. **Marquee de Logos** - Animação infinita dos logos dos clientes
3. **Animações** - Hover effects e transições suaves

### Responsividade:
- Mobile: até 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

### Fontes e Tipografia:
- Font family: system fonts (sans-serif)
- Tamanhos: text-sm a text-8xl
- Pesos: normal, semibold, bold

## Instruções para Flatsome Builder:

### 1. Estrutura de Página:
Criar seções em sequência usando elementos do Flatsome:
- Section > Row > Col para cada seção
- Background images nos sections
- Text blocks para conteúdo
- Button elements para CTAs

### 2. Estilos Customizados:
Adicionar CSS customizado no WordPress:
- Copiar estilos do `src/index.css`
- Adaptar classes Tailwind para CSS vanilla
- Manter gradientes e animações

### 3. Menu:
- Configurar menu principal no WordPress
- Itens: Soluções, Sobre, Parceiros, Blog
- Botão CTA "Fale Conosco"

### 4. Animações:
- Usar CSS animations para o marquee
- Hover effects com transitions
- Backdrop blur effects

### 5. Imagens:
- Upload das imagens para media library
- Configurar como backgrounds ou elementos
- Manter aspect ratios originais