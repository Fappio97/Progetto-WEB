window.onload = function() {
	compila();
	prendiRequisitiObbligatori();
}

function compila() {
	// metto i valori nelle checkBox
	popolaComboBox();
	
	// focus dei campi
	campiForm();
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

		/* se non ho messaggi di errore
			vedo se sono soddisfatti i requisiti obbligatori,
			in caso chiedo se vuole inviarla come candidatura spontanea,
			ed eventualmente proseguo oppure no */
		if(messaggioErrore == "")  {
			if(document.getElementById("lavoro").value != "Spontaneous Candidature" && !controllaRequisitiObbligatori()) {
				if(!confirm("You do not meet the mandatory requirements for this job position.\nDo you want to send your candidature as spontaneous?")) {
					event.preventDefault();
					return;
				}
				else 
					document.getElementsByName("lavoro")[0].value = "Spontaneous Candidature";
			}
			alert("CV inviato");
		}
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

// nascondo o mostro il form di login
function formLogin() {
	let form = document.getElementById("formLogin");
	if(form.style.display == "none" || form.style.display == "")
		form.style.display = "inline";
	else
		form.style.display = "none";
}

/* REQUISITI OBBLIGATORI */

var requisiti = new Array();

/* prende il giorno attuale */
var today = new Date();
var annoAttuale = parseInt(today.getFullYear());
var meseAttuale = parseInt(today.getMonth());
var giornoAttuale = parseInt(today.getDate());

/* prendo i requisiti da rispettare */
function prendiRequisitiObbligatori() {
	requisitiObbligatori = document.querySelectorAll(".requisito");
	nomeRequisito = document.querySelectorAll(".nomeRequisito");
	valore1Requisito = document.querySelectorAll(".valore1Requisito");
	valore2Requisito = document.querySelectorAll(".valore2Requisito");
	
	for(let i = 0; i < requisitiObbligatori.length; ++i)
		requisiti.push(new Obbligatorio(0, nomeRequisito[i].innerHTML, valore1Requisito[i].innerHTML, valore2Requisito[i].innerHTML));
	
//	for(let i = 0; i < requisiti.length; ++i)
//		console.log(requisiti[i].name + " " + requisiti[i].value1 + " " + requisiti[i].value2);
	
	return true;
}

/* controllo se rispetto i requisiti */
function controllaRequisitiObbligatori() {
	var eta = document.querySelector("input[type=date]").value;
	
	let dataUtente = eta.split("-");
	
	eta = calcolaEtaUtente(dataUtente);

//	console.log(dataUtente);
	
	var input = document.querySelectorAll('.studio');
	
	var titoloStudio = input[0].value;
	var materiaStudio = input[1].value;
	
//	console.log(titoloStudio + " " + materiaStudio);
	let cond = false;
	
//	console.log(eta);
	
	// scorro i requisiti obbligatori della posizione di lavoro
	for(let i = 0; i < requisiti.length; ++i) {
		
		/* se il requisito è dell'età verifico se esco fuori dai limiti
			in questo caso non soddisfo */
		if(requisiti[i].name == "Age range") {
//			console.log("Scorrimento eta " + requisiti[i].value1 + " " + requisiti[i].value2)
			if(eta < requisiti[i].value1 || eta > requisiti[i].value2) {
//				console.log("età false");
				return false;
			}
		}
		/* se il requisito è del titolo di studio
			possono esserci indicati più requisiti e basta che ne soddisfo uno
			quindi se uno è soddisfatto imposto la booleana a true
			e ritorno */
		else {
//			console.log("Scorrimento titolo " + requisiti[i].value1 + " " + requisiti[i].value2)
			if(requisiti[i].value1 == titoloStudio && requisiti[i].value2 == materiaStudio) {
//				console.log("titolo true");
				cond = true;
			}
		}
	}
	return cond;
}

/* calcolo dell'età' */
function calcolaEtaUtente(dataUtente) {
	var eta = 0;
	
//	console.log("Chack dataUtente " + dataUtente[0] + " " + dataUtente[1] + " " + dataUtente[2]);
//	console.log("Anno attuale " + annoAttuale);
	
	/* aumento l'età finché non arrivo all'anno attuale */
	while(parseInt(dataUtente[0]) + eta < annoAttuale) {
		++eta;
	}
	
	/* se il suo mese di nascita è mino di quello attuale, ha già compiuto gli anni */
	if(parseInt(dataUtente[1]) < meseAttuale)
		++eta;
	
	/* stessa ragione per il mese anche per il giorno */
	if(parseInt(dataUtente[1]) == meseAttuale && parseInt(dataUtente[2]) < giornoAttuale)
		++eta;
	
	return eta;
}

/* FINE REQUISITI OBBLIGATORI */
