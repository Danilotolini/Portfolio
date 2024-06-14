document.querySelector('.bars').addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.toggle('active');
  }); 
    // Função para alterar a classe do header ao rolar a página
    function onScroll() {
        // Obtém o elemento do header
        const header = document.querySelector('header');

        // Verifica se a página foi rolada mais de 50 pixels
        if (window.scrollY > 50) {
            // Adiciona a classe 'scrolled' ao header
            header.classList.add('scrolled');
        } else {
            // Remove a classe 'scrolled' do header
            header.classList.remove('scrolled');
        }
    }

    // Adiciona o evento de rolagem à janela
    window.addEventListener('scroll', onScroll);
