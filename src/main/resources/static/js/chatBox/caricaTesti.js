window.onload = function() {
	mostraChatBox();
	caricaTesto();
}

function caricaTesto() {
	
	if(indice == undefined)
		return;
	
	var div = document.querySelector("#chatBox");
	
	// eliminare i precedenti div delle scelte possibili e trasformarli, in base alla scelta presa in div
	
	bot = "<div class = \"messaggioBot\">"
				+ "<p>" + indice.testo.domanda + "</p>"
			+ "</div>";
		
	sceltePossibili = "";
	if(indice.testo.risposte[0] != "") {
		sceltePossibili = "<div id = \"sceltePossibili\" class = \"row\">";
		
		sizeColonne = 10 / indice.testo.risposte.length;
//		console.log(10 / indice.testo.risposte.length);
		testoColonne = "col-" + sizeColonne;
		for(let i = 0; i < indice.testo.risposte.length; ++i) {
			sceltePossibili += "<div class = \"col-" + sizeColonne +"\" id = \"scelta\">"
								+ "<button onclick = \"javascript:scelta(" + i + ")\">"
									+ "<p>" + indice.testo.risposte[i] + "</p>"
								+ "</button>"
							+ "</div>";
		}
		
		sceltePossibili += "</div>";
	}
	
	// occorre salvarsi quello che c'era scritto?
	
	div.innerHTML = sceltePossibili + bot + div.innerHTML;
	
	// controlla se il nodo è senza opzioni, perhé se è senza opzioni va mostrato subito il successivo
//	console.log(sceltePossibili);
	if(sceltePossibili == "") {
//		console.log("sceltePossibili  vuoto")
		indice = indice.discendenti[LEFT];
		caricaTesto();
	}
}

function inserisciRispostaUtenteSelezionata(i) {
	
	var div = document.querySelector("#chatBox");
	
	utente = "<div class = \"messaggioUtente\">"
				+ "<p>" + indice.testo.risposte[i] + "</p>"
			+ "</div>";
			
	div.innerHTML = utente + div.innerHTML;
}

function svuotaTuttaChatBox() {
	
	document.querySelector("#chatBox").innerHTML = "";
	
}

