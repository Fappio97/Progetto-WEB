/* FUNZIONI */

function avanti() {
	ind++;
	compila();
}

function avantiDueVolte() {
	ind += 2;
	compila();
}

function posizione(stringa) {
	posizioneAperta = stringa;
	avanti();
}

function indietro() {
	if(posizioneAperta != "" && ind == 2)
		posizioneAperta = "";

	ind--;
	compila();
}

function indietroDueVolte() {
	ind--;
	indietro();
}

function eliminaPosizioneAvanti() {
	posizioneAperta = "";
	avanti();
}

function caricaOpzioni(stringa1, stringa2) {
	var titoloStudio = document.getElementById(stringa1).value;
	var materiaStudio = document.getElementById(stringa2);
	materiaStudio.innerHTML = "";
	
	let opzioni = new Array();
	switch(titoloStudio) {
		case("Diploma"):
			opzioni.push("High School");
			opzioni.push("Professional School");
			break;
		case("Master's degree"):
		case("Three-year degree"):
			opzioni.push("Architecture");
			opzioni.push("Economy");
			opzioni.push("Physics");
			opzioni.push("Law");
			opzioni.push("Informatics");
			opzioni.push("Engineering");
			opzioni.push("Letters");
			opzioni.push("Foreign languages");
			opzioni.push("Mathematics");
			opzioni.push("Psychology medicine");
			opzioni.push("Humanities and scientific ");
			break;
		case("Purchasing and Logistics"):
		case("Customer service"):
		case("Commercial and Sales"):
		case("General direction"):
		case("Finance and Administration"):
		case("Informatic Technology"):
		case("Legal"):
		case("Marketing"):
		case("Production"):
		case("Research and development"):
		case("Human resources"):
		case("Various"):
			opzioni.push("Manager");
			opzioni.push("Employee");
			opzioni.push("Freelance");
			opzioni.push("Intern ");
			break;
		default:
			break;
	}
	for(let i = 0; i < opzioni.length; ++i) {
		let opt = document.createElement('option');
	    opt.value = opzioni[i];
	    opt.innerHTML = opzioni[i];
		materiaStudio.appendChild(opt);
	}
}

function popolaComboBox() {
	popola("funzioneLavoro");	
	popola("titoloStudio");				
}

function popola(stringa) {
	var section = document.getElementById(stringa);
	
	let variabile;
	if(stringa == "funzioneLavoro")
		variabile = opzioni.funzioneLavoro;
	else
		variabile = opzioni.titoloStudio;
	
	for(let i = 0; i < variabile.length; ++i) {
		let opt = document.createElement('option');
		opt.value = variabile[i];
		opt.innerHTML = variabile[i];
		section.appendChild(opt);	
	}	
}

function inviaPresentazione() {
	/* AJAX per salvare la presentazione sul db */
	if(campiValidi())
		alert("CV inviato");
}

function campiValidi() {
	controllaInputTypeText();
	controllaDataNascita();
	controllaSelects();
	controllaImmagini();
	controllaCV();
}

function controllaInputTypeText() {
	var input = document.querySelectorAll('input[type=text]');
	let condizione = true;
	for(let i = 0; i < input.length; ++i) {
		if(input[i].value == "") {
			input[i].style.borderColor = "red";
			condizione = false;
		}
	}
	return condizione;
}

function controllaDataNascita() {
	var input = document.getElementById("dataNascita");
	if(!input.value) {
		input.style.borderColor = "red";
		return false;
	}
	return true;
}

function controllaSelects() {
	var input = document.querySelectorAll('select');
	let condizione = true;
	for(let i = 0; i < input.length; ++i) {
		if(input[i].value == "" || input[i].value == " -- select an option -- ") {
			input[i].style.borderColor = "red";
			condizione = false;
		}
	}
	return condizione;
}

function controllaImmagini() {
	let foto = document.getElementById("foto");
	let idxDot = foto.value.lastIndexOf(".") + 1;
	let extFile = foto.value.substr(idxDot, foto.length).toLowerCase();
	alert(extFile);
	if (extFile!="jpg" && extFile!="jpeg" && extFile!="png"){
		alert("Only jpg/jpeg and png files are allowed!");
	} 
}

function controllaCV() {
	let cv = document.getElementById("cv");
	let idxDot = cv.value.lastIndexOf(".") + 1;
	let extFile = cv.value.substr(idxDot, cv.length).toLowerCase();
	if (extFile!="pdf"){
		alert("Only pdf files are allowed!");
		foto.style.borderColor = "red";
	} 
}


