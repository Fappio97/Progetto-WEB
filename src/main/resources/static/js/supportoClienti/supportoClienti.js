/*
function salvaProblemaAssistenza(event) {
		
	var descrizione = document.getElementById("description").value;

	if(descrizione == "")  {
		event.preventDefault();
		document.getElementById("description").style.borderColor = "red";
	}
			
	document.querySelector("#salvaProblema").submit;
}
*/

function salvaProblemaAssistenza() {
	var origine = document.getElementById("origin").value;
	
	var descrizione = document.getElementById("description").value;
	
	if(descrizione == "") 
		document.getElementById("description").style.borderColor = "red";
	else {
		
		$.ajax({
			type: "POST",
			url: "/salvaReportHelp",
			data: {
				origin: origine,
				description: descrizione
			},
			success: function(){
	//			alert("tutto ok");
			},
			error: function(xhr){
				alert("tutto male");
			}
		});
		
		document.getElementById("description").value = "";
		document.getElementById("testoMessaggio").innerHTML = "Report send!";
		
	}
}

function textAreaAdjust(element) {
	
  	element.style.height = "1px";
  	element.style.height = (25+element.scrollHeight)+"px";

	// svuoto l'innerHTML del div che contiene il report send 
	if(document.getElementById("testoMessaggio").innerHTML != "")
		document.getElementById("testoMessaggio").innerHTML = "";
}