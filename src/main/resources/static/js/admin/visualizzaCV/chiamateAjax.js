function prendiCurriculum(lavoro) {
	
	$.ajax({
		type: "POST",
		url: "/prendiCurriculum",
		data: {
			titoloLavoro: lavoro
		},
		success: function(data){
//			alert("tutto ok");
			aggiungiCurriculumTabella(data);
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
	
}

function elimina(id) {
	
	$.ajax({
		type: "POST",
		url: "/eliminaCV",
		data: {
			id: id
		},
		success: function(){
//			alert("tutto ok");
		},
		error: function(xhr){
			alert("tutto male");
		}
	});
	
}