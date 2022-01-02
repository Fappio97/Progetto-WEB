window.onload = function() {
	pulsanteCancella();
	caricaCurriculum();
}

function pulsanteCancella() {
	btnCancella.addEventListener("click", function(){
		var selectedCheckBoxes = document.querySelectorAll("input.report:checked");
		
		if (selectedCheckBoxes.length > 0){
			if(confirm("Are you sure you want to delete?")) {
				selectedCheckBoxes.forEach(function(checkBox, indice){
					
					/* Lo metto falso perché ho notato che dopo che aggiorno mi seleziona
					quelle checkbox con indice pari a quelle che avevo precedentemente eliminato */
					checkBox.checked = false;
					
					/* Il parent node mi prende il parente di quell'elemento */
					checkBox.parentNode.parentNode.remove();
						
					var id = checkBox.getAttribute("id");
					
					$.ajax({
						type: "POST",
						url: "/eliminaCV",
						data: {
							id: id
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


/* -- FORMATTAZIONE CURRICULUM --- */

// cerco i curriculum a seconda del lavoro selezionato
function caricaCurriculum() {
	var lavoroSelezionato = document.getElementById("lavori").value;
	
	prendiCurriculum(lavoroSelezionato);
	
}

// carico i curriculum presi dal db nella pagina
function aggiungiCurriculumTabella(data) {
	$("tbody").html(
		modelloTabellaCurriculum(data)
	);
}

// modello html dei curriculum
function modelloTabellaCurriculum(data) {

	let s = "";
	
	let funzione = "";
	
	let classificazioneFunzione = "";
	
	for(let i = 0; i < data.length; ++i) {
		if(data[i].last_function != ' -- select an option -- ')
			funzione = data[i].last_function;
		else
			funzione = "";
			
		if(data[i].last_classification != null)
			classificazioneFunzione = data[i].last_classification;
		else
			classificazioneFunzione = "";
				
		s += "<tr>"
				+ "<td data-title = \"Select deselect\"><input id=\"" + data[i].id + "\" type=\"checkbox\" class = \"report\" /></td>"
				+ "<td data-title = \"Job\">" + data[i].job.title + "</td>"
				+ "<td data-title = \"Personal data\">"
					+ data[i].last_name + " " + data[i].first_name 
					+ "<br /><br />"
					+ data[i].date_birth
					+ "<br />"
					+ data[i].phone
					+ "<br />"
					+ data[i].email
				+ "</td>"
				+ "<td data-title = \"Education work\">"
					+ data[i].study_title
					+ "<br />"
					+ data[i].study_subject
					+ "<br /><br />"
					+ funzione
					+ "<br />"
					+ classificazioneFunzione
					+ "</td>"
				+ "<td data-title = \"Photo\">"
					+ "<a id = \"fotoSizePiccola\" href = \"" + data[i].photo + "\" target = \"_blank\">View photo</a>"
					+ "<a href=\"" + data[i].photo + "\" target=\"_blank\">"
						+ "<img src = \"" + data[i].photo + "\">"
					+ "</a>"
				+ "</td>"
				+ "<td data-title = \"CV\">"
					+ "<a href=\"" + data[i].curriculum + "\" target=\"_blank\">Read curriculum</a>"
				+ "</td>"
				+ "<td data-title = \"Text\">" + data[i].presentation + "</td>"
			+ "</tr>";
	}
	
	return s;
}

/* -- FINE FORMATTAZIONE CURRICULUM --- */