// Récupération de tous les liens utilisateur
const userLinks = document.querySelectorAll(".user-link");

// Ajout d'un gestionnaire d'événements clic à chaque lien utilisateur
userLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le lien de naviguer vers une autre page
    const userRow = event.target.closest("tr"); // Récupère la ligne utilisateur
    const userDetails = document.querySelector(".user-details"); // Récupère la section des détails de l'utilisateur
    const userName = document.querySelector("#user-name"); // Récupère l'élément de nom d'utilisateur
    const userGains = document.querySelector("#user-gains"); // Récupère l'élément de gains d'utilisateur
    const userStartDate = document.querySelector("#user-start-date"); // Récupère l'élément de date de début d'utilisateur
    const userUptime = document.querySelector("#user-uptime"); // Récupère l'élément de temps de disponibilité d'utilisateur
    userName.textContent = userRow.children[1].textContent; // Affiche le nom d'utilisateur
    userGains.textContent = userRow.children[2].textContent; // Affiche les gains d'utilisateur
    userStartDate.textContent = userRow.children[3].textContent; // Affiche la date de début d'utilisateur
    userUptime.textContent = userRow.children[4].textContent; // Affiche le temps de disponibilité d'utilisateur
    userDetails.style.display = "block"; // Affiche la section des détails de l'utilisateur
  });
});

// Ajout d'un gestionnaire d'événements clic pour masquer la section des détails de l'utilisateur
document.querySelector("#close-user-details").addEventListener("click", function() {
  document.querySelector(".user-details").style.display = "none";
});


// Sélectionner l'élément de texte dynamique pour le compteur d'utilisateurs
const userCountElement = document.getElementById('user-count-value');

// Compter le nombre d'utilisateurs et mettre à jour l'élément de texte dynamique
function updateUserCount() {
    const userLinks = document.querySelectorAll('.user-link');
    const userCount = userLinks.length;
    userCountElement.textContent = userCount;
}

// Appeler la fonction updateUserCount() pour mettre à jour le compteur au chargement de la page
updateUserCount();

// Ajouter un gestionnaire d'événements sur chaque lien d'utilisateur pour mettre à jour le compteur lorsqu'un utilisateur est ajouté ou supprimé
userLinks.forEach((userLink) => {
    userLink.addEventListener('click', () => {
        updateUserCount();
    });
});
