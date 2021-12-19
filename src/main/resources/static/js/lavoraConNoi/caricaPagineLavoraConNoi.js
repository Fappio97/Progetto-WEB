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
			break;
		case 2:
			barraNavigazione(elementiNav[ind]);
			soloTesto("testo1", posizioneAperta, sezioniTesti[ind].testo, "descrizione dal DB");
			inviaCandidatura("testo2", candidatura[ind - 1]);
			break;
/*		case 3:
			barraNavigazione(elementiNav[ind]);
			form("testo1", posizioneAperta);
			inviaCandidatura("testo2", candidatura[ind - 1]);
			popolaComboBox();
			campiForm();
			break;*/
		default:
			break;
	}
	mostraNascondiLogin();
}
/*
function mostraNascondiLogin() {
	if(ind == 3) 
		document.getElementById("login").style.display = "inline";
	else
		document.getElementById("login").style.display = "none";
}
*/
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
							      		+ "<th scope=\"row\"><a href = \"javascript:posizione('Store')\">Store</a></th>"
							      		+ "<td>Human resources</td>"
							    	+ "</tr>"
									+ "<tr>"
							      		+ "<th scope=\"row\"><a href = \"javascript:posizione('Seller')\">Seller</a></th>"
							      		+ "<td>Buyer</td>"
							    	+ "</tr>"
								+ "</tbody>"
							+ "</table>"
						+ "</div>"
					+ "</div>";
}

function soloTesto(elemento, titolo, testo, descrizione) {
	var div = document.getElementById(elemento);
	
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
	
	div.innerHTML = "<div class = \"row\">"
						+ "<div class = \"col-sm-12\" id = \"testoSezione\">"
						    + "<br />"
							+ "<p id = \"titoloSezione\">" + titolo + "</p><br /><br />"
							+ s[0]
							+ "<br />"
							+ descrizione
							+ "<br /><br /><br />"
							+ s[1]
							+ "<br /><br /><br />"
							+ "<div>"
								+ "Introduce yourself<br />"
								+ "<button class = \"button\" onclick = \"avanti()\">Send your CV</button>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
}
/*
function form(elemento, titolo) {
	var div = document.getElementById(elemento);
	
	if(titolo == "")
		titolo = "Spontaneous candidature";
	
	div.innerHTML = "<div class = \"row\">"
							+ "<div class = \"col-sm-12\" id = \"formCentrale\">"
								+ "<strong>" 
									+ titolo
								+ "</strong>"
							+ "</div>"
							+ "<div class = \"col-md-6\" id = \"formSX\">"
								+ "<table class=\"table table-borderless\">"
									+ "<div id = \"datiPersonali\">"
										+ "<p><strong>Personal data</strong></p>"
									+ "</div>"
									+ "<thead>"
	      								+ "<tr>"
									       + "<th></th>"
	      								+ "</tr>"
									+ "</thead>"
									+ "<tbody>"
										+ "<form class = \"presentazione\" action = \"salvaPresentazione\">"
											+ "<tr>"
												+ "<td>"
													+ "<label for=\"nome\">"
														+ "First name" 
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
												+ "<td>"
													+ "<input type=\"text\" name = \"nome\" id=\"nome\" placeholder=\"Your first name ...\">"
												+ "</td>"
										    + "</tr>"
										    + "<tr>"
											    + "<td>"
													+ "<label for=\"cognome\">"
														+ "Last name "
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
											    + "<td>"
													+ "<input type=\"text\" name = \"cognome\" id=\"cognome\" placeholder=\"Your last name ...\">"
												+ "</td>"
										    + "</tr>"
											+ "<tr>"
											    + "<td>" 
													+ "<label for=\"dataNascita\">" 
														+ "Date of birth "
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
											    + "<td>"
													+ "<input type=\"date\" name = \"dataNascita\" id=\"dataNascita\">"
												+ "</td>"
										    + "</tr>"
											+ "<tr>"
											    + "<td>"
													+ "<label for=\"email\">"
														+ "E-Mail "
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
											    + "<td>"
													+ "<input type=\"email\" name = \"email\" id=\"mail\" placeholder=\"Your e-mail ...\" pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/\" required>"
												+ "</td>"
											+ "</tr>"
										+ "</form>"	
									+ "</tbody>"
								+ "</table>"		
							+ "</div>"
							+ "<div class = \"col-md-6\" id = \"formDX\">"
							    + "<table class=\"table table-borderless\">"
									+ "<thead>"
	      								+ "<tr>"
									       + "<th>Education</th>"
	      								+ "</tr>"
									+ "</thead>"
									+ "<tbody>"
										+ "<form class = \"presentazione\" action = \"salvaPresentazione\">"
											+ "<tr>"
												+ "<td>"
													+ "<select class = \"studio\" name=\"titoloStudio\" onclick = \"caricaOpzioni('titoloStudio', 'materiaStudio')\" id = \"titoloStudio\">"
												+ "</td>"
										    	+ "<td>"
													+ "<label for=\"titoloStudio\">"
														+ "<nobr class = \"asterisco\">*</nobr>"
														+ " Educational qualification"
													+ "</label>"
												+ "</td>"
											+ "</tr>"
										    + "<tr>"
												+ "<td>"
													+ "<select class = \"studio\" name=\"materiaStudio\" id = \"materiaStudio\">"
												+ "</td>"
										    	+ "<td>"
													+ "<label for=\"materiaStudio\">"
														+ "<nobr class = \"asterisco\">*</nobr>"
														+ "Study subject"
													+ "</label>"
												+ "</td>"
											+ "</tr>"
										+ "</form>"
									+ "</tbody>"
								+ "</table>"
								+ "<table class=\"table table-borderless\">"
									+ "<thead>"
	      								+ "<tr>"
									       + "<th>Last Job Position</th>"
	      								+ "</tr>"
									+ "</thead>"
									+ "<tbody>"
										+ "<form class = \"presentazione\" action = \"salvaPresentazione\">"
											+ "<tr>"
												+ "<td>"
													+ "<select name=\"funzioneLavoro\" onclick = \"caricaOpzioni('funzioneLavoro', 'classificazioneLavoro')\" id = \"funzioneLavoro\">"
												+ "</td>"
												+ "<td>"
													+ "<label for=\"funzioneLavoro\">"
														+ "Function"
													+ "</label>"
												+ "</td>"
											+ "</tr>"
										    + "<tr>"
												+ "<td>"
													+ "<select name=\"classificazioneLavoro\" id = \"classificazioneLavoro\">"
												+ "</td>"
												+ "<td>"
													+ "<label for=\"classificazioneLavoro\">"
														+ "Classification"
													+ "</label>"
												+ "</td>"
											+ "</tr>"	
										+ "</form>"
									+ "</tbody>"
								+ "</table>"
							+ "</div>"
							+ "<div class = \"col-sm-12\" id = \"formCentrale\">"
								+ "<div id = \"centro\">"
									+ "<strong>Curriculum"
								+ "</div>"
								+ "<table class=\"table table-borderless\">"
									+ "<thead>"
	      								+ "<tr>"
									       + "<th></th>"
	      								+ "</tr>"
									+ "</thead>"
									+ "<tbody>"
										+ "<form class = \"presentazione\" action = \"salvaPresentazione\">"
											+ "<tr>"
												+ "<td class = \"dx\">"
													+ "<label for=\"foto\">"
														+ "Photo "
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
												+ "<td>"
													+ "<input type=\"file\" name=\"foto\" id = \"foto\" accept=\"image/png, image/jpeg, image/jpg\">"
												+ "</td>"
										    + "</tr>"
										    + "<tr>"
											    + "<td class = \"dx\">"
													+ "<label for=\"cv\">"
														+ "CV Attachment "
														+ "<nobr class = \"asterisco\">*</nobr>"
													+ "</label>"
												+ "</td>"
											    + "<td>"
													+ "<input type=\"file\" name=\"cv\" id = \"cv\" accept=\"application/pdf\">"
												+ "</td>"
										    + "</tr>"
											+ "<tr>"
											    + "<td class = \"dx\">"
													+ "<label for=\"letteraPresentazione\">"
														+ "Cover letter"
													+ "</label>"
												+ "</td>"
											    + "<td>"
													+ "<textarea name=\"letteraPresentazione\" rows=\"4\" cols=\"20\"></textarea>"
												+ "</td>"
										    + "</tr>"
										+ "</form>"
									+ "</tbody>"
								+ "</table>"
							+ "</div>"
					+ "</div>";
					
}
*/

function inviaCandidatura(elemento, candidatura) {
	var div = document.getElementById(elemento);
	div.innerHTML = "<div class = \"row\" id = \"mancaLaTuaPosizione\">"
						+ "<div class = \"col-sm-12\">"
							+ "<p><i>" + candidatura.testo + "</i></p>"
							+ "<div>"
								+ "<button class = \"button\" onclick = \" " + candidatura.funzione + "\">Submit your CV</button>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
}
