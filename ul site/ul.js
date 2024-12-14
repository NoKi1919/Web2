//Obsolete

// Fonction pour afficher/cacher le menu déroulant
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Fermer le menu si on clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
