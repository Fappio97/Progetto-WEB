window.onload = function() {
	mostraChatBox();
}

aperta = false;

function mostraChatBox() {

	$("#iconaChat").click(function() {
		if(aperta) {
			$("#chatBox").css("display", "none");
		} else
			$("#chatBox").css("display", "flex");
			
		aperta = !aperta;
	});
}