<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<!-- Termini accentati -->
	<meta charset="utf-8">
	
	<!-- Favicon -->
	<link rel="icon" href="../images/index/logo.png" type="image/x-icon"/>
	
	<!-- Titolo -->
	<title>View reports</title>
	
	<!-- CSS -->
	<link href="css/admin/report.css" rel="stylesheet" type="text/css" />
	
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>	

	<!-- JS -->
	<script src="js/admin/report_visualizzaCV/pulsanteCancella.js"></script>
	<script src="js/admin/report/report.js"></script>
	<script src="js/admin/report/chiamateAjax.js"></script>

	<!--AJAX ha la dipendenza nel pom -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	
<!------------------------GRUPPO-------------------------------------------->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<link type="text/css" rel="stylesheet" href="css/admin/adminPage.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
		integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
		crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
<!------------------------GRUPPO-------------------------------------------->	
	
</head>
<body>

<!------------------------GRUPPO-------------------------------------------->	

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
							<a href="/" class="logo">
								<img id="logo" src="../images/index/logo.png" alt="">
							</a>
						</div>
					</div>
					<!-- /LOGO -->

					<!-- ACCOUNT -->
					<div class="col-md-9">
						<div class="header-ctn">
							<div style="padding-right: 3%; margin-top: 3%" id="firstElement">
								<a href="/visualizzaPosizioniLavoro" style="text-decoration: none;">
									<i class="fas fa-user-plus" id="positions"></i>
								</a>
							</div>
							<div style="padding-right: 3%; margin-top: 3%" id="firstElement">
								<a href="/visualizzaCurriculum" style="text-decoration: none;">
									<i class="fas fa-book-open" id="curriculum"></i>
								</a>
							</div>							
							<!-- Wishlist -->
							<div style="padding-right: 3%; margin-top: 3%">
								<a href="addProduct" style="text-decoration: none;">
									<i class="fas fa-cart-plus" id="add"></i>
									<!--<div class="qty">0</div>-->
								</a>
							</div>

							<div style="padding-right: 3%; margin-top: 3%">
								<a href="#" style="text-decoration: none;">
									<i class="fas fa-trash" id="trash"></i>
									<!--<div class="qty">0</div>-->
								</a>
							</div>
							
							<!-- Cart -->
							<div style="padding-right: 3%; margin-top: 3%">
								<a href="#" style="text-decoration: none;">
									<i class="fas fa-users"></i>
									<!--<div class="qty">0</div>-->
								</a>
							</div>
							<!-- /Cart -->

							<!-- User Toogle -->
							<div style="padding-right: 3%; margin-top: 3%">
								<a href="returnRequests" style="text-decoration: none;">
									<i class="fas fa-truck-loading"></i>
								</a>
							</div>

							<div style= "margin-top: 3%">
								<a href="account.html" style="text-decoration: none;">
									<i class="fas fa-sign-out-alt"></i>
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

<!------------------------GRUPPO-------------------------------------------->	

<!------------------------FABIO-------------------------------------------->

		<h1 id = "titolo">All report received</h1>
		<table id="tabella" class="table table-borderless">
			<thead>
				<tr>
					<th data-title = "Select deselect all"><input type="checkbox" id = "checkBoxTh" onchange = "checkBoxTh()" /></th>
					<th id = "origineProblema">Origin problem</th>
					<th id = "descrizioneProblema">Description</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${report}" var="rep">
					<tr>
						<td data-title = "Select deselect"><input id="${rep.id}" type="checkbox" class = "report" /></td>
						<td data-title = "Origin">${rep.problem_origin}</td>
						<td data-title = "Problem">${rep.description}</td>
					</tr>
				</c:forEach>					
			</tbody>
		</table>
		
		<br/>
		<div id = "pulsanti">
			<input class="btn btn-danger" id="btnCancella" type="button" value="Delete report" />
		</div>
		<br/><br/>

<!------------------------FABIO-------------------------------------------->

<!------------------------GRUPPO-------------------------------------------->	

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
								<li><a href="/contactUs">Contact Us</a></li>
								<li><a href="/workWithUs/workInCompany">Work with Us</a></li>
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
								<li><a href="/customerSupport">Customer Support</a></li>
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
	
<!------------------------GRUPPO-------------------------------------------->	

</body>
</html>