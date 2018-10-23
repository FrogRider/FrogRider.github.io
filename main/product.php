<?php 
$id = $_GET['id']
?>

<!-- <link rel="stylesheet" href="css/main.css" /> -->
<script src = "js/products.json"></script>

<script>
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