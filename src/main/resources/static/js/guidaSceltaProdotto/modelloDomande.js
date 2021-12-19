function Risposta(risposta, tag, descrizione) {
	this.risposta = risposta;
	this.descrizione = descrizione;
	this.tag = tag;
}

function Domanda(domanda, descrizione, unaOpzione, risposte) {
	this.domanda = domanda;
	this.risposte = risposte;
	this.descrizione = descrizione;
	this.unaOpzione = unaOpzione;
}

function CategoriaTag(categoria, tag) {
	this.categoria = categoria;
	this.tag = tag;
}

/* --- INDICE PER SCORRERE --- */
var ind = -1;

/* --- CATEGORIE --- */ 

categorie = {
	["domanda"]: "In which category do you want to find the right product for you?",
	"categoria": new Array(),
	"descrizione": "Welcome!%Answer these simple questions and we will help you find the ideal product for your needs."
};

categorie.categoria.push("Notebook", "Printers");

/*console.log(categorie);


/* --- DOMANDE  --- */ 


var domande = new Object();

domande = {
	["stampanti"]: {},
	["notebook"]: {}
};

/* --- DOMANDE SPECIFICHE --- */ 

domande.stampanti = {
	["elencoDomande"]: new Array()
};

domande.notebook = {
	"elencoDomande": new Array()
};

/* --- DOMANDE SPECIFICHE STAMPANTE --- */

domande.stampanti.elencoDomande.push(new Domanda("My new printer is for …", "Printer usage%Choose the context in which you will use the printer.", true, 
	new Array(new Risposta("Personal use", "personal use", "Personal use%The device will be used for personal documents, by me and my family."), 
				new Risposta("Home office", "home office", "Home office%The device will be used in a home office to create professional documents."), 
				new Risposta("Small business", "small business", "Small business%The device will be used in an office with up to 10 people."),
				new Risposta("Large company", "large company", "Large company%The device will be used in an office with more than 10 people."))));

domande.stampanti.elencoDomande.push(new Domanda("What do you want to do with your device?%You can select multiple options","Device features%Our product range offers a wide choice of features and functionalities.%Choose the functionality you need.", false,
	new Array(new Risposta("Print", "print", ""), 
				new Risposta("Copy", "copy", "" ), 
				new Risposta("Scanner", "scanner", ""),
				new Risposta("Fax", "fax", ""))));
				
domande.stampanti.elencoDomande.push(new Domanda("I want to print …","Print color%Choose the color you want to print in.", true,
	new Array(new Risposta("In color and black and white ", "color", ""), 
				new Risposta("Only in black and white ", "black and white", "" ))));				
				
domande.stampanti.elencoDomande.push(new Domanda("I need to be able to print …%You can select multiple options","Print size%Choose the size you want to print on, from standard A4 to large sizes or photos.", false,
	new Array(new Risposta("Text-only documents", "text", "Text-only documents%Printed documents will mainly be text documents such as e-mails, Word sheets or spreadsheets."), 
				new Risposta("Photographs and images", "photos", "Photographs and images%Photos or other images in high resolution." ),
				new Risposta("On labels and envelopes", "label", "On labels and envelopes%Ideal for those who want to print on labels or envelopes." ),
				new Risposta("In standard A4 size", "a4", "In standard A4 size%Standard A4 size documents." ),
				new Risposta("In large A3 size", "a3", "In large A3 size%A3 documents for those who want to print in a larger size." ),
				new Risposta("In the smaller sizes A5", "a5", "In the smaller sizes A5%A5 size documents ideal for small flyers." ))));
				
domande.stampanti.elencoDomande.push(new Domanda("Print frequency","Frequency of use%Indicates how often you print.%This way we will recommend the most suitable model for you.", true,
	new Array(new Risposta("A few times a month", "few", ""), 
				new Risposta("Once a week", "a little", "" ), 
				new Risposta("Several times a week", "often", ""),
				new Risposta("Everyday", "always", ""))));
				
domande.stampanti.elencoDomande.push(new Domanda("I want to connect my device by ...%You can select more options ","Device connectivity%Indicate how you want to install and connect your device.%We have a model for all your needs: from wireless to wired network.", false,
	new Array(new Risposta("LAN (network cable)", "lan","LAN%Do you want to use a LAN connection?%This will make the printer available to every user connected to the same network."), 
				new Risposta("USB", "usb", "USB%Choose the USB interface if you want to connect the device directly to your pc or laptop.%The device will only be accessible from the connected pc or laptop." ), 
				new Risposta("WiFi", "wifi", "WiFi%Connect wirelessly by WiFi and access your device from anywhere in your home or office."),
				new Risposta("Parallel port", "parallel port", "Parallel port%Are you a large company and want to connect your device via parallel port?%This interface allows you to send data simultaneously from multiple cables at the same time."))));

domande.stampanti.elencoDomande.push(new Domanda("I want to…%You can select more options","Additional requirements%Before I show you the device that best suits your needs, are there any other features or functionalities you want?", false,
	new Array(new Risposta("Print on both sides", "both sides", "Print on both sides%Automatically prints on both sides of the paper, saving paper and costs."), 
				new Risposta("Print from mobile device", "smartphone", "Print from mobile device%Ideal for those who want to print from the comfort of their smartphone." ), 
				new Risposta("Add more paper trays", "more trays", "Add more paper trays%Ideal for those who print frequently and want to avoid refilling the paper tray often, saving time.%Or you can use specific trays for different paper sizes."))));

/* --- DOMANDE SPECIFICHE NOTEBOOK --- */

domande.notebook.elencoDomande.push(new Domanda("My new notebook is for …","Using the notebook%Choose how you will use the device you are looking for.", true,
	new Array(new Risposta("Gaming", "gaming", "Gaming%Designed to play the most powerful video games"), 
				new Risposta("Daily use", "daily use", "Daily use%Designed for a better experience of using in daily operations." ), 
				new Risposta("Editing", "editing", "Editing%Designed to manipulate and prepare multimedia files using graphics software."))));

domande.notebook.elencoDomande.push(new Domanda("I want the processor ...","I want the processor%There is no better family than the other, each model has its strengths and weaknesses.", true,
	new Array(new Risposta("AMD", "amd", "AMD%US multinational, world leader in the production of CPUs for the workstation and server market"), 
				new Risposta("Intel", "intel", "Intel%US multinational world leader in CPU manufacturing." ))));		
			
domande.notebook.elencoDomande.push(new Domanda("I want the display ...", "Display size%Choose the display size of your new notebook.", true,
	new Array(new Risposta("13 inch", "13", ""), 
				new Risposta("14 inch", "14", "" ),
				new Risposta("15 inch", "15", "" ),
				new Risposta("17 inch", "17", "" ))));				

domande.notebook.elencoDomande.push(new Domanda("I want ...%You can select more options", "Additional requirements%Before I show you the device that best suits your needs, are there any other features or functionalities you want?", false,
	new Array(new Risposta("WiFi 6", "wifi 6", "WiFi 6%Faster WiFi means higher upload and download speeds."), 
				new Risposta("Backlit keyboard", "backlit keyboard", "Backlit keyboard%Under each key integrates a bright LED, which can be white or even RGB and customizable." ),
				new Risposta("Fingerprint", "fingerprint", "Fingerprint%Acknowledgment of the device owner's fingerprint." ),
				new Risposta("Touch - screen", "touchscreen", "Touch - screen%Allows the user to interact with the device using their fingers or other objects." ))));	
		
	