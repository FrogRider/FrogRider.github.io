<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

<head>

	<meta charset="utf-8" />

	<title>Master groomer</title>
	<meta content="" name="description" />

	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge" /> -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	
	<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="libs/animate/animate.css" />
	<?php include ('font.php') ?>
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/contacts.css" />

</head>
<body>
	<div class="container">
		<?php include ('header.php') ?>
		<div class = "phone_number" style = "padding-top: 5%;">
		<h3 style = "text-align: center; background: #DBE7E5FF; border-radius: 3px">Связаться с нами Вы можете по номеру телефона 0970337784, либо при помощи формы обратной связи:</h3>
		</div>
		<div class="forma">
			<form action="contacts.php" method="post" style = "margin-top: 4%;">
				<label for="lname"></label>
				<input type="text" id = "lname" name="name" placeholder = "Укажите Ваше имя"  style = "text-align: center;"/>
				<label for="fname"></label>
				<input type="text" id = "fname" name="phone" placeholder = "Укажите Ваш номер телефона" pattern="\d*" style = "text-align: center;"/>
				<label for="lname"></label>
				<input type="text" id = "lname" name="msg" placeholder = "Напишите Ваш вопрос"  style = "text-align: center;"/>
				<label for="lname"></label>
				<input type="submit" value = "Отправить"/>
			</form>
		</div>

		<?php include ('telegram.php')?>
		<footer>
			<hr>
			<div class="row foott">
				<div class="col-md-2 about copyright ">
					<h6>©2018 MasterGroomer</h6>
				</div>
				<div class="col-md-4">

				</div>
				<div class="col-md-2 about">
					<a class="text here" href="pay.php">Контакты</a>
				</div>
				<div class="col-md-2 about">
					<a class="text" href="pay.php">Оплата</a>
				</div>
				<div class="col-md-2 about">
					<a class="text" href="delivery.php">Доставка</a>
				</div>
			</div>
		</footer>
	
</div>
</body>