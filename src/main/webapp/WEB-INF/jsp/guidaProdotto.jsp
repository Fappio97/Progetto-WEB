<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- CSS -->
	<link href="../css/guidaSceltaProdotto/guidaSceltaProdotto.css" rel="stylesheet" type="text/css" />
	
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>	

	<!-- JS -->
	<script language="javascript" src="../js/guidaSceltaProdotto/modelloDomande.js"></script>
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
<!-------------------------GRUPPO--------------------------------------------->
	
	<!-- HEADER -->
	<header>
		<!-- TOP HEADER -->
		<div id="top-header">
			<div class="container">
				<ul class="header-links pull-left">
					<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
					<li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
					<li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					<li><a href="#"><i class="fa fa-eur"></i> EUR</a></li>
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
							<a href="../" class="logo">
								<img src="../immagini/img/logo.png" alt="">
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
									<option value="1">Category 01</option>
									<option value="1">Category 02</option>
								</select>
								<input class="input" placeholder="Search here">
								<button class="search-btn">Search</button>
							</form>
						</div>
					</div>
					<!-- /SEARCH BAR -->

					<!-- ACCOUNT -->
					<div class="col-md-3 clearfix">
						<div class="header-ctn">
							<!-- Wishlist -->
							<div style = "margin-right: 20%;">
								<a href="#" style="text-decoration: none;">
									<i class="fa fa-heart" id="heart"></i>
									<div class="qty">0</div>
								</a>
							</div>

							<!-- Cart -->
							<div class="dropdown" style = "margin-right: 20%;">
								<a style="text-decoration: none;" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
									<i class="fa fa-shopping-cart"></i>
									<div class="qty">0</div>
								</a>
								<div class="cart-dropdown">
									<div class="cart-list">
										<div class="product-widget">
											<div class="product-img">
												<img src="../immagini/img/product01.png" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-name"><a href="#">product name goes here</a></h3>
												<h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
											</div>
											<button class="delete"><i class="fa fa-close"></i></button>
										</div>
 
										<div class="product-widget">
											<div class="product-img">
												<img src="../immagini/img/product02.png" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-name"><a href="#">product name goes here</a></h3>
												<h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
											</div>
											<button class="delete"><i class="fa fa-close"></i></button>
										</div>
									</div>
									<div class="cart-summary">
										<small>3 Item(s) selected</small>
										<h5>SUBTOTAL: $2940.00</h5>
									</div>
									<div class="cart-btns">
										<a href="#">View Cart</a>
										<a href="#">Checkout <i class="fa fa-arrow-circle-right"></i></a>
									</div>
								</div>
							</div>
							<!-- /Cart -->

							<!-- User Toogle -->
							<div class="menu-toggle">
								<a href="#" style="text-decoration: none; width: 15%;">
									<i class="fa fa-user"></i>
								</a>
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
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
				  <span class="navbar-toggler-icon">
					  <i class="fa fa-navicon" style="color:white; font-size:28px"></i>
				  </span>
			  </button>
			  <div class="collapse navbar-collapse" id="mynavbar">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Home</a>
					  </li>
					  <!--<li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Hot Deals</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Categories</a>
					  </li>-->
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Laptops</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Smartphones</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Tvs</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Accessories</a>
					  </li>
				</ul>
			  </div>
			</div>
		  </nav>
	<!-- /SECTION -->
<!-------------------------GRUPPO--------------------------------------------->
	
	

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
				<div class="col-sm-6" id = "descrizione">
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
								<li><a href="#"><i class="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
								<li><a href="#"><i class="fa fa-phone"></i>+021-95-51-84</a></li>
								<li><a href="#"><i class="fa fa-envelope-o"></i>email@email.com</a></li>
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
								<li><a href="#">Contact Us</a></li>
								<li><a href="/lavoraConNoi/lavoraConNoi">Work with Us</a></li>
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

		<!-- bottom footer -->
		<div id="bottom-footer" class="section">
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12 text-center">
						<ul class="footer-payments">
							<li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
							<li><a href="#"><i class="fa fa-credit-card"></i></a></li>
							<li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
							<li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
							<li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
							<li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
						</ul>
					</div>
				</div>
					<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bottom footer -->
	</footer>
	<!-- /FOOTER -->
<!-------------------------GRUPPO--------------------------------------------->
	

</body>

    