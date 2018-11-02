var name = '';
var price = 0;
var id = "<?php echo $id ?>";
var tovar = "";
var price = "";

if(id.charAt(0) == 1){
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
if(id.charAt(0) == 3){
	for (var i = 0; i < products_accessories.length; i++){
		if(products_accessories[i].id === id){
			tovar = products_accessories[i].name;
			price = products_accessories[i].price;
		}
	}
}
if(id.charAt(0) == 3 && id.charAt(2) == 1){
	for (var i = 0; i < caps.length; i++){
		if(caps[i].id === id){
			tovar = caps[i].name;
			price = caps[i].price;
		}
	}
}
if(id.charAt(0) == 3 && id.charAt(2) == 2){
	for (var i = 0; i < knifes.length; i++){
		if(knifes[i].id === id){
			tovar = knifes[i].name;
			price = knifes[i].price;
		}
	}
}
if(id.charAt(0) == 3 && id.charAt(2) == 3){
	for (var i = 0; i < other.length; i++){
		if(other[i].id === id){
			tovar = other[i].name;
			price = other[i].price;
		}
	}
}
document.write('<input type="hidden" name="tovar"  value = "' + tovar + '"');


// <input type="hidden" name="tovar"  value = "tovar">