// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    includeHTML(); // Appeler la fonction pour inclure le contenu HTML
});

// Fonction pour inclure le contenu HTML
function includeHTML() {
    // Sélectionner tous les éléments ayant l'attribut 'partials'
    const elements = document.querySelectorAll('[partials]');
    
    // Parcourir chaque élément sélectionné
    elements.forEach(el => {
        // Récupérer la valeur de l'attribut 'partials' (le chemin du fichier à inclure)
        const file = el.getAttribute('partials');
        
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
