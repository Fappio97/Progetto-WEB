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
	<script language="javascript" src="../js/lavoraConNoi/vaiA.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/funzioni.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/chiamateAjax.js"></script>
	<script language="javascript" src="../js/lavoraConNoi/caricaPagineLavoraConNoi.js"></script>

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
				</div>
			
				<div id = "testo1">
				</div>
				
				
				<br /><br />
				<div id = "testo2">
					
				</div>
				<br />
				
			</div>
		</div>
	</div>


</body>
