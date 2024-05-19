// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    includeHTML(); // Appeler la fonction pour inclure le contenu HTML
});

// Fonction pour inclure le contenu HTML
function includeHTML() {
    // Sélectionner tous les éléments dont l'ID se termine par '-include'
    const elements = document.querySelectorAll('[id$="-include"]');
    
    // Parcourir chaque élément sélectionné
    elements.forEach(el => {
        // Récupérer l'ID de l'élément
        const id = el.id;
        let file = "";

        // Déterminer le fichier à inclure en fonction de l'ID de l'élément
        if (id === "header-include") {
            file = "header.html"; // Si l'ID est 'header-include', inclure 'header.html'
        } else if (id === "footer-include") {
            file = "footer.html"; // Si l'ID est 'footer-include', inclure 'footer.html'
        }

        // Si un fichier est spécifié, faire une requête pour récupérer son contenu
        if (file) {
            fetch(file) // Faire une requête pour récupérer le fichier
                .then(response => response.text()) // Convertir la réponse en texte
                .then(data => {
                    el.innerHTML = data; // Insérer le contenu du fichier dans l'élément
                })
                .catch(error => {
                    console.error('Erreur lors du chargement du fichier:', error); // Afficher une erreur en cas de problème
                });
        }
    });
}
