<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        <div class="content-area">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header" style="margin-bottom: 2rem; text-align: center;">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-top: 2rem;">
                                <?php the_post_thumbnail('large', ['style' => 'width: 100%; height: 400px; object-fit: cover; border-radius: 1rem;']); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="entry-content" style="max-width: 800px; margin: 0 auto;">
                        <?php the_content(); ?>
                    </div>

                    <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-300); text-align: center;">
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-outline">
                                ← Voltar ao Início
                            </a>
                            <a href="<?php echo esc_url(home_url('/')); ?>#contato" class="btn btn-primary">
                                Entre em Contato
                            </a>
                        </div>
                    </footer>
                </article>
            <?php endwhile; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>