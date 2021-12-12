<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- CSS -->
	<link href="../css/index.css" rel="stylesheet" type="text/css" />
	
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>	

	<!-- JS -->
	<script language="javascript" src="../js/modelloDomande.js"></script>
	<script language="javascript" src="../js/sceltaProdotto.js"></script>
	<script language="javascript" src="../js/caricaDomandeCategoria.js"></script>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
 
    <!-- Grafica superiore %% immagine sfondo più descrizione -->
    <div>
    	<div id = "imageDescription">
			<img src="../immagini/stampante.jpg" width = 100% height = 35%/>
			
			<div id = "description" >
				<h1>Trova il prodotto</h1>
				<p>Scopri il dispositivo per le tue esigenze. Il nostro sistema ti consiglia il prodotto migliore.</p>
			</div>
		</div>
	</div>
	
	<!-- Parte centrale %% seleziona categoria / rispondi domande -->
	<div class="container container--grid">
		${categoria}
	 	<c:if test= "${categoria != null}">
			<div class="row" id = "rigaIndiceDomande">
				<div class="col-3" id = "indiceDomandeSX">
					<button class ="button">
						<img src="../immagini/reset.png" width = 30%/><br />
						Rinizia
					</button>
				</div>
				<div class="col-6" id = "indiceDomandeCenter">
					Ambito di utilizzo <br />
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
					<button type ="button" class = "numDomande">
						1
					</button>
				</div>
				<div class="col-3" id = "indiceDomandeDX">
					<button class ="button">
						<img src="../immagini/result.png" width = 30%/><br />
						Risultati
					</button>
				</div>
			</div>
		</c:if>
		<div id = "rigaDomandeDescrizione">
			<div class="row">
				<div class="col-sm-6" id = "domandeRisposte">
					<div id = "domande">	
					</div>
					<div id = risposte>
					</div>
				</div>
				<div class="col-sm-6" id = "descrizione">
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6" id = "indietro">
					<button type="button" class="btn btn-light" id = "pulsanteIndietro">Indietro</button>
				</div>
				<div class="col-sm-6" id = "avanti">
					<button type="button" class="btn btn-primary" id = "pulsanteAvanti">Avanti</button>
				</div>
			</div>
		</div>
	</div>

	<div id = "segnalazione">
		<button type="button" class="btn btn-primary" id = "pulsanteProblema">Problema</button>
		<div id = "segnalazione2">
		</div>
		<button type="button" class="btn btn-light" id = "pulsanteInvia" style = "display: none;">Invia segnalazione</button>
	</div>

</body>

    