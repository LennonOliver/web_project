const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open');
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark fa-lg' : 'fa-solid fa-bars';
}

// Sélection de l'élément "Destinations" dans le menu burger
const destinationsLink = document.querySelector('.burger-menu ul li a[href="#"]');

// Sélection de l'élément ".burger-menu"
const burgerMenuExtended = document.querySelector('.burger-menu');

// Ajout d'un écouteur d'événement au clic sur l'élément "Destinations"
destinationsLink.addEventListener('click', function () {
    // Ajout de la classe "openExtended" à l'élément ".burger-menu"
    burgerMenu.classList.toggle('openExtended');
});
