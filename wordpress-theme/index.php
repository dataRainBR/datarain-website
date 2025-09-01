<?php get_header(); ?>

<main class="main-content">
    <?php if (is_home() && !is_paged()) : ?>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1><?php echo get_theme_mod('hero_title', 'Transforme seu negócio com soluções AWS de ponta'); ?></h1>
                <p><?php echo get_theme_mod('hero_subtitle', 'Especialistas em Cloud Computing, Analytics e IA para acelerar sua transformação digital'); ?></p>
                <div class="hero-buttons">
                    <a href="#contato" class="btn btn-orange">Fale Conosco</a>
                    <a href="#demo" class="btn btn-outline">Agende uma Demonstração</a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="sobre" class="section">
            <div class="container">
                <div class="grid grid-2">
                    <div>
                        <h2 class="section-title">Sobre a DataRain</h2>
                        <p class="section-subtitle">Somos uma empresa especializada em soluções de nuvem AWS, com foco em transformação digital e inovação tecnológica.</p>
                        <p>Com anos de experiência e certificações AWS, nossa equipe está preparada para levar sua empresa ao próximo nível da computação em nuvem.</p>
                    </div>
                    <div class="card">
                        <div style="color: var(--orange); font-size: 3rem; margin-bottom: 1rem;">🏆</div>
                        <h3>AWS Partner Network</h3>
                        <p>Parceiro oficial AWS com certificações em soluções de nuvem, analytics e inteligência artificial.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="servicos" class="section" style="background: var(--gray-100);">
            <div class="container">
                <h2 class="section-title">Nossas Soluções</h2>
                <p class="section-subtitle">Oferecemos um portfólio completo de serviços para sua jornada na nuvem</p>
                
                <div class="grid grid-3">
                    <div class="card">
                        <div style="color: var(--primary-blue); font-size: 3rem; margin-bottom: 1rem;">☁️</div>
                        <h3>Cloud Computing</h3>
                        <p>Migração, arquitetura e otimização de infraestrutura na AWS para máxima eficiência e economia.</p>
                    </div>
                    <div class="card">
                        <div style="color: var(--primary-blue); font-size: 3rem; margin-bottom: 1rem;">📊</div>
                        <h3>Analytics & Data</h3>
                        <p>Soluções de analytics e big data para transformar seus dados em insights estratégicos.</p>
                    </div>
                    <div class="card">
                        <div style="color: var(--primary-blue); font-size: 3rem; margin-bottom: 1rem;">🤖</div>
                        <h3>Inteligência Artificial</h3>
                        <p>Implementação de soluções de IA e machine learning para automatizar e otimizar processos.</p>
                    </div>
                    <div class="card">
                        <div style="color: var(--primary-blue); font-size: 3rem; margin-bottom: 1rem;">🔒</div>
                        <h3>Segurança</h3>
                        <p>Proteção avançada com as melhores práticas de segurança AWS e compliance.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="contato" class="section" style="background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark)); color: white;">
            <div class="container" style="text-align: center;">
                <h2 style="color: white; margin-bottom: 1rem;">Pronto para transformar seu negócio?</h2>
                <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">Entre em contato conosco e descubra como podemos acelerar sua jornada digital</p>
                <div class="hero-buttons">
                    <a href="mailto:contato@datarain.com.br" class="btn btn-orange">Fale Conosco</a>
                    <a href="tel:+5511999999999" class="btn btn-outline" style="color: white; border-color: white;">Agende uma Demonstração</a>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <!-- Blog Posts -->
    <?php if (have_posts()) : ?>
        <div class="container">
            <div class="content-area">
                <?php if (is_home() && is_paged()) : ?>
                    <h1 class="entry-title">Blog - Página <?php echo get_query_var('paged'); ?></h1>
                <?php elseif (is_home()) : ?>
                    <h2 class="section-title">Últimas Notícias</h2>
                <?php endif; ?>

                <div class="grid grid-2">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="margin-bottom: 1rem;">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('medium', ['style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;']); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                            
                            <div class="post-meta">
                                <span><?php echo get_the_date(); ?></span>
                                <?php if (get_the_category()) : ?>
                                    <span> | </span>
                                    <span><?php the_category(', '); ?></span>
                                <?php endif; ?>
                            </div>
                            
                            <h3>
                                <a href="<?php the_permalink(); ?>" style="color: var(--gray-900); text-decoration: none;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: 1rem;">
                                Leia mais
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <div style="text-align: center; margin-top: 3rem;">
                    <?php
                    the_posts_pagination(array(
                        'mid_size' => 2,
                        'prev_text' => '← Anterior',
                        'next_text' => 'Próximo →',
                    ));
                    ?>
                </div>
            </div>
        </div>
    <?php else : ?>
        <div class="container">
            <div class="content-area" style="text-align: center;">
                <h1 class="entry-title">Nenhum post encontrado</h1>
                <p>Desculpe, mas não há conteúdo disponível no momento.</p>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>