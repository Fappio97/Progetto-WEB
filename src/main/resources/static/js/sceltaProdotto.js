window.addEventListener("load", function(){
	aggiungiEventi();
});

/* --- Variabili --- */ 

var categoriaSelezionata;
var numDomandeTotaliCategoria;

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
	ind = 0;
	compila();
}

function risultati() {
	ind = numDomandeTotaliCategoria;
	compila();
}

function vaiAllaDomanda(i) {
	ind = i;
	compila();
}

/* -- FUNZIONI --- */

function segnalazione(){
	var row = document.getElementById("segnalazione2");	
	row.innerHTML = "<textarea cols=\"32\" rows=\"6\" onfocus=\"clearText(this)\" onblur=\"clearText(this)\" id = \"testoSegnalazione\">Inserisci il tuo problema ...</textarea>"
	document.getElementById("pulsanteInvia").style.display = 'inline';
	document.getElementById("pulsanteProblema").style.display = 'none';
}

function inviaSegnalazione(){
	var testo = document.getElementById("testoSegnalazione");
	var row = document.getElementById("segnalazione2");
	
	let s = testo.value;
	if(s == 'Inserisci il tuo problema ...' || s == '')
		row.innerHTML = "Segnalazione vuota!";
	else {
		row.innerHTML = "Segnalazione inviata";
		//funzione per inviare la segnalazione con ajax
	}
	document.getElementById("pulsanteProblema").style.display = 'inline';
	document.getElementById("pulsanteInvia").style.display = 'none';
}


function paginaAvanti() {
	
	if(ind == -1) {
		var selectedRadio = document.querySelectorAll('input[name=collega]:checked');
				
		if (selectedRadio.length == 1){
			ind++;
			console.log(ind);
			
			selectedRadio.forEach(function(radio, indice){
				categoriaSelezionata = radio.getAttribute('id');
			}); 

			numeroDomandeCategoriaSelezionata();
			caricaBarraNavigazione();
			abilitaDisabilita();
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
		} else {
			alert("Seleziona una categoria di prodotti per proseguire!");
			return;
		}
	} else {
		if(ind < numDomandeTotaliCategoria) {
			ind++;
		}
		else {
			document.getElementById("pulsanteAvanti").disabled = true;	
			/* stamapare lista prodotti finale */
		}
	}
	compila();
}

function paginaIndietro() {
	if(ind == 0) {
		abilitaDisabilita();
	}
	if(ind > -1) {
		ind--;
		compila();
		document.getElementById("pulsanteAvanti").disabled = false;	
	} else {
		/* nascondere il pannello sopra di visualizzazione */
	}
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
}

function clearText(field){
    
	if (field.defaultValue == field.value)  {
		field.value = '';
	}    
	else if (field.value == '') {
		field.value = field.defaultValue;    
	}
}

