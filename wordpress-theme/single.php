<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        <div class="content-area">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header" style="margin-bottom: 2rem;">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                        
                        <div class="post-meta">
                            <span>Publicado em <?php echo get_the_date(); ?></span>
                            <?php if (get_the_author()) : ?>
                                <span> por <?php the_author(); ?></span>
                            <?php endif; ?>
                            <?php if (get_the_category()) : ?>
                                <span> | Categoria: <?php the_category(', '); ?></span>
                            <?php endif; ?>
                        </div>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-top: 2rem;">
                                <?php the_post_thumbnail('large', ['style' => 'width: 100%; height: 400px; object-fit: cover; border-radius: 1rem;']); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>

                    <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-300);">
                        <?php if (get_the_tags()) : ?>
                            <div style="margin-bottom: 1rem;">
                                <strong>Tags: </strong>
                                <?php the_tags('', ', ', ''); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <a href="<?php echo esc_url(home_url('/blog')); ?>" class="btn btn-outline">
                                ← Voltar ao Blog
                            </a>
                            <a href="<?php echo esc_url(home_url('/')); ?>#contato" class="btn btn-primary">
                                Entre em Contato
                            </a>
                        </div>
                    </footer>
                </article>

                <!-- Navigation -->
                <nav class="post-navigation" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-300);">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <div>
                            <?php
                            $prev_post = get_previous_post();
                            if ($prev_post) :
                            ?>
                                <a href="<?php echo get_permalink($prev_post->ID); ?>" style="text-decoration: none; color: var(--gray-600);">
                                    <div class="card" style="height: 100%;">
                                        <div style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.5rem;">← Post Anterior</div>
                                        <h4 style="color: var(--gray-900);"><?php echo get_the_title($prev_post->ID); ?></h4>
                                    </div>
                                </a>
                            <?php endif; ?>
                        </div>
                        
                        <div>
                            <?php
                            $next_post = get_next_post();
                            if ($next_post) :
                            ?>
                                <a href="<?php echo get_permalink($next_post->ID); ?>" style="text-decoration: none; color: var(--gray-600);">
                                    <div class="card" style="height: 100%; text-align: right;">
                                        <div style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.5rem;">Próximo Post →</div>
                                        <h4 style="color: var(--gray-900);"><?php echo get_the_title($next_post->ID); ?></h4>
                                    </div>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </nav>

                <!-- Related Posts -->
                <?php
                $categories = get_the_category();
                if ($categories) {
                    $category_ids = array();
                    foreach ($categories as $category) {
                        $category_ids[] = $category->term_id;
                    }
                    
                    $related_posts = new WP_Query(array(
                        'category__in' => $category_ids,
                        'post__not_in' => array(get_the_ID()),
                        'posts_per_page' => 3,
                    ));
                    
                    if ($related_posts->have_posts()) :
                ?>
                    <section style="margin-top: 4rem;">
                        <h3 style="margin-bottom: 2rem; text-align: center;">Posts Relacionados</h3>
                        <div class="grid grid-3">
                            <?php while ($related_posts->have_posts()) : $related_posts->the_post(); ?>
                                <article class="card">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <div style="margin-bottom: 1rem;">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('medium', ['style' => 'width: 100%; height: 150px; object-fit: cover; border-radius: 0.5rem;']); ?>
                                            </a>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <h4>
                                        <a href="<?php the_permalink(); ?>" style="color: var(--gray-900); text-decoration: none;">
                                            <?php the_title(); ?>
                                        </a>
                                    </h4>
                                    
                                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">
                                        <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
                                    </p>
                                    
                                    <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: 1rem; font-size: 0.875rem;">
                                        Leia mais
                                    </a>
                                </article>
                            <?php endwhile; ?>
                        </div>
                    </section>
                <?php
                    wp_reset_postdata();
                    endif;
                }
                ?>

            <?php endwhile; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>