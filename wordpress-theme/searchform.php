<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
    <label for="search-field" class="screen-reader-text">Buscar por:</label>
    <input 
        type="search" 
        id="search-field" 
        class="search-field" 
        placeholder="Digite sua busca..." 
        value="<?php echo get_search_query(); ?>" 
        name="s" 
    />
    <button 
        type="submit" 
        class="search-submit btn btn-primary"
    >
        Buscar
    </button>
</form>