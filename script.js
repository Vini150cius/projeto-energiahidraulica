document.addEventListener('DOMContentLoaded', function () {
    // Adiciona evento de clique aos itens breadcrumb para rolar suavemente até a seção correspondente
    document.querySelectorAll('.breadCrumb-item a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetRect = targetElement.getBoundingClientRect();
            const targetPosition = targetRect.top + window.scrollY;
            const offsetPosition = targetPosition - (window.innerHeight / 2) + (targetElement.clientHeight / 2);

            window.scrollTo({
                top: offsetPosition - 100,
                behavior: 'smooth'
            });
        });
    });
});