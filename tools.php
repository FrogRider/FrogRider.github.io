<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

<head>

	<meta charset="utf-8" />

	<title>Master groomer</title>
	<meta content="" name="description" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<?php include ('font.php') ?>
	<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="libs/animate/animate.css" />
	<link href="https://fonts.googleapis.com/css?family=Spicy+Rice" rel="stylesheet">
	<link rel="stylesheet" href="css/main.css" />

</head>

<body>

	<div class="container">
		<header>
			<div class="row header">

					<div class="col-xs-12 col-md-4 logo">
						<h1> <a class = "text" href="index.php">Master groomer</a></h1>
					</div>
					<div class="col-xs-12 col-md-2 about">

					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text" href="index.php">Техника</a>
					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text here" href="tools.php">Инструменты</a>
					</div>
					<div class="col-xs-12 col-md-2 about">
						<a class="text" href="accessories.php">Аксесуары</a>
					</div>

			</div>
		</header>

		<div class="gallery">
			<script src = "js/tools-grid.json"></script>
			<script src = "js/tools-grid.js"></script>
		</div>

		<?php include ('footer.php') ?>
	</div>	
</body>
</html>