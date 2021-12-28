function campiForm() {
	$('input[type=text], input[type=date]').each(function() {
		$(this).focusin(function(){
			$(this).css("border-color", "");
		});
		$(this).focusout(function(){
			if($(this).val() == "")
				$(this).css("border-color", "red");
		});		
	});
	
	$('input[type=email]').focusin(function(){
		$(this).css("border-color", "");
	});
		
	$('input[type=email]').focusout(function(){
		let valore = $(this).val();
		let chiocciola = valore.indexOf("@");
		let punto = valore.lastIndexOf(".");
		if (chiocciola < 1 || punto < chiocciola + 2 || punto + 2 >= valore.length)
			$(this).css("border-color", "red");
	});

	$('.studio').each(function() {
		$(this).focusin(function(){
			$(this).css("border-color", "");
		});
		$(this).focusout(function(){
			if($(this).val() == "" || $(this).val() == " -- select an option -- ")
				$(this).css("border-color", "red");
		});		
	});
	
	$('input[type=tel]').focusout(function(){
		let valore = $(this).val();
		let pattern = /^\d{10}$/;
		if(!pattern.test(valore))
			$(this).css("border-color", "red");
		else
			$(this).css("border-color", "");
	});
	
	$("#foto").change(function() {
		let idxDot = $(this).val().lastIndexOf(".") + 1;
		let extFile = $(this).val().substr(idxDot, idxDot.length).toLowerCase();
		if (extFile!="jpg" && extFile!="jpeg" && extFile!="png" ||  this.files[0].size > 1048576)
			$(this).css("border", "2px solid red");
		else
			$(this).css("border", "");
	});
	
	$("#cv").change(function() {
		let idxDot = $(this).val().lastIndexOf(".") + 1;
		let extFile = $(this).val().substr(idxDot, idxDot.length).toLowerCase();
		if (extFile!="pdf" || this.files[0].size > 1048576)
			$(this).css("border", "2px solid red");
		else
			$(this).css("border", "");
	});

}