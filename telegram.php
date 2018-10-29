<?php

			$token = "789463521:AAF7Dpt3vt9kAqqx4C-M2k9IMPu5xpxWeoM";
			$chatid = "453482080"; 
			$msg = $_POST['msg']; 
			$phone = $_POST['phone'];
			$name =  $_POST['name'];
			if (!empty($_POST['phone']) && !empty($_POST['msg'])  && !empty($_POST['name'])) {

			$tbot = file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chatid."&text=".urlencode($name . "\n" .$phone . "\n" . "\n" . $msg)); 

			}

		?>