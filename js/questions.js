var phrases = ["null", "null", "null"]; //ответы на вопросы

  function submit(){
    var date = document.dateForm.date.value.split('-');//массив с числом, месяцем и годом с поля дата 
    console.log(date);
    if(phrases[0] != "null" && phrases[1] != "null" && phrases[2] != "null"){ //проверка, ответил ли пользователь на все вопросы
      var docDefinition = { //формирование документа с нужными фразами из массива
      content: [
        {
      text: [
        'Ответ на первый вопрос:' + phrases[0] + '\n',
        {text: '  ', fontSize: 15, bold: true},
        'Ответ на второй вопрос' +phrases[1]+'\n',
        {text: '  ', fontSize: 20},
        'Ответ на третий вопрос' +phrases[2]+'\n',
        {text: ' ', fontSize: 20},
      ] 
    },
      ],  
    };
      pdfMake.createPdf(docDefinition).download(); //скачать сформированный файл
    } else {
      alert('Ответьте на все вопросы');
    }
  };

 function a_check(){ //первая группа вопросов
  var a=document.getElementsByName("a");
  if(a[0].checked){ //если отмечен первый вариант ответа
    // console.log("1.1");
    phrases[0] = "Да"; //в массив идет эта фраза
    console.log(phrases);
  }
  if(a[1].checked){ //если второй
    // console.log("1.2");
    phrases[0] = "Нет"; //эта
    console.log(phrases);
  }
 }

 function b_check(){ //вторая группа
  var b=document.getElementsByName("b");
  if(b[0].checked){
    phrases[1] = "Да"; 
    console.log(phrases);
  }
  if(b[1].checked){
    phrases[1] = "Нет"; 
    console.log(phrases); 
  }
 }

 function c_check(){ //третяя
  var c=document.getElementsByName("c");
  if(c[0].checked){
    phrases[2] = "Да"; 
    console.log(phrases);
  }
  if(c[1].checked){
    phrases[2] = "Нет"; 
    console.log(phrases);
  }
 }