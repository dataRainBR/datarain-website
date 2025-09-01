<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        <div class="content-area" style="text-align: center; padding: 4rem 0;">
            <h1 class="entry-title" style="font-size: 6rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 1rem;">404</h1>
            <h2 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem; color: var(--gray-900);">Página não encontrada</h2>
            <p style="font-size: 1.125rem; color: var(--gray-600); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                Desculpe, mas a página que você está procurando não existe. 
                Ela pode ter sido movida, removida ou você digitou o endereço incorretamente.
            </p>
            
            <div style="margin-bottom: 3rem;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary" style="margin-right: 1rem;">
                    Voltar ao Início
                </a>
                <a href="<?php echo esc_url(home_url('/blog')); ?>" class="btn btn-outline">
                    Ver Blog
                </a>
            </div>
            
            <div style="max-width: 600px; margin: 0 auto;">
                <h3 style="margin-bottom: 1rem; color: var(--gray-900);">Ou tente buscar:</h3>
                <?php get_search_form(); ?>
            </div>
            
            <div style="margin-top: 3rem;">
                <h4 style="margin-bottom: 1rem; color: var(--gray-900);">Links úteis:</h4>
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <a href="<?php echo esc_url(home_url('/')); ?>#sobre" style="color: var(--primary-blue); text-decoration: none;">Sobre Nós</a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#servicos" style="color: var(--primary-blue); text-decoration: none;">Soluções</a>
                    <a href="<?php echo esc_url(home_url('/')); ?>#contato" style="color: var(--primary-blue); text-decoration: none;">Contato</a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>