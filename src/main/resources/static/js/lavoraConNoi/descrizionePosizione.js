window.onload = function() {
	
}

/* VARIABILI */
ind = 0; /* a 0 corrisponde la lista delle posizioni aperte, 1 invece la descrizione della posizione aperta selezionata */


function compila() {
	barraNavigazione();
}

function barraNavigazione() {
	var row = document.getElementById("contenutoBarra");		
	row.innerHTML = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\" id = \"barra\">"
						+ "<ul class=\"navbar-nav\" id = \"navbar\">"
							+ "<li class=\"nav-item\">" 
								+ "<a class=\"nav-link\" href = \"/lavoraConNoi/presentazioneAzienda\" ><strong>Company Presentation</strong></a>"
							+ "</li>"
							+ "<li class=\"nav-item\">" 
								+ "<a class=\"nav-link\" href = \"javascript:vaiPosizioniAperte()\" ><strong>Open Positions</strong></a>"
							+ "</li>"
							+ "<li class=\"nav-item\">"
								+ "<a class=\"nav-link\" href=\"javascript:vaiPresentazioneTeam()\"><strong>Spontaneous Candidature</strong></a>"
							+ "</li>"
						+ "</ul>"
					+ "</nav>";
}