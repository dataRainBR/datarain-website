    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <?php if (function_exists('the_custom_logo') && has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" 
                             alt="DataRain" 
                             style="height: 2rem; margin-bottom: 1rem; filter: brightness(0) invert(1);">
                    <?php endif; ?>
                    <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                        Transformando negócios através da tecnologia em nuvem.
                    </p>
                </div>
                
                <div>
                    <h4>Soluções</h4>
                    <ul class="footer-links">
                        <li><a href="#cloud">Cloud Computing</a></li>
                        <li><a href="#data">Analytics & Data</a></li>
                        <li><a href="#ai">Inteligência Artificial</a></li>
                        <li><a href="#security">Segurança</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Empresa</h4>
                    <ul class="footer-links">
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#equipe">Equipe</a></li>
                        <li><a href="#cases">Cases</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Contato</h4>
                    <ul class="footer-links">
                        <li>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'contato@datarain.com.br')); ?>">
                                <?php echo esc_html(get_theme_mod('contact_email', 'contato@datarain.com.br')); ?>
                            </a>
                        </li>
                        <li>
                            <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+55 11 9999-9999')); ?>">
                                <?php echo esc_html(get_theme_mod('contact_phone', '+55 11 9999-9999')); ?>
                            </a>
                        </li>
                        <li>
                            <span><?php echo esc_html(get_theme_mod('contact_address', 'São Paulo, SP')); ?></span>
                        </li>
                    </ul>
                    <a href="#contato" class="btn btn-orange" style="margin-top: 1rem;">Fale Conosco</a>
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

</body>
</html>