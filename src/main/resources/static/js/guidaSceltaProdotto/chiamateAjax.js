function trovaProdottiCorrelati() {
	
	// i tag preferisco averli ni questo formato, in modo simile ai tag
	// che salvo di ogni prodotto, per poi slittarli e controllare se quel 
	// prodotto ha quel tag
	tag = "";
	for(let i = 0; i < preferenzeUtente.length; ++i) {
		if(preferenzeUtente[i] != undefined && preferenzeUtente[i] != "indifferent") {
			for(let j = 0; j < preferenzeUtente[i].length; ++j) {
				tag += preferenzeUtente[i][j];
				if(i < preferenzeUtente.length - 1 || j < preferenzeUtente[i].length - 1)
					tag += ",";
			}
		}
	}
	
//	console.log("tag");
//	console.log(tag);
		
	$.ajax({
		type: "POST",
		url: "/trovaProdotti",
		data: {
			categoria: categoriaSelezionata,
			tag: tag
		},
		success: function(data){
//			alert("tutto ok");
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
		data: {
			categoria: categoriaSelezionata
		},
		success: function(data){
//			alert("tutto ok");
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
		success: function(){
			alert("tutto ok");
			stampaEsitoSegnalazione();
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}