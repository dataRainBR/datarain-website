<?php

// Theme setup
function datarain_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu Footer'
    ));
}
add_action('after_setup_theme', 'datarain_theme_setup');

// Enqueue scripts and styles
function datarain_scripts() {
    wp_enqueue_style('datarain-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('datarain-script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);
    
    // Remove default jQuery and enqueue modern version
    wp_deregister_script('jquery');
}
add_action('wp_enqueue_scripts', 'datarain_scripts');

// Add meta tags for SEO
function datarain_add_meta_tags() {
    if (is_home() || is_front_page()) {
        echo '<meta name="description" content="DataRain - Especialistas em Cloud Computing, Analytics e Inteligência Artificial. Transforme seu negócio com soluções AWS.">' . "\n";
        echo '<meta name="keywords" content="cloud computing, aws, analytics, inteligência artificial, transformação digital, datarain">' . "\n";
        
        // Open Graph tags
        echo '<meta property="og:title" content="DataRain - Transformação Digital na Nuvem">' . "\n";
        echo '<meta property="og:description" content="Especialistas em Cloud Computing, Analytics e IA. Acelere sua transformação digital com soluções AWS.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . home_url('/') . '">' . "\n";
        
        // Schema markup
        echo '<script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DataRain",
            "description": "Especialistas em Cloud Computing e Transformação Digital",
            "url": "' . home_url('/') . '",
            "logo": "' . get_template_directory_uri() . '/assets/datarain-logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "' . get_theme_mod('contact_phone', '+55 11 9999-9999') . '",
                "contactType": "customer service"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "' . get_theme_mod('contact_address', 'São Paulo, SP') . '",
                "addressCountry": "BR"
            }
        }
        </script>' . "\n";
    }
}
add_action('wp_head', 'datarain_add_meta_tags');

// Theme customizer
function datarain_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Seção Hero',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Transforme seu Negócio com a Nuvem',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Título Hero',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Soluções completas em Cloud Computing, Analytics e Inteligência Artificial para acelerar sua transformação digital.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Subtítulo Hero',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    $wp_customize->add_setting('hero_background', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => 'Imagem de Fundo Hero',
        'section' => 'hero_section',
    )));
    
    // Contact Info
    $wp_customize->add_section('contact_info', array(
        'title' => 'Informações de Contato',
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+55 11 9999-9999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => 'Telefone',
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'contato@datarain.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => 'Email',
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => 'São Paulo, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => 'Endereço',
        'section' => 'contact_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'datarain_customize_register');

// Widget areas
function datarain_widgets_init() {
    register_sidebar(array(
        'name' => 'Footer Widget 1',
        'id' => 'footer-1',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget 2',
        'id' => 'footer-2',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget 3',
        'id' => 'footer-3',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget 4',
        'id' => 'footer-4',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'datarain_widgets_init');

// Custom post types
function datarain_custom_post_types() {
    // Services
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Serviços',
            'singular_name' => 'Serviço',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'servicos'),
    ));
    
    // Testimonials
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Depoimentos',
            'singular_name' => 'Depoimento',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
        'rewrite' => array('slug' => 'depoimentos'),
    ));
}
add_action('init', 'datarain_custom_post_types');

// Add meta boxes for testimonials
function datarain_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial_details',
        'Detalhes do Depoimento',
        'datarain_testimonial_meta_box_callback',
        'testimonials'
    );
}
add_action('add_meta_boxes', 'datarain_testimonial_meta_boxes');

function datarain_testimonial_meta_box_callback($post) {
    wp_nonce_field('datarain_save_testimonial_meta_box_data', 'datarain_testimonial_meta_box_nonce');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_position = get_post_meta($post->ID, '_client_position', true);
    $client_company = get_post_meta($post->ID, '_client_company', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="client_name">Nome do Cliente</label></th>';
    echo '<td><input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" size="25" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_position">Cargo</label></th>';
    echo '<td><input type="text" id="client_position" name="client_position" value="' . esc_attr($client_position) . '" size="25" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_company">Empresa</label></th>';
    echo '<td><input type="text" id="client_company" name="client_company" value="' . esc_attr($client_company) . '" size="25" /></td>';
    echo '</tr>';
    echo '</table>';
}

function datarain_save_testimonial_meta_box_data($post_id) {
    if (!isset($_POST['datarain_testimonial_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['datarain_testimonial_meta_box_nonce'], 'datarain_save_testimonial_meta_box_data')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['post_type']) && 'testimonials' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id)) {
            return;
        }
    } else {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
    }
    
    if (isset($_POST['client_name'])) {
        update_post_meta($post_id, '_client_name', sanitize_text_field($_POST['client_name']));
    }
    
    if (isset($_POST['client_position'])) {
        update_post_meta($post_id, '_client_position', sanitize_text_field($_POST['client_position']));
    }
    
    if (isset($_POST['client_company'])) {
        update_post_meta($post_id, '_client_company', sanitize_text_field($_POST['client_company']));
    }
}
add_action('save_post', 'datarain_save_testimonial_meta_box_data');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Clean up wp_head
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

?>