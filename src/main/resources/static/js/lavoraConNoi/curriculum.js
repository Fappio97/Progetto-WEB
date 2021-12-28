window.onload = function() {
	compila();
}

function compila() {
	popolaComboBox();
	campiForm();
	caricaLavoro();
}

/* setto il tipo di lavoro in un input hidden perché mi serve passarla nel form */
function caricaLavoro() {
	var tipoLavoro = document.getElementById("tipoLavoro").innerHTML;
	
	$("#lavoro").val(tipoLavoro);
}

function faiLogin(event) {
	
	var id = document.querySelector("#user").value;
	
	let stringa = "";
	let user = true;
	let passw = true;
	if(id == null || id == "") {
		event.preventDefault();
		user = false;
	}
				
	var pass = document.querySelector("#pass").value;
	if(pass == null || pass == "") {
		event.preventDefault();
		passw = false;
	}
	
	if(!passw || !user) {
		stringa += "Enter your ";
		if(!user && !passw)
			stringa += "username and password";
		else if(!passw && user)
			stringa += "password";
		else
			stringa += "username";
	}
	
	if(stringa != "")
		stringaErroreLogin(stringa);
	
	document.querySelector("#login").submit;
}

function stringaErroreLogin(stringa) {
	var div = document.getElementById("erroreLogin");
	
	div.innerHTML = "<p>" + stringa + "</p>";
}

function inviaPresentazione(event) {
		let messaggioErrore = "";
		var condizione = true;
		
		condizione = controllaInputTypeText();
		condizione = controllaSelects();
		condizione = controllaDataNascita();
		condizione = controllaNumero();
		condizione = controllaMail();
		
		if(!condizione)
			messaggioErrore = "Enter the required fields!%";
		
		if(!controllaImmagine())
			messaggioErrore += "Only jpg/jpeg and png files are allowed!%";
		else if(!controllaSizeImmagine())
			messaggioErrore += "Image size too large!%";
	
		if(!controllaCV()) 
			messaggioErrore += "Only PDF files are allowed!%";
		else if(!controllaSizeCV())
			messaggioErrore += "PDF file size too large!%";

		
		if(messaggioErrore == "") 
			alert("CV inviato");
		else {
			stringaErroreForm(messaggioErrore);
			event.preventDefault();
			document.getElementById("titolo").scrollIntoView();
		}
			
		document.querySelector("#presentazione").submit;
}

function stringaErroreForm(stringa) {
	var div = document.getElementById("erroreForm");
	
	let s = "";
	for(let i = 0; i < stringa.split("%").length; ++i)
		s += stringa.split("%")[i] + "<br />";
	
	div.innerHTML = "<p>" + s + "</p>";
}

function controllaInputTypeText() {
	var input = document.querySelectorAll('input[type=text]');
	let cond = true;
	for(let i = 0; i < input.length; ++i)
		if(input[i].value == "") {
			input[i].style.borderColor = "red";
			cond = false;
		}
	return cond;
}

function controllaMail() {
	var input = document.querySelector("input[type=email]");
	let valore = input.value;
	let chiocciola = valore.indexOf("@");
	let punto = valore.lastIndexOf(".");
	if (chiocciola < 1 || punto < chiocciola + 2 || punto + 2 >= valore.length) {
		input.style.borderColor = "red";
		return false;
	}
	return true;
}

function controllaNumero() {
	let valore = document.querySelector("input[type=tel]");
	let pattern = /^\d{10}$/;
	if(!pattern.test(valore.value)) {
		valore.style.borderColor = "red";
		return false;
	}
	return true;
}

function controllaDataNascita() {
	var input = document.querySelector("input[type=date]");
	if(!input.value) {
		input.style.borderColor = "red";
		return false;
	}
	return true;
}

function controllaSelects() {
	var input = document.querySelectorAll('.studio');
	let cond = true;
	for(let i = 0; i < input.length; ++i)
		if(input[i].value == "" || input[i].value == " -- select an option -- ") {
			input[i].style.borderColor = "red";
			cond = false;
		}
	return cond;
}

function controllaImmagine() {
	let foto = document.getElementById("foto");
	let idxDot = foto.value.lastIndexOf(".") + 1;
	let extFile = foto.value.substr(idxDot, foto.length).toLowerCase();
	if (extFile!="jpg" && extFile!="jpeg" && extFile!="png") {
		foto.style.border = "2px solid red";
		return false;
	}
	return true;
}

function controllaSizeImmagine() {
	let foto = document.getElementById("foto");
	
	if (foto.files[0].size > 1048576) {
		foto.style.border = "2px solid red";
		return false;
	}
	return true;
}

function controllaCV() {

	let cv = document.getElementById("cv");
	let idxDot = cv.value.lastIndexOf(".") + 1;
	let extFile = cv.value.substr(idxDot, cv.length).toLowerCase();
	if (extFile!="pdf") {
		cv.style.border = "2px solid red";
		return false;
	}
	return true;
}

function controllaSizeCV() {
	let cv = document.getElementById("cv");

	if (cv.files[0].size > 1048576) {
		cv.style.border = "2px solid red";
		return false;
	}
	return true;
}

function formLogin() {
	let form = document.getElementById("formLogin");
	if(form.style.display == "none" || form.style.display == "")
		form.style.display = "inline";
	else
		form.style.display = "none";
}
