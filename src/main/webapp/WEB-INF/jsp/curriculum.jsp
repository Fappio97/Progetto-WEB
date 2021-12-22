<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- Favicon -->
	<link rel="icon" href="../immagini/index/logo.png" type="image/x-icon"/>

	<!-- Titolo -->
	<title>Curriculum</title>
	
	<!-- CSS -->
	<link href="../css/lavoraConNoi/lavoraConNoi.css" rel="stylesheet" type="text/css" />
	
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>	

	<!-- JQUERY -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- JS -->
	<script language="javascript" src="../js/lavoraConNoi/modelloLavoraConNoi.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/campiForm.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/vaiA.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/funzioni.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/curriculum.js"></script>

	<!--AJAX ha la dipendenza nel pom -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!------------------------GRUPPO-------------------------------------------->	
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<link type="text/css" rel="stylesheet" href="../css/index/style.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
<!------------------------GRUPPO-------------------------------------------->	
	

</head>

<body>

<!-------------------------GRUPPO--------------------------------------------->

	<!-- HEADER -->
	<header>
		<!-- TOP HEADER -->
		<div id="top-header">
			<div class="container">
				<ul class="header-links pull-left">
					<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
					<li><a href="#"><i class="fa fa-envelope"></i>
							email@email.com</a></li>
					<li><a href="#"><i class="fa fa-map-marker"></i> 1734
							Stonecoal Road</a></li>
					<li><a href="#"><i class="fa fa-eur"></i> EUR</a></li>
				</ul>
				<ul class="header-links pull-right">
						<%if (session.getAttribute("loggato") == "si") {%>
								<a href="/faiLogout" style="text-decoration: none;">
									<button class="btnLog">
										<span>Log out</span>
									</button>
								</a>
								<%} else {%>
								<a href="login.html" style="text-decoration: none;">
									<button class="btnLog">
										<span>Login</span>
									</button>
								</a>
								<a href="signUp.html" style="text-decoration: none;">
									<button class="btnLog">
										<span>Sign Up</span>
									</button>
								</a>
								<%}%>
				</ul>
			</div>
		</div>
		<!-- /TOP HEADER -->

		<!-- MAIN HEADER -->
		<div id="header">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- LOGO -->
					<div class="col-md-3">
						<div class="header-logo">
							<a href="#" class="logo"> <img id="logo"
								src="images/index/logo.png" alt="">
							</a>
						</div>
					</div>
					<!-- /LOGO -->

					<!-- SEARCH BAR -->
					<div class="col-md-6">
						<div class="header-search">
							<form>
								<select class="input-select">
									<option value="0">All Categories</option>
									<option value="1">Smartphone</option>
									<option value="2">TV</option>
									<option value="3">Accessories</option>
								</select> <input class="input" placeholder="Search here">
								<button class="search-btn">Search</button>
							</form>
						</div>
					</div>
					<!-- /SEARCH BAR -->

					<!-- ACCOUNT -->
					<div class="col-md-3">
						<div class="header-ctn">
							<!-- Wishlist -->
							<div style="padding-right: 10%; padding-left: 25%;">
								<a href="#" style="text-decoration: none;"> <i
									class="fa fa-heart" id="heart"></i> <!--<div class="qty">0</div>-->
								</a>
							</div>

							<!-- Cart -->
							<div style="padding-right: 10%;">
								<a href="cart.html" style="text-decoration: none;"> <i
									class="fa fa-shopping-cart"></i> <!--<div class="qty">0</div>-->
								</a>
							</div>
							<!-- /Cart -->

							<!-- User Toogle -->
							<div>
								<%if (session.getAttribute("loggato") == "no" || session.getAttribute("loggato") == null){%>
								<a href="login.html" style="text-decoration: none;"> 
									<i class="fa fa-user"></i>
								</a>
								<%} else if(session.getAttribute("loggato") == "si"){%>
								<a href="account.html" style="text-decoration: none; display: flex; "> 
									<img class="profilePic" src="images/account/avatar.png" style="border-radius: 50%;" width="29" height="29" alt="Avatar">
									${username}
								</a>
								<%}%>
							</div>
							<!-- /User Toogle -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!--/HEADER-->

	<!-- /SECTION -->
	<nav id="navigation" class="navbar navbar-expand-sm bg-dark">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#mynavbar">
				<span class="navbar-toggler-icon"> <i class="fa fa-navicon"
					style="color: white; font-size: 28px"></i>
				</span>
			</button>
			<div class="collapse navbar-collapse" id="mynavbar">
				<ul class="navbar-nav me-auto">
					<li class="nav-item"><a class="nav-link"
						href="javascript:void(0)">Home</a></li>
					<!--<li class="nav-item">
					<a class="nav-link" href="javascript:void(0)">Hot Deals</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="javascript:void(0)">Categories</a>
				  </li>-->
					<li class="nav-item"><a class="nav-link"
						href="javascript:void(0)">Laptops</a></li>
					<li class="nav-item"><a class="nav-link"
						href="javascript:void(0)">Smartphones</a></li>
					<li class="nav-item"><a class="nav-link"
						href="javascript:void(0)">Tvs</a></li>
					<li class="nav-item"><a class="nav-link"
						href="javascript:void(0)">Accessories</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- /SECTION -->
<!-------------------------GRUPPO--------------------------------------------->


<!-------------------------FABIO--------------------------------------------->

	<div class="container container--grid" id = "container">
		<!-- Grafica superiore %% immagine sfondo -->
		<div id = "divImmagineTestoSfondo">
			<figure class = "figure">
				<img src = "../immagini/lavoraConNoi/lavoraConNoi.png" width = 100% class = "img-fluid">
			</figure>
			<div id = "testoSfondo">
				<p class = "titolo" ><strong>Work with us</strong></p>
			</div>
		</div>
		
		<!-- Obiettivi aziendali -->
		<div class = "row" id = "divSovrapposto">
 			<div class="col-sm-10" id = "indice">
				<div id = "barra">
					<nav class="navbar navbar-expand-sm navbar-light">
						<ul class="navbar-nav" id = "navbar">
							<li class="nav-item"> 
								<a class="nav-link" href = "/lavoraConNoi/lavoraInAzienda" ><strong>Get to know Tech Planet</strong></a>
							</li>
							<li class="nav-item"> 
								<a class="nav-link" href = "javascript:vaiTesto1()" ><strong>Form</strong></a>
							</li>
							<li class="nav-item"> 
								<a class="nav-link" href = "javascript:vaiTesto2()" ><strong>Send CV</strong></a>
							</li>
						</ul>
					</nav>
				</div>
				
				<div id = "login">
					<c:if test= "${username == null}">
						<a href = "javascript:formLogin()">Registered user? Click here</a>
					</c:if>
					<c:if test= "${username != null}">
						Hi ${username}
					</c:if>
					<div id = "formLogin">
						<form id = "formCurriculum" method="post" action="loginCurriculum">
							<label for ="username">Username: </label> 
							<input type="text" id = "user" name="username" placeholder="Your username.."/> <br/>
							<label for ="pass">Password: </label>
							<input type="password" id = "pass" name="pass" placeholder="Your password.."/> <br/>
							<button id = "pulsanteLogin" onclick = "faiLogin(event)">Login</button>
						</form>
					</div>
				</div>
				<br />
				
				<div id = "titolo">
					<c:if test= "${posizioneLavoro == null}">
						<p><strong id = "tipoLavoro">Candidatura Spontanea</strong></p>
					</c:if>
					<c:if test= "${posizioneLavoro != null}">
						<p><strong id = "tipoLavoro">${posizioneLavoro}</strong></p>
					</c:if>
				</div>
				<br />
				
				<div id = "testo1">
					<form method = "post" action = "/lavoraConNoi/salvaPresentazione" enctype="multipart/form-data">
					<div class = "row">
							<div class = "col-sm-12" id = "formCentrale">
								<div id = "titolo">
								</div>
							</div>
<!-- 						<c:if test= "${posizioneLavoro == null}">
								<input type="hidden" name = "lavoro" value ="candidatura spontanea">
							</c:if>
							<c:if test= "${posizioneLavoro != null}">
								<input type="hidden" name = "lavoro" />${posizioneLavoro}
							</c:if>
							
 -->						<input type="hidden" id = "lavoro" name = "lavoro" value ="candidatura spontanea">
 							<div id = "divLavoro">
 							</div>
 							<div class = "col-md-6" id = "formSX">
								<table class="table table-borderless">
									<div id = "datiPersonali">
										<p><strong>Personal data</strong></p>
									</div>
									<thead>
		      							<tr>
									       <th></th>
		      							</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label for="nome">
													<nobr>First name</nobr> 
													<nobr class = "asterisco">*</nobr>
												</label>
											</td>
											<td>
												<input type="text" name = "nome" id="nome" placeholder="Your first name ...">
											</td>
										</tr>
										<tr>
											<td>
												<label for="cognome">
													<nobr>Last name</nobr>
													<nobr class = "asterisco">*</nobr>
												</label>
											</td>
											<td>
												<input type="text" name = "cognome" id="cognome" placeholder="Your last name ...">
											</td>
										</tr>
										<tr>
											<td> 
												<label for="dataNascita"> 
													<nobr>Date of birth</nobr>
													<nobr class = "asterisco">*</nobr>
												</label>
											</td>
											<td>
												<input type="date" name = "dataNascita" id="dataNascita">
											</td>
										</tr>
										<tr>
											<td>
												<label for="email">
													<nobr>E-Mail</nobr>
													<nobr class = "asterisco">*</nobr>
												</label>
											</td>
										    <td>
												<input type="email" name = "email" id="mail" placeholder="Your e-mail ..." >
											</td>
										</tr>
									</tbody>
								</table>	
							</div>
						<div class = "col-md-6" id = "formDX">
							<table class="table table-borderless">
								<thead>
	      							<tr>
										<th>Education</th>
	      							</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<select class = "studio" name="titoloStudio" onclick = "caricaOpzioni('titoloStudio', 'materiaStudio')" id = "titoloStudio"></select>
										</td>
										<td>
											<label for="titoloStudio">
												<nobr class = "asterisco">*</nobr>
												<nobr>Educational qualification</nobr>
											</label>
										</td>
									</tr>
									<tr>
										<td>
											<select class = "studio" name="materiaStudio" id = "materiaStudio"></select>
										</td>
									    <td>
											<label for="materiaStudio">
												<nobr class = "asterisco">*</nobr>
												<nobr>Study subject</nobr>
											</label>
										</td>
									</tr>
								</tbody>
							</table>
							<table class="table table-borderless">
								<thead>
	      							<tr>
										<th>Last Job Position</th>
	      							</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<select name="funzioneLavoro" onclick = "caricaOpzioni('funzioneLavoro', 'classificazioneLavoro')" id = "funzioneLavoro"></select>
										</td>
										<td>
											<label for="funzioneLavoro">
												<nobr>Function</nobr>
											</label>
										</td>
									</tr>
									<tr>
										<td>
											<select name="classificazioneLavoro" id = "classificazioneLavoro"></select>
										</td>
										<td>
											<label for="classificazioneLavoro">
												<nobr>Classification</nobr>
											</label>
										</td>
									</tr>	
								</tbody>
							</table>
						</div>
						<div class = "col-sm-12" id = "formCentrale">
							<div id = "centro">
								<strong>Curriculum</strong>
							</div>
							<table class="table table-borderless">
								<thead>
	      								<tr>
									       <th></th>
	      								</tr>
									</thead>
									<tbody>
										<tr>
				 						<td class = "dx">
												<label for="foto">
													<nobr>Photo</nobr>
													<nobr class="asterisco">*</nobr>
												</label>
											</td>
											<td>
												<input type="file" name="foto" id = "foto" accept="image/png, image/jpeg, image/jpg">
											</td>
										</tr>
										<tr>
											<td class = "dx">
												<label for="cv">
													<nobr>CV Attachment</nobr>
													<nobr class="asterisco">*</nobr>
												</label>
											</td>
											<td>
												<input type="file" name="cv" id = "cv" accept="application/pdf">
											</td>
										</tr>	
										<tr>
											<td class = "dx">
												<label for="letteraPresentazione">
													<nobr>Cover letter</nobr>
												</label>
											</td>
											<td>
												<textarea name="letteraPresentazione" rows="4" cols="20"></textarea>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<br /><br />
						<div id = "testo2">
							<div class = "row" id = "mancaLaTuaPosizione">
								<div class = "col-sm-12">
									<p><i>By clicking on the "send curriculum" button, you accept the information on online candidates pursuant to art. 13 of Regulation (EU) 2016/679.</i></p>
									<div>
										<button class = "button" id = "presentazione" onclick = "javascript:inviaPresentazione(event)">Submit your CV</button>
									</div>
								</div>
							</div>
						</div>
						<br />
					</form>
				</div>
				
			</div>
		</div>
	</div>

<!-------------------------FABIO--------------------------------------------->

<!-------------------------GRUPPO--------------------------------------------->	
	<!-- FOOTER -->
	<footer id="footer">
		<!-- top footer -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">About Us</h3>
							<p>We are a friend with a passion of tecnologies.</p>
							<ul class="footer-links">
								<li><a href="#"><i class="fa fa-map-marker"></i>1734
										Stonecoal Road</a></li>
								<li><a href="#"><i class="fa fa-phone"></i>+021-95-51-84</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i>email@email.com</a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Categories</h3>
							<ul class="footer-links">
								<li><a href="#">Hot deals</a></li>
								<li><a href="#">Laptops</a></li>
								<li><a href="#">Smartphones</a></li>
								<li><a href="#">Tvs</a></li>
								<li><a href="#">Accessories</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Information</h3>
							<ul class="footer-links">
								<li><a href="#">About Us</a></li>
								<li><a href="/contattaci">Contact Us</a></li>
								<li><a href="#">Work with Us</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms & Conditions</a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Service</h3>
							<ul class="footer-links">
								<li><a href="#">My Account</a></li>
								<li><a href="#">View Cart</a></li>
								<li><a href="#">Wishlist</a></li>
								<li><a href="#">Order and Returns</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /top footer -->
	</footer>
	<!-- /FOOTER -->

<!-------------------------GRUPPO--------------------------------------------->
	
</body>