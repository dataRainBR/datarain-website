<?php get_header(); ?>

<main class="main-content" style="padding-top: 6rem;">
    <div class="container">
        <header class="search-header" style="text-align: center; margin-bottom: 3rem;">
            <h1 class="search-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                <?php if (have_posts()) : ?>
                    Resultados da Busca para: "<?php echo get_search_query(); ?>"
                <?php else : ?>
                    Nenhum resultado encontrado para: "<?php echo get_search_query(); ?>"
                <?php endif; ?>
            </h1>
            
            <div style="max-width: 600px; margin: 0 auto;">
                <?php get_search_form(); ?>
            </div>
        </header>

        <?php if (have_posts()) : ?>
            <div class="search-results">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="search-result" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--gray-300);">
                        <h2 style="margin-bottom: 0.5rem;">
                            <a href="<?php the_permalink(); ?>" style="color: var(--primary-blue); text-decoration: none; font-weight: 600; font-size: 1.5rem;">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="post-meta" style="color: var(--gray-600); font-size: 0.875rem; margin-bottom: 1rem;">
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
                        
                        <div class="search-excerpt" style="color: var(--gray-600); line-height: 1.6;">
                            <?php the_excerpt(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <!-- Pagination -->
            <div class="pagination" style="text-align: center; margin-top: 3rem;">
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
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>