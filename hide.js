function hide (){
		document.getElementById('inviz').style.visibility="hidden";
		document.getElementById('viz').style.visibility="visible";
		setTimeout(show, 240000);
	}
	function show (){
		document.getElementById('inviz').style.visibility="visible";
	}