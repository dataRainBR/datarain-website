<?php
// Theme setup
function datarain_theme_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu',
    ));
}
add_action('after_setup_theme', 'datarain_theme_setup');

// Enqueue scripts and styles
function datarain_scripts() {
    wp_enqueue_style('datarain-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_deregister_script('jquery');
}
add_action('wp_enqueue_scripts', 'datarain_scripts');

// Add meta tags
function datarain_add_meta_tags() {
    if (is_home()) {
        echo '<meta name="description" content="DataRain - Especialistas em Cloud Computing AWS, Analytics e Inteligência Artificial. Transforme seu negócio com nossas soluções de nuvem.">' . "\n";
        echo '<meta name="keywords" content="AWS, Cloud Computing, Analytics, IA, Transformação Digital, DataRain">' . "\n";
        
        // Schema markup for organization
        ?>
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DataRain",
            "description": "Especialistas em Cloud Computing AWS, Analytics e Inteligência Artificial",
            "url": "<?php echo home_url(); ?>",
            "logo": "<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "<?php echo get_theme_mod('contact_phone', '+55 11 9999-9999'); ?>",
                "contactType": "customer service",
                "email": "<?php echo get_theme_mod('contact_email', 'contato@datarain.com.br'); ?>"
            },
            "sameAs": []
        }
        </script>
        <?php
    }
}
add_action('wp_head', 'datarain_add_meta_tags');

// Customizer
function datarain_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Hero Section',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Transforme seu negócio com soluções AWS de ponta',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Hero Title',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Especialistas em Cloud Computing, Analytics e IA para acelerar sua transformação digital',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Hero Subtitle',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    $wp_customize->add_setting('hero_background', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => 'Hero Background Image',
        'section' => 'hero_section',
    )));
    
    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => 'Contact Information',
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+55 11 9999-9999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => 'Phone Number',
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'contato@datarain.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => 'Email Address',
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => 'São Paulo, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => 'Address',
        'section' => 'contact_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'datarain_customize_register');

// Widget areas
function datarain_widgets_init() {
    register_sidebar(array(
        'name' => 'Footer 1',
        'id' => 'footer-1',
        'description' => 'Add widgets here to appear in your footer.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 2',
        'id' => 'footer-2',
        'description' => 'Add widgets here to appear in your footer.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 3',
        'id' => 'footer-3',
        'description' => 'Add widgets here to appear in your footer.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer 4',
        'id' => 'footer-4',
        'description' => 'Add widgets here to appear in your footer.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'datarain_widgets_init');

// Custom post types
function datarain_custom_post_types() {
    // Services post type
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new' => 'Add New Service',
            'add_new_item' => 'Add New Service',
            'edit_item' => 'Edit Service',
            'new_item' => 'New Service',
            'view_item' => 'View Service',
            'search_items' => 'Search Services',
            'not_found' => 'No services found',
            'not_found_in_trash' => 'No services found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cloud',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'services'),
    ));
    
    // Testimonials post type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'testimonials'),
    ));
}
add_action('init', 'datarain_custom_post_types');

// Add meta boxes for testimonials
function datarain_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial-meta',
        'Testimonial Details',
        'datarain_testimonial_meta_callback',
        'testimonials',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'datarain_testimonial_meta_boxes');

function datarain_testimonial_meta_callback($post) {
    wp_nonce_field('save_testimonial_meta', 'testimonial_meta_nonce');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_position = get_post_meta($post->ID, '_client_position', true);
    $client_company = get_post_meta($post->ID, '_client_company', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="client_name">Client Name</label></th>';
    echo '<td><input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" size="50" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_position">Position</label></th>';
    echo '<td><input type="text" id="client_position" name="client_position" value="' . esc_attr($client_position) . '" size="50" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_company">Company</label></th>';
    echo '<td><input type="text" id="client_company" name="client_company" value="' . esc_attr($client_company) . '" size="50" /></td>';
    echo '</tr>';
    echo '</table>';
}

function datarain_save_testimonial_meta_box($post_id) {
    if (!isset($_POST['testimonial_meta_nonce']) || !wp_verify_nonce($_POST['testimonial_meta_nonce'], 'save_testimonial_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
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

// Disable WordPress admin bar for non-admins
function datarain_disable_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'datarain_disable_admin_bar');

// Custom excerpt length
function datarain_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'datarain_excerpt_length');

// Custom excerpt more
function datarain_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'datarain_excerpt_more');
?>