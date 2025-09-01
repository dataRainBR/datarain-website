<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        <header class="page-header" style="text-align: center; margin-bottom: 3rem;">
            <h1 class="entry-title">
                <?php
                if (is_category()) {
                    echo 'Categoria: ' . single_cat_title('', false);
                } elseif (is_tag()) {
                    echo 'Tag: ' . single_tag_title('', false);
                } elseif (is_author()) {
                    echo 'Autor: ' . get_the_author();
                } elseif (is_date()) {
                    echo 'Arquivo: ' . get_the_date('F Y');
                } elseif (is_post_type_archive()) {
                    echo post_type_archive_title('', false);
                } else {
                    echo 'Arquivo';
                }
                ?>
            </h1>
            
            <?php if (term_description()) : ?>
                <div style="max-width: 600px; margin: 1rem auto; color: var(--gray-600);">
                    <?php echo term_description(); ?>
                </div>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
            <div class="archive-posts">
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
                                <?php if (get_post_type() !== 'post') : ?>
                                    <span> | </span>
                                    <span><?php echo get_post_type_object(get_post_type())->labels->singular_name; ?></span>
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
                <h2 style="margin-bottom: 1rem; color: var(--gray-900);">Nenhum conteúdo encontrado</h2>
                <p style="color: var(--gray-600); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Não há conteúdo disponível nesta categoria no momento.
                </p>
                
                <div style="margin-bottom: 2rem;">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                        Voltar ao Início
                    </a>
                </div>
                
                <div style="max-width: 600px; margin: 0 auto;">
                    <h3 style="margin-bottom: 1rem; color: var(--gray-900);">Busque por algo específico:</h3>
                    <?php get_search_form(); ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>