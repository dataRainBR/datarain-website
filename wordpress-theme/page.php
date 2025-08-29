<?php get_header(); ?>

<main class="main-content" style="padding-top: 6rem;">
    <div class="container">
        <?php while (have_posts()) : the_post(); ?>
            <article class="single-page">
                <header class="page-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 class="page-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900);">
                        <?php the_title(); ?>
                    </h1>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="page-thumbnail" style="margin-bottom: 2rem; text-align: center;">
                        <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; height: auto; border-radius: 1rem;')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="page-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: var(--gray-700);">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>