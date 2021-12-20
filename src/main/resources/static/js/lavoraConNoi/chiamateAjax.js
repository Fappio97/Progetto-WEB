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

function salvaPosizioneLavoro(titolo) {
	$.ajax({
		type: "POST",
		url: "/salvaPosizioneLavoro",
		data: titolo,
		success: function(){
			alert("tutto ok");
			window.location.href = "/lavoraConNoi/curriculum";
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
}