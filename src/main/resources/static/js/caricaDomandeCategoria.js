window.onload = function() {
	compila();
}

function compila() {
	if(ind == -1) {
		inserisciDomanda(categorie.domanda);
		inserisciRisposteCategoria(categorie.categoria);
		caricaDescrizione(categorie.descrizione);
		document.getElementById("rigaIndiceDomande").style.display = "none"; 
	} else if(ind == numDomandeTotaliCategoria) {
		inserisciDomanda("Prodotti consigliati");
		inserisciRisposte("");
		caricaDescrizione("Hai finito!%Ecco la nostra lista di " + categoriaSelezionata + " ideali in base alle tue esigenze!");
		document.getElementById("rigaIndiceDomande").style.display = ""; 
	} else {
		document.getElementById("rigaIndiceDomande").style.display = ""; 
		switch(categoriaSelezionata) {
			case "stampanti":
				inserisciDomanda(domande.stampanti.elencoDomande[ind].domanda);
				inserisciRisposte(domande.stampanti.elencoDomande[ind].risposte);
				caricaDescrizione(categorie.descrizione);
				break;
			case "notebook":
				inserisciDomanda(domande.notebook.elencoDomande[ind].domanda);
				inserisciRisposte(domande.notebook.elencoDomande[ind].risposte);
				caricaDescrizione(categorie.descrizione);
				break;
			default:
				return;
				
		}
	}
}

function inserisciDomanda(stringa) {
	let stringhe = stringa.split("%");
	var row = document.getElementById("domande");
	
	let testo = "";
	for(let i = 0; i < stringhe.length; ++i) {
		if(i != 0) 
			testo += "<small>" + stringhe[i] + "</small>";
		else	
			testo += stringhe[i];
		if(i + 1 < stringhe.length)
			testo += "<br />";
	}
		
	row.innerHTML = "<p class = \"domanda\">" + testo + "</p>";
}

function inserisciRisposteCategoria(oggetto) {
	var row = document.getElementById("risposte");
	row.innerHTML = "";
	
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
		inserisciRisposta(oggetto[i], i, righe);
	}
}

function inserisciRisposte(oggetto) {
	/* svuoto il div contenente le risposte */
	var row = document.getElementById("risposte");
	row.innerHTML = "";
	
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
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
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta.toLowerCase() + "\" class= \"col-sm-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta.toLowerCase() + "\" type=\"radio\" name = \"collega\" />"
														+ "<img src=\"../immagini/guidaSceltaProdotto/" + risposta.toLowerCase() + ".png\"/>" 	
													+ risposta + "</div>"
											+ "</label>" 
								  + rigaFine;
}

function caricaDescrizione(stringa) {
	var row = document.getElementById("descrizione");
	let stringhe = stringa.split("%");
	row.innerHTML = "<div id = \"descrizioneJS\">" 
						+ "<img src=\"../immagini/guidaSceltaProdotto/" + stringhe[0].toLowerCase() + ".png\" width = \"30%\"/>"
				 		+ "<p>" 
							+ "<strong>" + stringhe[0] + "</strong>" + "<br/>"
							+ stringhe[1] 
						+ "</p>"
					+ "</div>";
}

function numeroDomandeCategoriaSelezionata() {
	switch(categoriaSelezionata) {
		case "stampanti":
			numDomandeTotaliCategoria = domande.stampanti.elencoDomande.length;
			break;
		case "notebook":
			numDomandeTotaliCategoria = domande.notebook.elencoDomande.length;
			break;
		default:
			return;			
	}
}

function caricaBarraNavigazione() {	
	let s = "";
	
	for(let i = 0; i < numDomandeTotaliCategoria; ++i) {
		s += "<button type =\"button\" class = \"numDomande\" id = dom value =" + i + " onclick = \"vaiAllaDomanda(" + i + ")\" >"
								+ (i + 1) 
						+ "</button>";
	}
		
	var row1 = document.getElementById("rigaIndiceDomande");
	row1.innerHTML = "<div class= \"col-3\" id = \"indiceDomandeSX\">"
						+ "<button class = \"button\" id = \"pulsanteReset\" onclick=\"rinizia()\">"
							+ "<img src=\"../immagini/guidaSceltaProdotto/reset.png\" width = 30%/><br />"
								+ "Rinizia"
						+ "</button>"
					+ "</div>"
					+ "<div class=\"col-6\" id = \"indiceDomandeCenter\">"
						+ "Ambito di utilizzo" + "<br />"
						+ s
					+ "</div>"
					+ "<div class=\"col-3\" id = \"indiceDomandeDX\">"
						+ "<button class =\"button\" id = \"pulsanteResult\" onclick=\"risultati()\">"
							+ "<img src=\"../immagini/guidaSceltaProdotto/result.png\" width = 30%/><br />"
								+ "Risultati"
						+ "</button> "
					+ "</div>";
}