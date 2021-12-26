window.onload = function() {
	pulsanteCancella();
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
	
	/* verifica se uno dei campi è vuoto */
	if(controllaSeFormVuoti(titolo.value, descrizione.value, requisiti.value)) {
		
		controllaTitoloUnico(titolo.value, descrizione, requisiti, attivo);
		
	} else
		alert("Fill in all fields");
}

function continuaInvioLavoro(data, titolo, descrizione, requisiti, attivo) {
	
	let s = "Do you really want to add the new job position?";
	if(data == "titolo")
		s = "A job with the same title already exists. Continuing will overwrite the previous one. To continue?";
		
	
	/* chiedi conferma */
	if(confirm(s)) {
			
		/* salva in tabella */
		if(data != "titolo")
			aggiungiLavoroTabella(titolo, descrizione.value, requisiti.value, attivo.checked);
		else
			modificaLavoroTabella(titolo, descrizione.value, requisiti.value, attivo.checked);
				
		/* salva nel db */
		salvaLavoro(titolo, descrizione.value, requisiti.value, attivo.checked);
		
		document.getElementById("titoloForm").value = "";
		descrizione.value = "";
		requisiti.value = "";
		attivo.checked = false;
	}
}

function modificaLavoroTabella(titolo, descrizione, requisiti, attivo) {

	let check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" checked/>";
	let immagine = "si";
	if(!attivo) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" unchecked/>";
		immagine = "no";
	}
	let img = "<figure>"
				+ "<img src = \"immagini/admin/posizioniLavoro/" + immagine + ".png\">"
			+ "</figure>";

	$(".titoloLavoro").each(function() {
		if($(this).html() == titolo) {
			$(this).next().html(descrizione);
			$(this).next().next().html(requisiti);
			$(this).next().next().next().html(check + img);
		}
			
	});
	
}

function aggiungiLavoroTabella(titolo, descrizione, requisiti, attivo) {
	var tableElement = document.querySelector("#tabella tbody");
	var riga = tableElement.insertRow(-1);
	
	var cellaCheckbox = riga.insertCell(0);
	cellaCheckbox.innerHTML = "<input type=\"checkbox\" class = \"lavoro\"/>";
	
	
	var cellaTitolo = riga.insertCell(1);
	cellaTitolo.textContent = titolo;
	
	var cellaDescrizione = riga.insertCell(2);
	cellaDescrizione.textContent = descrizione;
	
	var cellaRequisiti = riga.insertCell(3);
	cellaRequisiti.textContent = requisiti;
	
	let check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" checked/>";
	let immagine = "si";
	if(!attivo) {
		check = "<input type=\"checkbox\" id = \"lavoroCheckBox\" unchecked/>";
		immagine = "no";
	}
		
	
	var cellaAttivo = riga.insertCell(4);
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