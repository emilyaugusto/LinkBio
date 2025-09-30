// Este script adiciona um efeito de animação quando a página é carregada.
document.addEventListener('DOMContentLoaded', () => {

    // Lista de elementos para animar, com seus seletores e atrasos (em milissegundos)
    const elementsToAnimate = [
        { selector: '.profile-header', delay: 100 },
        { selector: '.link-card-1', delay: 250 },
        { selector: '.link-card-2', delay: 400 },
        { selector: '.link-card-3', delay: 500 },
        { selector: '.floating-button', delay: 600 }
    ];

    // Percorre cada elemento da lista
    elementsToAnimate.forEach(item => {
        const element = document.querySelector(item.selector);
        
        // Se o elemento existir, aplica a animação após o seu respectivo atraso
        if (element) {
            setTimeout(() => {
                element.classList.add('visible');
            }, item.delay);
        }
    });
});

