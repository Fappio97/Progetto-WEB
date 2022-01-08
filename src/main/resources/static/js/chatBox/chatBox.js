aperta = false;

function mostraChatBox() {
//	console.log("qui");
	$("#iconaChat").click(function() {
//		console.log("qua");
		if(aperta) {
			$("#chatBox").css("display", "none");
		} else
			$("#chatBox").css("display", "flex");
			
		aperta = !aperta;
	});
}