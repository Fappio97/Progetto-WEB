function salvaProblemaAssistenza(event) {
		
	var descrizione = document.getElementById("description").value;

	if(descrizione == "")  {
		event.preventDefault();
		document.getElementById("description").style.borderColor = "red";
	}
			
	document.querySelector("#salvaProblema").submit;
}