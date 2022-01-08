const LEFT = 0;
const RIGHT = 1;

class Nodo {
	constructor(testo) {
		this.testo = testo;
		this.discendenti = new Array();
	}
}

function Testo(domanda, risposte) {
	this.domanda = domanda;
	this.risposte = risposte;
}

nodo1 = new Nodo(new Testo("Hi, I'm your virtual assistant", new Array("")));
nodo2 = new Nodo(new Testo("Do you have problems on any category?", new Array("Product guide", "Defective product")));
nodo3 = new Nodo(new Testo("Coming soon :(", new Array("End")));
nodo4 = new Nodo(new Testo("We are sorry about your problem", new Array("")));
nodo5 = new Nodo(new Testo("Have a nice day!", new Array("Restart", "Fuck u")));
nodo6 = new Nodo(new Testo("Don't insult me only because I'm a bot!", new Array("I'm sorry", "U didn't help me, bcs u are useless!")));
nodo7 = new Nodo(new Testo("In this case, fuck u! END", new Array("Restart")));
nodo8 = new Nodo(new Testo("Have you tried to turn it off and on again?", new Array("Yes", "One moment pls")));
nodo9 = new Nodo(new Testo("I'm waiting", new Array("Done, it work, ty", "Done, still doesn't work :(")));
nodo10 = new Nodo(new Testo("Glad do helped u", new Array("Restart")));
nodo11 = new Nodo(new Testo("Have you tried to turn it off and on again, turn it off and on again?", new Array("Yes", "One moment pls")));
nodo12 = new Nodo(new Testo("I have finished my support in this case, try to contact us with an e-mail", new Array("Ok, i'll do", "Oh really? This tool is so stupid")));
nodo13 = new Nodo(new Testo("Don't worry, bye", new Array("Restart")));
nodo14 = new Nodo(new Testo("Too angry to restart >.<", new Array("I'm really sorry")));

nodo1.discendenti[LEFT] = nodo2;
nodo2.discendenti[LEFT] = nodo3;
nodo2.discendenti[RIGHT] = nodo4;
nodo3.discendenti[LEFT] = nodo5;
nodo4.discendenti[LEFT] = nodo8;
nodo5.discendenti[RIGHT] = nodo6;
nodo6.discendenti[LEFT] = nodo13;
nodo6.discendenti[RIGHT] = nodo7;
nodo7.discendenti[LEFT] = nodo14;
nodo8.discendenti[LEFT] = nodo11;
nodo8.discendenti[RIGHT] = nodo9;
nodo9.discendenti[LEFT] = nodo10;
nodo9.discendenti[RIGHT] = nodo11;
nodo11.discendenti[LEFT] = nodo12;
nodo11.discendenti[RIGHT] = nodo9;
nodo12.discendenti[LEFT] = nodo5;
nodo12.discendenti[RIGHT] = nodo6;
