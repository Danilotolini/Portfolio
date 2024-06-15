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
    document.addEventListener('DOMContentLoaded', function() {
    }); 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Ajuste a posição antes de rolar
                const offset = -100; // Ajuste o valor conforme necessário
                const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
    
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
