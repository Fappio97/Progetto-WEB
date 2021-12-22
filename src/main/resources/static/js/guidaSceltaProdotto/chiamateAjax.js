function trovaProdottiCorrelati() {
	tag = new Array();
	for(let i = 0; i < preferenzeUtente.length; ++i) {
		if(preferenzeUtente[i] != undefined) {
			if(preferenzeUtente[i].length > 1)
				for(let j = 0; j < preferenzeUtente[i].length; ++j)
					tag.push(preferenzeUtente[i][j]);
			else
				tag.push(preferenzeUtente[i]);
		}
	}
				
	var stringa = categoriaSelezionata + "," + tag.toString();
		
	$.ajax({
		type: "POST",
		url: "/trovaProdotti",
		contentType: "application/json",
		data: stringa,
		success: function(data){
			alert("tutto ok");
			inserisciProdottiTag(data);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}

function prodottiMeglioRecensiti() {
	$.ajax({
		type: "POST",
		url: "/prodottiMeglioRecensiti",
		contentType: "application/json",
		data: categoriaSelezionata,
		success: function(data){
			alert("tutto ok");
			inserisciProdotti(data);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}

function segnalazioneAjax(origine, descrizione) {
	$.ajax({
		type: "POST",
		url: "/salvaReport",
		data: {
			origin: origine,
			description: descrizione
		},
		success: function(data){
			alert("tutto ok");
			stampaEsitoSegnalazione(data);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}