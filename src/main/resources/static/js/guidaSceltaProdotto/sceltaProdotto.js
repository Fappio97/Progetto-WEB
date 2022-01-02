/* --- Post caricamento pagina carica le funzioni js --- */
window.addEventListener("load", function(){
	aggiungiEventi();
});

/* --- Variabili --- */ 

var categoriaSelezionata;

// parto da due soltanto perché
var numDomandeTotaliCategoria = 2;

var preferenzeUtente = new Array();


/* --- Funzioni --- */

function aggiungiEventi(){
	
	var pulsanteProblema = document.getElementById("pulsanteProblema");
	pulsanteProblema.addEventListener("click", segnalazione);
	
	
	var pulsanteInvia = document.getElementById("pulsanteInvia");
	pulsanteInvia.addEventListener("click", inviaSegnalazione);
	
	var pulsanteAvanti = document.getElementById("pulsanteAvanti");
	pulsanteAvanti.addEventListener("click", paginaAvanti);
	
	var pulsanteIndietro = document.getElementById("pulsanteIndietro");
	pulsanteIndietro.addEventListener("click", paginaIndietro);

	abilitaDisabilita();
}

/* -- FUNZIONI CHE INVOCO DAI BOTTONI CREATI DA JS --- */
function rinizia() {
	if(ind == 0 && preferenzeUtente.length == 0)
		return;
		
	var domanda = confirm("Are you sure you want to start over?");
	
  	if (domanda === true) {
    	ind = 0;
		svuotaArray(preferenzeUtente);
		compila();
		abilitaDisabilita();
  	} 

}

function risultati() {
	if(ind != numDomandeTotaliCategoria) {
		salvaPreferenza();
		ind = numDomandeTotaliCategoria;
		compila();
		abilitaDisabilita();
		trovaProdottiCorrelati();
	}
}

function vaiAllaDomanda(i) {
	if(i == -1) {
		if(cambiaCategoria())
			svuotaArray(preferenzeUtente);
		else
			return;
	}
	salvaPreferenza();
	ind = i;
	compila();
	abilitaDisabilita();
	if(ind == numDomandeTotaliCategoria)
		trovaProdottiCorrelati();
}

function caricaInfo(indiceRisposta) {
	switch(categoriaSelezionata) {
		case("printers"):
			caricaDescrizione(domande.stampanti.elencoDomande[ind].risposte[indiceRisposta].descrizione);
			break;
		case("notebook"):
			caricaDescrizione(domande.notebook.elencoDomande[ind].risposte[indiceRisposta].descrizione);
			break;
		default:
			break;
	}
}

function cercaProdottiMeglioRecensiti() {
	prodottiMeglioRecensiti();
	
	var div = document.getElementById("altriProdotti");
	div.innerHTML = "";
}

/* -- FINE FUNZIONI CHE INVOCO DAI BOTTONI CREATI DA JS --- */

/* -- FUNZIONI --- */

function segnalazione(){
	var row = document.getElementById("segnalazione2");	
	row.innerHTML = "<textarea cols=\"32\" rows=\"6\" onfocus=\"clearText(this)\" onblur=\"clearText(this)\" id = \"testoSegnalazione\">Enter your problem ...</textarea>"
	document.getElementById("pulsanteInvia").style.display = 'inline';
	document.getElementById("pulsanteProblema").style.display = 'none';
}

function inviaSegnalazione(){
	var testo = document.getElementById("testoSegnalazione");
	var row = document.getElementById("segnalazione2");
	
	let segnalazione = testo.value;
	if(segnalazione == 'Enter your problem ...' || segnalazione == '' || segnalazione == 'Write your problem here ...') {
		testo.style.borderColor = "red";
		testo.value = 'Write your problem here ...';
 	} else {
		
		let origineProblema = "";
		if(ind == -1) 
			origineProblema += "Choice of category";
		else if(ind == numDomandeTotaliCategoria) {
			origineProblema += "Results of ";
			origineProblema += categoriaSelezionata;
		} else {
			origineProblema += "Category " + categoriaSelezionata + ". ";
			origineProblema += "Question n° " + ind + "";
		}
			
			
		segnalazioneAjax(origineProblema, segnalazione);
		
		document.getElementById("pulsanteProblema").style.display = 'inline';
		document.getElementById("pulsanteInvia").style.display = 'none';
	}
}

function stampaEsitoSegnalazione() {
	var row = document.getElementById("segnalazione2");
	row.innerHTML = "";
	
	alert("Report sent!");
}


function paginaAvanti() {
	if(ind == -1) {
		var selectedRadio = document.querySelectorAll('input[name=collega]:checked');
				
		if (selectedRadio.length == 1){
			ind++;
			
			selectedRadio.forEach(function(radio, indice){
				categoriaSelezionata = radio.getAttribute('id');
			}); 

			numeroDomandeCategoriaSelezionata();
			caricaBarraNavigazione();
		} else {
			alert("Select a product category to continue !");
			return;
		}
	} else {
		salvaPreferenza();
		
		if(ind < numDomandeTotaliCategoria - 1)
			ind++;
			
		else {
			
			trovaProdottiCorrelati();
			
			ind++;
		}
	}
	abilitaDisabilita();
	compila();
}

function paginaIndietro() {
	if(ind == 0) {
		if(cambiaCategoria())
			svuotaArray(preferenzeUtente);
		else
			return;
	}
	
	if(ind > -1) {
		if(ind != 0)
			salvaPreferenza();
		ind--;
		compila();
	} 
	abilitaDisabilita();
}

/* -- FINE FUNZIONI --- */


/* --- FUNZIONI AUSILIARIE --- */

function clearText(field){
	
	field.style.borderColor = "";
    
	if (field.defaultValue == field.value || field.value == 'Write your problem here ...')  {
		field.value = '';
	}    
	else if (field.value == '') {
		field.value = field.defaultValue;    
	}
}

function numeroDomandeCategoriaSelezionata() {
	switch(categoriaSelezionata) {
		case "printers":
			numDomandeTotaliCategoria = domande.stampanti.elencoDomande.length;
			break;
		case "notebook":
			numDomandeTotaliCategoria = domande.notebook.elencoDomande.length;
			break;
		default:
			return;			
	}
}

function abilitaDisabilita() {
	if(ind == -1)
		document.getElementById("pulsanteIndietro").disabled = true;
	else
		document.getElementById("pulsanteIndietro").disabled = false;
	if(ind < numDomandeTotaliCategoria)
		document.getElementById("pulsanteAvanti").disabled = false;	
	else 
		document.getElementById("pulsanteAvanti").disabled = true;
}

function svuotaArray(array) {
	while(array.length > 0)
		array.pop();
}

function salvaPreferenza() {
	var selected = document.querySelectorAll('input[name=collega]:checked');

	if (selected.length >= 1){
				
		let risposte = new Array();
				
		selected.forEach(function(input, indice){
			risposte.push(input.getAttribute('value'));
		}); 
			
		preferenzeUtente[ind] = risposte;
			
	} else if(selected.length == 0 && preferenzeUtente[ind] != undefined) {
		/* se è stata precedentemente selezionata qualcosa e se 
		ho aggiornato le mie selezioni, non selezionandone alcuna
		riazzero in quell'indice l'array */
		preferenzeUtente[ind] = new Array();
	}
}

function cambiaCategoria() {
	var domanda = confirm("Do you really want to change category? You will lose all your answers");
	return domanda;
}

/* --- FINE FUNZIONI AUSILIARIE --- */

/* --- FOCUS RISPOSTE --- */

// al click su quella risposta coloro il bordo del div che la contiene
function focusRisposte() {

	var risposte = document.getElementsByName("collega");
	for(let j = 0; j < risposte.length; ++j) {
		if(risposte[j].checked == true) {
			let parentDiv = risposte[j].parentNode;
			parentDiv.style.border = "2px solid #0b3de1";
		} else {
			let parentDiv = risposte[j].parentNode;
			parentDiv.style.border = "";
		}
	}
}

/* coloro il bordo del div che contiene gli input che ho selezionato
 precedentemente per quella domadna */
function selezionaRisposteScelte() {
	
	var risposte = document.getElementsByName("collega");
	if(preferenzeUtente[ind] != undefined && preferenzeUtente[ind].length > 0) {
		for(let i = 0; i < preferenzeUtente[ind].length; ++i) {
			for(let j = 0; j < risposte.length; ++j) {
				if(risposte[j].getAttribute('value') == preferenzeUtente[ind][i]) {
					risposte[j].checked = true;
					
					/* Prende il nodo padre dell'elemento passato */
					let parentDiv = risposte[j].parentNode;
					parentDiv.style.border = "2px solid #0b3de1";
					break;
				}
			}
		}
	}
}

/* barra sopra */
function caricaFocusDomanda() {
	if(ind == -1)
		return;
	
	var elementi = document.getElementsByClassName("numDomande");
	for(let i = 0; i < elementi.length; ++i) {
		if(elementi[i].value == ind) {
			elementi[i].style.background = '#0b3de1';
			elementi[i].style.color = 'white';
		}
		else {
			elementi[i].style.background = 'white';
			elementi[i].style.color = '#0b3de1';	
		}
	}
}

/* --- FINE FOCUS RISPOSTE --- */