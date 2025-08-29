<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <meta name="keywords" content="cloud computing, aws, analytics, inteligência artificial, transformação digital">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?>">
    <meta property="og:description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    
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
                
                <ul class="nav-links">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Soluções</a></li>
                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#clientes">Clientes</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#contato" class="btn btn-primary">Fale Conosco</a></li>
                    <li><a href="#demo" class="btn btn-outline">Agende uma Demonstração</a></li>
                </ul>
                
                <!-- Mobile menu button -->
                <button class="mobile-menu-btn" style="display: none; background: none; border: none; font-size: 1.5rem; color: var(--gray-600);">
                    ☰
                </button>
            </nav>
        </div>
    </header>