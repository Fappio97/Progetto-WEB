<head>	
<!------------------------CSS FABIO-------------------------------------------->
	<link href="../css/guidaSceltaProdotto/guidaSceltaProdotto.css" rel="stylesheet" type="text/css" />

<!------------------------GRUPPO-------------------------------------------->	
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<link type="text/css" rel="stylesheet" href="css/index/style.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
	
</head>

<body>

	<!-- HEADER -->
	<header>
		<!-- TOP HEADER -->
		<div id="top-header">
			<div class="container">
				<ul class="header-links pull-left">
					<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
					<li><a href="#"><i class="fa fa-envelope"></i> email@email.com</a></li>
					<li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					<li><a href="#"><i class="fa fa-eur"></i> EUR</a></li>
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
							<a href="#" class="logo">
								<img id = "logo" src="immagini/img/logo.png" alt="">
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
								</select>
								<input class="input" placeholder="Search here">
								<button class="search-btn">Search</button>
							</form>
						</div>
					</div>
					<!-- /SEARCH BAR -->

					<!-- ACCOUNT -->
					<div class="col-md-3">
						<div class="header-ctn">
							<!-- Wishlist -->
							<div style = "padding-right: 10%; padding-left: 25%;">
								<a href="#" style="text-decoration: none;">
									<i class="fa fa-heart" id="heart"></i>
									<!--<div class="qty">0</div>-->
								</a>
							</div>

							<!-- Cart -->
							<div style = "padding-right: 10%;">
								<a href="#" style="text-decoration: none;">
									<i class="fa fa-shopping-cart"></i>
									<!--<div class="qty">0</div>-->
								</a>
							</div>
							<!-- /Cart -->

							<!-- User Toogle -->
							<div>
								<a href="account.html" style="text-decoration: none;">
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
    <div class="section">
	<!-- container -->
	<div class="container">
		<!-- row -->
		<div class="row">
			<!-- shop -->
			<div class="col-md-4 col-xs-6">
				<div class="shop">
					<div class="shop-img">
						<img src="./img/shop01.png" alt="">
					</div>
					<div class="shop-body">
						<h3>Laptops<br>Collection</h3>
						<a style="text-decoration: none;" href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- /shop -->

			<!-- shop -->
			<div class="col-md-4 col-xs-6">
				<div class="shop">
					<div class="shop-img">
						<img src="./img/shop03.png" alt="">
					</div>
					<div class="shop-body">
						<h3>Accessories<br>Collection</h3>
						<a style="text-decoration: none;" href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- /shop -->

			<!-- shop -->
			<div class="col-md-4 col-xs-6">
				<div class="shop">
					<div class="shop-img">
						<img src="./img/shop02.png" alt="">
					</div>
					<div class="shop-body">
						<h3>TVs<br>Collection</h3>
						<a style="text-decoration: none;" href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- /shop -->
		</div>
		<!-- /row -->
	</div>
	<!-- /container -->
</div>
<!-- /SECTION -->

	<!-- HOT DEAL SECTION -->
	<div id="hot-deal" class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<div class="col-md-12">
					<div class="hot-deal">
						<ul class="hot-deal-countdown">
							<li>
								<div>
									<h3>02</h3>
									<span>Days</span>
								</div>
							</li>
							<li>
								<div>
									<h3>10</h3>
									<span>Hours</span>
								</div>
							</li>
							<li>
								<div>
									<h3>34</h3>
									<span>Mins</span>
								</div>
							</li>
							<li>
								<div>
									<h3>60</h3>
									<span>Secs</span>
								</div>
							</li>
						</ul>
						<h2 class="text-uppercase">hot deal this week</h2>
						<p>New Collection Up to 50% OFF</p>
						<a style="text-decoration: none;" class="primary-btn cta-btn" href="#">Shop now</a>
					</div>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /HOT DEAL SECTION -->
	
	<div class="container">
		<div class="row my-5">
			<h1 class="text-center">Featured Products</h1>
			<p class="fw-light w-75 mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
				 expedita placeat enim laudantium esse aperiam iure, reiciendis nobis 
				 totam earum ex unde ab, ullam pariatur nisi laborum quam. Porro, corporis!</p>
		</div>
		<div class="row g-4 my-5 mx-auto owl-carousel owl-theme">
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product01.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product02.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product03.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product04.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product05.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product06.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product07.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product08.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
			<div class="col product-item mx-auto">
				<div class="product-img">
					<img src="img/product09.png" alt = "" class="img-fluid d-block mx-auto">
					<span class="heart-icon">
						<i class="far fa-heart"></i>
					</span>
					<div class="row btns w-100 mx-auto text-center">
						<button type="button" class="col-6 py-2">
							<i class="fa fa-cart-plus"></i>add to Cart
						</button>
						<button type="button" class="col-6 py-2">
							<i class="fa fa-binoculars"></i>View
						</button>
					</div>
				</div>
				<div class="product-info p-3">
					<span class="product-type">
						Electronics & accessories
					</span>
					<a href="#" class="d-block text-dark text-decoration-none py-2 product-name">pc windows</a>
					<span class="product-price">€ 100.50</span>
					<div class="rating d-flex mt-1">
						<span>
							<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>
							<i class="fa fa-star"></i>
						</span>
						<span>(25 reviews)</span>
					</div>
				</div>	
			</div>
		</div>
	</div>

<!------------------------------INIZIO---FABIO--------------------------------->	
	<!-- Spazio ai lati -->
	<div class="container container--grid" id = "divSceltaProdotto">
		<!-- Mi crea una riga dove metto i due div -->
		<div class="row" id = "serveAiuto"> 
			<div class="col-sm-8 p-3 bg-primary text-white" >
				<p class = "titolo">Need help choosing the perfect product for you?</p>
			</div>
    		<div class="col-sm-4 p-3 bg-primary text-white" id = "linkSelezionaProdotto">
    			
    			<a class="clearfix" href="guidaSceltaProdotto/guidaProdotto">
    				<button class ="button" >Select your product</button>	
    			</a>
    	<!--	<a href="guidaSceltaProdotto/guidaProdotto" class="btn btn-light" stretched-link">Seleziona il tuo prodotto</a>  -->
    		</div>    
    	</div>
	</div>	
	<br />
<!------------------------------FINE-----FABIO--------------------------------->	

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
								<li><a href="/lavoraConNoi/presentazioneAzienda">Work with Us</a></li>
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

</body>