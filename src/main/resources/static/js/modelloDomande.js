function Risposta(risposta, descrizione) {
	this.risposta = risposta;
	this.descrizione = descrizione;
	
	this.dammiRisposta = function() {
		return this.risposta + "\n" + this.descrizione + "\n";
	}
}

function Domanda(domanda, descrizione, risposte) {
	this.domanda = domanda;
	this.risposte = risposte;
	this.descrizione = descrizione;
	
	this.dammiDomanda = function() {
		return this.domanda + "\n" + this.descrizione + "\n" + this.risposte + "\n";
	}
}

/* --- INDICE PER SCORRERE --- */
var ind = -1;

/* --- CATEGORIE --- */ 

categorie = {
	["domanda"]: "Su quale categoria vuoi trovare il prodotto adatto a te?",
	"categoria": new Array(),
	"descrizione": "Benvenuto!%Rispondi a queste semplici domande e ti aiuteremo a trovare il prodotto ideale per le tue esigenze."
};

categorie.categoria.push("Notebook", "Stampanti");

/*console.log(categorie);


/* --- DOMANDE SPECIFICHE --- */ 


var domande = new Object();

domande = {
	["stampanti"]: {},
	["notebook"]: {}
};

/* --- DOMANDE STAMPANTE --- */ 

domande.stampanti = {
	["elencoDomande"]: new Array(), 
	
};

/* --- DOMANDE SPECIFICHE STAMPANTE --- */

domande.stampanti.elencoDomande.push(new Domanda("La mia nuova stampante è per …", "Utilizzo della stampante%Scegli il contesto dove utilizzerai la tua stampante.", 
	new Array(new Risposta("Uso personale", "Uso personale%Il dispositivo sarà utilizzato per documenti personali, da me e la mia famiglia."), 
				new Risposta("Home office", "Home office%Il dispositivo sarà utilizzato in un home office per creare documenti professionali." ), 
				new Risposta("Piccola azienda", "Piccola azienda%Il dispositivo sarà utilizzato in un ufficio con un massimo di 10 persone."),
				new Risposta("Grande azienda", "Grande azienda%Il dispositivo sarà utilizzato in un ufficio con più di 10 persone."))));

domande.stampanti.elencoDomande.push(new Domanda("Cosa vuoi fare con il tuo dispositivo?%Puoi selezionare più opzioni", "Funzionalità del dispositivo%La nostra gamma di prodotti offre una vasta scelta di caratteristiche e funzionalità.\nScegli la funzionalità di cui hai bisogno.",
	new Array(new Risposta("Stampa", ""), 
				new Risposta("Copia", "" ), 
				new Risposta("Scansione", ""),
				new Risposta("Fax", ""))));
				
domande.stampanti.elencoDomande.push(new Domanda("Voglio stampare …", "Colore di stampa%Scegli il colore in cui desideri stampare.",
	new Array(new Risposta("A colori e in bianco e nero", ""), 
				new Risposta("Solo in bianco e nero", "" ))));				
				
domande.stampanti.elencoDomande.push(new Domanda("Devo poter stampare…%Puoi selezionare più opzioni", "Formato di stampa%Scegli il formato sui cui desideri stampare, dallo standard A4 fino ai grandi formati o alle foto.",
	new Array(new Risposta("Documenti con solo testo", "Documenti con solo testo%I documenti stampati saranno soprattutto documenti di testo come email, fogli Word o fogli di calcolo."), 
				new Risposta("Fotografie e immagini", "Fotografie e immagini%Foto o altre immagini in alta risoluzione." ),
				new Risposta("Su etichette e buste", "Su etichette e buste%Ideale per chi vuole stampare su etichette o buste." ),
				new Risposta("In formato standard A4", "In formato standard A4%Documenti in formato standard A4." ),
				new Risposta("Nel grande formato A3", "Nel grande formato A3%Documenti in A3 per chi vuole stampare in un formato più grande." ),
				new Risposta("Nei formati più piccoli A5 e A6", "Nei formati più piccoli A5 e A6%Documenti in formato A5 / A6 ideali per piccoli volantini." ))));
				
domande.stampanti.elencoDomande.push(new Domanda("Frequenza di stampa", "Frequenza di utilizzo%Indica quanto spesso stampi.\nIn questo modo ti consiglieremo il modello più adatto.",
	new Array(new Risposta("Poche volte al mese", ""), 
				new Risposta("Una volta a settimana", "" ), 
				new Risposta("Più volte a settimana", ""),
				new Risposta("Ogni giorno", ""))));
				
domande.stampanti.elencoDomande.push(new Domanda("Voglio collegare il mio dispositivo tramite…%Puoi selezionare più opzioni ", "Connettività del dispositivo%Indica come vuoi installare e collegare il tuo dispositivo.\nAbbiamo un modello per ogni tua esigenza: dal wireless alla rete cablata.",
	new Array(new Risposta("LAN (cavo di rete)", "LAN%Vuoi utilizzare una connessione LAN?\nCosì la stampante sarà disponibile ad ogni utente che è conesso alla stessa rete."), 
				new Risposta("USB", "USB%Scegli l'interfaccia USB se vuoi connettere il dispositivo direttamente al tuo pc o laptop.\nIl dispositivo sarà accessibile solo dal pc o laptop connesso." ), 
				new Risposta("WiFi", "WiFi%Connetti senza fili tramite WiFi e accedi al tuo dispositivo da qualunque punto della casa o dell'ufficio."),
				new Risposta("Porta parallela", "Porta parallela%Sei una grande azienda e vuoi connettere il tuo dispositivo tramite porta parallela?\nQuesta interfaccia ti consente di inviare dati simultaneamente da più cavi in una volta sola."))));

domande.stampanti.elencoDomande.push(new Domanda("Voglio…%Puoi selezionare più opzioni", "Requisiti aggiuntivi%Prima di mostrarti il dispositivo più adatto alle tue esigenze, ci sono altre caratteristiche o funzionalità che desideri?",
	new Array(new Risposta("Stampare fronte retro", "Stampare fronte retro%Stampa automaticamente su entrabe i lati del foglio, risparmiando carta e costi."), 
				new Risposta("Stampare da dispositivo mobile", "Stampare da dispositivo mobile%Ideale per chi vuole stampare comodamente dal proprio smartphone." ), 
				new Risposta("Aggiungere altri cassetti carta", "Aggiungere altri cassetti carta%Ideale per chi stampa con una frequenza elevata e vuole evitare di ricaricare spesso il vassoio carta, risparmiando tempo.\nOppure puoi utilizzare vassoi specifici per i differenti formati di carta."))));

/* --- DOMANDE SPECIFICHE NOTEBOOK --- */

	