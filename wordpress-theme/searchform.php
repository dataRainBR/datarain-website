<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>" style="display: flex; gap: 0.5rem; max-width: 400px; margin: 0 auto;">
    <label for="search-field" class="screen-reader-text">Buscar por:</label>
    <input 
        type="search" 
        id="search-field" 
        class="search-field" 
        placeholder="Digite sua busca..." 
        value="<?php echo get_search_query(); ?>" 
        name="s" 
        style="flex: 1; padding: 0.75rem 1rem; border: 2px solid var(--gray-300); border-radius: 0.5rem; font-size: 1rem;"
    />
    <button 
        type="submit" 
        class="search-submit btn btn-primary" 
        style="padding: 0.75rem 1.5rem; white-space: nowrap;"
    >
        Buscar
    </button>
</form>