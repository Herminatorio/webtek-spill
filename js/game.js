// Struktur for alle spillnivåer
const gameData = [
    {
        levelId: 1,
        dilemmaText: "Et tog er på vei mot en Trønder. Du kan trekke i en spak for å sende det mot fem østlendinger. Hva gjør du?",
        trackA: { characters: ['Trønder'] },
        trackB: { characters: ['Østlending','Østlending','Østlending','Østlending','Østlending',] },
        feedback: {
            feedbackB: "Bra! Østlendingene hadde sikkert fortjent det.",
            feedbackA: "Jævla psykopat" 
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
        timerId: null, 
        leverPulled: false 
    },

    // Funksjon for loadLevel (laster inn et nytt nivå)
    loadLevel: function(levelIndex) {
        // Hent data for det spesifikke nivået
        const level = gameData[levelIndex];

        // Hent HTML-elementene vi skal endre
        const dilemmaTextElement = document.getElementById('dilemma-text');
        const timerElement = document.getElementById('timer');
        const leverButton = document.getElementById('lever-button');
        const feedbackElement = document.getElementById('feedback-text');

        //Tilbakestiller alt for runden
        dilemmaTextElement.textContent = level.dilemmaText; // Vis ny dilemma-tekst
        timerElement.textContent = this.state.timeLeft; // Vis start-tid (30)
        this.state.leverPulled = false; // Nullstill valget
        leverButton.textContent = "TREKK I SPAKEN"; // Nullstill knappetekst
        leverButton.disabled = false; // Gjenaktiver knappen for den nye runden

        feedbackElement.textContent = ""; // fjerner feedback fra forrige runde
        console.log("Nivå " + level.levelId + " er lastet!");

        // Starter timeren
        this.startTimer();
    },

    // Start timer funksjon
    startTimer: function() {
        const timerElement = document.getElementById('timer');

        // Tilbakestiller tiden (siden vi kanskje starter et nytt nivå)
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
        // Stopper timeren fra å telle videre
        clearInterval(this.state.timerId); 
        
        // Loggfører hva spilleren valgte
        console.log("Runden er over! Spak trukket: " + this.state.leverPulled);
        
        // Deaktiver spaken etter at runden er over
        document.getElementById('lever-button').disabled = true;

        //Logikk for tilbakemelding
        const level = gameData[this.state.currentLevel];
        const feedbackElement = document.getElementById('feedback-text');

        if (this.state.leverPulled) {
            // Spilleren TRAKK spaken (valgte Spor B)
            feedbackElement.textContent = level.feedback.feedbackB;
        } else {
            // Spilleren TRAKK IKKE spaken (valgte Spor A)
            feedbackElement.textContent = level.feedback.feedbackA;
        }

        // Forbereder neste nivå (eller avslutter spillet)
        setTimeout(() => {
            // Logikk for å laste neste nivå kommer her...
            console.log("Gjør klar for neste nivå...");
            // game.loadLevel(this.state.currentLevel + 1); // <-- Slik gjør vi det senere
        }, 3000); // Vent 3 sekunder (3000ms)
    },

    // Funksjon for spaken 
    handleLeverPull: function() {
        // Hvis valget allerede er tatt gjør ingenting
        if (this.state.leverPulled) return;

        // Registrer valget
        this.state.leverPulled = true;
        console.log("Valg tatt! Spaken er trukket.");

        // Visuell feedback til spilleren
        const leverButton = document.getElementById('lever-button');
        leverButton.textContent = "VALG TATT";
        leverButton.disabled = true; // Deaktiver knappen

        // Avslutt runden umiddelbart
        this.endRound();
    },

    // initialiserer spillet, kjøres én gang
    init: function() {
        // Hent spak-knappen
        const leverButton = document.getElementById('lever-button');
        

        leverButton.addEventListener('click', this.handleLeverPull.bind(this));
    }
}; 

// Kjører init-funksjonen når skriptet lastes
game.init();