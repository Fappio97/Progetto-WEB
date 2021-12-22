window.onload = function() {
	pulsanteCancella();
}

function pulsanteCancella() {
	btnCancella.addEventListener("click", function(){
		var selectedCheckBoxes = document.querySelectorAll("input:checked");
		
		if (selectedCheckBoxes.length > 0){
			if(confirm("Are you sure you want to delete?")) {
				selectedCheckBoxes.forEach(function(checkBox, indice){
					
					/* Il parent node mi prende il parente di quell'elemento */
					checkBox.parentNode.parentNode.remove();
						
					var id = checkBox.getAttribute("id");
					
					$.ajax({
						type: "POST",
						url: "/eliminaReport",
						data: {
							id: id
						},
						success: function(){
							alert("tutto ok");
						},
						error: function(xhr){
							alert("tutto male");
						}
					});
						
				});
			}
		}else{
			alert("Select at least one element!");
		}
		
	});
}