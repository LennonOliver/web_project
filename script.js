document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML() {
    const elements = document.querySelectorAll('[partials]');
    elements.forEach(el => {
        const file = el.getAttribute('partials');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(error => {
                    console.error('Erreur lors du chargement du fichier:', error);
                });
        }
    });
}
