// 0       1       2       3       4       5       6       7       8       9
var phrases = ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"]; //ответы на вопросы

var userInfo = [{
  date: "",
  postanovaNumber: "",
  car: "",
  carNumber: "",
  address: "",
  speed: "",
  courtAddress: "",
  courtIndex: "",
  courtTown: "",
  courtStreet: "",
  pozivSurName: "",
  pozivFirstName: "",
  pozivLastName: "",
  ipn: "",
  pozivIndex: "",
  pozivTown: "",
  pozivStreet: "",
  pozivAnotherComunications: "",
  vidpovidOtdelenie: "",
  vidpovidach: "",
  vidpovidIndex: "",
  vidpovidTown: "",
  vidpovidStreet: "",
  vidpovidAnotherComaunications: "",
  pozivFirsLastSurName: "",
}]

var toChange = [
  []
]

var q6_arr = []; //тут собираются в кучу части одного из пунктов конечного PDF файла

var dateArgs = [null, null];

var swal = function(opt1, opt2, type) {
  Swal.fire({
    title: opt1,
    width: 600,
    type: 'warning',
    padding: '3em',
    background: '#D0D5DBFF',
    confirmButtonColor: '#00BD83',
    confirmButtonText: opt2,
  })
}

var firstDownload = true;

function submit() {
  if (!firstDownload) {
    pdfMake.createPdf(docDefinition).download();
    return false;
  }
  var submiter = true;
  firstDownload = false;

  if (phrases[0] === "Yes") {
    delete docDefinition.content[6];
  }

  if (phrases[1] === "Yes") {
    delete docDefinition.content[7];
  }

  var q6_arr_build = function(place_in_phrases, text_file_path) { //тут все фразы, которые надо дописать в составной вопрос
    if (phrases[place_in_phrases] === "No") {
      q6_arr.push(get_text(text_file_path));
    }
  }

  for (i = 2; i < 7; i++) {
    q6_arr_build(i, `argues/arg6_${i}.txt`);
  }
  q6_arr_build(8, 'argues/arg6_7.txt');

  var spaceReplacer = function(arr) {
    var par = (6 - arr.length) * 2;
    if (arr.length <= 5) {
      for (par; par > 0; par--) {
        delete docDefinition.content[8].text[16 - par];
      }
    }
  }

  if (q6_arr.length >= 1) { //проверка для начала формирования вопроса, состоящего из подпунктов
    docDefinition.content[8].text[1] = docDefinition.content[8].text[1].replace(/&main_6P1&/gim, get_text('argues/arg6.txt').substr(0, 647));
    docDefinition.content[8].text[3] = docDefinition.content[8].text[3].replace(/&main_6P2&/gim, get_text('argues/arg6.txt').substr(647, 861));
    var len = q6_arr.length;
    var regs = [/&6_1&/gim, /&6_2&/gim, /&6_3&/gim, /&6_4&/gim, /&6_5&/gim, /&6_6&/gim];
    for (len; len > 0; len--) {
      var i = 5 + ((len - 1) * 2);
      docDefinition.content[8].text[i] = docDefinition.content[8].text[i].replace(regs[len - 1], q6_arr[len - 1]);
    }

    spaceReplacer(q6_arr);
  } else {
    for (var i = 0; i <= 15; i++) {
      delete docDefinition.content[8].text[i];
    }
  }

  if (dateArgs[0] !== null) {
    docDefinition.content[4].text[1] = docDefinition.content[4].text[1].replace(/&arg1&/gim, dateArgs[0]);
  } else {
    delete docDefinition.content[4].text[0];
    delete docDefinition.content[4].text[1];
  }
  if (dateArgs[1] !== null) {
    docDefinition.content[5].text[1] = docDefinition.content[5].text[1].replace(/&arg2&/gim, dateArgs[1]);
  } else {
    delete docDefinition.content[5].text[0];
    delete docDefinition.content[5].text[1];
  }
  let startAt = 0;//starting point in the file
    let textParts = [287,190,439,389,447,141,550]; //amount of the char in the paragraph
    for(var i = 1; i <= 7; i++){
      objectParser(docDefinition, '', '&mainP' + i + '&', get_text('argues/main.txt').substr(startAt, textParts[i-1]));
      startAt += textParts[i-1]; //mainP1 - mainP7 here
    }

  docDefinition.content[3].text[1] = docDefinition.content[3].text[1].replace(/&date&/gim, userInfo[0].date);
  docDefinition.content[13].table.body[0][0].text = docDefinition.content[13].table.body[0][0].text.replace(/&today&/gim, today().split('/')[1] + ' ' + getMonth(today().split('/')[0]) + ' ' + today().split('/')[2]);
  docDefinition.content[13].table.body[0][1].text = docDefinition.content[13].table.body[0][1].text.replace(/&name&/gim, userInfo[0].pozivFirsLastSurName.split(' ')[1][0] + '. ' + userInfo[0].pozivFirsLastSurName.split(' ')[2][0] + '. ' + userInfo[0].pozivFirsLastSurName.split(' ')[0]);

  docDefinition.content[10].ol[1] = docDefinition.content[10].ol[1].replace(/&date&/gim, userInfo[0].date);
  objectParser(docDefinition, '', '&postanovaNumber&', 'TEST_POSTANOVA')
  // docDefinition.content[10].ol[1] = docDefinition.content[10].ol[1].replace(/&postanovaNumber&/gim, userInfo[0].postanovaNumber);
  docDefinition.content[3].text[1] = docDefinition.content[3].text[1].replace(/&postanovaNumber&/gim, userInfo[0].postanovaNumber);
  docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&car&/gim, userInfo[0].car);
  docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&carNumber&/gim, userInfo[0].carNumber);
  docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&carYear&/gim, userInfo[0].date);
  docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&address&/gim, userInfo[0].address);
  docDefinition.content[3].text[3] = docDefinition.content[3].text[3].replace(/&speed&/gim, userInfo[0].speed);

  docDefinition.content[0].table.body[0][1].text[0].text = docDefinition.content[0].table.body[0][1].text[0].text.replace(/&courtAddress&/gim, userInfo[0].courtAddress);
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

  pdfMake.fonts = {
    MyFont: {
      normal: 'Merriweather-Regular.ttf',
      bold: 'Merriweather-Bold.ttf',
      italics: 'Merriweather-Italic.ttf',
      bolditalics: 'Merriweather-Italic.ttf'
    }
  };
  pdfMake.createPdf(docDefinition).download(); //скачать сформированный файл


};

var qCheck = function(num) { // yes/no array filler
  var elem = document.getElementsByName("q" + num);
  if (elem[0].checked) {
    phrases[num - 1] = "Yes";
    if (num == 8) {
      document.getElementById("lastQ").style.display = "block";
    }
    console.log(phrases);
  }
  if (elem[1].checked) {
    phrases[num - 1] = "No";
    if (num == 8) {
      phrases[8] = "null";
      document.getElementById("lastQ").style.display = "none";
      document.getElementById("radio19").checked = false;
      document.getElementById("radio20").checked = false;
    }
    console.log(phrases);
  }
}


var hider = function(id) {
  if (document.getElementById(id).style.display == 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

var getDate = function(id) {
  var date = document.getElementById(id).value.split('-'); //массив с числом, месяцем и годом с поля дата (y m d)
  if (date[1]) {
    return date;
  } else {
    return null;
  }
}

var getMonth = function(month) {
  var arr = [
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
  return (arr[month - 1]);
}

var today = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //january is 0
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

var dateDiff = function(date1, date2) {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var daysLag = Math.ceil(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  if (d1 > d2) {
    daysLag = -daysLag;
  }
  return daysLag;
}

var checkOnPlace = function() {
  if (getDate('onPlace') === null) {
    swal('Оберiть дату', 'Обрати', 'warning');
    return false;
  }
  var dateFromField = getDate('onPlace')[1] + '/' + getDate('onPlace')[2] + '/' + getDate('onPlace')[0]; //date from field in appropriate order
  checking: if (getDate('onPlace') != null) {
    userInfo[0].date = getDate('onPlace')[2] + '.' + getDate('onPlace')[1] + '.' + getDate('onPlace')[0];
    var splittedToday = today().split('/');
    if ((dateDiff(dateFromField, today())) < 0) { //if current date < chosen date
      document.getElementById('onPlace').value = '';
      swal('Обрана дата не може бути бiльшою за поточний день!', 'Змiнити дату', 'error')
      break checking;
    }
    if (dateDiff(dateFromField, today()) > 10) {
      swal('Пройшло бiльше 10 днiв. Шнас на успiшне оскарження малий', 'Продовжити', 'warning');
    }
    userInfo[0].date = getDate('onPlace')[1] + '.' + getDate('onPlace')[2] + '.' + getDate('onPlace')[0];
    console.log(userInfo[0].date);
    hider('second_2');
    hider('questions');
  } else {
    swal('Оберiть дату', 'Обрати', 'error')
  }
}

var postDate1 = function() {
  var date = getDate('inPoliceStation');
  userInfo[0].date = getDate('inPoliceStation')[2] + '.' + getDate('inPoliceStation')[1] + '.' + getDate('inPoliceStation')[0];
  if (date !== null) {
    if ((dateDiff(date, today())) < 0) { //incorrect date
      swal('Поточна дата не може бути ранiше дати вчинення', 'Ок', 'error');
      document.getElementById('inPoliceStation').value = '';
      return false;
    } else if ((dateDiff(date, today())) > 61) { //two month check
      dateArgs[0] = get_text('argues/arg1.txt').replace(/&date1&/gim, getDate('inPoliceStation')[1] + '.' + getDate('inPoliceStation')[2] + '.' + getDate('inPoliceStation')[0]);
    } else if ((dateDiff(date, today())) < 61) {
      dateArgs[0] = null;
    }
  } else {
    swal('Вкажiть дату', 'Ок', 'error');
  }
}

var postDate2 = function() {
  var date = getDate('watchigDate')[1] + '/' + getDate('watchigDate')[2] + '/' + getDate('watchigDate')[0];
  var inPoliceStation = getDate('inPoliceStation')[1] + '/' + getDate('inPoliceStation')[2] + '/' + getDate('inPoliceStation')[0];
  if (date !== null) {
    if (dateArgs[0] !== null) {
      dateArgs[0] = dateArgs[0].replace(/&date2&/gim, getDate('watchigDate')[2] + '.' + getDate('watchigDate')[1] + '.' + getDate('watchigDate')[0]);
    }
    if (getDate('inPoliceStation') === null) {
      swal('Вкажiть попередню дату', 'Ок', 'warning');
      document.getElementById('watchigDate').value = '';
      return false;
    }
    if ((dateDiff(date, inPoliceStation)) > 0) {
      swal('Дата розгляду не може бути ранiше за дату вчинення порушення', 'Ок', 'error');
      document.getElementById('watchigDate').value = '';
      return false;
    } else if ((dateDiff(inPoliceStation, date)) > 3) { //three days check
      dateArgs[1] = get_text('argues/arg2.txt');
    } else if ((dateDiff(date, today())) < 3 && (dateDiff(date, today())) > 0) {
      dateArgs[1] = null;
    }
  } else {
    swal('Вкажiть дату', 'Ок', 'warning');
  }
  console.log(dateArgs);
}

var postDate3 = function() {
  var date = getDate('directingDate');
  if (date !== null) {
    if (getDate('watchigDate') === null) {
      swal('Вкажiть попередню дату', 'Ок', 'warning');
      document.getElementById('directingDate').value = '';
      return false;
    }
    if ((dateDiff(date, getDate('watchigDate'))) > 0) {
      swal('Дата направлення постанови не може бути ранiше за дату розгляду справи', 'Ок', 'error');
      document.getElementById('directingDate').value = '';
      return false;
    }
  } else {
    swal('Вкажiть дату', 'Ок', 'warning');
  }
}

var postDate4 = function() {
  var date = getDate('receivingDate');
  if (date !== null) {
    dateArgs[1] = get_text('argues/arg2.txt').replace(/&date3&/gim, getDate('directingDate')[2] + '.' + getDate('directingDate')[1] + '.' + getDate('directingDate')[0]);
    dateArgs[1] = dateArgs[1].replace(/&date4&/gim, getDate('receivingDate')[2] + '.' + getDate('receivingDate')[1] + '.' + getDate('receivingDate')[0]);
    console.log(dateArgs[1]);
    if (getDate('directingDate') === null) {
      swal('Вкажiть попередню дату', 'Ок', 'warning');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if ((dateDiff(date, getDate('inPoliceStation'))) > 0) {
      swal('Дата отримання постанови не може бути ранiше за дату вчинення порушення', 'Ок', 'error');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if ((dateDiff(date, getDate('directingDate'))) > 0) {
      swal('Дата отримання постанови не може бути ранiше за дату її направлення', 'Ок', 'error');
      document.getElementById('receivingDate').value = '';
      return false;
    }
    if ((dateDiff(getDate('directingDate'), date)) > 10) {
      swal('Пройшло бiльше 10 днiв. Шнас на успiшне оскарження малий', 'Продовжити', 'error');
    }
  }
  if (getDate('inPoliceStation') !== null &&
    getDate('watchigDate') !== null &&
    getDate('directingDate') !== null) {
    hider('second_1');
    hider('questions');
  }
}

var infoCheck = function(id) {
  if (document.getElementById(id).value) {
    return true;
  } else {
    return false;
  }
}

var getVal = function(id) {
  var value = document.getElementById(id).value;
  return value;
}

var check = function() {
  var fieldsCheck = true;
  for (var i in userInfo[0]) { //все ли поля заполнены (имена полей по ключам массива userInfo)
    if (i != 'date' && i != 'pozivFirsLastSurName') {
      if (!infoCheck(i))
        fieldsCheck = false;
    }
  }
  if (fieldsCheck != false) { //заползяполняем массив данными из полей
    var userInfoFiller = (obj) => {
      var fullName = '';
      for (var prop in obj) {
        if (prop != 'date' && prop != 'pozivFirsLastSurName') {

          if (prop == 'pozivSurName' || prop == 'pozivFirstName' || prop == 'pozivLastName')
            fullName += obj[prop] + ' ';
          if (document.getElementById(prop) == null)
            obj[prop] = document.getElementById(prop).value;
        }
      }
    }
    userInfoFiller(userInfo[0]);
    userInfo[0].pozivFirsLastSurName = getVal('pozivSurName') + ' ' + getVal('pozivFirstName') + ' ' + getVal('pozivLastName');
    submit();
  } else {
    swal('Заповнiть всi поля', 'Ок', 'warning');
  }
}

var numberValueCheck = function(id, amount) {
  var text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      if (i >= amount) {
        text.value = text.value.slice(0, amount);
        document.getElementById(id + '_label').style.display = "block";
      } else document.getElementById(id + '_label').style.display = "none";
    }
  }
  text.onchange = function testAmount() {
    if (text.value.length <= amount - 1) {
      document.getElementById(id + '_label').style.display = "block";
    } else document.getElementById(id + '_label').style.display = "none";
  }
}
for(let key in userInfo[0])
  key.includes('Index') ? numberValueCheck(key, 5): true

 numberValueCheck('speed', 3); 
 numberValueCheck('ipn', 10);

var ukrCheck = function(id) {
  var text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      if (text.value[i].match(/[ыЫъЪэЭa-zA-Z]+/) !== null) {
        text.value = text.value.replace(/[ыЫъЪэЭa-zA-Z]+/, '');
        document.getElementById(id + '_label').style.display = "block";
      } else document.getElementById(id + '_label').style.display = "none";
    }
  }
}

let checkForUkr = (['carNumber','address','courtAddress','courtTown','courtStreet','pozivFirstName','pozivLastName','pozivSurName','pozivTown','pozivStreet','vidpovidOtdelenie','vidpovidach','vidpovidTown','vidpovidStreet']);
for(one in checkForUkr)
  ukrCheck(checkForUkr[one]);


(function() {
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  btn1.onclick = function() { //on place
    let startAt = 2443;
    let textParts = [175,36,58,179,135,111,138,221,202];
    for(var i = 8; i <= 16; i++){
      objectParser(docDefinition, '', '&mainP' + i + '&', get_text('argues/main.txt').substr(startAt, textParts[i-8]));
      startAt += textParts[i-8]; //mainP8 - mainP16 here
    }
    hider('first');
    hider('second_2');
  }
  btn2.onclick = function() { //delivered
    for (i in docDefinition.content[3].text) { //deleting paragraphs only needed second button 
      if (i >= 14) {
        delete docDefinition.content[3].text[i];
      }
    }
    hider('first');
    hider('second_1')
  }
})()

document.oncontextmenu = function() {
  return false;
};

var yesNoQuestionsCheck = function() {
  var checkAnswers = true;
  for (var i = 0; i <= 7; i++) {
    if (phrases[i] == "null")
      checkAnswers = false;
  }
  submit: if (checkAnswers &&
    phrases[9] != "null") {
    if (phrases[7] == "Yes") {
      if (phrases[8] == "null") {
        console.log(8);
        swal('Ви вiдповiли не на всi питання', 'Вiдповiсти', 'error');
        break submit;
      }
    }
    if (phrases[0] === 'no') {
      docDefinition.content[12].ol[2] = docDefinition.content[12].ol[3];
      delete docDefinition.content[12].ol[3];
    }
    if (phrases[9] === 'no') {
      delete docDefinition.content[12].ol[3];
    }
    hider('questions');
    hider('userInfoBlock');
  } else {
    swal('Ви вiдповiли не на всi питання', 'Вiдповiсти', 'error');
  }
}

function objectParser(obj, stack, searchFor, changeTo) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        objectParser(obj[property], stack + '.' + property, searchFor, changeTo);
      } else {
        if (typeof obj[property] == 'string') {
          if (obj[property].includes(searchFor)) {
            obj[property] = obj[property].replace(eval('/' + searchFor + '/'), changeTo);
          }
        }
      }
    }
  }
}
