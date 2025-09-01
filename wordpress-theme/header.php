<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <?php if (is_singular()) : ?>
        <meta name="description" content="<?php echo esc_attr(wp_strip_all_tags(get_the_excerpt())); ?>">
    <?php else : ?>
        <meta name="description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <?php endif; ?>
    <meta name="keywords" content="cloud computing, aws, analytics, inteligência artificial, transformação digital">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <?php if (is_singular()) : ?>
        <meta property="og:description" content="<?php echo esc_attr(wp_strip_all_tags(get_the_excerpt())); ?>">
    <?php else : ?>
        <meta property="og:description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <?php endif; ?>
    <meta property="og:type" content="<?php echo is_singular() ? 'article' : 'website'; ?>">
    <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
    <?php if (has_post_thumbnail()) : ?>
        <meta property="og:image" content="<?php echo esc_url(get_the_post_thumbnail_url(get_the_ID(), 'large')); ?>">
    <?php endif; ?>
    <meta property="og:site_name" content="<?php bloginfo('name'); ?>">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <?php if (function_exists('the_custom_logo') && has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" 
                                 alt="<?php bloginfo('name'); ?>" 
                                 style="height: 2.5rem;">
                        </a>
                    <?php endif; ?>
                </div>
                
                <ul class="nav-links" id="nav-links">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#sobre">Sobre</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#servicos">Soluções</a></li>
                    <li><a href="<?php echo esc_url(home_url('/blog')); ?>">Blog</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#contato">Contato</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#contato" class="btn btn-primary">Fale Conosco</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#demo" class="btn btn-outline">Agende uma Demonstração</a></li>
                </ul>
                
                <!-- Mobile menu button -->
                <button class="mobile-menu-btn" id="mobile-menu-btn">
                    ☰
                </button>
            </nav>
        </div>
    </header>