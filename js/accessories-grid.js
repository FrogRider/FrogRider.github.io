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
console.log(id);
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