window.onload = function() {
	compila();
}

function compila() {
	if(ind == -1) {
		/* prima pagina */
		pannelloSuperiore("guidaSceltaProdotto");
		inserisciDomanda(categorie.domanda);
		inserisciRisposteCategoria(categorie.categoria);
		caricaDescrizione(categorie.descrizione);
		document.getElementById("rigaIndiceDomande").style.display = "none"; 
	} else if(ind == numDomandeTotaliCategoria) {
		/*Pagina risultati */
		inserisciDomanda("Prodotti consigliati");
		inserisciRisposteRadio("");
		caricaDescrizione("Hai finito!%Ecco la nostra lista di " + categoriaSelezionata + " ideali in base alle tue esigenze!");
		document.getElementById("rigaIndiceDomande").style.display = ""; 
	} else {
		document.getElementById("rigaIndiceDomande").style.display = ""; 
		pannelloSuperiore(categoriaSelezionata.toLowerCase());
		switch(categoriaSelezionata) {
			case "stampanti":
				inserisciDomanda(domande.stampanti.elencoDomande[ind].domanda);
				if(domande.stampanti.elencoDomande[ind].unaOpzione)
					inserisciRisposteRadio(domande.stampanti.elencoDomande[ind].risposte);
				else
					inserisciRisposteCheck(domande.stampanti.elencoDomande[ind].risposte);
				caricaDescrizione(domande.stampanti.elencoDomande[ind].descrizione);
				break;
			case "notebook":
				inserisciDomanda(domande.notebook.elencoDomande[ind].domanda);
				if(domande.notebook.elencoDomande[ind].unaOpzione)
					inserisciRisposteRadio(domande.notebook.elencoDomande[ind].risposte);
				else
					inserisciRisposteCheck(domande.notebook.elencoDomande[ind].risposte);
				caricaDescrizione(domande.notebook.elencoDomande[ind].descrizione);
				break;
			default:
				return;		
		}
	}
}

function pannelloSuperiore(stringa) {
	
	let prodotto;
	
	console.log(stringa);
	
	switch(stringa) {
		case("notebook"):
			prodotto = "il notebook";
			break;
		case("stampanti"):
			prodotto = "la stampante";
			break;
		default:
			prodotto = "il prodotto";
			break;
	}
	
	var row = document.getElementById("imageDescription");		
	row.innerHTML = "<img src= \"../immagini/guidaSceltaProdotto/pannelloSopra/" + stringa + ".png\" width = 100% height = 40%/>"
						+ "<div id = \"description\" >"
							+ "<h1>Trova " + prodotto + "</h1>"
							+ "<p>Scopri il dispositivo per le tue esigenze. Il nostro sistema ti consiglia " + prodotto + " migliore.</p>"
						+"</div>";
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
		inserisciRispostaRadio(oggetto[i], i, righe);
	}
}

/* Risposta radio button */

function inserisciRisposteRadio(oggetto) {
	/* svuoto il div contenente le risposte */
	var row = document.getElementById("risposte");
	row.innerHTML = "";
	
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
		if(oggetto[i].descrizione != "")
			inserisciRispostaRadioConInfo(oggetto[i].risposta, i, righe);
		else
			inserisciRispostaRadio(oggetto[i].risposta, i, righe);
	}
}

function inserisciRispostaRadioConInfo(risposta, id, righe){

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
	
	let resourceImg = "../immagini/guidaSceltaProdotto/risposte/";
	if(categoriaSelezionata != undefined)
		resourceImg = "../immagini/guidaSceltaProdotto/" + categoriaSelezionata + "/risposte/";
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta.toLowerCase() + "\" class= \"col-sm-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta.toLowerCase() + "\" type=\"radio\" name = \"collega\" />"
														+ "<img src=\"" + resourceImg + risposta.toLowerCase() + ".png\" class=\"img-fluid\"/>" 	
														+ risposta 
														+ "<button type=\"button\" class = \"informazione\" id = " + risposta + " onclick = caricaInfo(" + id + ")>"
															+"<img src = ../immagini/guidaSceltaProdotto/icone/info.png  class=\"img-fluid\"/>"
														+ "</button>"
													+ "</div>"
											+ "</label>" 
								  + rigaFine;
}

function inserisciRispostaRadio(risposta, id, righe){

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
	
	let resourceImg = "../immagini/guidaSceltaProdotto/risposte/";
	if(categoriaSelezionata != undefined && ind != -1)
		resourceImg = "../immagini/guidaSceltaProdotto/" + categoriaSelezionata + "/risposte/";
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta.toLowerCase() + "\" class= \"col-sm-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta.toLowerCase() + "\" type=\"radio\" name = \"collega\" />"
														+ "<img src=\"" + resourceImg + risposta.toLowerCase() + ".png\" class=\"img-fluid\" />" 	
														+ risposta 
													+ "</div>"
											+ "</label>" 
								  + rigaFine;
}

/* Risposta check box */

function inserisciRisposteCheck(oggetto) {
	/* svuoto il div contenente le risposte */
	var row = document.getElementById("risposte");
	row.innerHTML = "";
	
	var righe = 0;
	for (let i = 0; i < oggetto.length; ++i){
		if(oggetto[i].descrizione != "")
			inserisciRispostaCheckConInfo(oggetto[i].risposta, i, righe);
		else
			inserisciRispostaCheck(oggetto[i].risposta, i, righe);
	}
}

function inserisciRispostaCheckConInfo(risposta, id, righe){

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
	
	let resourceImg = "../immagini/guidaSceltaProdotto/risposte/";
	if(categoriaSelezionata != undefined)
		resourceImg = "../immagini/guidaSceltaProdotto/" + categoriaSelezionata + "/risposte/";
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta.toLowerCase() + "\" class= \"col-sm-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta.toLowerCase() + "\" type=\"checkbox\" name = \"collega\" />"
														+ "<img src=\"" + resourceImg + risposta.toLowerCase() + ".png\" class=\"img-fluid\" />" 	
														+ risposta
														+ "<button type=\"button\" class = \"informazione\" id = " + risposta + " onclick = caricaInfo(" + id + ")>"
															+"<img src = ../immagini/guidaSceltaProdotto/icone/info.png class=\"img-fluid\" />"
														+ "</button>"
													+ "</div>"
												+ "</label>"
								 		 + rigaFine;
}

function inserisciRispostaCheck(risposta, id, righe){

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
	
	let resourceImg = "../immagini/guidaSceltaProdotto/risposte/";
	if(categoriaSelezionata != undefined && ind != -1)
		resourceImg = "../immagini/guidaSceltaProdotto/" + categoriaSelezionata + "/risposte/";
		
	row.innerHTML = row.innerHTML + rigaInizio + "<label for = \""+ risposta.toLowerCase() + "\" class= \"col-xs-4 \">"
													+ "<div id = \"rispostaJS\" >" 
														+ "<input id=\"" + risposta.toLowerCase() + "\" type=\"checkbox\" name = \"collega\" />"
														+ "<img src=\"" + resourceImg + risposta.toLowerCase() + ".png\" class=\"img-fluid\"/>" 	
														+ risposta
													+ "</div>"
											   + "</label>" 
									 + rigaFine;
}

function caricaDescrizione(stringa) {
	var row = document.getElementById("descrizione");
	let stringhe = stringa.split("%");
	
	let s = "";
	for(let i = 0; i < stringhe.length; ++i) {
		if(i == 0) 
			s += "<strong>" + stringhe[i] + "</strong>" + "<br/>";
		else
			s += stringhe[i] 
	}
	
	let resourceImg = "../immagini/guidaSceltaProdotto/descrizione/";
	if(categoriaSelezionata != undefined && ind != numDomandeTotaliCategoria && ind != -1)
		resourceImg = "../immagini/guidaSceltaProdotto/" + categoriaSelezionata + "/descrizione/";
	
	row.innerHTML = "<div id = \"descrizioneJS\" >" 
						+ "<img src=\"" + resourceImg + stringhe[0].toLowerCase() + ".png\" class=\"img-fluid\" />"
				 		+ "<p>" 
							+ s
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
							+ "<img src=\"../immagini/guidaSceltaProdotto/icone/rinizia.png\" width = 30%/><br />"
								+ "Rinizia"
						+ "</button>"
					+ "</div>"
					+ "<div class=\"col-6\" id = \"indiceDomandeCenter\">"
						+ "Ambito di utilizzo" + "<br />"
						+ s
					+ "</div>"
					+ "<div class=\"col-3\" id = \"indiceDomandeDX\">"
						+ "<button class =\"button\" id = \"pulsanteResult\" onclick=\"risultati()\">"
							+ "<img src=\"../immagini/guidaSceltaProdotto/icone/risultati.png\" width = 30%/><br />"
								+ "Risultati"
						+ "</button> "
					+ "</div>";
}