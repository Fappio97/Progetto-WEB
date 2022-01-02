window.onload = function () {
	compila();
}

function compila() {

	switch(ind) {
		case 0:
			barraNavigazione(elementiNav[ind]);
			testoSXConFotoDX("testo1", sezioniTesti[ind][0].titolo, sezioniTesti[ind][0].testo);
			testoDXConFotoSX("testo2", sezioniTesti[ind][1].titolo, sezioniTesti[ind][1].testo)
			break;
		case 1:
			barraNavigazione(elementiNav[ind]);
			soloTabella("testo1");
			inviaCandidatura("testo2", candidatura[ind - 1]);
			listeAperte();
			break;
		case 2:
			barraNavigazione(elementiNav[ind]);
			soloTesto("testo1", posizioneApertaTitle, sezioniTesti[ind].testo);
			inviaCandidatura("testo2", candidatura[ind - 1]);
			break;
		default:
			break;
	}
}


function barraNavigazione(voceNav) {
	var div = document.getElementById("barra");
	
	let s = "";
	for(let i = 0; i < voceNav.length; ++i) {
		s += "<li class=\"nav-item\">" 
				+ "<a class=\"nav-link\" href = \"" + voceNav[i].funzione + "\" ><strong>" + voceNav[i].testo + "</strong></a>"
			+ "</li>";
	}
	
	div.innerHTML = "<nav class=\"navbar navbar-expand-sm navbar-light\">"
						+ "<ul class=\"navbar-nav\" id = \"navbar\">"
							+ s
						+ "</ul>"
					+ "</nav>";
}

function testoSXConFotoDX(elemento, titolo, testo) {
	var div = document.getElementById(elemento);
	
	let frasi = testo.split("%");
	
	let s = "";
	for(let i = 0; i < frasi.length; ++i) {
		s += "<p>" + frasi[i] + "</p>";
	}
	
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-6\" id = \"testoSezione\">"
						    + "<br />"
							+ "<p id = \"titoloSezione\">" + titolo + "</p><br /><br />"
							+ s
						+ "</div>"
						+ "<div class = \"col-sm-6\" id = \"immagineSezione\">"
							+ "<figure>"
								+ "<img src = \"../images/lavoraConNoi/" + titolo.toLowerCase() + ".png\" class = \"img-fluid\"/>"
							+ "</figure>"
						+ "</div>"
					+ "</div>";
}

function testoDXConFotoSX(elemento, titolo, testo) {
	var div = document.getElementById(elemento);
	
	let frasi = testo.split("%");
	
	let s = "";
	for(let i = 0; i < frasi.length; ++i) {
		s += "<p>" + frasi[i] + "</p>";
	}
	
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-6\" id = \"immagineSezione\">"
							+ "<figure>"
								+ "<img src = \"../images/lavoraConNoi/" + titolo.toLowerCase() + ".png\" class = \"img-fluid\"/>"
							+ "</figure>"
						+ "</div>"
						+ "<div class = \"col-sm-6\" id = \"testoSezione\">"
						    + "<br />"
							+ "<p id = \"titoloSezione\">" + titolo + "</p><br /><br />"
							+ s
						+ "</div>"
					+ "</div>";
}

function soloTabella(elemento) {
	var div = document.getElementById(elemento);
	
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-12\" id = \"listaPosizioniAperte\">"
							+ "<table class=\"table\">"
							  	+ "<thead class=\"thead-dark\">"
							    	+ "<tr>"
							      		+ "<th scope=\"col\">Title</th>"
							      		+ "<th scope=\"col\">Business Unit</th>"
							    	+ "</tr>"
							  	+ "</thead>"
							  	+ "<tbody id = \"listaPosizioniAperta\">"
								+ "</tbody>"
							+ "</table>"
						+ "</div>"
					+ "</div>";
}

function soloTesto(elemento, titolo, testo) {
	var div = document.getElementById(elemento);
	
	// aggiustamento del testo di sezioniTesti
	let t = testo.split("#");
	
	let frasi = new Array();
	for(let i = 0; i < t.length; ++i) 
		frasi[i] = t[i].split("%");
		
	let s = new Array();
	for(let i = 0; i < 2; ++i) {
		s[i] = "";
		for(let j = 0; j < frasi[i].length; ++j)
			s[i] += "<p>" + frasi[i][j] + "</p>";
	}
//	console.log(titolo);

	// trovo l'indice del lavoro in base al titolo che ho cliccato,
	// che mi passo nel javascript
	let indice = -1;
	for(let i = 0; i < posLavoro.length; ++i) {
//		console.log(posLavoro[i]);
		if(posLavoro[i].title == titolo) {
			indice = i;
			break;
		}
	}
	
	// prendo i requisiti obbligatori
	let requisitiObbligatori = "";
	for(let i = 0; i < posLavoro[indice].obligatory.length; ++i) {
		requisitiObbligatori += posLavoro[indice].obligatory[i].name + ": "
						+ posLavoro[indice].obligatory[i].value1 + " - " 
						+ posLavoro[indice].obligatory[i].value2;
						
		// se il successivo requisito obbligatorio ha lo stesso nome 
		// (ovvero se sono del titolo di studio, rispetto all'eta')
		// li scrivo sulla stessa riga
		// poiché almeno uno dei due deve esseresoddisfatto e non entrambi
		if(i + 1 < posLavoro[indice].obligatory.length 
		&& posLavoro[indice].obligatory[i].name == posLavoro[indice].obligatory[i + 1].name)
			requisitiObbligatori += " or ";
		else
			requisitiObbligatori += "<br />";
	}
		
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-12\" id = \"testoSezione\">"
						    + "<br />"
							+ "<p id = \"titoloSezione\">" + titolo + "</p><br /><br />"
							+ s[0]
							+ "<br />"
							+ posLavoro[indice].description
							+ "<br /><br /><br />"
							+ "<p><strong>Requirements</strong></p>"
							+ posLavoro[indice].requirements
							+ "<br /><br /><br />"
							+ "<p><strong>Requirements obligatory</strong></p>"
							+ requisitiObbligatori
							+ "<br /><br /><br />"
							+ s[1]
							+ "<br /><br /><br />"
							+ "<div>"
								+ "Introduce yourself<br />"
									+ "<button class = \"button\" onclick = \"javascript:salvaPosizioneLavoro('" + indice + "')\">Send your CV</button>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
}

function inviaCandidatura(elemento, candidatura) {
	
	var div = document.getElementById(elemento);
	div.innerHTML = "<div class = \"row\" id = \"mancaLaTuaPosizione\">"
						+ "<div class = \"col-sm-12\">"
							+ "<p><i>" + candidatura + "</i></p>"
							+ "<div>"
								+ "<a href = \"/lavoraConNoi/curriculumSpontaneo\">"
									+ "<button class = \"button\">Submit your CV</button>"
								+ "</a>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
}
