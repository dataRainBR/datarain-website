# dataRain Design System

> Sistema de design oficial para o site dataRain. Este documento define todos os padrões visuais, componentes e diretrizes de uso.

---

## 📋 Índice

1. [Cores](#cores)
2. [Tipografia](#tipografia)
3. [Espaçamento](#espaçamento)
4. [Componentes](#componentes)
5. [Badges e Tags](#badges-e-tags)
6. [Cards](#cards)
7. [Botões](#botões)
8. [Ícones](#ícones)
9. [Animações](#animações)
10. [Backgrounds](#backgrounds)

---

## 🎨 Cores

### Cores Primárias

```css
/* Azul dataRain - Cor principal */
--primary: #3893af;
--primary-hover: #2d7a94;
--primary-light: rgba(56, 147, 175, 0.1);
--primary-border: rgba(56, 147, 175, 0.2);

/* Laranja dataRain - Cor de destaque */
--accent: #f78504;
--accent-hover: #d97304;
--accent-light: rgba(247, 133, 4, 0.1);
--accent-border: rgba(247, 133, 4, 0.2);
```

### Cores Neutras

```css
--background: #ffffff;
--foreground: #0a0a0a;
--card: #f8f9fa;
--muted: #6b7280;
--border: #e5e7eb;
```

### ⚠️ Regras de Uso

- **NUNCA** usar cores fora da paleta oficial (purple, cyan, pink, emerald, etc.)
- **SEMPRE** usar `primary` (#3893af) ou `accent` (#f78504)
- Gradientes são **PROIBIDOS** - usar apenas cores sólidas
- Para variações, usar opacidade: `bg-primary/10`, `bg-accent/20`

---

## 📝 Tipografia

### Hierarquia de Títulos

```tsx
// Hero Title (Páginas principais)
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">

// Section Title (Seções principais)
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">

// Subsection Title
<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">

// Card Title
<h4 className="text-xl sm:text-2xl font-bold text-foreground">

// Small Title
<h5 className="text-lg sm:text-xl font-bold text-foreground">
```

### Texto Corpo

```tsx
// Parágrafo grande (Hero)
<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">

// Parágrafo normal
<p className="text-base sm:text-lg text-muted-foreground">

// Parágrafo pequeno
<p className="text-sm sm:text-base text-muted-foreground">
```

---

## 📏 Espaçamento

### Sistema de Padding/Margin

```tsx
// Mobile First - Sempre começar com mobile
py-12 px-4    // Mobile (< 640px)
sm:py-16 sm:px-6    // Tablet (640px - 1024px)
md:py-20 md:px-8    // Desktop (> 1024px)
lg:py-24 lg:px-10   // Large Desktop (> 1280px)

// Gaps entre elementos
gap-3    // Mobile
sm:gap-4 // Tablet
md:gap-6 // Desktop
```

### Padding de Seções

```tsx
// Padrão para todas as seções
<section className="py-12 sm:py-16 md:py-20 lg:py-24">
```

### Hero Sections

```tsx
// Hero com header fixo
<section className="pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-12 sm:pb-16 md:pb-20">
```

---

## 🧩 Componentes

### 1. Section Badge (Identificador de Seção)

**PADRÃO ÚNICO** - Usar sempre este formato:

```tsx
<div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
  Nome da Seção
</div>
```

**Variação com Accent:**

```tsx
<div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-6">
  Nome da Seção
</div>
```

**❌ NÃO USAR:**
- Badges com fundo sólido colorido
- Badges com bordas grossas
- Badges com ícones dentro
- Tamanhos diferentes de padding

---

### 2. Cards

#### Card Padrão

```tsx
<div className="bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
  {/* Conteúdo */}
</div>
```

#### Card com Hover Elevado

```tsx
<div className="bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
  {/* Conteúdo */}
</div>
```

#### Card de Destaque

```tsx
<div className="bg-card/80 rounded-3xl p-8 md:p-10 border border-primary shadow-2xl backdrop-blur-sm">
  {/* Conteúdo */}
</div>
```

**⚠️ Regras:**
- **NUNCA** usar `bg-gradient-to-br` em cards
- **SEMPRE** usar `bg-card/80` com `border-primary/20` ou `border-accent/20`
- Rounded: `rounded-2xl` (mobile) → `sm:rounded-3xl` (desktop)
- Padding: `p-6 sm:p-8` ou `p-8 md:p-10` para cards maiores

---

### 3. Icon Containers

#### Container Padrão (Primary)

```tsx
<div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
  <Icon className="w-7 h-7 text-white" />
</div>
```

#### Container Accent

```tsx
<div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
  <Icon className="w-7 h-7 text-white" />
</div>
```

#### Container com Hover

```tsx
<div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
  <Icon className="w-7 h-7 text-white" />
</div>
```

#### Container Grande (Hero/Destaque)

```tsx
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
</div>
```

**❌ PROIBIDO:**
- `bg-gradient-to-br from-primary to-accent`
- `bg-gradient-to-br from-blue-500 to-cyan-500`
- Qualquer gradiente em icon containers

**✅ PERMITIDO:**
- `bg-primary` (azul sólido)
- `bg-accent` (laranja sólido)
- `bg-primary/10` (azul transparente para fundos sutis)

---

### 4. Botões

#### Botão Hero (CTA Principal)

```tsx
<Button variant="hero" size="xl" asChild>
  <a href="/link">
    Texto do Botão
    <ArrowRight className="w-5 h-5 ml-2" />
  </a>
</Button>
```

#### Botão Outline

```tsx
<Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/5">
  <a href="/link">Texto do Botão</a>
</Button>
```

#### Botão Default

```tsx
<Button variant="default" size="lg">
  Texto do Botão
</Button>
```

**Tamanhos:**
- `size="sm"` - Pequeno
- `size="lg"` - Médio
- `size="xl"` - Grande (Hero)

---

### 5. Badges e Tags

#### Badge de Categoria (Blog/Cases)

```tsx
<span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
  Categoria
</span>
```

#### Badge de Status

```tsx
<span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
  Status
</span>
```

#### Tag de Tecnologia

```tsx
<div className="px-4 py-2 bg-card rounded-full border border-border/20 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-sm font-medium text-foreground hover:text-primary">
  React
</div>
```

**❌ NÃO USAR:**
- Emojis em badges (📝, 💼, etc.)
- Cores diferentes para cada categoria
- Gradientes em badges

---

### 6. Dividers (Separadores de Seção)

#### Divider com Título (Primary)

```tsx
<div className="flex items-center gap-4 mb-8">
  <div className="w-12 h-1 bg-primary rounded-full"></div>
  <h3 className="text-3xl font-bold text-primary">Título da Seção</h3>
  <div className="flex-1 h-1 bg-primary/20 rounded-full"></div>
</div>
```

#### Divider com Título (Accent)

```tsx
<div className="flex items-center gap-4 mb-8">
  <div className="w-12 h-1 bg-accent rounded-full"></div>
  <h3 className="text-3xl font-bold text-accent">Título da Seção</h3>
  <div className="flex-1 h-1 bg-accent/20 rounded-full"></div>
</div>
```

---

### 7. Process Steps (Números de Processo)

#### Step Card

```tsx
<div className="bg-card/80 rounded-3xl p-8 border border-primary/20 shadow-2xl backdrop-blur-sm">
  <div className="flex items-start justify-between mb-6">
    <div className="relative">
      {/* Número grande de fundo */}
      <div className="text-8xl font-bold text-primary/10 leading-none">
        01
      </div>
      {/* Badge com número */}
      <div className="absolute top-0 left-0 w-20 h-20 rounded-2xl bg-primary shadow-xl flex items-center justify-center">
        <span className="text-white font-bold text-2xl">01</span>
      </div>
    </div>
  </div>
  
  <h3 className="text-2xl font-bold text-primary mb-4">
    Título do Passo
  </h3>
  <p className="text-base text-muted-foreground">
    Descrição do passo
  </p>
</div>
```

---

### 8. Statistics Cards

#### Stat Card Primary

```tsx
<div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 text-center">
  <div className="text-5xl font-bold text-primary mb-2">200+</div>
  <div className="text-sm text-muted-foreground">Projetos entregues</div>
</div>
```

#### Stat Card Accent

```tsx
<div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
  <div className="text-5xl font-bold text-accent mb-2">10x</div>
  <div className="text-sm text-muted-foreground">Mais rápido</div>
</div>
```

---

## 🎭 Animações

### Hover States

```tsx
// Card Hover
hover:shadow-2xl hover:-translate-y-2 transition-all duration-300

// Icon Hover
group-hover:scale-110 transition-transform duration-300

// Button Hover
hover:shadow-xl transition-all duration-300

// Border Hover
hover:border-primary/40 transition-all duration-300
```

### Pulse Animation (Background Orbs)

```tsx
<div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
```

---

## 🌈 Backgrounds

### Hero Background Pattern

```tsx
<section className="relative min-h-[70vh] overflow-hidden">
  {/* Background base */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
  
  {/* Orbs animados */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>
  
  {/* Conteúdo */}
  <div className="relative z-10">
    {/* Seu conteúdo aqui */}
  </div>
</section>
```

### Section Background (Alternado)

```tsx
// Background claro
<section className="py-20 bg-background">

// Background com card
<section className="py-20 bg-gradient-to-b from-background via-card/20 to-background">

// Background com primary
<section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet */
md: 768px   /* Desktop pequeno */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop grande */
2xl: 1536px /* Desktop extra grande */
```

### Grid Patterns

```tsx
// 1 coluna mobile → 2 tablet → 3 desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

// 1 coluna mobile → 2 desktop
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

// 2 colunas mobile → 3 tablet → 4 desktop
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
```

---

## ✅ Checklist de Padronização

Ao criar ou revisar um componente, verificar:

- [ ] Usa apenas cores `primary` (#3893af) ou `accent` (#f78504)
- [ ] Não usa gradientes em ícones ou cards
- [ ] Não usa emojis (apenas ícones Lucide)
- [ ] Badges seguem o padrão `bg-primary/10 text-primary`
- [ ] Cards usam `bg-card/80 border-primary/20`
- [ ] Espaçamento segue o padrão mobile-first
- [ ] Títulos seguem a hierarquia definida
- [ ] Animações são suaves (300-500ms)
- [ ] Hover states são consistentes
- [ ] Responsivo em todos os breakpoints

---

## 🚫 Anti-Patterns (O que NÃO fazer)

### ❌ Cores Proibidas

```tsx
// NUNCA usar:
bg-purple-600
bg-cyan-500
bg-emerald-500
bg-pink-500
bg-rose-600
text-purple-600
border-cyan-400
```

### ❌ Gradientes Proibidos

```tsx
// NUNCA usar:
bg-gradient-to-br from-primary to-accent
bg-gradient-to-r from-blue-500 to-cyan-500
bg-gradient-to-br from-purple-600 to-purple-700
```

### ❌ Emojis

```tsx
// NUNCA usar:
📝 Artigo
💼 Case
🚀 Inovação

// SEMPRE usar ícones Lucide:
<FileText className="w-4 h-4" />
<Briefcase className="w-4 h-4" />
<Rocket className="w-4 h-4" />
```

### ❌ Badges Inconsistentes

```tsx
// NUNCA usar diferentes estilos:
<span className="bg-blue-500 text-white px-4 py-2">Tag</span>
<span className="bg-gradient-to-r from-primary to-accent">Tag</span>

// SEMPRE usar o padrão:
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Tag</span>
```

---

## 📚 Exemplos Práticos

### Exemplo 1: Card de Serviço

```tsx
<div className="bg-card/80 rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm group">
  {/* Ícone */}
  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
    <Cloud className="w-8 h-8 text-white" />
  </div>
  
  {/* Título */}
  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
    Cloud Computing
  </h3>
  
  {/* Descrição */}
  <p className="text-base text-muted-foreground leading-relaxed mb-6">
    Migração e otimização de infraestrutura cloud com AWS.
  </p>
  
  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">AWS</span>
    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">DevOps</span>
  </div>
</div>
```

### Exemplo 2: Section Header

```tsx
<div className="text-center mb-16">
  {/* Badge */}
  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
    Nossas Soluções
  </div>
  
  {/* Título */}
  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
    Transformação Digital Completa
  </h2>
  
  {/* Subtítulo */}
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    Do planejamento à execução, entregamos soluções que geram resultados
  </p>
</div>
```

### Exemplo 3: Pillar Card (Solucoes)

```tsx
<a href="/solucoes/dados" className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block">
  {/* Background hover */}
  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  {/* Decorative SVG */}
  <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
    <svg className="absolute right-0 top-0 w-32 h-32 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="80" cy="20" r="8" />
    </svg>
  </div>
  
  {/* Orb */}
  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
  
  {/* Content */}
  <div className="relative z-10 p-10">
    {/* Top line */}
    <div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    
    {/* Icon */}
    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <Brain className="w-8 h-8" />
    </div>
    
    {/* Title */}
    <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
      GenAI e Dados
    </h3>
    
    {/* Description */}
    <p className="text-base text-muted-foreground leading-relaxed mb-6">
      Arquitetura de dados e IA aplicada. De data lakes a soluções verticais inteligentes.
    </p>
    
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Agentic AI</span>
      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Data Architecture</span>
    </div>
    
    {/* CTA */}
    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
      <span>Explorar soluções</span>
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>
</a>
```

---

## 🔄 Processo de Atualização

Quando encontrar elementos fora do padrão:

1. **Identificar** o componente despadronizado
2. **Consultar** este design system
3. **Aplicar** o padrão correto
4. **Testar** em todos os breakpoints
5. **Documentar** se for um novo padrão

---

## 📞 Contato

Para dúvidas sobre o design system ou sugestões de novos padrões, consulte a equipe de desenvolvimento.

**Última atualização:** 2025-02-25

---

**Versão:** 1.0.0
