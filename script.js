// Sélection de l'élément du bouton du menu burger
const burgerMenuButton = document.querySelector('.burger-menu-button');
// Sélection de l'icône à l'intérieur du bouton du menu burger
const burgerMenuButtonIcon = burgerMenuButton.querySelector('i');
// Sélection de l'élément du menu burger
const burgerMenu = document.querySelector('.burger-menu');
// Sélection de l'élément "Destinations" dans le menu burger
const destinationsLink = burgerMenu.querySelector('ul li a[href="#"]');

// Fonction pour basculer l'état du menu burger
function toggleBurgerMenu() {
    // Ajoute ou retire la classe 'open' à l'élément du menu burger
    const isOpen = burgerMenu.classList.toggle('open');
    // Change l'icône du bouton du menu burger en fonction de l'état du menu
    burgerMenuButtonIcon.className = isOpen ? 'fa-solid fa-xmark fa-lg' : 'fa-solid fa-bars';

    // Si le menu burger est fermé, retire la classe 'openExtended'
    if (!isOpen) {
        burgerMenu.classList.remove('openExtended');
    }
}

// Ajoute un écouteur d'événement 'click' au bouton du menu burger pour basculer le menu
burgerMenuButton.addEventListener('click', toggleBurgerMenu);

// Ajoute un écouteur d'événement 'click' à l'élément "Destinations" pour basculer 'openExtended'
destinationsLink.addEventListener('click', function () {
    // Ajoute ou retire la classe 'openExtended' à l'élément du menu burger
    burgerMenu.classList.toggle('openExtended');
});
