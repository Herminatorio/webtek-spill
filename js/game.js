// Struktur for alle spillnivåer
const gameData = [
    {
        // Dilemma 1: Trønder v Østlendinger
        levelId: 1,
        dilemmaText: "Et tog er på vei mot en Trønder. Du kan trekke i en spak for å sende det mot fem østlendinger. Hva gjør du?",
        trackA: { characters: ['Trønder'] },
        trackB: { characters: ['Østlending','Østlending','Østlending','Østlending','Østlending',] },
        feedback: {
            feedbackB: "Bra! Østlendingene hadde sikkert fortjent det.",
            feedbackA: "Jævla psykopat" 
        }
    },

    {
        // Dilemma 2:BI v NTNU
        levelId: 2,
        dilemmaText: "Et tog er på vei mot 2x NTNU-studenter. Du kan trekke i en spak for å sende det mot 5x BI-studenter som diskuterer formueskatten. Hva gjør du?",
        trackA: { characters: ['NTNU Student', 'NTNU Student'] },
        trackB: { characters: ['BI Student','BI Student','BI Student','BI Student','BI Student',] },
        feedback: {
            feedbackB: "Helt riktig! De hadde for mye studielån uansett.",
            feedbackA: "Du ofret 2 ingeniører for 5... financebros? Kaldt." 
        }
    }
    
    // HER LEGGER VI INN ALLE NIVÅENE
    
];

// Generell kode for spillet
const game = {
    // State  lagrer spillets tilstand underveis
    state: {
        currentLevel: 0,
        timeLeft: 30,
        timerId: null, 
        leverPulled: false 
    },

    // Funksjon for loadLevel som laster inn et nytt nivå
    loadLevel: function(levelIndex) {
        const level = gameData[levelIndex];

        // Henter HTML-elementene
        const dilemmaTextElement = document.getElementById('dilemma-text');
        const timerElement = document.getElementById('timer');
        const leverButton = document.getElementById('lever-button'); 
        const feedbackElement = document.getElementById('feedback-text');
        const trackACharsEl = document.getElementById('track-a-characters');
        const trackBCharsEl = document.getElementById('track-b-characters');
        const trainElement = document.getElementById('train');

        // Tømmer figur-containere
        trackACharsEl.innerHTML = '';
        trackBCharsEl.innerHTML = '';

        // Fyller Spor A med figurer
        level.trackA.characters.forEach(characterName => {
            const charImg = document.createElement('img');
            charImg.src = 'assets/image/bilder/mennesker.png';
            charImg.alt = characterName;
            charImg.className = 'character-sprite';
            trackACharsEl.appendChild(charImg);
        });

        // Fyller Spor B med figurer
        level.trackB.characters.forEach(characterName => {
            const charImg = document.createElement('img');
            charImg.src = 'assets/image/bilder/mennesker.png';
            charImg.alt = characterName;
            charImg.className = 'character-sprite';
            trackBCharsEl.appendChild(charImg);
        });

        //Tilbakestiller alt for runden
        dilemmaTextElement.textContent = level.dilemmaText;
        timerElement.textContent = this.state.timeLeft;
        this.state.leverPulled = false; 
        
        // Tilbakestiller spaken til "av"
        leverButton.src = 'assets/image/bilder/spakoff.png'; 
        leverButton.style.pointerEvents = 'auto'; 
        
        feedbackElement.textContent = "";

        // Tog animasjon 
        // Nullstiller fra forrige runde
        trainElement.classList.remove('train-move-a', 'train-move-b', 'train-creeping');
        void trainElement.offsetWidth; 
        trainElement.classList.add('train-creeping');

        console.log("Nivå " + level.levelId + " er lastet!");

        // Starter timeren
        this.startTimer();
    },

    // 30 sek timer funksjon
    startTimer: function() {
        const timerElement = document.getElementById('timer');
        this.state.timeLeft = 30;
        timerElement.textContent = this.state.timeLeft;
        this.state.timerId = setInterval(() => {
            this.state.timeLeft--; 
            timerElement.textContent = this.state.timeLeft;
            if (this.state.timeLeft <= 0) {
                this.endRound();
            }
        }, 1000); 
    },

    // Funksjon for endRound 
    endRound: function() {
        clearInterval(this.state.timerId); 
        console.log("Runden er over! Spak trukket: " + this.state.leverPulled);
        document.getElementById('lever-button').style.pointerEvents = 'none'; // Deaktiver spaken 

        //Tog-animasjon og tilbakemelding
        const trainElement = document.getElementById('train');
        const level = gameData[this.state.currentLevel];
        const feedbackElement = document.getElementById('feedback-text');

        if (this.state.leverPulled) {
            // Spilleren TRAKK spaken (valgte Spor B)
            feedbackElement.textContent = level.feedback.feedbackB;
            trainElement.classList.add('train-move-b'); 

            //Bytter bilde slik at de blir kjørt på spor B
            //Lagt til en liten timer, for at det blir riktig.
            setTimeout(() => {
                const trackBCharsEl = document.getElementById('track-b-characters');
                const trackBImages = trackBCharsEl.querySelectorAll('img.character-sprite');
                
                trackBImages.forEach(img => {
                    img.src = 'assets/image/bilder/mennesker_dod.png';
                });
            }, 1000);

        } else {
            // Spilleren lot være (valgte Spor A)
            feedbackElement.textContent = level.feedback.feedbackA;
            trainElement.classList.add('train-move-a'); 
            //Bytter bilde slik at de blir kjørt på spor A
            //Lagt på en liten delay
            setTimeout(() => {
                const trackACharsEl = document.getElementById('track-a-characters');
                const trackAImages = trackACharsEl.querySelectorAll('img.character-sprite');
                
                trackAImages.forEach(img => {
                    img.src = 'assets/image/bilder/mennesker_dod.png';
                });
            }, 1000); 
        }


        // Forbereder neste nivå eller avslutter spillet
        setTimeout(() => {
        // Går til neste nivå
        this.state.currentLevel++; 

        // Sjekker om det finnes flere nivå
        if (this.state.currentLevel < gameData.length) {
        // Ja = last inn neste nivå
            game.loadLevel(this.state.currentLevel);
        } else {
        // Nei = spillet er ferdig!
        console.log("Spillet er ferdig!");
        alert("Du er syk i hodet!"); 
        window.location.reload(); // Tilbake til start
        }
        }, 5000);
    },

    // Funksjon for spaken 
    handleLeverPull: function() {
        if (this.state.leverPulled) return;
        this.state.leverPulled = true;
        console.log("Valg tatt! Spaken er trukket.");

        // Henter spak figuren
        const leverButton = document.getElementById('lever-button');
        // Bytt bildet til "på"
        leverButton.src = 'assets/image/bilder/spakon.png'; 
        // Deaktiver videre klikking etter valg
        leverButton.style.pointerEvents = 'none'; 

        // Avslutter runden 
        this.endRound();
    },

    // initialiserer spillet, kjøres én gang
    init: function() {
        // Hent spak-bildet
        const leverButton = document.getElementById('lever-button');
        leverButton.addEventListener('click', this.handleLeverPull.bind(this));
    }
}; 

// Kjører init-funksjonen når skriptet lastes
game.init();