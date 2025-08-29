<?php get_header(); ?>

<main class="main-content" style="padding-top: 6rem;">
    <div class="container" style="text-align: center; padding: 4rem 0;">
        <h1 style="font-size: 6rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 1rem;">404</h1>
        <h2 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem; color: var(--gray-900);">Página Não Encontrada</h2>
        <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--gray-600);">
            Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        
        <div style="margin-bottom: 3rem;">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">Voltar ao Início</a>
        </div>
        
        <div style="max-width: 600px; margin: 0 auto;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: var(--gray-900);">
                O que você pode fazer:
            </h3>
            <ul style="list-style: none; padding: 0; text-align: left;">
                <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0;">✓</span>
                    Verificar se o endereço foi digitado corretamente
                </li>
                <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0;">✓</span>
                    Usar o menu de navegação para encontrar o que procura
                </li>
                <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0;">✓</span>
                    Entrar em contato conosco para ajuda
                </li>
            </ul>
        </div>
        
        <div style="margin-top: 3rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: var(--gray-900);">
                Links Úteis
            </h3>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="#sobre" style="color: var(--primary-blue); text-decoration: none;">Sobre</a>
                <a href="#servicos" style="color: var(--primary-blue); text-decoration: none;">Soluções</a>
                <a href="#cases" style="color: var(--primary-blue); text-decoration: none;">Cases</a>
                <a href="#contato" style="color: var(--primary-blue); text-decoration: none;">Contato</a>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>