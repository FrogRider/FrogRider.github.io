var phrases = ["null", "null", "null"]; //ответы на вопросы

  function submit(){
    console.log('фразы: '+phrases);
    var date = document.dateForm.date.value.split('-');//массив с числом, месяцем и годом с поля дата 
    console.log(date);
    if(phrases[0] != "null" && phrases[1] != "null" && phrases[2] != "null"){ //проверка, ответил ли пользователь на все вопросы
      var docDefinition = { //формирование документа с нужными фразами из массива
      content: [
    {
      text: 'АДМІНІСТРАТИВНИЙ ПОЗОВ',
      style: 'header',
      alignment: 'center'
    },
    {
      text: 'про скасування постанови про накладення адміністративного стягнення\n\n',
      style: 'subheader',
      alignment: 'center'
    },
    {
      text: '&q1&',
      style: '',
      alignment: ''
    },
    {
      text: '\n',
      style: '',
      alignment: ''
    },
    {
      text: '&q2&',
      style: '',
      alignment: ''
    }
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      alignment: 'justify'
    },
    subheader: {
      fontSize: 14,
      bold: true,
      alignment: 'justify'
    }
  }
    };
    if(phrases[0] === "No"){
      docDefinition.content[2].text = docDefinition.content[2].text.replace(/&q1&/gim, get_text('argues/arg3.txt'));
    }else{
      docDefinition.content[2].text = " ";
    }

    if(phrases[1] === "No"){
      docDefinition.content[4].text = docDefinition.content[4].text.replace(/&q2&/gim, get_text('argues/arg5.txt'));
    }else{
      docDefinition.content[4].text = " ";
    }
    // console.log(docDefinition.content[0].text);
      pdfMake.createPdf(docDefinition).download(); //скачать сформированный файл
      docDefinition.content[2].text = "&q1&";
      docDefinition.content[4].text = "&q2&"
    } else {
      alert('Ответьте на все вопросы');
    }
  };

 function check(){
  q1_check();
  q2_check();
  q3_check();
 }
 function q1_check(){ //первая группа вопросов
  var q1=document.getElementsByName("q1");
  if(q1[0].checked){ //если отмечен первый вариант ответа
    // console.log("1.1");
    phrases[0] = "Yes"; //в массив идет эта фраза
    console.log(phrases);
  }
  if(q1[1].checked){ //если второй
    // console.log("1.2");
    phrases[0] = "No" //эта
    console.log(phrases);
  }
 }

 function q2_check(){ //вторая группа
  var q2=document.getElementsByName("q2");
  if(q2[0].checked){
    phrases[1] = "Yes"; 
    console.log(phrases);
  }
  if(q2[1].checked){
    phrases[1] = "No"; 
    console.log(phrases); 
  }
 }

 function q3_check(){ //третяя
  var q3=document.getElementsByName("q3");
  if(q3[0].checked){
    phrases[2] = "Yes"; 
    console.log(phrases);
  }
  if(q3[1].checked){
    phrases[2] = "No"; 
    console.log(phrases);
  }
 }