<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- Favicon -->
	<link rel="icon" href="../immagini/index/logo.png" type="image/x-icon"/>
	
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

</head>

<body>


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

	
	
</body>