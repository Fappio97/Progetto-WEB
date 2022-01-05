function salvaLavoro(lavoro) {

	$.ajax({
		type: "POST",
		url: "/salvaModificaPosizioneLavoro",
		contentType: "application/json",
		data: JSON.stringify(lavoro),
		success: function(){
//			alert("tutto ok");
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
	
}


function controllaTitoloUnico(lavoro) {
	
	$.ajax({
		type: "POST",
		url: "/checkPosizioneLavoro",
		contentType: "application/json",
		data: JSON.stringify(lavoro),
		success: function(data){
//			alert("tutto ok");
			
			if(data == "uguale") {
				alert("The new job position you are entering is identical to the previous one.")
				return;
			}

			continuaInvioLavoro(data, lavoro);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});	
	
}

