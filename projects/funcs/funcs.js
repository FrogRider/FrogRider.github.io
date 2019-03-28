//goes thru an object searching for matching piece of text/word
let objectParser = (obj, stack, searchFor, changeTo) => {
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

//checks fo quantity of numbers in selected num input field
let numberValueCheck = (id, amount) => {
  var text = document.getElementById(id);
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

  today = [mm, dd, yyyy].join(separator);
  return today;
}

//returns diference between two dates
let dateDiff = (date1, date2) => {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var daysLag = Math.ceil(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  if (d1 > d2) {
    daysLag = -daysLag;
  }
  return daysLag;
}

//takes an id of input field as parametr. checks if only ukrainian letters inputted
let ukrCheck = (id) => {
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
