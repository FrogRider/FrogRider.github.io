const name = document.querySelector('#form_name').value,
            phone = document.querySelector('#form_phone').value;

//update this with your js_form selector
var form_id_js = "order_form";

var data_js = {
  "access_token": "dsgxn0gstugfbbubu7ksfa96"
};

function js_onSuccess() {
  alert('Заказ принят!');

}

function js_onError(error) {
  // remove this to avoid redirect
  alert('Ошибка, попробуйте еще раз')
}

var sendButton = document.getElementById("send");

function js_send() {
  if (name != '' && phone != '') {
    sendButton.value = 'Sending…';
    sendButton.disabled = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        js_onSuccess();
      } else
      if (request.readyState == 4) {
        js_onError(request.response);
      }
    };

    var subject = "Покупка с сайта";
    var message = `Имя: ${name} \n Телефон: ${phone}`;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
  }
}


sendButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
  }

  return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function(e) {
  e.preventDefault();
});
