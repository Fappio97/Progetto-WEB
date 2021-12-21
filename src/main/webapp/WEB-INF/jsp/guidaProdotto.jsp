<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- Favicon -->
	<link rel="icon" href="../immagini/index/logo.png" type="image/x-icon"/>
	
	<!-- CSS -->
	<link href="../css/guidaSceltaProdotto/guidaSceltaProdotto.css" rel="stylesheet" type="text/css" />
	
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>	

	<!-- JS -->
	<script language="javascript" src="../js/guidaSceltaProdotto/modelloDomande.js"></script>
	<script language="javascript" src="../js/guidaSceltaProdotto/chiamateAjax.js"></script>
	<script language="javascript" src="../js/guidaSceltaProdotto/sceltaProdotto.js"></script>
	<script language="javascript" src="../js/guidaSceltaProdotto/caricaDomandeCategoria.js"></script>
	
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


<!-------------------------FABIO--------------------------------------------->
    <!-- Grafica superiore %% immagine sfondo più descrizione -->
    <div>
    	<div>
			<div id = "imageDescription">
			</div>
		</div>
	</div>
	
	<!-- Parte centrale %% seleziona categoria / rispondi domande -->
	<div class="container container--grid" id = "container">
	
		<div class="row" id = "rigaIndiceDomande">
		</div>
				
		<div id = "rigaDomandeDescrizione">
			<div class="row">
				<div class="col-sm-6" id = "domandeRisposte">
					<div id = "domande">	
					</div>
					<div id = risposte>
					</div>
				</div>
				<div class="col-sm-6" id = "descrizione"  class = "sticky">
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6" id = "indietro">
					<button type="button" class="btn btn-light" id = "pulsanteIndietro">Back</button>
				</div>
				<div class="col-sm-6" id = "avanti">
					<button type="button" class="btn btn-primary" id = "pulsanteAvanti">Next</button>
				</div>
			</div>
		</div>
	</div>
	
	<br />
	<div id = "segnalazione">
		<button type="button" class="btn btn-primary" id = "pulsanteProblema">Problem</button>
		<div id = "segnalazione2">
		</div>
		<button type="button" class="btn btn-light" id = "pulsanteInvia" >Send report</button>
	</div>
	<br />
<!-------------------------FABIO--------------------------------------------->

	
	

</body>

    