<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <h1><?php echo esc_html(get_theme_mod('hero_title', 'Transforme seu Negócio com a Nuvem')); ?></h1>
        <p><?php echo esc_html(get_theme_mod('hero_subtitle', 'Soluções completas em Cloud Computing, Analytics e Inteligência Artificial para acelerar sua transformação digital.')); ?></p>
        <div class="hero-buttons">
            <a href="#contato" class="btn btn-orange">Fale Conosco</a>
            <a href="#demo" class="btn btn-outline">Agende uma Demonstração</a>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="section" id="sobre">
    <div class="container">
        <div class="grid grid-2" style="align-items: center;">
            <div>
                <h2 class="section-title" style="text-align: left;">Sobre a DataRain</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--gray-600);">
                    Somos especialistas em transformação digital através da tecnologia em nuvem. 
                    Com anos de experiência e certificações AWS, ajudamos empresas a modernizar 
                    suas operações e acelerar o crescimento.
                </p>
                <div class="card" style="background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark)); color: white;">
                    <h3>Parceiro AWS</h3>
                    <p>Certificados e reconhecidos pela Amazon Web Services como parceiro oficial.</p>
                </div>
            </div>
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-people-technology.jpg" 
                     alt="Equipe DataRain" 
                     style="width: 100%; border-radius: 1rem;" 
                     loading="lazy">
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="section" id="servicos" style="background: var(--gray-100);">
    <div class="container">
        <h2 class="section-title">Nossas Soluções</h2>
        <p class="section-subtitle">Oferecemos soluções completas para sua jornada na nuvem</p>
        
        <div class="grid grid-4">
            <div class="card">
                <div class="card-icon">☁️</div>
                <h3>Cloud Computing</h3>
                <p>Migração e otimização de infraestrutura para AWS, garantindo performance e economia.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">📊</div>
                <h3>Analytics & Data</h3>
                <p>Transforme dados em insights com soluções avançadas de analytics e business intelligence.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🤖</div>
                <h3>Inteligência Artificial</h3>
                <p>Implemente IA e ML para automatizar processos e gerar valor para seu negócio.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🔒</div>
                <h3>Segurança</h3>
                <p>Proteja seus dados com as melhores práticas de segurança em nuvem.</p>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <a href="#contato" class="btn btn-primary">Ver Todas as Soluções</a>
        </div>
    </div>
</section>

<!-- Cases Section -->
<section class="section" id="cases">
    <div class="container">
        <h2 class="section-title">Cases de Sucesso</h2>
        <p class="section-subtitle">Resultados que transformam negócios</p>
        
        <div class="grid grid-3">
            <div class="card">
                <div class="card-icon">📈</div>
                <h3>Redução de 40% nos Custos</h3>
                <p>Otimização de infraestrutura AWS resultou em economia significativa para e-commerce nacional.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">⚡</div>
                <h3>Performance 3x Melhor</h3>
                <p>Modernização de aplicações legadas aumentou performance em 300% para fintech.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🎯</div>
                <h3>Analytics em Tempo Real</h3>
                <p>Implementação de data lake permitiu análises em tempo real para varejista.</p>
            </div>
        </div>
    </div>
</section>

<!-- Certifications Section -->
<section class="section" style="background: var(--gray-100);">
    <div class="container">
        <div class="grid grid-2" style="align-items: center;">
            <div>
                <h2 class="section-title" style="text-align: left;">Certificações AWS</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--gray-600);">
                    Nossa equipe possui as principais certificações AWS, garantindo expertise 
                    técnica e melhores práticas em todos os projetos.
                </p>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;">✓ AWS Solutions Architect Professional</li>
                    <li style="margin-bottom: 0.5rem;">✓ AWS DevOps Engineer Professional</li>
                    <li style="margin-bottom: 0.5rem;">✓ AWS Security Specialty</li>
                    <li style="margin-bottom: 0.5rem;">✓ AWS Data Analytics Specialty</li>
                </ul>
            </div>
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/aws-certifications.png" 
                     alt="Certificações AWS" 
                     style="width: 100%;" 
                     loading="lazy">
            </div>
        </div>
    </div>
</section>

<!-- Clients Section -->
<section class="section" id="clientes">
    <div class="container">
        <h2 class="section-title">Clientes que Confiam</h2>
        <p class="section-subtitle">Empresas de diversos setores já transformaram seus negócios conosco</p>
        
        <div style="text-align: center;">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/client-logos.png" 
                 alt="Logos dos clientes" 
                 style="max-width: 100%; height: auto;" 
                 loading="lazy">
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section" style="background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark)); color: white;">
    <div class="container" style="text-align: center;">
        <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Pronto para Transformar seu Negócio?
        </h2>
        <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">
            Converse com nossos especialistas e descubra como podemos acelerar sua jornada na nuvem.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#demo" class="btn btn-orange">Agendar Demonstração</a>
            <a href="#contato" class="btn" style="background: white; color: var(--primary-blue); border-color: white;">
                Falar com Especialista
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>