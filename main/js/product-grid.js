// used in index.php, json included there

var img = "no-image.png";
var name = "null";

var id = "<?php echo $id ?>";

for (var i = 1; i <= products.length; i++) {
    
        document.write('<div class = "imgtext">');
        document.write('<form action = "product.php" method = "_GET">');
        document.write('<a href = "product.php?id=' + i + '"><img src ="' + products[i-1].img + '"></a>');
        document.write('</form>');
        document.write('<span>' + products[i-1].name + '</span>');
        document.write('</div>')
    
}

// <div class = "imgtext">
// <form action="product.php" method = "_GET">
// <div><a href="product.php?id=1"><img src="img/1.jpg" alt="alt"></a></div><!-- что бы сделать спан в ширину картинки- убрать обертку дива у имг -->
// </form>
// <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore.</span>
// </div>