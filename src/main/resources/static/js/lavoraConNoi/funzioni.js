/* FUNZIONI PRINCIPALI */

function avanti() {
	ind++;
	compila();
}

function posizione(stringa) {
	var diviso = stringa.split("%");
	posizioneApertaTitle = diviso[0];
	avanti();
}

function indietro() {
	if(ind != 0) {
		ind--;
		compila();
	}
}

/* FINE FUNZIONI PRINCIPALI */

/* FUNZIONI AUSILIARIE */

function requisitiSpezzati(requisiti) {
	var stringhe = requisiti.split(".");
	
	var s = "";
	for(let i = 0; i < stringhe.length; ++i)
		s += stringhe[i] + "<br />"; 
	
	return s;
}

/* FINE FUNZIONI AUSILIARIE */


/* --- OPZIONI SELECT --- */

function caricaOpzioni(stringa1, stringa2) {
	var select1 = document.getElementById(stringa1).value;
	var select2 = document.getElementById(stringa2);
	select2.innerHTML = "";
	
	let opzioni = new Array();
	switch(select1) {
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
			opzioni.push("Humanities and scientific");
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
			opzioni.push("Intern");
			break;
		default:
			break;
	}
	for(let i = 0; i < opzioni.length; ++i) {
		let opt = document.createElement('option');
	    opt.value = opzioni[i];
	    opt.innerHTML = opzioni[i];
		select2.appendChild(opt);
	}
}

function popolaComboBox() {
	popola("funzioneLavoro");	
	popola("titoloStudio");				
}

function popola(stringa) {
	var select = document.getElementById(stringa);
	
	let variabile;
	if(stringa == "funzioneLavoro")
		variabile = opzioni.funzioneLavoro;
	else
		variabile = opzioni.titoloStudio;
	
	for(let i = 0; i < variabile.length; ++i) {
		let opt = document.createElement('option');
		opt.value = variabile[i];
		opt.innerHTML = variabile[i];
		select.appendChild(opt);	
	}	
}

function popolaVisualizzaPosizioniLavoro(stringa) {
//	console.log(stringa);
	var section = document.getElementById(stringa);
	
	let variabile = opzioni.titoloStudio;
	
	for(let i = 0; i < variabile.length; ++i) {
		let opt = document.createElement('option');
		opt.value = variabile[i];
		opt.innerHTML = variabile[i];
		section.appendChild(opt);	
	}	
}

/* --- FINE OPZIONI SELECT --- */
