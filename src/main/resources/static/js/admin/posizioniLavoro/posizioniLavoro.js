window.onload = function() {
	pulsanteCancella();
	popolaMinAge();
}

/* VARIABILI */
var aggiungi = false;

/* -- CAMPI FORM PER GESTIRE LAVORI --- */
function pulsanteAggiungi() {

	var divForm = document.getElementById("divForm");
	
	/* svuoto il contenuto perché potrei prima aver lasciato scritte oppure dal tasto edit
	 che seleziono, poi se clicco su aggiungi voglio che si svuoti */
	document.getElementById("titoloForm").value = "";
	document.getElementById("descrizioneForm").value = "";
	document.getElementById("requisitiForm"). value = "";
	document.getElementById("checkBoxForm").checked = false;
	
	document.getElementById("min").options.selectedIndex = 0;
	caricaOpzioniAge();
	svuotaEliminaSection();

	if(!aggiungi)
		divForm.style.display = "inline-block";
	else 
		divForm.style.display = "none";
	
	aggiungi = !aggiungi;
}

function inviaLavoro() {
	
	var titolo = document.getElementById("titoloForm");
	var descrizione = document.getElementById("descrizioneForm");
	var requisiti = document.getElementById("requisitiForm");
	var attivo = document.getElementById("checkBoxForm");
	

	var min = document.getElementById("min").value;
	var max = document.getElementById("max").value;
	
	var select = document.getElementsByClassName("studio");
	
	// in obbligatori metto i requisiti obbligatori secondo il modello messo in lavoraConNoi
	var obbligatori = new Array();
	obbligatori.push(new Obbligatorio(0, "Age range", min, max));
	
	// le select viaggiano a coppie di due, la prima è titolo studio, la successiva materia studios
	for(let i = 0; i < select.length - 1; i += 2)
		if(select[i].value != "" && select[i].value != " -- select an option -- ")
			obbligatori.push(new Obbligatorio(0, "Study title", select[i].value, select[i + 1].value));
	
	var posizioneLavoro = new PosizioneLavoro(titolo.value, descrizione.value, requisiti.value, obbligatori, attivo.checked)
	
	/* verifica se uno dei campi è vuoto */
	if(controllaSeFormVuoti(titolo.value, descrizione.value, requisiti.value)) {
		
		// controllo se il lavoro che sto aggiungendo è identico ad uno inserito precedentemente
		// se ha lo stesso titolo, ma ha qualche parametro diverso
		// oppure se è completamente nuovo, dal titolo
		controllaTitoloUnico(posizioneLavoro);
		
	} else
		alert("Fill in all fields");
}

function continuaInvioLavoro(data, lavoro) {
	
	let s = "Do you really want to add the new job position?";
	if(data == "titolo")
		s = "A job with the same title already exists. Continuing will overwrite the previous one. To continue?";
		
	
	// chiedi conferma
	if(confirm(s)) {
			
//		console.log(data);
		/* salva in tabella */
		if(data != "titolo")
			aggiungiLavoroTabella(lavoro);
		else
			modificaLavoroTabella(lavoro);
				
		/* salva nel db */
		salvaLavoro(lavoro);
		
		/* svuota textarea e checkbox */
		document.getElementById("titoloForm").value = "";
		document.getElementById("descrizioneForm").value = "";
		document.getElementById("requisitiForm").value = "";
		document.getElementById("checkBoxForm").checked = false;
		
		/* setto l'age a 18 ed elimino eventuali section create */
		document.getElementById("min").options.selectedIndex = 0;
		caricaOpzioniAge();
		svuotaEliminaSection();
		
	}
}

function modificaLavoroTabella(lav) {

	let check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" value = \"true\"/>";
	let immagine = "si";
	if(!lav.active) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" value = \"false\"/>";
		immagine = "no";
	}
	let img = "<figure>"
				+ "<img src = \"images/admin/posizioniLavoro/" + immagine + ".png\">"
			+ "</figure>";
	
	/* sono nel td del titolo lavoro e poi con i next prendo i suoi fratelli
	 e via dicendo fino a prendere tutti i fratelli e modificarli */
	$(".titoloLavoro").each(function() {
		if($(this).html() == lav.title) {
			$(this).next().html(lav.description);
			$(this).next().next().html(lav.requirements);
			$(this).next().next().next().html("");
			for(let i = 0; i <= lav.obligatory.length; ++i) {
				if(i == lav.obligatory.length)
					$(this).next().next().next().append("<div></div>");
				
				else
					$(this).next().next().next().append(lav.obligatory[i].name + ": " + lav.obligatory[i].value1 + " - " + lav.obligatory[i].value2 + "<br /><br />");
			}
			$(this).next().next().next().next().html("<br />" + check + img);
		}
			
	});
	
}

/* similmente a come abbiamo visto a lezione
 prendo inserisco il nuovo lavoro nell'ultima posizione della tabella
 e poi man mano inserisco i valori */
function aggiungiLavoroTabella(lav) {
	var tableElement = document.querySelector("#tabella tbody");

	var riga = tableElement.insertRow(-1);
		
	var cellaCheckBox = riga.insertCell(0);
	cellaCheckBox.setAttribute('data-title', "Select deselect");
	cellaCheckBox.innerHTML = "<input type=\"checkbox\" class = \"lavoro\"/>";
	
	
	var cellaTitolo = riga.insertCell(1);
	
	// setto il data-title per la formattazione tablet-smartphone
	// e la classe così che riesco a trovarla quando modifico
	// la posizione di lavoro
	cellaTitolo.setAttribute('data-title', "Title");
	cellaTitolo.setAttribute('class', "titoloLavoro");
	cellaTitolo.textContent = lav.title;
	
	var cellaDescrizione = riga.insertCell(2);
	cellaDescrizione.textContent = lav.description;
	
	var cellaRequisiti = riga.insertCell(3);
	cellaRequisiti.textContent = lav.requirements;
	

	var cellaObbligatori = riga.insertCell(4);
	for(let i = 0; i <= lav.obligatory.length; ++i) {
		if(i == lav.obligatory.length)
			cellaObbligatori.innerHTML += "<div></div>";
		else
			cellaObbligatori.innerHTML += lav.obligatory[i].name + ": " + lav.obligatory[i].value1 + " - " + lav.obligatory[i].value2 + "<br /><br />";
	}
	
	let check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" value = \"true\"/>";
	let immagine = "si";
	if(!lav.active) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" value = \"false\"/>";
		immagine = "no";
	}
		
	
	var cellaAttivo = riga.insertCell(5);
	cellaAttivo.setAttribute('data-title', "Active");
	cellaAttivo.innerHTML = "<br />"
							+ check
							+ "<figure>"
								+ "<img src = \"images/admin/posizioniLavoro/" + immagine +  ".png\">"
							+ "</figure>";
}

// non puoi continuare se questi parametri sono vuoti
function controllaSeFormVuoti(titolo, descrizione, requisiti) {
	
	if(titolo == "" || descrizione == "" || requisiti == "")
		return false;
	
	return true;
}

function pulsanteModifica() {
	var checkBox = document.querySelectorAll('tbody input.lavoro:checked');
	if (checkBox.length == 1) {
		
		document.getElementById("checkBoxTh").checked = false;
		
		/* Lo metto falso perché ho notato che dopo che aggiorno mi seleziona
		quelle checkbox con indice pari a quelle che avevo precedentemente selezionato */
		checkBox[0].checked = false;
		
		if(!aggiungi)
			divForm.style.display = "inline-block";
		
		// prende il td della checkbox selezionata
		// 0 e poi prendo i fratelli del td.
		// Per vederne poi il contenuto devo prendere il figlio al loro interno
		let titolo = checkBox[0].parentNode.nextElementSibling;
		let descrizione = titolo.nextElementSibling;
		let requisiti = descrizione.nextElementSibling;
		let obbligatori = requisiti.nextElementSibling;
		let attivo = obbligatori.nextElementSibling;
		
		
		obb = new Array();
//		console.log(obbligatori.childNodes.length);
		// vedendo nel childNodes di obbligatori, le parti di interesse partono da 1 e sono distanziate di 3
		
//		console.log(obbligatori.childNodes);
		for(let j = 0; j < obbligatori.childNodes.length - 3; j += 3) {
			
			let stringa = obbligatori.childNodes[j].nodeValue.replaceAll("\t", "");
			stringa = stringa.replaceAll("\n", "");
			let diviso = stringa.split(': ');
			stringa = diviso[1].split(" - ");
			
			obb.push(new Obbligatorio(0, diviso[0], stringa[0], stringa[1]));
		}
		
//		console.log("Obbligatori letti");
//		console.log(obb);

/*		console.log(titolo.innerHTML + " " + descrizione.innerHTML 
			+ " " + requisiti.innerHTML + " " + attivo.childNodes[1].checked);*/
//		console.log(attivo.childNodes[1].value);
//		console.log(obbligatori.childNodes.length);

		// campi text e checkbox
		var titoloForm = document.getElementById("titoloForm");
		var descrizioneForm = document.getElementById("descrizioneForm");
		var requisitiForm = document.getElementById("requisitiForm");
		var attivoForm = document.getElementById("checkBoxForm");
		
		titoloForm.value = titolo.innerHTML;
		descrizioneForm.value = descrizione.innerHTML;
		requisitiForm.value = requisiti.innerHTML;
		
		
		
		// select
		
		/* elimino le precedenti select perché se clicco su un nuovo
		 edit si aggiungevano alla lista*/
		svuotaEliminaSection();
		
		
		for(let i = 0, j = 1; i < obb.length; ++i) {
			
//			console.log("i " + i);

			if(obb[i].name == "Age range") {
				// max min range age
				document.getElementById("min").value = obb[i].value1;
				document.getElementById("max").value = obb[i].value2;
			} else {
				// alla poszione due c'è sempre uno spazio in piu'
				if(j == 2)
					++j;
				caricaTitoloStudio();
//				console.log("titoloStudio" + j);
				document.getElementById("titoloStudio" + j).value = obb[i].value1;
				caricaOpzioni("titoloStudio" + j, "materiaStudio" + j);
				document.getElementById("materiaStudio" + j).value = obb[i].value2;
				 ++j;
			}
		}
		
		
		// attivo all'interno della tabella me la prende sempre come stringa
		// ho provato con checked ma stampa false anche quando è true (PROF)
//		console.log(attivo.childNodes[1]);
		attivoForm.checked = false;
		if(attivo.childNodes[1].value == "true")
			attivoForm.checked = true;
			
		
	} else
		alert("You have to select only one element!");
	
}


function pulsanteCancella() {
	btnCancella.addEventListener("click", function(){
		var selectedCheckBoxes = document.querySelectorAll("tbody input.lavoro:checked");
		
		if (selectedCheckBoxes.length > 0){
			if(confirm("Are you sure you want to delete?")) {
				selectedCheckBoxes.forEach(function(checkBox, indice){
					
					document.getElementById("checkBoxTh").checked = false;
					
					/* Lo metto falso perché ho notato che dopo che aggiorno mi seleziona
					quelle checkbox con indice pari a quelle che avevo precedentemente eliminato */
					checkBox.checked = false;
					
					/* Il parent node mi prende il parente di quell'elemento */
					checkBox.parentNode.parentNode.remove();
						
					/* sono nella checkbox, prendo il parent ovvero il td 
						prendo il fratello del td che è un altro td
						ed infine prendo tutto il testo dentro*/
					var title = checkBox.parentNode.nextElementSibling;
					
					$.ajax({
						type: "POST",
						url: "/eliminaLavoro",
						data: {
							titolo: title.innerHTML
						},
						success: function(){
//							alert("tutto ok");
						},
						error: function(xhr){
							alert("tutto male");
						}
					});
						
				});
				
				$("#checkBoxTh").prop("checked", false);
				
			}
			
		} else
			alert("Select at least one element!");
		
	});
}

/* -- FINE CAMPI FORM PER GESTIRE LAVORI --- */

/* FUNZIONI AUSILIARIE */

/* aggiusta la grandezza della textarea in base al testo scritto */
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}



/* -- CHECKBOX HEAD TABELLA --- */

function checkBoxTh() {
	if($("#checkBoxTh").attr('checked')) {
		selezionaDeselezionaTuttiCheckBox(false);
		$("#checkBoxTh").attr('checked', false);
	}
	else {
		selezionaDeselezionaTuttiCheckBox(true);
		$("#checkBoxTh").attr('checked', true);
	}	
}


function selezionaDeselezionaTuttiCheckBox(selezionare) {
	$("input[type=checkbox]").each(function() {
		$(this).prop("checked", selezionare);
	});
}

/* -- FINE CHECKBOX HEAD TABELLA --- */

/* REQUISITI SPECIALI */
	
function popolaMinAge() {
	var min = document.getElementById("min");
	
	for(let i = 18; i < 100; ++i) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		min.appendChild(opt);	
	}
	
	caricaOpzioniAge();
}

function caricaOpzioniAge() {
	var max = document.getElementById("max");
	max.innerHTML = "";
	
	var min = document.getElementById("min");
	
	for(let i = parseInt(min.value) + 1; i <= 100; ++i) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		max.appendChild(opt);	
	}	
	
	// prendo l'ultimo elemento, così se non mette un'età sono tutti accettati
	max.options.selectedIndex = max.options.length-1
}

/* SECTION */

// elimina e metti valore a tutte le altre section esistenti
// perché se in una section seleziono un tipo titolo e materia, non posso 
// selezionarla di nuovo in un'altra section
/*
function eliminaValoreSelezionabileSection() {

	titolo = new Array();
	materia = new Array();
	for(let j = 1; j < ind; ++j) {
		if(j == 1 && j + 1 < ind)
			++j;
			
		titolo.push(document.getElementById("titoloStudio" + j).value);
		materia.push(document.getElementById("materiaStudio" + j).value);
	}
	
	console.log(titolo);
	console.log(materia);
	
	for(let j = 1; j < ind; ++j) {
		if(j == 1 && j + 1 < ind)
			++j;
		
		for()
		if(document.getElementById("titoloStudio" + j).value == titolo) {
			let m = document.getElementById("materiaStudio" + j);
			for (let k = 0; k < m.length; ++k) {
			    if(m.options[i].value == materia)
			        m.remove(i);
			}
			document.getElementById("materiaStudio" + j)
		}
	}  
}*/
/*
function aggiungiValoreSelezionabileAlleSection(i) {
	
}
*/
/* section delle form del titolo studio e materia studio */

function svuotaEliminaSection() {
	var div = document.getElementById("requisitoTitoloStudio");
	while(ind > 1) {
		--ind;
		
		if(ind != 2)
			eliminaTitoloStudio(ind); 
			
	}
}

// mi serve per inserire il pulsante aggiungi dopo che viene 
//inserito un requisito di titolo studio
var ind = 1;

function caricaTitoloStudio() {

	// con la variabile precInd prendo il precedente valore della section
	// ed impedisco di creare una nuova riga per inserire un'altro titolo di studio
	// se il precedente è vuoto
	var precInd = ind - 1;
	if(precInd == 2)
		--precInd; 

	var titolo = document.getElementById("titoloStudio" + precInd);
	
	if(titolo != null && titolo.value == " -- select an option -- ")
		return;
	
	var div = document.getElementById("requisitoTitoloStudio");
	
	// gli id
	var titolo = "titoloStudio" + ind;
	var materia = "materiaStudio" + ind;
	
//	console.log("Titolo creato " + titolo);
	
	div.childNodes[ind].innerHTML = "<div class = \"row\" id = \"" + ind + "\">"
					+ "<div class=\"col-2\">"
						+ "<a class = \"piuMeno\" href = \"javascript:eliminaTitoloStudio(" + ind + ")\">"
							+ "<img src = \"../images/admin/posizioniLavoro/meno.png\">"
						+ "</a>"
					+ "</div>"
	 				+ "<div class=\"col-5\">"
						+ "<label for=\"titoloStudio\">Study title</label>"
						+ "<br />"
						+ "<select class = \"studio\" name=\"titoloStudio\" onchange = \"caricaOpzioni('" + titolo + "', '" + materia + "')\" id = \"" + titolo + "\"></select>"
					+ "</div>"
					+ "<div class=\"col-5\">"
						+ "<label for=\"materiaStudio\">Study subject</label>"
						+ "<br />"
						+ "<select class = \"studio\" name=\"materiaStudio\" id = \"" + materia + "\"></select>"
					+ "</div>"
				+ "</div>";
				
	popolaVisualizzaPosizioniLavoro(titolo);
				
//	eliminaValoreSelezionabileSection();			
	
	var creaNodo = document.createElement('div');
	creaNodo.className = 'row';

	if(ind == 1)
		++ind;
	++ind;
	
	
//	console.log(document.getElementById(titolo));
	
	
	div.appendChild(creaNodo);

	// inserimento pulsante aggiungi nel nuovo div che ho dovuto creare come nodo	
	div.childNodes[ind].innerHTML = "<div class = \"row\" id = \"" + ind + "\">"
						+ "<div class=\"col-2\">"
							+ "<a class = \"piuMeno\" href = \"javascript:caricaTitoloStudio()\">"
								+ "<img src = \"../images/admin/posizioniLavoro/piu.png\">"
							+ "</a>"
						+ "</div>"
					+ "</div>";
	
}

function eliminaTitoloStudio(ind) {
	var div = document.getElementById(ind);
	
	if(ind == 0)
		div.innerHTML = "<div class=\"col-2\">"
							+ "<a class = \"piuMeno\" href = \"javascript:caricaTitoloStudio()\">"
								+ "<img src = \"../images/admin/posizioniLavoro/piu.png\">"
							+ "</a>"
						+ "</div>";
	else
		div.innerHTML = ""
}

/* FINE SECTION */
/* FINE REQUISITI SPECIALI */