// Henter referanser til HTML-elementene vi trenger
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

// Henter elementer vi må endre
const mainElement = document.querySelector('main');
const pageBackground = document.getElementById('page-background');

// Venter på at startknappen blir klikket
startButton.addEventListener('click', () => {

    // Skjuler startskjermen 
    startScreen.classList.add('hidden');

    // Viser spillskjermen 
    gameScreen.classList.remove('hidden');

    // Fjerner sentreringen fra main
    mainElement.style.justifyContent = 'flex-start';
    mainElement.style.alignItems = 'flex-start';

    // Bytter bakgrunnsbildet
    // VIKTIG: LEGG INN DILEMMA BAKGRUNN HER!!!
    pageBackground.style.backgroundImage = "url('../assets/image/bilder/spill-bakgrunn.png')";

    // Laster inn det første nivået 
    game.loadLevel(0); 
});