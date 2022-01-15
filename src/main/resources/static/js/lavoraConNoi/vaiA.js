function vaiTesto1() {
	document.getElementById("testoSezione1").scrollIntoView();
	scrollaDi();
}

function vaiTesto2() {
	document.getElementById("testoSezione2").scrollIntoView();
	scrollaDi();

}

function scrollaDi() {
	setTimeout(() => {
	  window.scrollBy(0,-45)
	  }, 500);
}
