function listeAperte() {
	$.ajax({
		type: "GET",
		url: "/listaPosizioniAperte",
		success: function(data){
			alert("tutto ok");
			caricaListeAperte(data);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}

function salvaPosizioneLavoro(indice) {
	
	console.log(indice);
	
	$.ajax({
		type: "POST",
		url: "/salvaPosizioneLavoro",
		contentType: "application/json",
		data: JSON.stringify(posLavoro[indice]),
		success: function(){
			alert("tutto ok");
			window.location.href = "/lavoraConNoi/curriculum";
		},
		error: function(xhr){
			alert("tutto male");
		}

	});
}