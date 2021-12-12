window.onload = function() {
	compila();
}

function compila() {
	if(ind == -1) {
		inserisciDomanda(categorie.domanda);
		inserisciRisposteCategoria(categorie.categoria);
		caricaDescrizione(categorie.descrizione);
	} else {
		inserisciDomanda(domande.stampanti.elencoDomande[ind].domanda);
		
		inserisciRisposte(domande.stampanti.elencoDomande[ind].risposte);
	}
}

function inserisciDomanda(stringa) {
	var row = document.getElementById("domande");	
	row.innerHTML = "<p class = \"domanda\">" + stringa + "</p>";
}

function inserisciRisposteCategoria(oggetto) {
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
		inserisciRisposta(oggetto[i], i, righe);
	}
}

function inserisciRisposte(oggetto) {
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
		alert("qui");
		inserisciRisposta(oggetto[i].risposta, i, righe);
	}
}

function inserisciRisposta(risposta, id, righe){

	var row = document.getElementById("risposte");
	
	let rigaInizio = "";
	let rigaFine = "";
	if(id % 3 == 0) {
		rigaInizio = "<div class = \"row\" id = " + righe + " >";	
		rigaFine = "</div>";
		righe++;
	} else {
		row = document.getElementById(righe);
	}
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta + "\" class= \"col-sm-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta + "\" type=\"radio\" name = \"collega\" />"
														+ "<img src=\"../immagini/" + risposta + ".png\"/>" 	
													+ risposta + "</div>"
											+ "</label>" 
								  + rigaFine;
}

function caricaDescrizione(stringa) {
	var row = document.getElementById("descrizione");
	let stringhe = stringa.split("%");
	row.innerHTML = "<div id = \"descrizioneJS\">" 
						+ "<img src=\"../immagini/" + stringhe[0] + ".png\" width = \"30%\"/>"
				 		+ "<p>" 
							+ "<strong>" + stringhe[0] + "</strong>" + "<br/>"
							+ stringhe[1] 
						+ "</p>"
					+ "</div>";
}