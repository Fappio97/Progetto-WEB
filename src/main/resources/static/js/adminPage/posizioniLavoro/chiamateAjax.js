function salvaLavoro(titolo, descrizione, requisiti, attivo) {

	$.ajax({
		type: "POST",
		url: "/salvaModificaPosizioneLavoro",
		data: {
			titolo: titolo,
			descrizione: descrizione,
			requisiti: requisiti,
			attivo: attivo
		},
		success: function(){
			alert("tutto ok");
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
	
}


function controllaTitoloUnico(titolo, descrizione, requisiti, attivo) {
	
	$.ajax({
		type: "POST",
		url: "/checkPosizioneLavoro",
		data: {
			titolo: titolo
		},
		success: function(data){
			alert("tutto ok");

			continuaInvioLavoro(data, titolo, descrizione, requisiti, attivo);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});	
	
}

