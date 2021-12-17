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
			inviaCandidaturaSpontanea("testo2", candidaturaSpontanea[ind - 1]);
			break;
		case 2:
			barraNavigazione(elementiNav[ind]);
			soloTesto("testo1", sezioniTesti[ind].titolo, sezioniTesti[ind].testo);
			inviaCandidaturaSpontanea("testo2", candidaturaSpontanea[ind - 1]);
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
	
	div.innerHTML = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">"
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
								+ "<img src = \"../immagini/lavoraConNoi/" + titolo.toLowerCase() + ".png\" class = \"img-fluid\"/>"
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
								+ "<img src = \"../immagini/lavoraConNoi/" + titolo.toLowerCase() + ".png\" class = \"img-fluid\"/>"
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
							  	+ "<tbody>"
							    	+ "<tr>"
							      		+ "<th scope=\"row\"><a href = \"#\">Store</a></th>"
							      		+ "<td>Human resources</td>"
							    	+ "</tr>"
									+ "<tr>"
							      		+ "<th scope=\"row\"><a href = \"#\">Store</a></th>"
							      		+ "<td>Human resources</td>"
							    	+ "</tr>"
									+ "<tr>"
							      		+ "<th scope=\"row\"><a href = \"#\">Store</a></th>"
							      		+ "<td>Human resources</td>"
							    	+ "</tr>"
								+ "</tbody>"
							+ "</table>"
						+ "</div>"
					+ "</div>";
}

function soloTesto(elemento, titolo, testo) {
	var div = document.getElementById(elemento);
	
	let frasi = testo.split("%");
	
	let s = "";
	for(let i = 0; i < frasi.length; ++i) {
		s += "<p>" + frasi[i] + "</p>";
	}
	
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-12\" id = \"testoSezione\">"
						    + "<br />"
							+ "<p id = \"titoloSezione\">" + titolo + "</p><br /><br />"
							+ s
						+ "</div>"
					+ "</div>";
}


function inviaCandidaturaSpontanea(elemento, stringa) {
	var div = document.getElementById(elemento);
	div.innerHTML = "<div class = \"row\" id = \"mancaLaTuaPosizione\">"
						+ "<div class = \"col-sm-12\">"
							+ "<p><i>" + stringa + "</i></p>"
							+ "<div>"
								+ "<button class = \"button\">Submit your CV</button>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
}
