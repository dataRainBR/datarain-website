<?php get_header(); ?>

<!-- Header/Hero Section -->
<div class="hero-section">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-background.jpg" alt="DataRain Hero Background" class="hero-background">
    <div class="hero-overlay"></div>
    
    <!-- Navigation -->
    <div class="nav-container">
        <div class="container">
            <div class="nav-glass">
                <div class="nav-flex">
                    <div class="logo">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" alt="DataRain" style="height: 2rem;">
                    </div>
                    
                    <div class="nav-links-wrap">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'container' => false,
                            'menu_class' => 'nav-links',
                            'link_before' => '<span class="nav-link">',
                            'link_after' => '</span>',
                        ));
                        ?>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <a href="#contato" class="btn btn-hero">Fale Conosco</a>
                        <button class="mobile-menu-btn" aria-label="Abrir menu">☰</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
        <div class="container">
            <div class="hero-inner">
                <div class="hero-glass">
                    <h1 class="hero-title">
                        Parceiro estratégico em
                        <span class="hero-gradient-text"> cloud</span>
                    </h1>
                    <p class="hero-subtitle">
                        Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                        agilidade e foco em resultados.
                    </p>

                    <div class="hero-buttons">
                        <a href="#solucoes" class="btn btn-hero btn-xl">
                            Conheça Nossas Soluções
                        </a>
                        <a href="#demonstracao" class="btn btn-glass btn-xl">
                            Agende uma Demonstração
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- About Section -->
<div class="section" id="sobre">
    <div class="container">
        <h2 class="section-title">Sobre a DataRain</h2>
        <div class="section-glass p-8">
            <p style="text-align: center; font-size: 1.125rem; color: #64748b; max-width: 48rem; margin: 0 auto;">
                Somos especialistas em transformação digital, oferecendo soluções completas em cloud computing, 
                análise de dados e inteligência artificial para impulsionar o crescimento do seu negócio.
            </p>
        </div>
    </div>
</div>

<!-- Services Section -->
<div class="section" id="solucoes">
    <div class="container">
        <h2 class="section-title">Nossas Soluções</h2>
        <div class="services-grid">
            <div class="card">
                <div class="service-icon">☁️</div>
                <h3 class="service-title">Cloud Computing</h3>
                <p class="service-description">Migração e gestão completa de infraestrutura em nuvem.</p>
            </div>
            
            <div class="card">
                <div class="service-icon">📊</div>
                <h3 class="service-title">Analytics & Data</h3>
                <p class="service-description">Transforme dados em insights estratégicos para seu negócio.</p>
            </div>
            
            <div class="card">
                <div class="service-icon">🤖</div>
                <h3 class="service-title">Inteligência Artificial</h3>
                <p class="service-description">Soluções de IA para automação e otimização de processos.</p>
            </div>
            
            <div class="card">
                <div class="service-icon">🔒</div>
                <h3 class="service-title">Segurança</h3>
                <p class="service-description">Proteção avançada para seus dados e aplicações.</p>
            </div>
        </div>
        
        <div style="text-align: center;">
            <a href="#contato" class="btn btn-hero btn-xl">Ver Todas as Soluções</a>
        </div>
    </div>
</div>

<!-- Certifications Section -->
<div class="section">
    <div class="container">
        <h2 class="section-title">Certificações AWS</h2>
        <div class="section-glass p-8 text-center">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/aws-certifications.png" alt="Certificações AWS" style="max-width: 100%; height: auto; margin: 0 auto;">
            <p style="margin-top: 2rem; color: #64748b; font-size: 1.125rem;">
                Parceiro oficial AWS com certificações avançadas em cloud computing.
            </p>
        </div>
    </div>
</div>

<!-- Cases Section -->
<div class="section" id="casos">
    <div class="container">
        <h2 class="section-title">Cases de Sucesso</h2>
        <div class="services-grid">
            <div class="card">
                <div class="service-icon">📈</div>
                <h3 class="service-title">E-commerce em Nuvem</h3>
                <p class="service-description">Migração de plataforma de e-commerce para AWS com 99.9% de uptime e redução de 40% nos custos de infraestrutura.</p>
            </div>
            
            <div class="card">
                <div class="service-icon">🏥</div>
                <h3 class="service-title">Sistema Hospitalar</h3>
                <p class="service-description">Implementação de sistema de gestão hospitalar com análise de dados em tempo real e compliance LGPD.</p>
            </div>
            
            <div class="card">
                <div class="service-icon">🏭</div>
                <h3 class="service-title">Indústria 4.0</h3>
                <p class="service-description">Automação de processos industriais com IoT e IA, aumentando produtividade em 35%.</p>
            </div>
        </div>
    </div>
</div>

<!-- Clients Section -->
<div class="section" id="parceiros">
    <div class="container">
        <h2 class="section-title">Nossos Parceiros</h2>
        <div class="section-glass p-8">
            <div class="marquee-container">
                <div class="marquee">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/client-logos.png" alt="Logotipos dos Clientes" style="height: 4rem; width: auto;">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/client-logos.png" alt="Logotipos dos Clientes" style="height: 4rem; width: auto;">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/client-logos.png" alt="Logotipos dos Clientes" style="height: 4rem; width: auto;">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/client-logos.png" alt="Logotipos dos Clientes" style="height: 4rem; width: auto;">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- CTA Section -->
<div class="section" id="contato">
    <div class="container">
        <div class="section-glass p-8 text-center" style="max-width: 64rem; margin: 0 auto;">
            <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210 100% 50%);">
                Pronto para transformar seu negócio?
            </h2>
            <p style="font-size: 1.25rem; margin-bottom: 2.5rem; color: #64748b;">
                Entre em contato conosco e descubra como a DataRain pode impulsionar
                sua empresa com soluções tecnológicas inovadoras.
            </p>
            <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; max-width: 32rem; margin: 0 auto;">
                <a href="#demonstracao" class="btn btn-hero btn-xl">
                    Agende uma Demonstração
                </a>
                <a href="#contato" class="btn btn-glass btn-xl">
                    Entre em Contato
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>