              // 0       1       2       3       4       5       6       7       8       9
var phrases = ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"]; //ответы на вопросы

var ukr = 1;

var userInfo = [{
  date:"",
  postanovaNumber:"",
  car:"",
  carNumber:"",
  carYear:"",
  address:"",
  speed:"",
  courtAddress:"",
  courtIndex:"",
  courtTown:"",
  courtStreet:"",
  pozivFirsLastSurName:"",
  ipn:"",
  pozivIndex:"",
  pozivTown:"",
  pozivStreet:"",
  pozivAnotherComunications:"",
  vidpovidOtdelenie:"",
  vidpovidach:"",
  vidpovidIndex:"",
  vidpovidTown:"",
  vidpovidStreet:"",
  vidpovidAnotherComaunications:""
}]

var q6_arr = [];//тут собираются в кучу части одного из пунктов конечного PDF файла

var dateArgs = [null, null];

var error = function(opt1, opt2){
  const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-primary',
    buttonsStyling: false,
  })

  swalWithBootstrapButtons.fire({
    title: opt1,
    background: '#D0D5DBFF',
    type: 'error',
    confirmButtonText: opt2,
  })
}

var success = function(opt1, opt2){
  const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-primary',
    buttonsStyling: false,
  })

  swalWithBootstrapButtons.fire({
    title: opt1,
    background: '#D0D5DBFF',
    type: 'success',
    confirmButtonText: opt2,
  })
}

var caution = function(opt1, opt2){
  const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-primary',
    buttonsStyling: false,
  })

  swalWithBootstrapButtons.fire({
    title: opt1,
    background: '#D0D5DBFF',
    type: 'warning',
    confirmButtonText: opt2,
  })
}

var firstDownload = true;

function submit(){
  if( !firstDownload){
    success('Ваш файл вже завантажено', 'Ok')
    return false;
  }
    var submiter = true;
      firstDownload = false;
      
    if(phrases[0] === "Yes"){
      delete docDefinition.content[6];
    }

    if(phrases[1] === "Yes"){
      delete docDefinition.content[7];
    }

    var q6_arr_build = function(place_in_phrases, text_file_path){ //тут все фразы, которые надо дописать в составной вопрос
      if(phrases[place_in_phrases] === "No"){
        q6_arr.push(get_text(text_file_path));
      }
    }

    for(i=2; i<7; i++){
      q6_arr_build(i, `argues/arg6_${i}.txt`);
    }
    q6_arr_build(8, 'argues/arg6_7.txt');

    var spaceReplacer = function(arr){
      var par = (6 - arr.length) * 2;
      if(arr.length <= 5){
        for(par; par > 0; par--){
          delete docDefinition.content[8].text[16-par] ;
        }
      }
    }

    if(q6_arr.length >= 1) { //проверка для начала формирования вопроса, состоящего из подпунктов
      docDefinition.content[8].text[1] = docDefinition.content[8].text[1].replace(/&main_6P1&/gim, get_text('argues/arg6.txt').substr(0, 647));
      docDefinition.content[8].text[3] = docDefinition.content[8].text[3].replace(/&main_6P2&/gim, get_text('argues/arg6.txt').substr(647, 861));
      var len = q6_arr.length;
      switch (len){
        case 1:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          break;
        case 2:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[8].text[7] = docDefinition.content[8].text[7].replace(/&6_2&/gim, q6_arr[1]);
          break;
        case 3:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[8].text[7] = docDefinition.content[8].text[7].replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[8].text[9] = docDefinition.content[8].text[9].replace(/&6_3&/gim, q6_arr[2]);
          break;
        case 4:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[8].text[7] = docDefinition.content[8].text[7].replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[8].text[9] = docDefinition.content[8].text[9].replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[8].text[11] = docDefinition.content[8].text[11].replace(/&6_4&/gim, q6_arr[3]);
          break;
        case 5:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[8].text[7] = docDefinition.content[8].text[7].replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[8].text[9] = docDefinition.content[8].text[9].replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[8].text[11] = docDefinition.content[8].text[11].replace(/&6_4&/gim, q6_arr[3]);
          docDefinition.content[8].text[13] = docDefinition.content[8].text[13].replace(/&6_5&/gim, q6_arr[4]);
          break;
        case 6:
          docDefinition.content[8].text[5] = docDefinition.content[8].text[5].replace(/&6_1&/gim, q6_arr[0]);
          docDefinition.content[8].text[7] = docDefinition.content[8].text[7].replace(/&6_2&/gim, q6_arr[1]);
          docDefinition.content[8].text[9] = docDefinition.content[8].text[9].replace(/&6_3&/gim, q6_arr[2]);
          docDefinition.content[8].text[11] = docDefinition.content[8].text[11].replace(/&6_4&/gim, q6_arr[3]);
          docDefinition.content[8].text[13] = docDefinition.content[8].text[13].replace(/&6_5&/gim, q6_arr[4]);
          docDefinition.content[8].text[15] = docDefinition.content[8].text[15].replace(/&6_6&/gim, q6_arr[5]);
          break;
      }
      spaceReplacer(q6_arr);
    }

    // docDefinition.content[8].text[17] = docDefinition.content[8].text[17].replace(/&7_1&/gim, get_text('argues/arg7.txt').substr(0, 519));
    // docDefinition.content[8].text[19] = docDefinition.content[8].text[19].replace(/&7_2&/gim, get_text('argues/arg7.txt').substr(519, 122));
    // docDefinition.content[8].text[21] = docDefinition.content[8].text[21].replace(/&7_3&/gim, get_text('argues/arg7.txt').substr(641, 561));
    // docDefinition.content[8].text[23] = docDefinition.content[8].text[23].replace(/&7_4&/gim, get_text('argues/arg7.txt').substr(1202, 223));
    // docDefinition.content[8].text[23] = docDefinition.content[8].text[23].replace(/&7_4&/gim, get_text('argues/arg7.txt').substr(1425, )); //делал 7 пункт так, но потом стало лень

      if(dateArgs[0] !== null){
        docDefinition.content[4].text[1] = docDefinition.content[4].text[1].replace(/&arg1&/gim, dateArgs[0]);
      } else{
        delete docDefinition.content[4].text[0];
        delete docDefinition.content[4].text[1];
        }
      if(dateArgs[1] !== null){
        docDefinition.content[5].text[1] = docDefinition.content[5].text[1].replace(/&arg2&/gim, dateArgs[1]);
      } else{
        delete docDefinition.content[5].text[0];
        delete docDefinition.content[5].text[1];
      }
      docDefinition.content[3].text[1] = docDefinition.content[3].text[1].replace(/&mainP1&/gim, get_text('argues/main.txt').substr(0, 287));
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&mainP2&/gim, get_text('argues/main.txt').substr(287, 190));
      docDefinition.content[3].text[5] = docDefinition.content[3].text[5].replace(/&mainP3&/gim, get_text('argues/main.txt').substr(477, 439));
      docDefinition.content[3].text[7] = docDefinition.content[3].text[7].replace(/&mainP4&/gim, get_text('argues/main.txt').substr(916, 389));
      docDefinition.content[3].text[9] = docDefinition.content[3].text[9].replace(/&mainP5&/gim, get_text('argues/main.txt').substr(1305, 447));
      docDefinition.content[3].text[11] = docDefinition.content[3].text[11].replace(/&mainP6&/gim, get_text('argues/main.txt').substr(1752, 141)); //згiдно з законом......
      docDefinition.content[3].text[13] = docDefinition.content[3].text[13].replace(/&mainP7&/gim, get_text('argues/main.txt').substr(1893, 550));

      docDefinition.content[3].text[1] = docDefinition.content[3].text[1].replace(/&date&/gim, userInfo[0].date); 
      docDefinition.content[13].table.body[0][0].text = docDefinition.content[13].table.body[0][0].text.replace(/&today&/gim, today().split('/')[1] + ' ' + getMonth(today().split('/')[0]) + ' ' + today().split('/')[2]); 
      docDefinition.content[13].table.body[0][1].text = docDefinition.content[13].table.body[0][1].text.replace(/&name&/gim, userInfo[0].pozivFirsLastSurName.split(' ')[1][0] + '. ' + userInfo[0].pozivFirsLastSurName.split(' ')[2][0] + '. ' + userInfo[0].pozivFirsLastSurName.split(' ')[0]);

      docDefinition.content[10].ol[1] = docDefinition.content[10].ol[1].replace(/&date&/gim, userInfo[0].date); 
      docDefinition.content[10].ol[1] = docDefinition.content[10].ol[1].replace(/&postanovaNumber&/gim, userInfo[0].postanovaNumber);
      docDefinition.content[3].text[1] = docDefinition.content[3].text[1].replace(/&postanovaNumber&/gim, userInfo[0].postanovaNumber);
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&car&/gim, userInfo[0].car);
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&carNumber&/gim, userInfo[0].carNumber);
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&carYear&/gim, userInfo[0].date);
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&address&/gim, userInfo[0].address);
      docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&speed&/gim, userInfo[0].speed);

      docDefinition.content[0].table.body[0][1].text[0].text = docDefinition.content[0].table.body[0][1].text[0].text.replace(/&courtAddress&/gim, userInfo[0].courtAddress);
      // alert(docDefinition.content[0].table.body[0][1].text[0].text);
      docDefinition.content[0].table.body[0][1].text[1] = docDefinition.content[0].table.body[0][1].text[1].replace(/&courtIndex&/gim, userInfo[0].courtIndex);
      docDefinition.content[0].table.body[0][1].text[1] = docDefinition.content[0].table.body[0][1].text[1].replace(/&courtTown&/gim, userInfo[0].courtTown);
      docDefinition.content[0].table.body[0][1].text[1] = docDefinition.content[0].table.body[0][1].text[1].replace(/&courtStreet&/gim, userInfo[0].courtStreet);
      docDefinition.content[0].table.body[1][1].text[0].text = docDefinition.content[0].table.body[1][1].text[0].text.replace(/&pozivFirsLastSurName&/gim, userInfo[0].pozivFirsLastSurName);
      docDefinition.content[0].table.body[1][1].text[1] = docDefinition.content[0].table.body[1][1].text[1].replace(/&ipn&/gim, userInfo[0].ipn);
      docDefinition.content[0].table.body[1][1].text[1] = docDefinition.content[0].table.body[1][1].text[1].replace(/&pozivIndex&/gim, userInfo[0].pozivIndex);
      docDefinition.content[0].table.body[1][1].text[1] = docDefinition.content[0].table.body[1][1].text[1].replace(/&pozivTown&/gim, userInfo[0].pozivTown);
      docDefinition.content[0].table.body[1][1].text[1] = docDefinition.content[0].table.body[1][1].text[1].replace(/&pozivStreet&/gim, userInfo[0].pozivStreet);
      docDefinition.content[0].table.body[1][1].text[1] = docDefinition.content[0].table.body[1][1].text[1].replace(/&pozivAnotherComunications&/gim, userInfo[0].pozivAnotherComunications);
      docDefinition.content[0].table.body[2][1].text[0].text = docDefinition.content[0].table.body[2][1].text[0].text.replace(/&vidpovidOtdelenie&/gim, userInfo[0].vidpovidOtdelenie);
      docDefinition.content[0].table.body[2][1].text[0].text = docDefinition.content[0].table.body[2][1].text[0].text.replace(/&vidpovidach&/gim, userInfo[0].vidpovidach);
      docDefinition.content[0].table.body[2][1].text[1] = docDefinition.content[0].table.body[2][1].text[1].replace(/&vidpovidIndex&/gim, userInfo[0].vidpovidIndex);
      docDefinition.content[0].table.body[2][1].text[1] = docDefinition.content[0].table.body[2][1].text[1].replace(/&vidpovidTown&/gim, userInfo[0].vidpovidTown);
      docDefinition.content[0].table.body[2][1].text[1] = docDefinition.content[0].table.body[2][1].text[1].replace(/&vidpovidStreet&/gim, userInfo[0].vidpovidStreet);
      docDefinition.content[0].table.body[2][1].text[1] = docDefinition.content[0].table.body[2][1].text[1].replace(/&vidpovidAnotherComaunications&/gim, userInfo[0].vidpovidAnotherComaunications);

      pdfMake.createPdf(docDefinition).download(); //скачать сформированный файл

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

  function q10_check(){
  var q10=document.getElementsByName("q10");
  if(q10[0].checked){
    phrases[9] = "Yes"; 
    console.log(phrases);
  }
  if(q10[1].checked){
    phrases[9] = "No"; 
    console.log(phrases);
  }
 }

var hider = function(id){
  if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

var getDate = function(id){
  var date = document.getElementById(id).value.split('-');//массив с числом, месяцем и годом с поля дата (y m d)
  if(date[1]){
    return date;
  }else {
    return null;
  }
}

var getMonth = function(month){
  var arr=[
   'сiчня',
   'лютого',
   'березня',
   'квiтня',
   'травня',
   'червня',
   'липня',
   'серпня',
   'вересня',
   'жовтня',
   'листопада',
   'грудня',
  ];
  return(arr[month-1]);
}

var today = function(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

var dateDiff = function(date1, date2){
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var daysLag = Math.ceil(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
   if(d1 > d2){
    daysLag = -daysLag;
   }
  return daysLag;
}

var checkOnPlace = function(){
  if(getDate('onPlace') === null){
    error('Оберiть дату','Обрати');
    return false;
  }
  var dateFromField = getDate('onPlace')[1] + '/' + getDate('onPlace')[2] + '/' + getDate('onPlace')[0];//date from field in an appropriate order
checking:  if(getDate('onPlace') != null){
    userInfo[0].date = getDate('onPlace')[2] + '.' + getDate('onPlace')[1] + '.' + getDate('onPlace')[0];
    var splittedToday = today().split('/');
    if((dateDiff(dateFromField, today())) < 0){ //if current date < chousen date
      document.getElementById('onPlace').value = '';
      error('Обрана дата не може бути бiльшою за поточний день!', 'Змiнити дату')
      break checking;
    }
    if (dateDiff(dateFromField, today()) > 10) {
        caution('Пройшло бiльше 10 днiв. Шнас на успiшне оскарження малий', 'Продовжити');
    }
    userInfo[0].date = getDate('onPlace')[1] + '.' + getDate('onPlace')[2] + '.' + getDate('onPlace')[0];
    console.log(userInfo[0].date);
    hider('second_2');
    hider('questions'); 
  } else {
      error('Оберiть дату', 'Обрати')
    }
}

var postDate1 = function(){
  var date = getDate('inPoliceStation');
  userInfo[0].date = getDate('inPoliceStation')[2] + '.' + getDate('inPoliceStation')[1] + '.' + getDate('inPoliceStation')[0];
  if(date !== null){
    if((dateDiff(date, today())) < 0){ //incorrect date
      error('Поточна дата не може бути ранiше дати вчинення','Ок');
      document.getElementById('inPoliceStation').value = '';
      return false;
    }else if((dateDiff(date, today())) > 61){ //two month check
      dateArgs[0] = get_text('argues/arg1.txt').replace(/&date1&/gim, getDate('inPoliceStation')[1] + '.' + getDate('inPoliceStation')[2] + '.' + getDate('inPoliceStation')[0]);
      // alert(dateArgs[0]);
    } else if((dateDiff(date, today())) < 61){
      dateArgs[0] = null;
    }
  } else {
    error('Вкажiть дату','Ок');
  }
}

var postDate2 = function(){
  var date = getDate('watchigDate')[1] + '/' + getDate('watchigDate')[2] + '/' + getDate('watchigDate')[0];
  var inPoliceStation = getDate('inPoliceStation')[1] + '/' + getDate('inPoliceStation')[2] + '/' + getDate('inPoliceStation')[0];
  if(date !== null){
    if(dateArgs[0] !== null){
      dateArgs[0] = dateArgs[0].replace(/&date2&/gim, getDate('watchigDate')[2] + '.' + getDate('watchigDate')[1] + '.' + getDate('watchigDate')[0]);
    }
    if(getDate('inPoliceStation') === null){
      caution('Вкажiть попередню дату','Ок');
      document.getElementById('watchigDate').value = '';
      return false;
    }
    if((dateDiff(date, inPoliceStation)) > 0){
      error('Дата розгляду не може бути ранiше за дату вчинення порушення','Ок');
      document.getElementById('watchigDate').value = '';
      return false;
    }else if((dateDiff(inPoliceStation, date)) > 3){ //three days check
      dateArgs[1] = get_text('argues/arg2.txt');
    } else if((dateDiff(date, today())) < 3 && (dateDiff(date, today())) > 0){
      dateArgs[1] = null;
    }
  }else {
    caution('Вкажiть дату','Ок');
  }
  console.log(dateArgs);
}

var postDate3 = function(){
  var date = getDate('directingDate');
  if(date !== null){
    if(getDate('watchigDate') === null){
      caution('Вкажiть попередню дату','Ок');
      document.getElementById('directingDate').value = '';
      return false;
    }
    if((dateDiff(date, getDate('watchigDate'))) > 0){
      error('Дата направлення постанови не може бути ранiше за дату розгляду справи','Ок');
      document.getElementById('directingDate').value = '';
      return false;
    }
  }else {
    caution('Вкажiть дату','Ок');
  }
}

var postDate4 = function(){
  var date = getDate('receivingDate');
  if(date !== null){
    dateArgs[1] = get_text('argues/arg2.txt').replace(/&date3&/gim, getDate('directingDate')[2] + '.' + getDate('directingDate')[1] + '.' + getDate('directingDate')[0]);
    dateArgs[1] = dateArgs[1].replace(/&date4&/gim, getDate('receivingDate')[2] + '.' + getDate('receivingDate')[1] + '.' + getDate('receivingDate')[0]);
    console.log(dateArgs[1]);
    if(getDate('directingDate') === null){
      caution('Вкажiть попередню дату','Ок');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if((dateDiff(date, getDate('inPoliceStation'))) > 0){
      error('Дата отримання постанови не може бути ранiше за дату вчинення порушення','Ок');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if((dateDiff(date, getDate('directingDate'))) > 0){
      error('Дата отримання постанови не може бути ранiше за дату її направлення','Ок');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if((dateDiff( getDate('directingDate'), date)) > 10){
      error('Пройшло бiльше 10 днiв. Шнас на успiшне оскарження малий', 'Продовжити');
    }
  }
  if(getDate('inPoliceStation') !== null && 
     getDate('watchigDate') !== null && 
     getDate('directingDate') !== null){
        hider('second_1');
        hider('questions');
  }
}

var infoCheck = function(id){
  if(document.getElementById(id).value){
    return true;
  }else{
    return false;
  }
}

var getVal = function(id){
  var value = document.getElementById(id).value;
  return value;
}

var check = function(){
  if(ukr == 1){
     if((infoCheck('postanovaNumber') && 
        infoCheck('car') &&
        infoCheck('carNumber') &&
        infoCheck('address') &&
        infoCheck('speed') &&
        infoCheck('courtAddress') &&
        infoCheck('courtIndex') &&
        infoCheck('courtTown') &&
        infoCheck('courtStreet') &&
        infoCheck('pozivFirstName') &&
        infoCheck('pozivLastName') &&
        infoCheck('pozivSurName') &&
        infoCheck('ipn') &&
        infoCheck('pozivIndex') &&
        infoCheck('pozivTown') &&
        infoCheck('pozivStreet') &&
        infoCheck('pozivAnotherComunications') &&
        infoCheck('vidpovidOtdelenie') &&
        infoCheck('vidpovidach') &&
        infoCheck('vidpovidIndex') &&
        infoCheck('vidpovidTown') &&
        infoCheck('vidpovidStreet') &&
        infoCheck('vidpovidAnotherComaunications')) !== false){
          userInfo[0].postanovaNumber = getVal('postanovaNumber');
          userInfo[0].car = getVal('car');
          userInfo[0].carNumber = getVal('carNumber');
          userInfo[0].address = getVal('address');
          userInfo[0].speed = getVal('speed');
          userInfo[0].courtAddress = getVal('courtAddress');
          userInfo[0].courtIndex = getVal('courtIndex');
          userInfo[0].courtTown = getVal('courtTown');
          userInfo[0].courtStreet = getVal('courtStreet');
          userInfo[0].pozivFirsLastSurName = getVal('pozivSurName') + ' ' + getVal('pozivFirstName') + ' ' + getVal('pozivLastName');
          userInfo[0].ipn = getVal('ipn');
          userInfo[0].pozivIndex = getVal('pozivIndex');
          userInfo[0].pozivTown = getVal('pozivTown');
          userInfo[0].pozivStreet = getVal('pozivStreet');
          userInfo[0].pozivAnotherComunications = getVal('pozivAnotherComunications');
          userInfo[0].vidpovidOtdelenie = getVal('vidpovidOtdelenie');
          userInfo[0].vidpovidach = getVal('vidpovidach');
          userInfo[0].vidpovidIndex = getVal('vidpovidIndex');
          userInfo[0].vidpovidTown = getVal('vidpovidTown');
          userInfo[0].vidpovidStreet = getVal('vidpovidStreet');
          userInfo[0].vidpovidAnotherComaunications = getVal('vidpovidAnotherComaunications');
          // console.log(userInfo);
          submit();
      } else {
        caution('Заповнiть всi поля','Ок');
      }
  }
}

var threeNumberValue = function(id, label){
  var text = document.getElementById(id);
      text.onkeyup =  function testKey(){
            for(i in text.value){
            if(i >= 3){
              text.value = text.value.slice(0,3);
              document.getElementById(label).style.display="block";
            } else document.getElementById(label).style.display="none";
          }       
      }
      text.onchange = function testAmount(){
        if(text.value.length < 2){
          document.getElementById(label).style.display="block";
        } else document.getElementById(label).style.display="none";
      }
}

threeNumberValue('speed','speed_label');

var fiveNumberValue = function(id, label){
  var text = document.getElementById(id);
      text.onkeyup =  function testKey(){
            for(i in text.value){
            if(i >= 5){
              text.value = text.value.slice(0,5);
              document.getElementById(label).style.display="block";
            } else document.getElementById(label).style.display="none";
          }       
      }
      text.onchange = function testAmount(){
        if(text.value.length <= 4){
          document.getElementById(label).style.display="block";
        } else document.getElementById(label).style.display="none";
      }

}

fiveNumberValue('courtIndex','courtIndex_label'); fiveNumberValue('pozivIndex','pozivIndex_label'); fiveNumberValue('vidpovidIndex','vidpovidIndex_label');

var tenNumberValue = function(id, label){
  var text = document.getElementById(id);
      text.onkeyup =  function testKey(){
            for(i in text.value){
            if(i >= 10){
              text.value = text.value.slice(0,10);
              document.getElementById(label).style.display="block";
            } else document.getElementById(label).style.display="none";
          }       
      }
      text.onchange = function testAmount(){
        if(text.value.length <= 9){
          document.getElementById(label).style.display="block";
        } else document.getElementById(label).style.display="none";
      }
}

tenNumberValue('ipn', 'ipn_label');

var ukrCheck = function(id, label){
  var text = document.getElementById(id);
      text.onkeyup =  function testKey(){
            for(i in text.value){
            if(text.value[i].match(/[ыЫъЪэЭa-zA-Z]+/) !== null){
              text.value = text.value.replace(/[ыЫъЪэЭa-zA-Z]+/,'');
              document.getElementById(label).style.display="block";
            } else document.getElementById(label).style.display="none";
          }       
      }
}

ukrCheck('carNumber', 'carNumber_label'); ukrCheck('address', 'address_label'); ukrCheck('courtAddress', 'courtAddress_label'); ukrCheck('courtTown', 'courtTown_label'); ukrCheck('courtStreet', 'courtStreet_label'); ukrCheck('pozivFirstName', 'pozivFirstName_label'); ukrCheck('pozivLastName', 'pozivLastName_label'); ukrCheck('pozivSurName', 'pozivSurName_label'); ukrCheck('pozivTown', 'pozivTown_label'); ukrCheck('pozivStreet', 'pozivStreet_label'); ukrCheck('vidpovidOtdelenie', 'vidpovidOtdelenie_label'); ukrCheck('vidpovidach', 'vidpovidach_label'); ukrCheck('vidpovidTown', 'vidpovidTown_label'); ukrCheck('vidpovidStreet', 'vidpovidStreet_label'); 

(function(){
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  btn1.onclick = function(){ //on place
    docDefinition.content[3].text[15] = docDefinition.content[3].text[15].replace(/&mainP8&/gim, get_text('argues/main.txt').substr(2443, 175)); //pasting 4 part from document
    docDefinition.content[3].text[17] = docDefinition.content[3].text[17].replace(/&mainP9&/gim, get_text('argues/main.txt').substr(2618, 36));
    docDefinition.content[3].text[19] = docDefinition.content[3].text[19].replace(/&mainP10&/gim, get_text('argues/main.txt').substr(2654, 58));
    docDefinition.content[3].text[21] = docDefinition.content[3].text[21].replace(/&mainP11&/gim, get_text('argues/main.txt').substr(2712, 179));
    docDefinition.content[3].text[23] = docDefinition.content[3].text[23].replace(/&mainP12&/gim, get_text('argues/main.txt').substr(2891, 135));
    docDefinition.content[3].text[25] = docDefinition.content[3].text[25].replace(/&mainP13&/gim, get_text('argues/main.txt').substr(3026, 111));
    docDefinition.content[3].text[27] = docDefinition.content[3].text[27].replace(/&mainP14&/gim, get_text('argues/main.txt').substr(3137, 138));
    docDefinition.content[3].text[29] = docDefinition.content[3].text[29].replace(/&mainP15&/gim, get_text('argues/main.txt').substr(3275, 221));
    docDefinition.content[3].text[31] = docDefinition.content[3].text[31].replace(/&mainP16&/gim, get_text('argues/main.txt').substr(3496, 202));
    hider('first'); 
    hider('second_2');
  }
  btn2.onclick = function(){ //delivered
    for(i in docDefinition.content[3].text){ //deleting paragraphs only needed second button 
      if(i>=14){
        delete docDefinition.content[3].text[i];
      }
    }
    hider('first'); 
    hider('second_1')
  }
})()

var yesNoQuestionsCheck = function(){
  submit: if(phrases[0] != "null" && 
           phrases[1] != "null" && 
           phrases[2] != "null" && 
           phrases[3] != "null" && 
           phrases[4] != "null" && 
           phrases[5] != "null" && 
           phrases[6] != "null" && 
           phrases[7] != "null" &&
           phrases[9] != "null") { 
              if(phrases[7] == "Yes"){
                if(phrases[8] == "null") {
                  console.log(8); error('Ви вiдповiли не на всi питання', 'Вiдповiсти'); break submit
                }
              }
              if(phrases[0] === 'no'){
                docDefinition.content[12].ol[2] = docDefinition.content[12].ol[3];
                delete docDefinition.content[12].ol[3];
              }
              if(phrases[9] === 'no'){
                delete docDefinition.content[12].ol[3];
              }
              hider('questions'); 
              hider('pay');
        } else {
            error('Ви вiдповiли не на всi питання', 'Вiдповiсти');
          }
}


