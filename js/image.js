$(document).ready(function() { // Ждём загрузки страниц
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
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
});
$(document).keydown(function(e) { //closing at ESC
    if( e.keyCode > 0) {
        $(".popup").fadeOut(500)
			setTimeout(function() {	
			  $(".popup").remove();
			}, 800); 
    } else {
    	var key = e.keyCode;
    	console.log(e);
    }
});

var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}


