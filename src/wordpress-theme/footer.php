<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <?php if (function_exists('the_custom_logo') && has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" alt="DataRain" style="height: 2rem; margin-bottom: 1rem;">
                <?php endif; ?>
                <p style="color: rgba(255, 255, 255, 0.8);">
                    Transformando negócios através da tecnologia em nuvem.
                </p>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;">Soluções</h4>
                <ul class="footer-links">
                    <li><a href="#cloud">Cloud Computing</a></li>
                    <li><a href="#data">Analytics & Data</a></li>
                    <li><a href="#ai">Inteligência Artificial</a></li>
                    <li><a href="#security">Segurança</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;">Empresa</h4>
                <ul class="footer-links">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;">Contato</h4>
                <ul class="footer-links">
                    <li><a href="mailto:<?php echo get_theme_mod('contact_email', 'contato@datarain.com.br'); ?>"><?php echo get_theme_mod('contact_email', 'contato@datarain.com.br'); ?></a></li>
                    <li><a href="tel:<?php echo get_theme_mod('contact_phone', '+55 11 9999-9999'); ?>"><?php echo get_theme_mod('contact_phone', '+55 11 9999-9999'); ?></a></li>
                    <li><a href="#"><?php echo get_theme_mod('contact_address', 'São Paulo, SP'); ?></a></li>
                </ul>
                <a href="#contato" class="btn btn-hero" style="margin-top: 1rem;">Fale Conosco</a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
            <div style="margin-top: 0.5rem;">
                <a href="#termos" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem;">Termos</a>
                <a href="#privacidade" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem;">Privacidade</a>
                <a href="#cookies" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem;">Cookies</a>
            </div>
        </div>
    </div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<script>
    // Menu mobile toggle
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
                }
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
</script>

</body>
</html>