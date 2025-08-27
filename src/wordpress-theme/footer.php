<!-- Footer -->
<footer class="footer" style="background: linear-gradient(135deg, hsl(205, 63%, 35%) 0%, hsl(190, 70%, 45%) 35%, hsl(25, 95%, 49%) 100%); color: white; padding: 3rem 0 1rem;">
    <div class="container">
        <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
            <div>
                <?php if (function_exists('the_custom_logo') && has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/datarain-logo.png" alt="DataRain" style="height: 2rem; margin-bottom: 1rem; filter: brightness(0) invert(1);" loading="lazy">
                <?php endif; ?>
                <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                    Transformando negócios através da tecnologia em nuvem.
                </p>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem; color: white;">Soluções</h4>
                <ul class="footer-links" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="#cloud" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Cloud Computing</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#data" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Analytics & Data</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#ai" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Inteligência Artificial</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#security" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Segurança</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem; color: white;">Empresa</h4>
                <ul class="footer-links" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="#sobre" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Sobre</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#equipe" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Equipe</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#cases" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Cases</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#blog" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Blog</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem; color: white;">Contato</h4>
                <ul class="footer-links" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;"><a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'contato@datarain.com.br')); ?>" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'"><?php echo esc_html(get_theme_mod('contact_email', 'contato@datarain.com.br')); ?></a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+55 11 9999-9999')); ?>" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'"><?php echo esc_html(get_theme_mod('contact_phone', '+55 11 9999-9999')); ?></a></li>
                    <li style="margin-bottom: 0.5rem;"><span style="color: rgba(255, 255, 255, 0.8);"><?php echo esc_html(get_theme_mod('contact_address', 'São Paulo, SP')); ?></span></li>
                </ul>
                <a href="#contato" class="btn btn-hero" style="display: inline-block; margin-top: 1rem; background: hsl(25, 95%, 49%); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 500; transition: all 0.3s;" onmouseover="this.style.background='hsl(25, 95%, 45%)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='hsl(25, 95%, 49%)'; this.style.transform='translateY(0)'">Fale Conosco</a>
            </div>
        </div>
        
        <div class="footer-bottom" style="padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: center;">
            <p style="margin: 0; color: rgba(255, 255, 255, 0.8);">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
            <div style="margin-top: 0.5rem;">
                <a href="#termos" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Termos</a>
                <a href="#privacidade" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Privacidade</a>
                <a href="#cookies" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; margin: 0 0.5rem; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Cookies</a>
            </div>
        </div>
    </div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>