// Struktur for alle spillnivåer
const gameData = [
    {
        levelId: 1,
        dilemmaText: "Et tog er på vei mot en Trønder. Du kan trekke i en spak for å sende det mot fem østlendinger. Hva gjør du?",
        trackA: { characters: ['Trønder'] },
        trackB: { characters: ['Østlending','Østlending','Østlending','Østlending','Østlending',] },
        feedback: {
            feedbackB: "Bra! Østlendingene hadde sikkert fortjent det.",
            feedbakA: "Jævla psykopat"
        }
    }
    //... Flere nivåer kan legges til her som nye objekter
];

// Hovedobjekt for spillet
const game = {
    // State-objekt lagrer spillets tilstand (variabler)
    state: {
        currentLevel: 0,
        timeLeft: 30,
        timerId: null 
    },

    // Funksjon for loadLevel
    loadLevel: function(levelIndex) {
        const level = gameData[levelIndex];
        const dilemmaTextElement = document.getElementById('dilemma-text');
        const timerElement = document.getElementById('timer');

        dilemmaTextElement.textContent = level.dilemmaText;
        timerElement.textContent = this.state.timeLeft; 

        console.log("Nivå " + level.levelId + " er lastet!");

        // Starter timeren
        this.startTimer();
    },

    // Start timer funksjon
    startTimer: function() {
        const timerElement = document.getElementById('timer');

        // Tilbakestiller tiden
        this.state.timeLeft = 30;
        timerElement.textContent = this.state.timeLeft;

        // Starter en teller som kjører en funksjon hvert sekund
        this.state.timerId = setInterval(() => {
            // Trekker fra ett sekund
            this.state.timeLeft--; 
            
            // Oppdater timeren / teksten på skjermen
            timerElement.textContent = this.state.timeLeft;

            // Sjekker om tiden har løpt ut
            if (this.state.timeLeft <= 0) {
                this.endRound(); // Avslutter runden 
            }
        }, 1000); 
    },

    // Funksjon for endRound 
    endRound: function() {
        // Stopper timeren
        clearInterval(this.state.timerId); 
        
        console.log("Runden er over!");
        // konsekvenser og animasjoner her senere ENDRE DETTE
    }
};