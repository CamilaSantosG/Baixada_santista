// script.js

// Função para verificar se um elemento está no campo de visão
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de animação quando o elemento está no campo de visão
function handleScroll() {
    const confElements = document.querySelectorAll('.conf');

    confElements.forEach((confElement) => {
        if (isInViewport(confElement)) {
            confElement.classList.add('slide-animation');
        }
    });
}

// Adiciona um listener de scroll para chamar a função quando a página for rolada
window.addEventListener('scroll', handleScroll);

// Chama a função quando a página é carregada para verificar os elementos visíveis inicialmente
window.addEventListener('load', handleScroll);
