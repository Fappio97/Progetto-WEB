function elimina(id) {
	
	$.ajax({
		type: "POST",
		url: "/eliminaReport",
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