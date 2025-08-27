<?php get_header(); ?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-background.jpg" alt="DataRain Hero Background" class="hero-bg" />
        <div class="hero-overlay"></div>
        
        <!-- Navigation -->
        <nav class="main-nav" id="main-nav">
            <div class="nav-container">
                <div class="nav-content">
                    <!-- Logo -->
                    <div class="nav-logo">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" alt="DataRain" class="logo" />
                        <?php endif; ?>
                    </div>
                    
                    <!-- Desktop Navigation -->
                    <div class="nav-links">
                        <a href="#sobre" class="nav-link">Quem Somos</a>
                        <a href="#solucoes" class="nav-link">Soluções</a>
                        <a href="#servicos" class="nav-link">Serviços Gerenciados</a>
                        <a href="#cases" class="nav-link">Cases</a>
                        <a href="#conteudo" class="nav-link">Conteúdo</a>
                        <a href="#academy" class="nav-link">Academy</a>
                    </div>
                    
                    <!-- CTA Button -->
                    <a href="#contato" class="btn btn-hero">Fale Conosco</a>
                    
                    <!-- Mobile Menu Button -->
                    <button class="mobile-menu-btn" id="mobile-menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
        
        <!-- Hero Content -->
        <div class="hero-content">
            <div class="container">
                <div class="hero-grid">
                    <!-- Left side - Image -->
                    <div class="hero-image-container">
                        <div class="hero-image-card">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-people-technology.jpg" alt="Pessoas felizes com tecnologia e ícones de cloud" class="hero-image" />
                        </div>
                    </div>
                    
                    <!-- Right side - Content -->
                    <div class="hero-content-container">
                        <div class="hero-card">
                            <h1 class="hero-title">
                                Parceiro estratégico em
                                <span class="hero-gradient-text"> cloud</span>
                            </h1>
                            <p class="hero-subtitle">
                                Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                                agilidade e foco em resultados.
                            </p>
                            <div class="btn-grid">
                                <a href="#solucoes" class="btn btn-hero btn-xl">
                                    <span class="desktop-text">Conheça Nossas Soluções</span>
                                    <span class="mobile-text">Nossas Soluções</span>
                                </a>
                                <a href="#contato" class="btn btn-glass btn-xl">
                                    <span class="desktop-text">Agende uma Demonstração</span>
                                    <span class="mobile-text">Demonstração</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="sobre">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <div class="about-header">
                        <h2 class="section-title">Sobre a DataRain</h2>
                        <div class="accent-line"></div>
                    </div>
                    
                    <div class="about-text">
                        <p>A DataRain é a parceira estratégica para empresas em tecnologia, 
                        entregando soluções em cloud, dados e inteligência artificial 
                        com segurança, agilidade e foco em resultados.</p>
                        <p>Trabalhamos lado a lado com nossos clientes para impulsionar 
                        inovação, acelerar a tomada de decisões e apoiar o crescimento 
                        dos negócios.</p>
                    </div>
                    
                    <a href="#" class="btn btn-primary">Conheça Nossa História</a>
                </div>
                
                <div class="about-card">
                    <div class="card-header"></div>
                    <div class="aws-badge">
                        <div class="badge-indicator"></div>
                        <span>AWS PARTNER</span>
                    </div>
                    <h3 class="card-title">
                        Líder em <span class="accent-text">5 de 6</span> Quadrantes
                    </h3>
                    <p class="card-subtitle">No Ecossistema AWS</p>
                    
                    <div class="competencies-list">
                        <div class="competency-item">
                            <div class="competency-bullet"></div>
                            <span>Amazon DynamoDB Delivery</span>
                        </div>
                        <div class="competency-item">
                            <div class="competency-bullet"></div>
                            <span>DevOps Services Competency</span>
                        </div>
                        <div class="competency-item">
                            <div class="competency-bullet"></div>
                            <span>Amazon EC2 for Windows Server Delivery</span>
                        </div>
                        <div class="competency-item">
                            <div class="competency-bullet"></div>
                            <span>Migration and Modernization Services</span>
                        </div>
                        <div class="competency-item">
                            <div class="competency-bullet"></div>
                            <span>Generative AI Services Competency</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cases Section -->
    <section class="cases-section" id="cases">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Cases de Sucesso</h2>
                <p class="section-subtitle">Conheça alguns dos projetos que transformaram nossos clientes</p>
            </div>
            
            <div class="cases-grid">
                <div class="case-card">
                    <div class="case-icon">📈</div>
                    <h3 class="case-title">E-commerce em Nuvem</h3>
                    <p class="case-description">Migração de plataforma de e-commerce para AWS com 99.9% de uptime e redução de 40% nos custos de infraestrutura.</p>
                </div>
                
                <div class="case-card">
                    <div class="case-icon">🏥</div>
                    <h3 class="case-title">Sistema Hospitalar</h3>
                    <p class="case-description">Implementação de sistema de gestão hospitalar com análise de dados em tempo real e compliance LGPD.</p>
                </div>
                
                <div class="case-card">
                    <div class="case-icon">🏭</div>
                    <h3 class="case-title">Indústria 4.0</h3>
                    <p class="case-description">Automação de processos industriais com IoT e IA, aumentando produtividade em 35%.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="solucoes">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Nossas Soluções</h2>
                <p class="section-subtitle">Oferecemos soluções completas em tecnologia para transformar e 
                impulsionar seu negócio no ambiente digital.</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                        </svg>
                    </div>
                    <h3 class="service-title">Cloud</h3>
                    <p class="service-description">Soluções em nuvem escaláveis e seguras para otimizar recursos e acelerar a inovação.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                    </div>
                    <h3 class="service-title">Dados</h3>
                    <p class="service-description">Estratégias de dados que transformam informações em insights valiosos para seu negócio.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h3 class="service-title">Inteligência Artificial</h3>
                    <p class="service-description">Soluções de IA que automatizam processos e potencializam a tomada de decisões.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                        </svg>
                    </div>
                    <h3 class="service-title">Segurança</h3>
                    <p class="service-description">Proteção abrangente para garantir a integridade dos seus dados e aplicações.</p>
                </div>
            </div>
            
            <div class="text-center">
                <a href="#" class="btn btn-primary">Ver Todas as Soluções</a>
            </div>
        </div>
    </section>

    <!-- Certifications Section -->
    <section class="certifications-section" id="certificacoes">
        <div class="container">
            <div class="certifications-grid">
                <div class="certifications-content">
                    <h2 class="section-title">Certificações AWS</h2>
                    <p class="certifications-description">
                        Somos parceiros oficiais da AWS com múltiplas competências e certificações avançadas, 
                        garantindo que nossos clientes recebam as melhores soluções em cloud computing.
                    </p>
                    <a href="#" class="btn btn-primary">Ver Todas as Certificações</a>
                </div>
                
                <div class="certifications-image">
                    <img src="<?php echo get_theme_file_uri('/assets/aws-certifications.png'); ?>" alt="Certificações AWS DataRain" />
                </div>
            </div>
        </div>
    </section>

    <!-- Clients Section -->
    <section class="clients-section" id="clientes">
        <div class="container">
            <h2 class="section-title">Nossos Clientes</h2>
            <p class="section-subtitle">Empresas que confiam na DataRain para sua transformação digital</p>
            
            <div class="marquee-container">
                <div class="marquee">
                    <img src="<?php echo get_theme_file_uri('/assets/client-logos.png'); ?>" alt="Logotipos dos Clientes" />
                    <img src="<?php echo get_theme_file_uri('/assets/client-logos.png'); ?>" alt="Logotipos dos Clientes" />
                    <img src="<?php echo get_theme_file_uri('/assets/client-logos.png'); ?>" alt="Logotipos dos Clientes" />
                    <img src="<?php echo get_theme_file_uri('/assets/client-logos.png'); ?>" alt="Logotipos dos Clientes" />
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="contato">
        <div class="container">
            <div class="cta-card">
                <h2 class="cta-title">Pronto para transformar seu negócio?</h2>
                <p class="cta-subtitle">
                    Entre em contato conosco e descubra como a DataRain pode impulsionar
                    sua empresa com soluções tecnológicas inovadoras.
                </p>
                <div class="btn-grid">
                    <a href="#" class="btn btn-hero btn-xl">Agende uma Demonstração</a>
                    <a href="#contato" class="btn btn-glass btn-xl cta-contact-btn">Entre em Contato</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>