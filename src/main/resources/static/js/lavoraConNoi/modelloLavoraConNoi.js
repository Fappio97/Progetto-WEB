function VoceNav(testo, funzione) {
	this.testo = testo;
	this.funzione = funzione;
}

function Candidatura(testo, funzione) {
	this.testo = testo;
	this.funzione = funzione;
}

function Sezione(titolo, testo) {
	this.titolo = titolo;
	this.testo = testo;
}

/* --- INDICE PER SCORRERE --- */
var ind = 0;
var posizioneAperta = "";


/* nav */

elementiNav = new Array();

elementiNav[0] = new Array(
	new VoceNav("Get to know Tech Planet", "javascript:vaiTesto1()"),
	new VoceNav("Team", "javascript:vaiTesto2()"),
	new VoceNav("Open Positions", "javascript:avanti()"));
	
elementiNav[1] = new Array(
	new VoceNav("Company Presentation", "javascript:indietro()"),
	new VoceNav("Open Positions", "javascript:vaiTesto1()"),
	new VoceNav("Spontaneous Candidature", "/lavoraConNoi/Curriculum"));
	
elementiNav[2] = new Array(
	new VoceNav("Open Positions", "javascript:indietro()"),
	new VoceNav("Required Requirements", "javascript:vaiTesto1()"),
	new VoceNav("Spontaneous Candidature", "/lavoraConNoi/Curriculum"));
/*	
elementiNav[3] = new Array(
	new VoceNav("Open Positions", "/lavoraConNoi/lavoraConNoi"),
	new VoceNav("Form", "javascript:vaiTesto1()"),
	new VoceNav("Send CV", "javascript:vaiTesto2()"));
*/
/* testoCandidatura */	

candidatura = new Array();

candidatura[0] = new Candidatura("If at the moment there are no positions in line with your profile, you can in any case send us your application spontaneously: you will be contacted in case positions are opened in line with your characteristics.", "javascript:avantiDueVolte()");
candidatura[1] = new Candidatura("Don't meet the minimum requirements? You can always send us a spontaneous candidature.", "javascript:eliminaPosizioneAvanti()");	
/*candidatura[2] = new Candidatura("By clicking on the \"send curriculum\" button, you accept the information on online candidates pursuant to art. 13 of Regulation (EU) 2016/679.", "javascript:inviaPresentazione(event)");
*/

/* sezioniTesti */	
				
sezioniTesti = new Array(
	new Array(
		new Sezione("Working in Tech Planet", "Enter a company that is constantly expanding and very stimulating.%We create the best conditions for each employee to express themselves at their best and develop their skills and passions. The centrality of people, their talent and commitment, the sense and pride of belonging are values that have always guided our company.%Every day we look for talent, reliability and the desire to grow in the people we meet.%If you find yourself in this description, do not hesitate to send us your candidature."),
		new Sezione("Work environment", "We offer the opportunity to become professionals in a stimulating context, accompanied by a culture that promotes merit-based growth, enhancing individual skills, equal opportunities, new ideas and an innovative spirit in a context of corporate well-being.%The growth of our Collaborators is always accompanied by constant company training, with refresher courses on specialist and managerial areas.%We recognize the centrality of Human Resources and the contribution of the individual Collaborator that adds distinctiveness to our Value Chain.")),
	new Sezione("", ""));
/*	new Sezione("", "Are you a tech enthusiast?%Are you always \"technologically\" up to date and on the hunt for the latest Device?%Would you like to work in a dynamic environment in contact with people?%ENTER THE TECH PLANET!%Our customers are at the center of our world and our priority is to assist them in the best possible way and get their every need with our products and services.#If you think you are the right person ...%JOIN OUR TEAM!")); 
	*/
/* Opzioni combo box */

opzioni = {
	"titoloStudio": new Array(),
	"funzioneLavoro": new Array()
};

opzioni.titoloStudio = new Array(" -- select an option -- ", "Diploma", "Three-year degree", "Master's degree");
opzioni.funzioneLavoro = new Array(" -- select an option -- ", "Purchasing and Logistics", "Customer service", "Commercial and Sales", "General direction", "Finance and Administration", "Informatic Technology", "Legal", "Marketing", "New graduate and recent high school graduate", "Production", "Research and development", "Human resources", "Various");