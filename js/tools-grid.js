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
function emptys(a){//рисует пустые дивы, которыми дозаполняется ряд
	for ( var empty_box = 0; empty_box < a; empty_box++){
		document.write('<div class = "imgtext"></div>');
	}
}

  for (var i = 1; i <= products_tools.length; i++) {//заполняет сттраницу всеми товарами из массива
          if ((products_tools[i-1].img) !== ""){
            img = products_tools[i-1].img
          }
          document.write('<div class = "imgtext">');
          document.write('<form action = "product.php" method = "_GET">');
          document.write('<a href = "tool.php?id=' + products_tools[i-1].id + '"><img src ="' + img + '"></a>');
          document.write('</form>');
          document.write('<span>' + products_tools[i-1].name + '</span>');
          document.write('</div>');
  }

  if (count(products_tools) === 3) emptys(3);
  if (count(products_tools) === 2) emptys(2);
  if (count(products_tools) === 1) emptys(1);
