/* FUNZIONI */

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

function requisitiSpezzati(requisiti) {
	var stringhe = requisiti.split(".");
	
	var s = "";
	for(let i = 0; i < stringhe.length; ++i)
		s += stringhe[i] + "<br />"; 
	
	return s;
}

function caricaListeAperte(data) {
	var div = document.getElementById("listaPosizioniAperta");
	
	var s = "";
	for(let i = 0; i < data.length; ++i) {
		if(data[i].title != "Spontaneous Candidature") {
			s += "<tr>"
					+ "<th scope=\"row\"><a href = \"javascript:posizione('" + data[i].title + "')\">" + data[i].title + "</a></th>"
					+ "<td>" + data[i].description + "</td>"
				+ "</tr>";
			
			let obbligatori = new Array();
			for(let j = 0; j < data[i].obligatory.length; ++j)
				obbligatori.push(new Obbligatorio(data[i].obligatory.id, data[i].obligatory[j].name, data[i].obligatory[j].value1, data[i].obligatory[j].value2));
					
				
			posLavoro.push(new PosizioneLavoro(data[i].title, data[i].description, data[i].requirements, data[i].obligatory, data[i].active));
		}
	}
	console.log(posLavoro);
	div.innerHTML = s;
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


