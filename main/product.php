<?php 
$id = $_GET['id']
?>

<!-- <link rel="stylesheet" href="css/main.css" /> -->

<script>
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

var img = "img/no-image.png";
var name = "null";

var id = "<?php echo $id ?>";

id: for (var i = 0; i < products.length; i++) {
    if (id === products[i].id) {
    	name = products[i].name;
    	img = products[i].img; 
        break id;
    }
}
        document.write('<img src ="' + img + '">');
        document.write('<span>' + name + '</span>');  
</script>