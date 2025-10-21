// Henter referanser til HTML-elementene vi trenger
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

// Venter på at startknappen blir klikket
startButton.addEventListener('click', () => {

    // Skjuler startskjermen 
    startScreen.classList.add('hidden');

    // Viser spillskjermen 
    gameScreen.classList.remove('hidden');
});