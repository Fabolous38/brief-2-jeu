// Déclaration des variables de score
let yourScore = 0;
let opponentScore = 0;

// Tableau des choix possibles
const choices = ["pierre", "feuille", "ciseau"];

// Fonction pour afficher ou cacher la popup des règles du jeu
function toggleRulesPopup() {
  const rulesPopup = document.getElementById("rules-popup");
  rulesPopup.classList.toggle("hidden");
}

// Écouteur d'événement qui attend le chargement complet du DOM avant d'exécuter la fonction
document.addEventListener("DOMContentLoaded", function () {
  // Boucle pour créer et ajouter les images des choix possibles
  for (let i = 0; i < 3; i++) {
    const choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    // Ajoute un gestionnaire d'événement pour chaque choix
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
});

// Fonction pour gérer la sélection de choix par le joueur
function selectChoice() {
  // Récupère le choix du joueur et l'affiche
  let you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  // Choix de l'ordinateur aléatoirement
  let opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  // Détermination du résultat
  if (you == opponent) {
    yourScore += 0;
    opponentScore += 0;
  } else {
    if (you == "pierre") {
      if (opponent == "ciseau") {
        yourScore += 1;
        document.getElementById("your-score").classList.add("green-border");
      } else if (opponent == "feuille") {
        opponentScore += 1;
        document.getElementById("opponent-score").classList.add("red-border");
      }
    } else if (you == "ciseau") {
      if (opponent == "feuille") {
        yourScore += 1;
        document.getElementById("your-score").classList.add("green-border");
      } else if (opponent == "pierre") {
        opponentScore += 1;
        document.getElementById("opponent-score").classList.add("red-border");
      }
    } else if (you == "feuille") {
      if (opponent == "pierre") {
        yourScore += 1;
        document.getElementById("your-score").classList.add("green-border");
      } else if (opponent == "ciseau") {
        opponentScore += 1;
        document.getElementById("opponent-score").classList.add("red-border");
      }
    }

    // Vérifie si l'un des joueurs a atteint un score de 5
    if (yourScore === 5) {
      alert("Bravo vous avez gagné la partie !");
      resetGame(); // Réinitialise la partie
    } else if (opponentScore === 5) {
      alert("Vous avez perdu la partie !");
      resetGame(); // Réinitialise la partie
    }
  }

  // Met à jour l'affichage des scores
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
}

// Fonction pour réinitialiser la partie
function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("your-score").classList.remove("green-border");
  document.getElementById("opponent-score").classList.remove("red-border");
  document.getElementById("your-choice").src = "";
  document.getElementById("opponent-choice").src = "";
}
