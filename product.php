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
	<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="libs/animate/animate.css" />
	<?php include ("font.php") ?>
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/slider.css" />
</head>

<body>

	<div class="container">
		<?php include ('header.php') ?>

		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
		<div class="carousel-inner">
<?php $id = $_GET['id'] ?>
<script src = "js/product-grid.json"></script>
<!-- <script src = "js/tools-grid.json"></script> -->
<script> 

var img1 = "img/no-image.gif";
  var img2 = "img/no-image.gif";
  var img3 = "img/no-image.gif";
  var price = "Цену уточняйте.";
  var name = "Название временно отсутствует."
  var description = "На данный момент описание отсутствует. Просим прощения за неудобство.";
  var id = "<?php echo $id ?>";
  console.log(id);
  if (id.charAt(0)) {
 id: for (var i = 0; i < products.length; i++) {
     if (id === products[i].id) {

      if (products[i].img !== ""){
	      img1 = products[i].img; 
	  }
	  if (products[i].img2 !== ""){
	      img2 = products[i].img2; 
	  }
	  if (products[i].img3 !== ""){
	      img3 = products[i].img3; 
	  }
	  if (products[i].description !== ""){
	      description = products[i].description; 
	  }
	  if (products[i].name !== ""){
	      name = products[i].name; 
	  }
	  if (products[i].price !== ""){
	      price = products[i].price; 
	  }
         break id;
     }
 }

 	if (products[i].id !== ""){
         document.write('<div class = "carousel-item active" style = "margin-top: 30px;">');
         document.write('<img class = "d-block w-70" src = "' + img1 + '"alt = "First slide" style="width: 400px; margin: 0 auto">');
         document.write('</div>');
         document.write('<div class = "carousel-item" style = "margin-top: 30px;">');
         document.write('<img class = "d-block w-70" src = "' + img2 + '"alt = "Second slide" style="width: 400px; margin: 0 auto">');
         document.write('</div>');
         document.write('<div class = "carousel-item" style = "margin-top: 30px;">');
         document.write('<img class = "d-block w-70" src = "' + img3 + '"alt = "Third slide" style="width: 400px; margin: 0 auto">');
         document.write('</div>');
         document.write('</div>');
         document.write('<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">');
         document.write('<span class="carousel-control-prev-icon" aria-hidden="true"></span>');
         document.write('<span class="sr-only">Previous</span>');
         document.write('</a>');

         document.write('<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">');
         document.write('<span class="carousel-control-next-icon" aria-hidden="true"></span>');
         document.write('<span class="sr-only">Next</span>');
         document.write('</a>');
         document.write('</div>');

         document.write('<div class = "name_price_descr">')
         document.write('<p class = "product_name" style = "text-align: center;">'+ name + '</p>');

        document.write('<div style = "text-align:center;">')
         document.write('<form action = "buy.php" method = "_GET">');
         document.write('<a class = "buy_btn" href = "buy.php?id=' + id + '">Купить</a>');
         document.write('</form>')
         document.write('</div>')


         document.write('<p class = "product_price" style = "padding-top:30px"><b>Цена:</b> '+ price + '</p><hr>');
         document.write('<p class = "product_description">'+ description + '</p>');
         document.write('</div>');
         //___________________________________________

     } else {
     	document.write('<img src = "' + img1 + '">');
     }
}
 

</script>

		<?php include ('footer.php') ?>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>




