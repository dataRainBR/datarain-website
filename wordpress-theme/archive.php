<?php get_header(); ?>

<main class="main-content" style="padding-top: 6rem;">
    <div class="container">
        <header class="archive-header" style="text-align: center; margin-bottom: 3rem;">
            <?php if (is_category()) : ?>
                <h1 class="archive-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                    Categoria: <?php single_cat_title(); ?>
                </h1>
                <?php if (category_description()) : ?>
                    <div class="archive-description" style="color: var(--gray-600); font-size: 1.125rem;">
                        <?php echo category_description(); ?>
                    </div>
                <?php endif; ?>
            <?php elseif (is_tag()) : ?>
                <h1 class="archive-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                    Tag: <?php single_tag_title(); ?>
                </h1>
            <?php elseif (is_author()) : ?>
                <h1 class="archive-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                    Autor: <?php echo get_the_author(); ?>
                </h1>
            <?php elseif (is_date()) : ?>
                <h1 class="archive-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                    Arquivo: <?php echo get_the_date('F Y'); ?>
                </h1>
            <?php else : ?>
                <h1 class="archive-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                    <?php post_type_archive_title(); ?>
                </h1>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
            <div class="grid grid-3" style="margin-bottom: 3rem;">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="card" style="height: 100%;">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail" style="margin-bottom: 1rem;">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <h3 style="margin-bottom: 1rem;">
                            <a href="<?php the_permalink(); ?>" style="color: var(--gray-900); text-decoration: none; font-weight: 600;">
                                <?php the_title(); ?>
                            </a>
                        </h3>
                        
                        <div class="post-meta" style="color: var(--gray-600); font-size: 0.875rem; margin-bottom: 1rem;">
                            <span><?php echo get_the_date(); ?></span>
                            <?php if (get_the_category()) : ?>
                                <span> | </span>
                                <span><?php the_category(', '); ?></span>
                            <?php endif; ?>
                        </div>
                        
                        <div class="post-excerpt" style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: auto;">
                            Leia Mais
                        </a>
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
                <h2 style="margin-bottom: 1rem; color: var(--gray-900);">Nenhum post encontrado</h2>
                <p style="color: var(--gray-600); margin-bottom: 2rem;">
                    Não há posts para exibir nesta categoria ou arquivo.
                </p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                    Voltar ao Início
                </a>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>