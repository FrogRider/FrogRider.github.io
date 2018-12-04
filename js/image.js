var picNumber = 0;
$(document).ready(function() { // Ждём загрузки страниц
	$(".image").click(function(){	// Событие клика на маленькое изображение
		// console.log($(this).attr('src'));
	  	var img = $(this); // Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(500); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(500);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
		$(".popup_img").click(function(){		   
			$(".popup").fadeOut(500);	
			setTimeout(function() {
			  $(".popup").remove();
			}, 800);
		});
	}); 

	// $(".image").onload(function(){console.log("image");})
});

// var getElems = function(tag){ //вытягивает содержимое всех экземпляров указанного тега (img/p/div....)
// 	var elem = document.getElementsByTagName(tag);
// 	var elems = [];
// 	for (var i = 0; i < elem.length; i++) {
// 		elems.push(elem[i].firstChild.data);
// 	}
// 	return elems;
// }
var imagesSrcs = [];
var images = document.getElementsByName("pic");
for (var i = 0; i < images.length; i++) {
	imagesSrcs.push(images[i].attributes.src.nodeValue)
}
var curentImage = "";
$(".image").click(function(){//смотрим, на какую картинку нажали и запоминаем ее номер, что бы с нее начать пролистывание
	var img = $(this);
	var src = img.attr('src');
	picNumber = imagesSrcs.indexOf(src);
	console.log("Pic num = " + picNumber);
}); 



$(document).keydown(function(e) { //closing at ESC
    if( e.keyCode > 0 && e.keyCode != 37 && e.keyCode != 39) {
        $(".popup").fadeOut(500)
			setTimeout(function() {	
			  $(".popup").remove();
			}, 800); 
    } else {
    	var key = e.keyCode;
    	// console.log(e);
    	
    	if (e.keyCode == 39){
    		picNumber++;
    		if(picNumber > imagesSrcs.length-1) {
						 	picNumber = 0;
						 }
    		document.getElementById("picture").remove();
    		$("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+imagesSrcs[picNumber]+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
						 $(".popup").fadeIn(0); 
						 // picNumber++;
						 

    	} else if (e.keyCode == 37){
    		picNumber--;
    		if(picNumber < 0) {
    			picNumber = imagesSrcs.length-1
    		}
    		document.getElementById("picture").remove();
    		$("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+imagesSrcs[picNumber]+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
						 $(".popup").fadeIn(0); 

    	}
    }
});

// .firstChild.data



