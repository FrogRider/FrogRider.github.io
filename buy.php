

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
		<?php $id = $_GET['id'] ?>
		<div class = "phone_number" style = "padding-top: 5%;">
		<h3 style = "text-align: center; background: #DBE7E5FF; border-radius: 3px">Для заказа товара заполните поля ниже, нажмите на кнопку 'Отправить' и ожидайте звонок для подтверждения заказа!</h3>
		</div>
		<div class="forma">
			<form action="buy.php" method="post" style = "margin-top: 4%;">
				<label for="lname"></label>
				<input type="text" id = "lname" name="msg" placeholder = 'Товар выбран!' disabled style = "text-align: center;"/>
				<label for="lname"></label>
				<input type="text" id = "lname" name="name" placeholder = "Укажите Ваше имя"  style = "text-align: center;"/>
				<label for="fname"></label>
				<input type="text" id = "fname" name="phone" placeholder = "Укажите Ваш номер телефона" pattern="\d\d\d\d\d\d\d\d\d\d*" style = "text-align: center;"/>
				<label for="lname"></label>
				<script src = "js/product-grid.json"></script>
				<script src = "js/tools-grid.json"></script>
				<script src = "js/accessories-grid.json"></script>
				<script>
					var name = '';
					var price = 0;
					var id = "<?php echo $id ?>";

					if(id.charAt(0) == 1){
						console.log('1');
						for (var i = 0; i < products.length; i++){
							if(products[i].id === id){
								tovar = products[i].name;
								price = products[i].price;
							}
						}
					}
					if(id.charAt(0) == 2){
						console.log('2');
						for (var i = 0; i < products_tools.length; i++){
							if(products_tools[i].id === id){
								tovar = products_tools[i].name;
								price = products_tools[i].price;
							}
						}
					}
					if(id.charAt(0) == 2){
						console.log('3');
						for (var i = 0; i < products_accessories.length; i++){
							if(products_accessories[i].id === id){
								tovar = products_accessories[i].name;
								price = products_accessories[i].price;
							}
						}
					}
					document.write('<input type="hidden" name="tovar"  value = "' + tovar + '">');
				</script>
				<input type="submit" value = "Отправить">
			</form>
		</div>

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
<?php
			$token = "789463521:AAF7Dpt3vt9kAqqx4C-M2k9IMPu5xpxWeoM";
			$chatid = "453482080"; 
			$phone = $_POST['phone'];
			$name =  $_POST['name'];
			$tovar = $_POST['tovar'];
			if (!empty($_POST['phone']) && !empty($_POST['name'])  && !empty($_POST['tovar'])) {//сюда из js передать название и цену

			$tbot = file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chatid."&text=".urlencode($name . "\n" .$phone . "\n" . "Хочет заказать " . $tovar)); 
			}
		?>
</body>

