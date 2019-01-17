              // 0       1       2       3       4       5       6       7       8
var phrases = ["null", "null", "null", "null", "null", "null", "null", "null", "null"]; //ответы на вопросы

var q6_arr = [];//тут собираются в кучу части одного из пунктов конечного PDF файла

  function submit(){
    var date = document.dateForm.date.value.split('-');//массив с числом, месяцем и годом с поля дата 
    // console.log(date);
    submit:    if(phrases[0] != "null" && phrases[1] != "null" && phrases[2] != "null" && phrases[3] != "null" && phrases[4] != "null" && phrases[5] != "null" && phrases[6] != "null" && phrases[7] != "null"){ //проверка, ответил ли пользователь на все вопросы
      if(phrases[7] == "Yes"){
        if(phrases[8] == "null") {console.log(8); alert("Ответьте на все вопросы"); break submit; }
      }
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
    },
    {
      text: '\n',
      style: '',
      alignment: ''
    },
    {
      text: '&main_6&',
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

    var q6_arr_build = function(place_in_phrases, text_file_path){ //тут все фразы, которые надо дописать в составной вопрос
      if(phrases[place_in_phrases] === "No"){
        q6_arr.push(get_text(text_file_path));
        console.log('masivchik: '+q6_arr);
      }
    }

    q6_arr_build(2, 'argues/arg6_2.txt');
    q6_arr_build(3, 'argues/arg6_3.txt');
    q6_arr_build(4, 'argues/arg6_5.txt');
    q6_arr_build(5, 'argues/arg6_4.txt');
    q6_arr_build(6, 'argues/arg6_6.txt');
    q6_arr_build(8, 'argues/arg6_7.txt');

    var space_replacer = function(){ // убирает оставшиеся без фраз места
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, "");
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, "");
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_3&/gim, "");
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_4&/gim, "");
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_5&/gim, "");
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_6&/gim, "");
    }

    if(q6_arr.length >= 1) { //проверка для начала формирования вопроса, состоящего из подпунктов
      docDefinition.content[6].text = docDefinition.content[6].text.replace(/&main_6&/gim, get_text('argues/arg6.txt'));
      console.log(q6_arr.length);
      var len = q6_arr.length;
      switch (len){
        case 1:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          space_replacer();
          break;
        case 2:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, q6_arr[1]);
          space_replacer();
          break;
        case 3:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_3&/gim, q6_arr[2]);
          space_replacer();
          break;
        case 4:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_4&/gim, q6_arr[3]);
          space_replacer();
          break;
        case 5:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_4&/gim, q6_arr[3]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_5&/gim, q6_arr[4]);
          space_replacer();
          break;
        case 6:
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_4&/gim, q6_arr[3]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_5&/gim, q6_arr[4]);
          docDefinition.content[6].text = docDefinition.content[6].text.replace(/&6_6&/gim, q6_arr[5]);
          break;
      }
    }
      pdfMake.createPdf(docDefinition).download(); //скачать сформированный файл
      docDefinition.content[2].text = "&q1&";
      docDefinition.content[4].text = "&q2&"

    } else {
      alert('Ответьте на все вопросы');
    }
  };

 function q1_check(){ //первая группа вопросов
  var q1=document.getElementsByName("q1");
  if(q1[0].checked){ //если отмечен первый вариант ответа
    phrases[0] = "Yes"; //в массив идет эта фраза
    console.log(phrases);
  }
  if(q1[1].checked){ //если второй
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

  function q4_check(){
  var q4=document.getElementsByName("q4");
  if(q4[0].checked){
    phrases[3] = "Yes"; 
    console.log(phrases);
  }
  if(q4[1].checked){
    phrases[3] = "No"; 
    console.log(phrases);
  }
 }

  function q5_check(){
  var q5=document.getElementsByName("q5");
  if(q5[0].checked){
    phrases[4] = "Yes"; 
    console.log(phrases);
  }
  if(q5[1].checked){
    phrases[4] = "No"; 
    console.log(phrases);
  }
 }

  function q6_check(){
  var q6=document.getElementsByName("q6");
  if(q6[0].checked){
    phrases[5] = "Yes"; 
    console.log(phrases);
  }
  if(q6[1].checked){
    phrases[5] = "No"; 
    console.log(phrases);
  }
 }

  function q7_check(){
  var q7=document.getElementsByName("q7");
  if(q7[0].checked){
    phrases[6] = "Yes"; 
    console.log(phrases);
  }
  if(q7[1].checked){
    phrases[6] = "No"; 
    console.log(phrases);
  }
 }

  function q8_check(){
  var q8=document.getElementsByName("q8");
  if(q8[0].checked){
    phrases[7] = "Yes"; 
    console.log(phrases);
  }
  if(q8[1].checked){
    phrases[7] = "No"; 
    phrases[8] = "null";
    document.getElementById("radio19").checked=false;
    document.getElementById("radio20").checked=false;
    console.log(phrases);
  }
 }

  function q9_check(){
  var q9=document.getElementsByName("q9");
  if(q9[0].checked){
    phrases[8] = "Yes"; 
    console.log(phrases);
  }
  if(q9[1].checked){
    phrases[8] = "No"; 
    console.log(phrases);
  }
 }