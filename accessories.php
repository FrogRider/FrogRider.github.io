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
	<?php include ('font.php') ?>
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/media.css" />

</head>

<body>
<?php $id = $_GET['id'] ?>
	<div class="container">
		<?php include ('header.php') ?>
		<?php $id = $_GET['id'] ?>
		<div class="gallery">
			<script src = "js/caps-grid.json"></script>
			<script src = "js/knifes-grid.json"></script>
			<script src = "js/other-grid.json"></script>
			<script>
				
				var img = "img/no-image.gif";
				var name = "null";

				  var id = "<?php echo $id ?>";

				 function count(obj) { //сколько товаров не хватает до полной строки
				          var count = 0; 
				          for(var i in obj) 
				          { 
				                   if(obj.hasOwnProperty(i)) count++;
				    	  } 
				          return 4-(count %4); 
				}
				function emptys(a){//рисует пустые дивы, которыми дозаполняется ряд
					for ( var empty_box = 0; empty_box < a; empty_box++){
						document.write('<div class = "imgtext"></div>');
					}
				}
				if ( id == "cap") {
				    console.log("cap");
				  for (var i = 1; i <= caps.length; i++) {//заполняет сттраницу всеми товарами из массива
				          if ((caps[i-1].img) !== ""){
				            img = caps[i-1].img
				          }
				          document.write('<div class = "imgtext">');
				          document.write('<form action = "accessory.php" method = "_GET">');
				          document.write('<a href = "accessory.php?id=' + caps[i-1].id + '"><img src ="' + img + '"></a>');
				          document.write('</form>');
				          document.write('<span>' + caps[i-1].name + '</span>');
				          document.write('</div>');
				  }
				  if (count(caps) === 3) emptys(3);
				  if (count(caps) === 2) emptys(2);
				  if (count(caps) === 1) emptys(1);
				}

				if ( id == "knife") {
				  console.log("knife");
				  for (var i = 1; i <= knifes.length; i++) {//заполняет сттраницу всеми товарами из массива
				          if ((knifes[i-1].img) !== ""){
				            img = knifes[i-1].img
				          }
				          document.write('<div class = "imgtext">');
				          document.write('<form action = "accessory.php" method = "_GET">');
				          document.write('<a href = "accessory.php?id=' + knifes[i-1].id + '"><img src ="' + img + '"></a>');
				          document.write('</form>');
				          document.write('<span>' + knifes[i-1].name + '</span>');
				          document.write('</div>');
				  }
				  if (count(knifes) === 3) emptys(3);
				  if (count(knifes) === 2) emptys(2);
				  if (count(knifes) === 1) emptys(1);
				}

				if ( id == "other") {
				    console.log("other");
				  for (var i = 1; i <= other.length; i++) {//заполняет сттраницу всеми товарами из массива
				          if ((other[i-1].img) !== ""){
				            img = other[i-1].img
				          }
				          document.write('<div class = "imgtext">');
				          document.write('<form action = "accessory.php" method = "_GET">');
				          document.write('<a href = "accessory.php?id=' + other[i-1].id + '"><img src ="' + img + '"></a>');
				          document.write('</form>');
				          document.write('<span>' + other[i-1].name + '</span>');
				          document.write('</div>');
				  }
				  if (count(other) === 3) emptys(3);
				  if (count(other) === 2) emptys(2);
				  if (count(other) === 1) emptys(1);
				}
			</script>
		</div>

	<div style = "margin-top: 33%">
		<?php include ('footer.php') ?></div>
	</div>


	
</body>
</html>