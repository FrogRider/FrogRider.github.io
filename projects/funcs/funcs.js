//goes thru an object searching for matching piece of text/word
let objectParser = (obj, stack, searchFor, changeTo) => {
  for (let property in obj) {
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

//checks for quantity of numbers in selected num input field
let numberValueCheck = (id, amount) => {
  let text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      if (i >= amount) {
        text.value = text.value.slice(0, amount);
      }
    }
  }
}

//returns current date. day, month and year separated by period by default. can be changed
let today = (separator = '.') => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //january is 0
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = [dd, mm, yyyy].join(separator);
  return today;
}

//returns diference between two dates
let dateDiff = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let daysLag = Math.ceil(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  if (d1 > d2) {
    daysLag = -daysLag;
  }
  return daysLag;
}

//takes an id of input field as parametr. checks if only ukrainian letters inputted
let ukrCheck = (id) => {
  let text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      if (text.value[i].match(/[ыЫъЪэЭa-zA-Z]+/) !== null) {
        text.value = text.value.replace(/[ыЫъЪэЭa-zA-Z]+/, '');
      } 
    }
  }
}

//returns entered month as a word in one of the languages
let month = (month, lang = 'en') => {
  var arr = {
    ua: ['Ciчень', 'Лютий', 'Березень', 'Квiтень',
      'Травень', 'Червень', 'Липень', 'Серпень',
      'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ],
    ru: ['Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
    ],
    en: ['January ', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'Decemrer',
    ],
    de: ['Januar', 'Februar', 'März', 'April',
      'Mai', 'Juni', 'Juli', 'August',
      'September', 'Oktober', 'November', 'Dezember',
    ],
    spa: ['Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ]
  };
  let foo = (obj, num) => {
    for (var prop in obj) {
      if (prop == lang)
        return (obj[prop][num - 1])
    }
  }
  return (foo(arr, month))
}