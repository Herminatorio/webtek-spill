// Henter referanser til STARTSIDEN
const startLever = document.getElementById('start-lever');
const startDevelopers = document.getElementById('start-developers');
const startTrain = document.getElementById('start-train');
const startScreen = document.getElementById('start-screen');

// Henter referanser til SPILLSIDEN
const gameScreen = document.getElementById('game-screen');
const mainElement = document.querySelector('main');
const pageBackground = document.getElementById('page-background');

// Start dansingen på startsiden
startDevelopers.classList.add('dancing');

// Venter på at spaken blir klikket
startLever.addEventListener('click', () => {

    // Stopp dansingen
    startDevelopers.classList.remove('dancing');

    // Bytt spak-bildet
    startLever.src = 'assets/image/bilder/lever-on.png';
    
    // Gjør spaken u-klikkbar
    startLever.style.pointerEvents = 'none';

    // Start toget!
    startTrain.classList.add('intro-train-moving');

    
    // Vent til toget treffer utviklerne
    setTimeout(() => {
        // Bytter til det påkjørte bildet
        startDevelopers.src = 'assets/image/bilder/utviklere_dod.png';
    }, 1300); 
 

    // Vent til tog-animasjonen er ferdig 
    setTimeout(() => {
        
        // Spillet starter

        // Skjul startskjermen 
        startScreen.classList.add('hidden');

        // Vis spillskjermen 
        gameScreen.classList.remove('hidden');

        // Fjern sentreringen fra main
        mainElement.style.justifyContent = 'flex-start';
        mainElement.style.alignItems = 'flex-start';

        // Bytt bakgrunnsbildet 
        pageBackground.style.backgroundImage = "url('assets/image/bilder/spill-bakgrunn.png')";

        // Last inn det første nivået
        game.loadLevel(0); 

    }, 3000); 
});



// Henter restart-knappen
const restartButton = document.getElementById('restart-button');

// Legger til lytter
restartButton.addEventListener('click', () => {
    // Laster siden på nytt for å gå tilbake til start
    window.location.reload();
});