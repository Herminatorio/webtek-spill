// Struktur for alle spillnivåer
const gameData = [
    {
        // Dilemma 1: Trønder v Østlendinger
        levelId: 1,
        dilemmaText: "Et tog er på vei mot en Trønder. Du kan trekke i en spak for å sende det mot fem østlendinger. Hva gjør du?",
        
        trackA: {
            characters: ['Trønder'],
            trackImage: 'tronder.png',     // Egendefinert bilde
            trackDeadImage: 'tronder_dod.png' // Egendefinert bilde dø
        },

        trackB: { characters: ['Østlending', 'Østlending','Østlending','Østlending','Østlending'] }, 
        
        feedback: {
            feedbackB: "Bra! Østlendingene fortjente det!",
            feedbackA: "Jævla psykopat!" 
        }
    },

    {
        // Dilemma 2:BI v NTNU
        levelId: 2,
        dilemmaText: "Et tog er på vei mot 2x NTNU-studenter. Du kan trekke i en spak for å sende det mot 5x BI-studenter som diskuterer formueskatten. Hva gjør du?",
         trackA: {
            characters: ['NTNU student', 'NTNU student'],
            trackImage: 'ntnustudentlevende.png',     // Egendefinert bilde
            trackDeadImage: 'ntnustudentdod.png' // Egendefinert bilde dø
        },
         trackB: {
            characters: ['BI student','BI student','BI student','BI student','BI student',],
            trackImage: 'bistudentlevende.png',     // Egendefinert bilde
            trackDeadImage: 'bistudentdod.png' // Egendefinert bilde dø
        },
        
        feedback: {
            feedbackB: "Helt riktig! De hadde for mye studielån uansett.",
            feedbackA: "Du ofret 2 ingeniører for 5... financebros? Kaldt." 
        }
    },

    {
        // Dilemma 3: 5 person du hater intenst vs. 1 du elsker.
        levelId: 3,
        dilemmaText: "Et tog er på vei mot 5 personer du HATER. Du kan trekke i en spak for å sende det mot 1 person som alltid hoster vors. Hva gjør du?",
        trackA: { characters: ['Hater', 'Hater', 'Hater', 'Hater', 'Hater'] },
        trackB: { characters: ['Elsker'] },
        feedback: {
            feedbackB: "Nice guys always finish last...",
            feedbackA: "Massemorder!"
        }
    },
    {
        // Dilemma 4: 1 Digfor student vs 5 informatikk studenter 
        levelId: 4,
        dilemmaText: "Et tog er på vei mot 1 Digfor student. Du kan trekke i en spak for å sende det mot 5 informatikk studenter. Hva gjør du?",
        trackA: { characters: ['Digfor student'] },
        trackB: { characters: ['Informatikk student', 'Informatikk student', 'Informatikk student', 'Informatikk student', 'Informatikk student'] },
        feedback: {
            feedbackB: "Bra! Informatikk studenter er jo bare datamaskiner uansett.",
            feedbackA: "Nei! Digfor e bæst, ingen protæst!."
        }
    },
    {
        // Dilemma 5: Navnbrødre
        levelId: 5,
        dilemmaText: "Toget er på vei mot Atle Olsø. Du kan bytte spor og treffe Atle Nes. Hva gjør du?",
        trackA: { characters: ['Atle Olsø'],
        trackImage: 'atleolsolevende.png',     // Egendefinert bilde
        trackDeadImage: 'atleolsodod.png' 
         }, 
        trackB: { characters: ['Atle Nes'],
        trackImage: 'atleneslevende.png',     // Egendefinert bilde
        trackDeadImage: 'atlenestdod.png' 
         },  //Legge inn egen figur
        feedback: {
            feedbackB: "En mann har mistet sin navnbror :(",
            feedbackA: "En mann har mistet sin navnbror :("
        }
    },
    {
        // Dilemma 6: Tracksuit
        levelId: 6,
        dilemmaText: "Toget er på vei mot en med rød tracksuit. På det andre sporet står det en uten. Hva gjør du?",
        trackA: { characters: ['Tracksuit'],
        trackImage: 'tracksuitlevende.png',     
        trackDeadImage: 'tracksuitdod.png' 
         }, 
        trackB: { characters: ['Person'] },
        feedback: {
            feedbackB: "Tracksuit er fett brur!",
            feedbackA: "Han ville bare låne 100kr til bussen...."
        }
    },
    {
        // Dilemma 7: Du er problemet
        levelId: 7,
        dilemmaText: "Det er ingen dilemma, DU ER PROBLEMET. Drar du i spaken?",
        trackA: { characters: [] },
        trackB: { characters: [] },
        feedback: {
            feedbackB: "Hmm... bra valg?",
            feedbackA: "Hmm... bra valg?"
        }
    },
    {
        // Dilemma 8: Trump vs Putin 
        levelId: 8,
        dilemmaText: "Et tog er på vei mot Putin. Du kan trekke i en spak for å sende det mot Trump. Hva gjør du?",
        trackA: { characters: ['Putin'],
        trackImage: 'putinlevende.png',     // Egendefinert bilde
        trackDeadImage: 'putindod.png' 
         },
        trackB: { characters: ['Trump'],
        trackImage: 'trumplevende.png',     // Egendefinert bilde
        trackDeadImage: 'trumpdod.png' 
         }, 
        feedback: {
            feedbackB: "Feil! Vi må itj dræp Trump, vi må Make America Great Again!",
            feedbackA: "Endelig blei vi kvitt Putin."
        }
    },
    {
        // Dilemma 9: Kuer vs. 1 veganer
        levelId: 9,
        dilemmaText: "Et tog er på vei mot 1 veganer. Du kan trekke i en spak for å sende det mot 4 uskyldige kuer. Hva gjør du?",
        trackA: { characters:['Veganer'],
         }, 
        trackB: { characters: ['Kuer', 'Kuer', 'Kuer', 'Kuer',],
        trackImage: 'kulevende.png',  
        trackDeadImage: 'kudod.png', 
         },
        feedback: {
            feedbackB:"Buuuu! Du ofret 5 kuer.",
            feedbackA: "Helt riktig! Veganeren vil at han skal dø for å redde kuene.",
        }
    },
    {
        // Dilemma 10: Paradoks
        levelId: 10,
        dilemmaText: "Toget er på vei mot de 5 utviklerne før de lagde dette spillet! Trekk i spaken, og du sender toget mot serveren som kjører spillet. Hva gjør du?",
        trackA: { characters: ['Spillutvikler','Spillutvikler','Spillutvikler','Spillutvikler','Spillutvikler'] },
        trackB: { characters: ['Spilllogikk'],
        trackImage: 'serverlevende.png',     // Egendefinert bilde
        trackDeadImage: 'serverdod.png' 
         }, 
        feedback: {
            feedbackB: "Du ødela spillet! Game Over på en måte. Paradoks avverget?",
            feedbackA: "Utviklerne er borte... men hvordan trakk du i spaken hvis spillet aldri ble lagd?"
        }
    },
    {
        // Dilemma 11: Kapitalisme
        levelId: 11,
        dilemmaText: "Du kan skifte spor når som helst, men det vil føre til forsinkelser og mindre profitt til ATB",
        trackA: { characters: ['Person','Person','Person','Person','Person','Person'] },
        trackB: { characters: [] },
        feedback: {
            feedbackB: "Dette kommer til å se stygt ut på kvartalsrapporten...",
            feedbackA: "De 6 på sporet var en akseptabel kostnad for shareholder value!."
        }
    },
    {
        // Dilemma 12: Løkka folk
        levelId: 12,
        dilemmaText: 'Toget er på vei mot 5 hipstere fra Grunerløkka på vors som diskuterer at deres hjemmebrygget IPA har "for tydelige sitrusnoter". Du kan bytte spor og treffe en Tesla sjåfør som bruker blinklys i sinsenkrysset. Hva gjør du!',
        trackA: { characters: ['Person','Person','Person','Person','Person'] },
        trackB: { characters: ['Tesla'] },
        feedback: {
            feedbackB: "Nå er alt håp ute for trafikken!",
            feedbackA: "Du gjorde vorset en tjeneste."
        }
    },
    {
        // Dilemma 13: Krypto bros
        levelId: 13,
        dilemmaText: "Toget er på vei mot 1 person. Du kan bytte spor og treffe serveren som holder kryptobeholdningen til 5000 folk som satser sparepengene sine på 'XRP coin' basert på 'egen research'",
        trackA: { characters: ['Person'] },
        trackB: { characters: ['Server'],
        trackImage: 'serverlevende.png',     
        trackDeadImage: 'serverdod.png' 
         }, 
        feedback: {
            feedbackB: "5000 'investorer' er knust, og deres Lambo-drømmer er borte. Men du reddet en person fra... vel å bli påkjørt.",
            feedbackA: "XRP til månen! (Ikke økonomisk råd)"
        }
    },
    {
        // Dilemma 14: Dugnad
        levelId: 14,
        dilemmaText: "Toget er på vei mot 1 person som alltid sniker seg unna dugnad i borettslaget. Du kan bytte spor og treffe 5 personer som ALLTID stiller opp. Hva gjør du!",
        trackA: { characters: ['Person'] },
        trackB: { characters: ['Person','Person','Person','Person','Person'] },
        feedback: {
            feedbackB: "Nå må du bake kake og organisere bod-ryddingen selv",
            feedbackA: "Rettferdigheten er servert!"
        }
    },
    {
        // Dilemma 15: Double it
        levelId: 15,
        dilemmaText: "Toget er på vei mot 1 person. Du kan double it and give it to the next person. Trekker du i spaken?",
        trackA: { characters: ['Person'] },
        trackB: { characters: [] },
        feedback: {
            feedbackB: "Sender problemet videre til neste person... som sikkert er like ansvarlig som deg?!",
            feedbackA: "Du lot det skje. Du tror du er en god person, men noen er døde pga. deg!."
        }
    },
    {
        // Dilemma 16: 10 stakkarslig barn vs din nærmeste venn Marius Borg Høiby
        levelId: 16,
        dilemmaText: "Et tog er på vei mot din nærmeste venn. Du kan trekke i en spak for å sende det mot 10 stakkarslig barn fra Afrika med daglig kalorikonsumasjon på 200 kalorier. Hva gjør du?",
        trackA: { characters: ['Venn'] },
        trackB: { characters: ['Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn', 'Stakkarslig barn'],
        trackImage: 'afrikalevende.png',     // Egendefinert bilde
        trackDeadImage: 'afrikadod.png' 
         },
        feedback: {
            feedbackB: "Psykopat! Du ofret 10 barn for en venn.",
            feedbackA: "Det må vennene dine forstå."
        }
    },
    {
        // Dilemma 17: Rasist vs homofob 
        levelId: 17,
        dilemmaText: "Et tog er på vei mot 1 homofob. Du kan trekke i en spak for å sende det mot 1 rasist. Hva gjør du?",
        trackA: { characters: ['Homofob'],
        trackImage: 'homofobrasistlevende.png',     // Egendefinert bilde
        trackDeadImage: 'homofobrasistdod.png' 
         },
        trackB: { characters: ['Rasist'], 
        trackImage: 'homofobrasistlevende.png',     // Egendefinert bilde
        trackDeadImage: 'homofobrasistdod.png' 
        },
        feedback: {
            feedbackB: "De er like dårlig, bra vi ble kvitt en!",
            feedbackA: "De er like dårlig, bra vi ble kvitt en!."
        }
    },
    {
        // Dilemma 18: Marius Borg Høiby vs Charlie Kirk
        levelId: 18,
        dilemmaText: "Et tog er på vei mot Marius Borg Høiby. Du kan trekke i en spak for å sende det mot Charlie Kirk. Hva gjør du?",
        trackA: { characters: ['Marius Borg Høiby'] },
        trackB: { characters: ['Charlie Kirk'] },
        feedback: {
            feedbackB: "Hmm... bra valg?",
            feedbackA: "Hmm... bra valg?"
        }
    },
    {
        // Dilemma 19: Første smittede med svartedauen(hindre smitte) vs første smittede med covid(hindre smitte) 
        levelId: 19,
        dilemmaText: "Et tog er på vei mot Første smittede med covid. Du kan trekke i en spak for å sende det mot Første smittede med svartedauen. Hva gjør du?",
        trackA: { characters: ['Første smittede med covid'] },
        trackB: { characters: ['Første smittede med svartedauen'] },
        feedback: {
            feedbackB: "Hmm... bra valg?",
            feedbackA: "Hmm... bra valg?"
        }
    }
];

// Generell kode for spillet
const game = {
    // State  lagrer spillets tilstand underveis
    state: {
        currentLevel: 0,
        timeLeft: 30,
        timerId: null, 
        leverPulled: false,
        ignored: false,
        deathCount: 0,
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
        const deathCounterElement = document.getElementById('death-counter');

        // Tømmer figur-containere
        trackACharsEl.innerHTML = '';
        trackBCharsEl.innerHTML = '';

        // Fyller Spor A med figurer
        level.trackA.characters.forEach(characterName => {
            const charImg = document.createElement('img');

            // Egendefinert figur ELLER standard
            let imgSrc = 'assets/image/bilder/mennesker.png'; // Standard
            
            // Sjekker om trackA-objektet finnes OG om det har trackImage
            if (level.trackA && level.trackA.trackImage) { 
                imgSrc = 'assets/image/bilder/' + level.trackA.trackImage; // Bruk egendefinert bilde
            }

            charImg.src = imgSrc; 
            charImg.alt = characterName;
            charImg.className = 'character-sprite';
            trackACharsEl.appendChild(charImg);
        });

        // Fyller Spor B med figurer
        level.trackB.characters.forEach(characterName => {
            const charImg = document.createElement('img');

            // Egendefinert figur ELLER standard
            let imgSrc = 'assets/image/bilder/mennesker.png'; // Standard
            
            // Sjekker om trackB-objektet finnes OG om det har trackImage
            if (level.trackB && level.trackB.trackImage) { 
                imgSrc = 'assets/image/bilder/' + level.trackB.trackImage; // Bruk egendefinert bilde
            }

            charImg.src = imgSrc; 
            charImg.alt = characterName;
            charImg.className = 'character-sprite';
            trackBCharsEl.appendChild(charImg);
        });

        //Tilbakestiller alt for runden
        dilemmaTextElement.textContent = level.dilemmaText;
        timerElement.textContent = this.state.timeLeft;
        this.state.leverPulled = false; 
        this.state.ignored = false;
        
        // Tilbakestiller spaken til "av"
        leverButton.src = 'assets/image/bilder/spakoff.png'; 
        leverButton.style.pointerEvents = 'auto'; 
        
        feedbackElement.textContent = "";

        deathCounterElement.textContent = "Drepte: " + this.state.deathCount;

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
        console.log("Runden er over! Spak trukket: " + this.state.leverPulled + ", Ignorert: " + this.state.ignored); 
        document.getElementById('lever-button').style.pointerEvents = 'none'; // Deaktiver spaken 

        //Tog-animasjon og tilbakemelding
        const trainElement = document.getElementById('train');
        const level = gameData[this.state.currentLevel];
        const feedbackElement = document.getElementById('feedback-text');
        const deathCounterElement = document.getElementById('death-counter');
        
        //skrik lyd
        const screamSound = new Audio('assets/audio/skrik.wav');
        screamSound.volume = 0.04;
        screamSound.preload = 'auto';

        // Stopper den sakte animasjonen før den raske starter
        trainElement.classList.remove('train-creeping');

        let deathsThisRound = 0;

        if (this.state.leverPulled) {
            // Spilleren TRAKK spaken (valgte Spor B)
            feedbackElement.textContent = level.feedback.feedbackB;
            trainElement.classList.add('train-move-b');
            deathsThisRound = level.trackB.characters.length; 

            //skrikelyd
            setTimeout(() => {
                screamSound.currentTime = 0;
                screamSound.play().catch(() => {});
            }, 300);
            //Bytter bilde slik at de blir kjørt på spor B
            //Lagt til en liten timer, for at det blir riktig.
            setTimeout(() => {
                const trackBCharsEl = document.getElementById('track-b-characters');
                const trackBImages = trackBCharsEl.querySelectorAll('img.character-sprite');
                
                // Bestemmer riktig "død" bilde
                let deadImgSrc = 'assets/image/bilder/mennesker_dod.png'; // Standard bilde
                // Sjekk om nivået har definert et spesifikt dødt bilde for spor B
                if (level.trackB && level.trackB.trackDeadImage) { 
                    deadImgSrc = 'assets/image/bilder/' + level.trackB.trackDeadImage; // Bruk det spesifikke bildet
                }
                
                trackBImages.forEach(img => {
                    img.src = deadImgSrc; // Bruker riktig bildekilde
                });
            }, 1000);

        } else if (this.state.ignored) {
            // Spilleren IGNORERTE (valgte Spor A)
            feedbackElement.textContent = level.feedback.feedbackA;
            trainElement.classList.add('train-move-a');
            deathsThisRound = level.trackA.characters.length;
            
            //skrikelyd
            setTimeout(() => {
                screamSound.currentTime = 0;
                screamSound.play().catch(() => {});
            }, 300);
            //Bytter bilde slik at de blir kjørt på spor A
            setTimeout(() => {
                const trackACharsEl = document.getElementById('track-a-characters');
                const trackAImages = trackACharsEl.querySelectorAll('img.character-sprite');
                
                // Bestemmer riktig "død" bilde
                let deadImgSrc = 'assets/image/bilder/mennesker_dod.png'; // Standard bilde
                 // Sjekk om nivået har definert et spesifikt dødt bilde for spor A
                if (level.trackA && level.trackA.trackDeadImage) {
                    deadImgSrc = 'assets/image/bilder/' + level.trackA.trackDeadImage; // Bruk det spesifikke bildet
                }
                
                trackAImages.forEach(img => {
                    img.src = deadImgSrc; // Bruk riktig bildekilde
                });
            }, 1000); 

        } else {
            // Spilleren lot være (valgte Spor A)
            feedbackElement.textContent = level.feedback.feedbackA;
            trainElement.classList.add('train-move-a');
            deathsThisRound = level.trackA.characters.length;
            
            //skrikelyd
            setTimeout(() => {
                screamSound.currentTime = 0;
                screamSound.play().catch(() => {});
            }, 300);
            //Bytter bilde slik at de blir kjørt på spor A
            //Lagt på en liten delay
            setTimeout(() => {
                const trackACharsEl = document.getElementById('track-a-characters');
                const trackAImages = trackACharsEl.querySelectorAll('img.character-sprite');
                
                // Bestemmer riktig "død" bilde
                let deadImgSrc = 'assets/image/bilder/mennesker_dod.png'; // Standard bilde
                // Sjekk om nivået har definert et spesifikt dødt bilde for spor A
                if (level.trackA && level.trackA.trackDeadImage) { 
                    deadImgSrc = 'assets/image/bilder/' + level.trackA.trackDeadImage; // Bruk det spesifikke bildet
                }
                
                trackAImages.forEach(img => {
                    img.src = deadImgSrc; // Bruk riktig bildekilde
                });
            }, 1000); 
        }

        //Oppdater telleren
        this.state.deathCount += deathsThisRound;
        deathCounterElement.textContent = "Drepte: " + this.state.deathCount;

        // Forbereder neste nivå eller avslutter spillet (DENNE DELEN ER UENDRET)
        setTimeout(() => {
            this.state.currentLevel++; 
            if (this.state.currentLevel < gameData.length) {
                game.loadLevel(this.state.currentLevel);
            } else {
                console.log("Spillet er ferdig!");
                document.getElementById('final-score').textContent = "Du drepte totalt: " + this.state.deathCount;
                document.getElementById('game-screen').classList.add('hidden');
                document.getElementById('end-screen').classList.remove('hidden');
                document.getElementById('page-background').style.backgroundImage = "url('assets/image/bilder/startside.png')";
                const mainElement = document.querySelector('main');
                mainElement.style.justifyContent = 'center';
                mainElement.style.alignItems = 'center';
            }
        }, 5000); 
    }, // Slutt på endRound

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

        // Funksjon for ignore-button
    handleIgnore: function () {
        if (this.state.ignored) return;
        this.state.ignored = true;
        console.log("Valg tatt! Spaken er ignorert!");

        this.endRound();
    },

    // initialiserer spillet, kjøres én gang
    init: function() {
        // Hent spak-bildet
        const leverButton = document.getElementById('lever-button');
        const ignoreButton = document.getElementById('ignore-button');
        leverButton.addEventListener('click', this.handleLeverPull.bind(this));
        ignoreButton.addEventListener('click', this.handleIgnore.bind(this));
    }
}; 

// Kjører init-funksjonen når skriptet lastes
game.init();