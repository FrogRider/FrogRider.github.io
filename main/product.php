<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

<head>

	<meta charset="utf-8" />

	<title>Заголовок</title>
	<meta content="" name="description" />

	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge" /> -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="libs/animate/animate.css" />

	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/media.css" />

</head>

<body>
	<?php 
$id = $_GET['id']
?>

	<div class="container">
		<header>
			<div class="row header">

					<div class="col-xs-12 col-md-4 logo">
						<h1> <a class = "text" href="index.php">Мастер грумер</a></h1>
					</div>
					<!-- <div class="col-xs-0 col-md-4">
							
					</div> -->
					<div class="col-xs-12 col-md-2 about">
						<a class="text" href="contacts.html">Контакты</a>
					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text here" href="#">Техника</a>
					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text" href="#">Инструменты</a>
					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text" href="#">Аксесуары</a>
					</div>

			</div>
		</header>

		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-70" src="img/2.jpg" alt="First slide" style="width: 400px; margin: 0 auto">
			</div>
			<div class="carousel-item">
				<img class="d-block w-70" src="img/1.jpg" alt="Second slide" style="width: 400px; margin: 0 auto">
			</div>
			<div class="carousel-item">
				<img class="d-block w-70" src="img/3.jpg" alt="Third slide" style="width: 400px; margin: 0 auto">
			</div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
		</div>

		<div class="texter">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos fugiat modi harum, facere iusto. Delectus corrupti, cupiditate natus quibusdam.</p>
		</div>

		<footer>
			<hr>
			<div class="row">
				<div class="col-md-2 about copyright ">
					<h6>©2018 MasterGroomer</h6>
				</div>
				<div class="col-md-6">
					<a class="text" href="#"></a>
				</div>
				<div class="col-md-2 about">
					<a class="text" href="pay.html">Оплата</a>
				</div>
				<div class="col-md-2 about">
					<a class="text" href="#">Доставка</a>
				</div>
			</div>
		</footer>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>




