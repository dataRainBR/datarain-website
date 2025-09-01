<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        <header class="search-header" style="text-align: center; margin-bottom: 3rem;">
            <h1 class="entry-title">
                <?php if (have_posts()) : ?>
                    Resultados da Busca para: "<?php echo get_search_query(); ?>"
                <?php else : ?>
                    Nenhum resultado encontrado para: "<?php echo get_search_query(); ?>"
                <?php endif; ?>
            </h1>
            
            <div style="max-width: 600px; margin: 2rem auto 0;">
                <?php get_search_form(); ?>
            </div>
        </header>

        <?php if (have_posts()) : ?>
            <div class="search-results">
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
                                    <span>Categoria: <?php the_category(', '); ?></span>
                                <?php endif; ?>
                                <?php if (get_post_type() !== 'post') : ?>
                                    <span> | </span>
                                    <span>Tipo: <?php echo get_post_type_object(get_post_type())->labels->singular_name; ?></span>
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
        <?php else : ?>
            <div style="text-align: center; padding: 3rem 0;">
                <h2 style="margin-bottom: 1rem; color: var(--gray-900);">Nada encontrado</h2>
                <p style="color: var(--gray-600); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Desculpe, mas nada foi encontrado para sua busca. 
                    Tente novamente com palavras-chave diferentes ou navegue pelo conteúdo do site.
                </p>
                
                <div style="margin-bottom: 2rem;">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                        Voltar ao Início
                    </a>
                </div>
                
                <div style="max-width: 600px; margin: 0 auto;">
                    <h3 style="margin-bottom: 1rem; color: var(--gray-900);">Tente uma nova busca:</h3>
                    <?php get_search_form(); ?>
                </div>
                
                <div style="margin-top: 3rem;">
                    <h4 style="margin-bottom: 1rem; color: var(--gray-900);">Ou explore nosso conteúdo:</h4>
                    <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                        <a href="<?php echo esc_url(home_url('/')); ?>#sobre" style="color: var(--primary-blue); text-decoration: none;">Sobre Nós</a>
                        <a href="<?php echo esc_url(home_url('/')); ?>#servicos" style="color: var(--primary-blue); text-decoration: none;">Soluções</a>
                        <a href="<?php echo esc_url(home_url('/blog')); ?>" style="color: var(--primary-blue); text-decoration: none;">Blog</a>
                        <a href="<?php echo esc_url(home_url('/')); ?>#contato" style="color: var(--primary-blue); text-decoration: none;">Contato</a>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>