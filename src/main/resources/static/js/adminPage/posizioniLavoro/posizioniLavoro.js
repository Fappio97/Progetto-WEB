window.onload = function() {
	pulsanteCancella();
	popolaMinAge();
}

/* VARIABILI */
var aggiungi = false;

function pulsanteAggiungi() {

	var divForm = document.getElementById("divForm");
	
	/* svuoto il contenuto */
	document.getElementById("titoloForm").value = "";
	document.getElementById("descrizioneForm").value = "";
	document.getElementById("requisitiForm"). value = "";
	document.getElementById("checkBoxForm").checked = false;

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
	
	var obbligatori = new Array();
	obbligatori.push(new Obbligatorio(0, "Age range", min, max));
	
	
	for(let i = 0; i < select.length - 1; i += 2)
		if(select[i].value != "" && select[i].value != " -- select an option -- ")
			obbligatori.push(new Obbligatorio(0, "Study title", select[i].value, select[i + 1].value));
	
	var posizioneLavoro = new PosizioneLavoroNoSpezzati(titolo.value, descrizione.value, requisiti.value, obbligatori, attivo.checked)
	
	/* verifica se uno dei campi è vuoto */
	if(controllaSeFormVuoti(titolo.value, descrizione.value, requisiti.value)) {
		
		controllaTitoloUnico(posizioneLavoro);
		
	} else
		alert("Fill in all fields");
}

function continuaInvioLavoro(data, lavoro) {
	
	let s = "Do you really want to add the new job position?";
	if(data == "titolo")
		s = "A job with the same title already exists. Continuing will overwrite the previous one. To continue?";
		
	
	/* chiedi conferma */
	if(confirm(s)) {
			
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
		
		/* setto l'age e elimino eventuali section create */
		document.getElementById("min").options.selectedIndex = 0;
		caricaOpzioniAge();
		svuotaEliminaSection();
		
	}
}

function modificaLavoroTabella(lav) {

	let lavoro = "<input type=\"checkbox\" id = \"lavoroCheckBox\" checked/>";
	let immagine = "si";
	if(!lav.active) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" unchecked/>";
		immagine = "no";
	}
	let img = "<figure>"
				+ "<img src = \"immagini/admin/posizioniLavoro/" + immagine + ".png\">"
			+ "</figure>";

	var obb = "";
	for(let i = 0; i < lav.obligatory.length; ++i)
		obb += lav.obligatory[i].name + ": " + lav.obligatory[i].value1 + " - " + lav.obligatory[i].value2 + "\n" + " " + "\n";


	$(".titoloLavoro").each(function() {
		if($(this).html() == lav.title) {
			$(this).next().html(lav.descrizione);
			$(this).next().next().html(lav.requisiti);
			$(this).next().next().next().html("");
			for(let i = 0; i < lav.obligatory.length; ++i)
				$(this).next().next().next().append(lav.obligatory[i].name + ": " + lav.obligatory[i].value1 + " - " + lav.obligatory[i].value2 + "<br /><br />");
			$(this).next().next().next().next().html(check + img);
		}
			
	});
	
}

function aggiungiLavoroTabella(lav) {
	var tableElement = document.querySelector("#tabella tbody");

	var riga = tableElement.insertRow(-1);
		
	var cellaCheckBox = riga.insertCell(0);
	cellaCheckBox.setAttribute('data-title', "Select deselect");
	cellaCheckBox.innerHTML = "<input type=\"checkbox\" class = \"lavoro\"/>";
	
	
	var cellaTitolo = riga.insertCell(1);
	cellaTitolo.setAttribute('data-title', "Title");
	cellaTitolo.textContent = lav.title;
	
	var cellaDescrizione = riga.insertCell(2);
	cellaDescrizione.textContent = lav.description;
	
	var cellaRequisiti = riga.insertCell(3);
	cellaRequisiti.textContent = lav.requirements;
	
	var obb = "";
	for(let i = 0; i < lav.obligatory.length; ++i)
		obb += lav.obligatory[i].name + ": " + lav.obligatory[i].value1 + " - " + lav.obligatory[i].value2 + "\n" + "\n";
		
	var cellaObbligatori = riga.insertCell(4);
	cellaObbligatori.textContent = obb;
	
	/* salvare i requisiti obbligatori */
	
	let check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" checked/>";
	let immagine = "si";
	if(!lav.active) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" unchecked/>";
		immagine = "no";
	}
		
	
	var cellaAttivo = riga.insertCell(5);
	cellaAttivo.setAttribute('data-title', "Active");
	cellaAttivo.innerHTML = check
							+ "<figure>"
								+ "<img src = \"immagini/admin/posizioniLavoro/" + immagine +  ".png\">"
							+ "</figure>";
}

function controllaSeFormVuoti(titolo, descrizione, requisiti) {
	
	if(titolo == "" || descrizione == "" || requisiti == "")
		return false;
	
	return true;
}

function pulsanteModifica() {
	var checkBox = document.querySelectorAll('tbody input.lavoro:checked');
	if (checkBox.length == 1){
		
		/* Lo metto falso perché ho notato che dopo che aggiorno mi seleziona
		quelle checkbox con indice pari a quelle che avevo precedentemente eliminato */
		checkBox.checked = false;
		
		if(!aggiungi)
			divForm.style.display = "inline-block";
		
		let titolo = checkBox[0].parentNode.nextElementSibling;
		let descrizione = titolo.nextElementSibling;
		let requisiti = descrizione.nextElementSibling;
		let attivo = requisiti.nextElementSibling;
/*
		console.log(titolo.innerHTML + " " + descrizione.innerHTML 
			+ " " + requisiti.childNodes[0].innerHTML + " " + attivo.childNodes[1].checked
			+ " " + attivo.childNodes[3].innerHTML);
			*/
		var titoloForm = document.getElementById("titoloForm");
		var descrizioneForm = document.getElementById("descrizioneForm");
		var requisitiForm = document.getElementById("requisitiForm");
		var attivoForm = document.getElementById("checkBoxForm");
		
		titoloForm.value = titolo.innerHTML;
		descrizioneForm.value = descrizione.innerHTML;
		requisitiForm.value = requisiti.innerHTML;
/*		console.log("Form attivo " + attivoForm.checked);
		console.log("Attivo " + attivo.childNodes[1].value);*/
		attivoForm.checked = attivo.childNodes[1].value;
/*		console.log("Form attivo post " + attivoForm.checked);*/
		
	} else
		alert("You have to select only one element!");
	
}


function pulsanteCancella() {
	btnCancella.addEventListener("click", function(){
		var selectedCheckBoxes = document.querySelectorAll("tbody input.lavoro:checked");
		
		if (selectedCheckBoxes.length > 0){
			if(confirm("Are you sure you want to delete?")) {
				selectedCheckBoxes.forEach(function(checkBox, indice){
					
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
							alert("tutto ok");
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

/* FUNZIONI AUSILIARIE */

/* aggiusta la grandezza della textarea */
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}



/* CheckBox nell'head della tabella */

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
	
}

/* SECTION */

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
	
	div.childNodes[ind].innerHTML = "<div class = \"row\" id = \"" + ind + "\">"
					+ "<div class=\"col-2\">"
						+ "<a class = \"piuMeno\" href = \"javascript:eliminaTitoloStudio(" + ind + ")\">"
							+ "<img src = \"../immagini/admin/posizioniLavoro/meno.png\">"
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
				
	var creaNodo = document.createElement('div');
	creaNodo.className = 'row';

	if(ind == 1)
		++ind;
	++ind;
	
	
//	console.log(document.getElementById(titolo));
	
	popolaVisualizzaPosizioniLavoro(titolo);
	
	div.appendChild(creaNodo);

	// inserimento pulsante aggiungi nel nuovo div che ho dovuto creare come nodo	
	div.childNodes[ind].innerHTML = "<div class = \"row\" id = \"" + ind + "\">"
						+ "<div class=\"col-2\">"
							+ "<a class = \"piuMeno\" href = \"javascript:caricaTitoloStudio()\">"
								+ "<img src = \"../immagini/admin/posizioniLavoro/piu.png\">"
							+ "</a>"
						+ "</div>"
					+ "</div>";
	
}

function eliminaTitoloStudio(ind) {
	var div = document.getElementById(ind);
	
	if(ind == 0)
		div.innerHTML = "<div class=\"col-2\">"
							+ "<a class = \"piuMeno\" href = \"javascript:caricaTitoloStudio()\">"
								+ "<img src = \"../immagini/admin/posizioniLavoro/piu.png\">"
							+ "</a>"
						+ "</div>";
	else
		div.innerHTML = ""
}

/* FINE SECTION */
/* FINE REQUISITI SPECIALI */