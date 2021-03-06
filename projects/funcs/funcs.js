//goes thru an object searching for matching piece of text/word (stack = ''), than replases it
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
let inputRestriction = (id, amount) => {
  let text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      i >= amount ?
        text.value = text.value.slice(0, amount) : true;
    }
  }
}

//returns current date. day, month and year separated by period by default. can be changed
let today = (separator = '.') => {
  let today = new Date(),
      dd = today.getDate(),
      mm = today.getMonth() + 1, //january is 0
      yyyy = today.getFullYear();

  dd < 10 ? dd = '0' + dd : dd;
  mm < 10 ? mm = '0' + mm : mm;
  return ([dd, mm, yyyy].join(separator));
}

//returns diference between two dates
let dateDiff = (date1, date2) => {
  let d1 = new Date(date1),
      d2 = new Date(date2),
      daysLag = Math.ceil(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  d1 > d2 ? daysLag = -daysLag : daysLag;
  return daysLag;
}

//takes an id of input field as parametr. checks if only ukrainian letters inputted
let ukrCheck = (id) => {
  let text = document.getElementById(id);
  text.onkeyup = function testKey() {
    for (i in text.value) {
      if (text.value[i].match(/[ыЫъЪэЭa-zA-Z]+/) !== null)
        text.value = text.value.replace(/[ыЫъЪэЭa-zA-Z]+/, '');
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

//returns random lowercase symbol (generates random number (charcode) in an appropriate for uppercase letters interval, then translates it to the letter)
let randLC = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

//returns random uppercase symbol
let randUC = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

//returns random numer (0-9)
let randNum = () => +String.fromCharCode(Math.floor(Math.random() * 10) + 48);

//transpiles string between two layouts
let keybordLayoutSwapper = (str, dir = 0) => {
  //dir 0 - eng => ru
  //dir 1 - ru => eng
  dir = [0, 1].indexOf(dir) === -1 ? 0 : dir;
  const a = [..."йцукенгшщзхъфывапролджэячсмитьбю"];
  const b = [...`qwertyuiop[]asdfghjkl;'zxcvbnm,.`];

  let split = [...str];
  split.forEach(
    e => (split[split.indexOf(e)] = (!dir ? a : b)[(!dir ? b : a).indexOf(e)])
  );

  return split.join("");
};