    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <?php if (function_exists('the_custom_logo') && has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" 
                             alt="<?php bloginfo('name'); ?>" 
                             style="height: 2.5rem; margin-bottom: 1rem;">
                    <?php endif; ?>
                    <p>Especialistas em Cloud Computing e soluções AWS para acelerar sua transformação digital.</p>
                </div>
                
                <div>
                    <h4>Soluções</h4>
                    <ul class="footer-links">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#servicos">Cloud Computing</a></li>
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#servicos">Analytics & Data</a></li>
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#servicos">Inteligência Artificial</a></li>
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#servicos">Segurança</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Empresa</h4>
                    <ul class="footer-links">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#sobre">Sobre Nós</a></li>
                        <li><a href="<?php echo esc_url(home_url('/blog')); ?>">Blog</a></li>
                        <li><a href="<?php echo esc_url(home_url('/')); ?>#contato">Contato</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Contato</h4>
                    <ul class="footer-links">
                        <li>📧 <?php echo get_theme_mod('contact_email', 'contato@datarain.com.br'); ?></li>
                        <li>📞 <?php echo get_theme_mod('contact_phone', '+55 11 9999-9999'); ?></li>
                        <li>📍 <?php echo get_theme_mod('contact_address', 'São Paulo, SP'); ?></li>
                    </ul>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contato" class="btn btn-orange" style="margin-top: 1rem;">
                        Fale Conosco
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
                <p>
                    <a href="#" style="color: rgba(255, 255, 255, 0.8);">Termos</a> | 
                    <a href="#" style="color: rgba(255, 255, 255, 0.8);">Privacidade</a> | 
                    <a href="#" style="color: rgba(255, 255, 255, 0.8);">Cookies</a>
                </p>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.includes('#')) {
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = 80;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
</script>

<?php wp_footer(); ?>

</body>
</html>