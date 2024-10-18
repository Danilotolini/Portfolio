document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector('.bars');
    const menu = document.querySelector('.menu-mobile');
    const closeButton = document.querySelector('.close-button');
    const menuLinks = document.querySelectorAll('.btn-menu a');

    bars.addEventListener('click', function() {
        menu.classList.toggle('active');
        document.body.style.overflow = 'hidden'; // Impede o scroll do corpo da página
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('active');
        document.body.style.overflow = ''; // Restaura o scroll do corpo da página
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            document.body.style.overflow = ''; // Restaura o scroll do corpo da página
        });
    });
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
    document.addEventListener('DOMContentLoaded', function() {
        const projectGrid = document.querySelector('.projects-grid');
        const projects = projectGrid.querySelectorAll('.project-item');
    
        // Selecionar botões de acordo com os idiomas
        const verMaisBtnPT = document.getElementById('verMaisBtnPT');
        const verMaisBtnEN = document.getElementById('verMaisBtnEN');
        const verMaisBtnIT = document.getElementById('verMaisBtnIT');
    
        const fecharBtnPT = document.getElementById('fecharBtnPT');
        const fecharBtnEN = document.getElementById('fecharBtnEN');
        const fecharBtnIT = document.getElementById('fecharBtnIT');
    
        const numProjetosVisiveis = 3;
        let projetosVisiveis = numProjetosVisiveis;
    
        // Esconder projetos além dos primeiros três
        for (let i = numProjetosVisiveis; i < projects.length; i++) {
            projects[i].style.display = 'none';
        }
    
        // Função para exibir o botão correto de acordo com o idioma
        function exibirBotaoIdioma(lingua) {
            // Oculta todos os botões
            verMaisBtnPT.style.display = 'none';
            verMaisBtnEN.style.display = 'none';
            verMaisBtnIT.style.display = 'none';
    
            fecharBtnPT.style.display = 'none';
            fecharBtnEN.style.display = 'none';
            fecharBtnIT.style.display = 'none';
    
            // Exibe o botão correspondente ao idioma atual
            if (lingua === 'pt-BR') {
                verMaisBtnPT.style.display = 'inline-block'; // Exibe botão "Ver Mais" em português
            } else if (lingua === 'en') {
                verMaisBtnEN.style.display = 'inline-block';
            } else if (lingua === 'it') {
                verMaisBtnIT.style.display = 'inline-block';
            }
        }
    
        // Mostrar mais projetos ao clicar nos botões "Ver Mais" de diferentes idiomas
        verMaisBtnPT.addEventListener('click', function() {
            for (let i = projetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'block';
            }
            projetosVisiveis = projects.length;
            verMaisBtnPT.style.display = 'none';
            fecharBtnPT.style.display = 'inline-block'; // Exibe o botão "Fechar" em português
        });
    
        verMaisBtnEN.addEventListener('click', function() {
            for (let i = projetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'block';
            }
            projetosVisiveis = projects.length;
            verMaisBtnEN.style.display = 'none';
            fecharBtnEN.style.display = 'inline-block';
        });
    
        verMaisBtnIT.addEventListener('click', function() {
            for (let i = projetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'block';
            }
            projetosVisiveis = projects.length;
            verMaisBtnIT.style.display = 'none';
            fecharBtnIT.style.display = 'inline-block';
        });
    
        // Fechar a exibição expandida ao clicar nos botões "Fechar"
        fecharBtnPT.addEventListener('click', function() {
            for (let i = numProjetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'none';
            }
            projetosVisiveis = numProjetosVisiveis;
            fecharBtnPT.style.display = 'none';
            verMaisBtnPT.style.display = 'inline-block'; // Reexibe o botão "Ver Mais" em português
        });
    
        fecharBtnEN.addEventListener('click', function() {
            for (let i = numProjetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'none';
            }
            projetosVisiveis = numProjetosVisiveis;
            fecharBtnEN.style.display = 'none';
            verMaisBtnEN.style.display = 'inline-block';
        });
    
        fecharBtnIT.addEventListener('click', function() {
            for (let i = numProjetosVisiveis; i < projects.length; i++) {
                projects[i].style.display = 'none';
            }
            projetosVisiveis = numProjetosVisiveis;
            fecharBtnIT.style.display = 'none';
            verMaisBtnIT.style.display = 'inline-block';
        });
    
        // Função para alterar o idioma ao carregar a página
        document.getElementById('languageSwitcher').addEventListener('change', function() {
            const selectedLanguage = this.value;
            exibirBotaoIdioma(selectedLanguage);
        });
    
        // Iniciar com o idioma inglês (ou o idioma desejado)
        exibirBotaoIdioma('en');  // Inicia com inglês
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const nameElement = document.querySelector(".text h1");
        const name = "Danilo dos Santos Tolini Martins";
        let currentIndex = name.length; // Começa com o índice no final do nome
        let isDeleting = false; // Flag para saber se está apagando
        let typingSpeed = 300; // Velocidade de digitação (ms)
        const deleteAmount = 3; // Número de letras a serem apagadas (3)
        const pauseDuration = 2000; // Duração da pausa antes de começar a apagar (ms)
    
        function type() {
            if (isDeleting) {
                // Apagar as últimas letras
                if (currentIndex > name.length - deleteAmount) {
                    currentIndex--; // Decrementa o índice para apagar as letras
                } else {
                    isDeleting = false; // Troca para modo de digitação
                    setTimeout(type, pauseDuration); // Aguarda antes de recomeçar a digitar
                    return; // Para a execução da função aqui
                }
            } else {
                // Digitar as últimas letras
                if (currentIndex < name.length) {
                    currentIndex++; // Incrementa o índice para digitar as letras
                } else {
                    isDeleting = true; // Quando todo o texto estiver visível, comece a apagar
                    currentIndex = name.length; // Reseta o índice para o final do nome
                    setTimeout(type, pauseDuration); // Aguarda antes de começar a apagar
                    return; // Para a execução da função aqui
                }
            }
    
            // Atualiza o conteúdo do elemento com o texto atual
            nameElement.textContent = name.substring(0, currentIndex);
    
            // Adiciona a animação do cursor
            if (currentIndex === name.length) {
                nameElement.style.borderRight = '4px solid transparent'; // Remover o cursor ao final
                setTimeout(() => {
                    nameElement.style.borderRight = '4px solid rgba(2, 126, 251, 1)'; // Reaparecer o cursor
                }, 500);
            } else {
                nameElement.style.borderRight = '4px solid rgba(2, 126, 251, 1)'; // Manter o cursor visível
            }
    
            // Define a velocidade de digitação
            setTimeout(type, isDeleting ? typingSpeed : typingSpeed);
        }
    
        // Inicia a animação de digitação
        setTimeout(type, 500); // Início após meio segundo
    }); 
    document.getElementById('languageSwitcher').addEventListener('change', function () {
        const selectedLanguage = this.value;
        const elements = document.querySelectorAll('[data-lang]');
    
        elements.forEach(element => {
            if (element.getAttribute('data-lang') === selectedLanguage) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    });
    document.getElementById('languageSwitcher').addEventListener('change', function () {
        const selectedLanguage = this.value;
        const elements = document.querySelectorAll('[data-lang]');
    
        elements.forEach(element => {
            if (element.getAttribute('data-lang') === selectedLanguage) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    });
        
