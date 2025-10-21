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
        leverPulled: false
    },

    // Funksjon for loadLevel
    loadLevel: function(levelIndex) {
        const level = gameData[levelIndex];
        const dilemmaTextElement = document.getElementById('dilemma-text');
        const timerElement = document.getElementById('timer');
        const leverButton = document.getElementById('lever-button');

        //Tilbakestiller alt for runden
        dilemmaTextElement.textContent = level.dilemmaText;
        timerElement.textContent = this.state.timeLeft;
        this.state.leverPulled = false; 
        leverButton.textContent = "TREKK I SPAKEN"; 
        leverButton.disabled = false; 

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
        clearInterval(this.state.timerId); 
        
        // Logger resultatet
        console.log("Runden er over! Spak trukket: " + this.state.leverPulled);
        
        // Deaktiver spaken etter at runden er over
        document.getElementById('lever-button').disabled = true;
    },

    // funksjon for spaken
    handleLeverPull: function() {
        if (this.state.leverPulled) return;

        this.state.leverPulled = true;
        console.log("Valg tatt! Spaken er trukket.");

        // visuell feedback
        const leverButton = document.getElementById('lever-button');
        leverButton.textContent = "VALG TATT";
        leverButton.disabled = true; 

        this.endRound();
    },

    // init (for å sette opp lyttere)
    init: function() {
        // Hent spak-knappen
        const leverButton = document.getElementById('lever-button');
        
        leverButton.addEventListener('click', this.handleLeverPull.bind(this));
    }
}; 

// Kjører init-funksjonen når skriptet lastes
game.init();



};