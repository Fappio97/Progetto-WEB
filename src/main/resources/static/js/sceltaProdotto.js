window.addEventListener("load", function(){
	aggiungiEventi();
});

/* --- Variabili --- */ 

var categoriaSelezionata;
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

/* -- FUNZIONI CHE INVOCO DAI OBTTONI CREATI DA JS --- */
function rinizia() {
	if(ind == 0 && preferenzeUtente.length == 0)
		return;
		
	var domanda = confirm("Are you sure you want to start over?");
	
  	if (domanda === true) {
    	ind = 0;
		compila();
		svuotaArray(preferenzeUtente);
  	} 

}

function risultati() {
	ind = numDomandeTotaliCategoria;
	compila();
	/* MOSTRARE RISULTATI PREFERENZE ----------------------------------------------------------*/
}

function vaiAllaDomanda(i) {
	ind = i;
	compila();
	abilitaDisabilita();
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
	if(segnalazione == 'Enter your problem ...' || segnalazione == '')
		row.innerHTML = "Blank report!";
	else {
		row.innerHTML = "Report sent";
		//funzione per inviare la segnalazione con ajax
		
		let origineProblema = "Problem origin: ";
		if(ind != -1) {
			origineProblema += categoriaSelezionata + "\n";
			origineProblema += "Question n° " + ind + "\n";
		} else
			origineProblema += "choice of categories\n";
			
		console.log(origineProblema + "Problem: " + segnalazione);
		
	}
	document.getElementById("pulsanteProblema").style.display = 'inline';
	document.getElementById("pulsanteInvia").style.display = 'none';
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
		if(ind < numDomandeTotaliCategoria) {
			var selected = document.querySelectorAll('input[name=collega]:checked');
				
			if (selected.length >= 1){
				
				let risposte = new Array();
				
				selected.forEach(function(input, indice){
					risposte.push(input.getAttribute('value'));
				}); 
				
			preferenzeUtente[ind] = risposte;
			
			}
			
			ind++;
		}else {
			/* --- STAMPA ALLA FINE MA POI CON L'AJAX INVOCO IL DB E SCELGO QUELLO GIUSTO --- */
			let tag = new Array();
			for(let i = 0; i < preferenzeUtente.length; ++i)
				if(preferenzeUtente[i] != undefined) {
					console.log(preferenzeUtente[i] + " " + i + "\n");
					tag.push(preferenzeUtente[i]);
				}
					
			console.log(preferenzeUtente);
			
			console.log(tag);
			
			/*			
			let categoria;
			selectedRadio.forEach(function(radio, indice){
				categoria = radio.getAttribute('id');
			}); 
			console.log(categoria);
			
			$.ajax({
				type: "POST",
				url: "/categoriaScelta",
				contentType: "application/json",
				data: JSON.stringify(categoria),
				success: function(){
					alert("tutto ok");
					abilitaDisabilita();
					compila();
				},
				error: function(xhr){
					alert("tutto male");
				}
			});
			*/
		}
	}
	abilitaDisabilita();
	compila();
}

function paginaIndietro() {
	
	if(ind > -1) {
		ind--;
		compila();
	} 
	if(ind == -1) {
		svuotaArray(preferenzeUtente);
	}
	
	abilitaDisabilita();
}

/*--- mi serve per le future risposte
btnCancella.addEventListener("click", function(){
		var selectedCheckBoxes = document.querySelectorAll("input:checked");
		
		if (selectedCheckBoxes.length > 0){
			selectedCheckBoxes.forEach(function(checkBox, indice){
				console.log(checkBox);
				console.log(checkBox.getAttribute("id"));
				
				var matricola = checkBox.getAttribute("id");
				var studente = studentiConId[matricola];
				console.log(studente.nome);
				
				delete studentiConId[matricola];
				
				cancellaStudenteDaTabella(studente);
				
			});
		}else{
			alert("Si prega di selezionare almeno un elemento");
		}
});
*/

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

/* --- FUNZIONI AUSILIARIE --- */

function clearText(field){
    
	if (field.defaultValue == field.value)  {
		field.value = '';
	}    
	else if (field.value == '') {
		field.value = field.defaultValue;    
	}
}

function svuotaArray(array) {
	while(array.length > 0) 
		array.pop();
}

