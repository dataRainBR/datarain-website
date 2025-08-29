<?php get_header(); ?>

<main class="main-content" style="padding-top: 6rem;">
    <div class="container">
        <?php while (have_posts()) : the_post(); ?>
            <article class="single-post">
                <header class="post-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 class="post-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                        <?php the_title(); ?>
                    </h1>
                    
                    <div class="post-meta" style="color: var(--gray-600); font-size: 0.9rem;">
                        <span>Publicado em <?php echo get_the_date(); ?></span>
                        <?php if (get_the_category()) : ?>
                            <span> | </span>
                            <span>Categoria: <?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail" style="margin-bottom: 2rem; text-align: center;">
                        <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; height: auto; border-radius: 1rem;')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="post-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: var(--gray-700);">
                    <?php the_content(); ?>
                </div>
                
                <?php if (get_the_tags()) : ?>
                    <div class="post-tags" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--gray-300);">
                        <strong>Tags: </strong>
                        <?php the_tags('', ', ', ''); ?>
                    </div>
                <?php endif; ?>
                
                <div class="post-navigation" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-300);">
                    <?php
                    the_post_navigation(array(
                        'prev_text' => '← Post Anterior',
                        'next_text' => 'Próximo Post →',
                    ));
                    ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>