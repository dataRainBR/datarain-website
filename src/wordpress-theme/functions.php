<?php
// Theme setup
function datarain_theme_setup() {
    // Add theme support for menus
    add_theme_support('menus');
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu do Rodapé'
    ));
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for custom logo
    add_theme_support('custom-logo');
    
    // Add theme support for title tag
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'datarain_theme_setup');

// Enqueue styles and scripts
function datarain_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('datarain-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('datarain-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'datarain_scripts');

// Add SEO meta tags
function datarain_add_meta_tags() {
    if (is_home() || is_front_page()) {
        echo '<meta name="description" content="DataRain - Parceiro estratégico em cloud computing, dados e inteligência artificial">';
        echo '<meta name="keywords" content="cloud computing, AWS, dados, inteligência artificial, transformação digital">';
        echo '<meta property="og:title" content="DataRain - Parceiro estratégico em cloud">';
        echo '<meta property="og:description" content="Entregamos soluções em cloud, dados e inteligência artificial com segurança, agilidade e foco em resultados.">';
        echo '<meta property="og:type" content="website">';
        echo '<link rel="canonical" href="' . esc_url( home_url('/') ) . '">';
        $org = array(
            "@context" => "https://schema.org",
            "@type" => "Organization",
            "name" => get_bloginfo('name'),
            "url" => home_url('/'),
            "logo" => get_template_directory_uri() . "/assets/datarain-logo.png"
        );
        echo '<script type="application/ld+json">' . wp_json_encode( $org ) . '</script>';
    }
}
add_action('wp_head', 'datarain_add_meta_tags');

// Customizer settings
function datarain_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Seção Hero',
        'priority' => 30,
    ));
    
    // Hero Title
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Parceiro estratégico em cloud',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Título do Hero',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    // Hero Subtitle
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Entregamos soluções em cloud, dados e inteligência artificial com segurança, agilidade e foco em resultados.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Subtítulo do Hero',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Hero Background Image
    $wp_customize->add_setting('hero_background', array(
        'default' => get_template_directory_uri() . '/assets/hero-background.jpg',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => 'Imagem de Fundo do Hero',
        'section' => 'hero_section',
    )));
    
    // Contact Section
    $wp_customize->add_section('contact_section', array(
        'title' => 'Informações de Contato',
        'priority' => 40,
    ));
    
    // Phone
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+55 11 9999-9999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => 'Telefone',
        'section' => 'contact_section',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array(
        'default' => 'contato@datarain.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => 'Email',
        'section' => 'contact_section',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('contact_address', array(
        'default' => 'São Paulo, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => 'Endereço',
        'section' => 'contact_section',
        'type' => 'text',
    ));
}
add_action('customize_register', 'datarain_customize_register');

// Widget areas
function datarain_widgets_init() {
    register_sidebar(array(
        'name' => 'Footer 1',
        'id' => 'footer-1',
        'description' => 'Primeira coluna do rodapé',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 2',
        'id' => 'footer-2',
        'description' => 'Segunda coluna do rodapé',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 3',
        'id' => 'footer-3',
        'description' => 'Terceira coluna do rodapé',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 4',
        'id' => 'footer-4',
        'description' => 'Quarta coluna do rodapé',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'datarain_widgets_init');

// Custom post types for services
function datarain_custom_post_types() {
    // Services post type
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Serviços',
            'singular_name' => 'Serviço',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Serviço',
            'edit_item' => 'Editar Serviço',
            'new_item' => 'Novo Serviço',
            'view_item' => 'Ver Serviço',
            'search_items' => 'Buscar Serviços',
            'not_found' => 'Nenhum serviço encontrado',
            'not_found_in_trash' => 'Nenhum serviço encontrado na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cloud',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
    ));
    
    // Testimonials post type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Depoimentos',
            'singular_name' => 'Depoimento',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Depoimento',
            'edit_item' => 'Editar Depoimento',
            'new_item' => 'Novo Depoimento',
            'view_item' => 'Ver Depoimento',
            'search_items' => 'Buscar Depoimentos',
            'not_found' => 'Nenhum depoimento encontrado',
            'not_found_in_trash' => 'Nenhum depoimento encontrado na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'datarain_custom_post_types');

// Add custom fields for testimonials
function datarain_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial_info',
        'Informações do Cliente',
        'datarain_testimonial_meta_box_callback',
        'testimonials'
    );
}
add_action('add_meta_boxes', 'datarain_testimonial_meta_boxes');

function datarain_testimonial_meta_box_callback($post) {
    wp_nonce_field('datarain_testimonial_meta_box', 'datarain_testimonial_meta_box_nonce');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_position = get_post_meta($post->ID, '_client_position', true);
    $client_company = get_post_meta($post->ID, '_client_company', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="client_name">Nome do Cliente</label></th>';
    echo '<td><input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" size="50" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_position">Cargo</label></th>';
    echo '<td><input type="text" id="client_position" name="client_position" value="' . esc_attr($client_position) . '" size="50" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_company">Empresa</label></th>';
    echo '<td><input type="text" id="client_company" name="client_company" value="' . esc_attr($client_company) . '" size="50" /></td>';
    echo '</tr>';
    echo '</table>';
}

function datarain_save_testimonial_meta_box($post_id) {
    if (!isset($_POST['datarain_testimonial_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['datarain_testimonial_meta_box_nonce'], 'datarain_testimonial_meta_box')) {
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
add_action('save_post', 'datarain_save_testimonial_meta_box');
?>