var name = '';
var price = 0;
var id = "<?php echo $id ?>";

if(id.charAt(0) == 1){
	console.log('+');
	for (var i = 0; i < products.length; i++){
		if(products[i].id === id){
			tovar = products[i].name;
			price = products[i].price;
		}
	}
}
if(id.charAt(0) == 2){
	for (var i = 0; i < products_tools.length; i++){
		if(products_tools[i].id === id){
			tovar = products_tools[i].name;
			price = products_tools[i].price;
		}
	}
}
if(id.charAt(0) == 2){
	for (var i = 0; i < products_accessories.length; i++){
		if(products_accessories[i].id === id){
			tovar = products_accessories[i].name;
			price = products_accessories[i].price;
		}
	}
}
document.write('<input type="hidden" name="tovar"  value = "' + tovar + '"');


// <input type="hidden" name="tovar"  value = "tovar">