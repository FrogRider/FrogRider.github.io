var products = [{
    img: "img/1.jpg",
    name: "Lorem ipsum.",
    id: "1"
}, {
    img: "img/2.jpg",
    name: "Lorem ipsum dolor sit.",
    id: "2"
}, {
	img: "img/3.jpg",
	name: "Lorem ipsum.",
	id: "3"
}, {
	img: "img/4.jpg",
	name: "Lorem ipsum dolor sit.",
	id: "4"
}, {
	img: "img/5.jpg",
	name: "Lorem ipsum.",
	id: "5"
}, {
	img: "img/6.jpg",
	name: "Lorem.",
	id: "6"
}, {
	img: "img/7.jpg",
	name: "Lorem ipsum dolor.",
	id: "7"
}, {
	img: "img/8.jpg",
	name: "Lorem ipsum.",
	id: "8"
}]

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