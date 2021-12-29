function VoceNav(testo, funzione) {
	this.testo = testo;
	this.funzione = funzione;
}

function Sezione(titolo, testo) {
	this.titolo = titolo;
	this.testo = testo;
}

function Obbligatorio(id, nome, valore1, valore2) {
	this.id = id;
	this.name = nome;
	this.value1 = valore1;
	this.value2 = valore2;
}

function PosizioneLavoro(titolo, descrizione, requisiti, obbligatori, attivo) {
	this.title = titolo;
	this.description = descrizione;
	this.requirements = requisitiSpezzati(requisiti);
	this.obligatory = obbligatori;
	this.active = attivo;
}

/* --- INDICE PER SCORRERE --- */
var ind = 0;
var posizioneApertaTitle = "";


/* salvaPosizioniLavoro */

posLavoro = new Array();

/* nav */

elementiNav = new Array();

elementiNav[0] = new Array(
	new VoceNav("Get to know Tech Planet", "javascript:vaiTesto1()"),
	new VoceNav("Team", "javascript:vaiTesto2()"),
	new VoceNav("Open Positions", "javascript:avanti()"));
	
elementiNav[1] = new Array(
	new VoceNav("Company Presentation", "javascript:indietro()"),
	new VoceNav("Open Positions", "javascript:vaiTesto1()"),
	new VoceNav("Spontaneous Candidature", "/lavoraConNoi/curriculumSpontaneo"));
	
elementiNav[2] = new Array(
	new VoceNav("Open Positions", "javascript:indietro()"),
	new VoceNav("Required Requirements", "javascript:vaiTesto1()"),
	new VoceNav("Spontaneous Candidature", "/lavoraConNoi/curriculumSpontaneo"));

candidatura = new Array();

candidatura[0] = "If at the moment there are no positions in line with your profile, you can in any case send us your application spontaneously: you will be contacted in case positions are opened in line with your characteristics.";
candidatura[1] = "Don't meet the minimum requirements? You can always send us a spontaneous candidature.";

/* sezioniTesti */	
				
sezioniTesti = new Array(
	new Array(
		new Sezione("Working in Tech Planet", "Enter a company that is constantly expanding and very stimulating.%We create the best conditions for each employee to express themselves at their best and develop their skills and passions. The centrality of people, their talent and commitment, the sense and pride of belonging are values that have always guided our company.%Every day we look for talent, reliability and the desire to grow in the people we meet.%If you find yourself in this description, do not hesitate to send us your candidature."),
		new Sezione("Work environment", "We offer the opportunity to become professionals in a stimulating context, accompanied by a culture that promotes merit-based growth, enhancing individual skills, equal opportunities, new ideas and an innovative spirit in a context of corporate well-being.%The growth of our Collaborators is always accompanied by constant company training, with refresher courses on specialist and managerial areas.%We recognize the centrality of Human Resources and the contribution of the individual Collaborator that adds distinctiveness to our Value Chain.")),
	new Sezione("", ""),
	new Sezione("", "Are you a tech enthusiast?%Are you always \"technologically\" up to date and on the hunt for the latest Device?%Would you like to work in a dynamic environment in contact with people?%<strong>ENTER THE TECH PLANET!</strong>%Our customers are at the center of our world and our priority is to assist them in the best possible way and get their every need with our products and services.#If you think you are the right person ...%<strong>JOIN OUR TEAM!</strong>")); 
	
/* Opzioni combo box */

opzioni = {
	"titoloStudio": new Array(),
	"funzioneLavoro": new Array()
};

opzioni.titoloStudio = new Array(" -- select an option -- ", "Diploma", "Three-year degree", "Master's degree");
opzioni.funzioneLavoro = new Array(" -- select an option -- ", "Purchasing and Logistics", "Customer service", "Commercial and Sales", "General direction", "Finance and Administration", "Informatic Technology", "Legal", "Marketing", "New graduate and recent high school graduate", "Production", "Research and development", "Human resources", "Various");