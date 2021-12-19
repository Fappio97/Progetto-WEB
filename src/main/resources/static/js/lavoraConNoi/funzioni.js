window.onload = function() {
	if(ind == 3) {
		
	}
}

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


