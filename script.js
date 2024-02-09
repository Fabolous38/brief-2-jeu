const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('img');
const playButton = document.getElementById('play');

let userChoice;

choices.forEach(img => {
  img.addEventListener('click', () => {
    userChoice = img.id;
    playButton.disabled = false;
  });
});



playButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = computerChoice;
  userChoiceDisplay.textContent = userChoice;
  const result = getResult(userChoice, computerChoice);
  resultDisplay.textContent = result;
});

function getComputerChoice() {
  const choices = ['pierre', 'feuille', 'ciseau'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function getResult(user, computer) {
  if (user === computer) {
    return "Égalité";
  } else if (
    (user === 'pierre' && computer === 'ciseau') ||
    (user === 'feuille' && computer === 'pierre') ||
    (user === 'ciseau' && computer === 'feuille')
  ) {
    return 'Gagné';
  } else {
    return 'Perdu';
  }
}


function toggleVisibility(imageId) {
  let images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('hidden');
  }
  let selectImage = document.getElementById(imageId);
  selectImage.classList.remove('hidden')
}