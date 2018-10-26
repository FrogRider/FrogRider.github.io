// used in index.php, json included there

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
function emptys(a){
	for ( var empty_box = 0; empty_box < a; empty_box++){
		document.write('<div class = "imgtext">');
		document.write('</div>');
	}
}

for (var i = 1; i <= products.length; i++) {
	img = products[i-1].img;
        document.write('<div class = "imgtext">');
        document.write('<form action = "product.php" method = "_GET">');
        document.write('<a href = "product.php?id=' + i + '"><img src ="' + img + '"></a>');
        document.write('</form>');
        document.write('<span>' + products[i-1].name + '</span>');
        document.write('</div>');
}

if (count(products) === 3) emptys(3);
if (count(products) === 2) emptys(2);
if (count(products) === 1) emptys(1);




// <div class = "imgtext">
// <form action="product.php" method = "_GET">
// <div><a href="product.php?id=1"><img src="img/1.jpg" alt="alt"></a></div><!-- что бы сделать спан в ширину картинки- убрать обертку дива у имг -->
// </form>
// <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore.</span>
// </div>