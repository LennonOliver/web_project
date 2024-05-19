document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML() {
    const elements = document.querySelectorAll('[id$="-include"]'); // Sélectionne les éléments par ID
    elements.forEach(el => {
        const id = el.id;
        let file = "";

        if (id === "header-include") {
            file = "header.html";
        } else if (id === "footer-include") {
            file = "footer.html";
        }

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
