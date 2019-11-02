//returns random character from string
const randSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
};
// const randSymbolShortVersion = () => "!@#$%^&*(){}[]=<>/,." [Math.floor(Math.random() * "!@#$%^&*(){}[]=<>/,.".length)]
  
//returns random lowercase symbol
const randLC = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  
//returns random uppercase symbol
const randUC = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  
//returns random numer (0-9)
const randNum = () => +Math.floor(Math.random() * 10);
  
//returns random number from 0 till i-1
const randFunc = i => +Math.floor(Math.random() * i);
  
const getRandomString = (length = 10, lower = true, upper = true, number = true, symbol = true) => {
//'settings' array (defines, whether this type of characters were included or not)
  const funcs = [
    [randLC, lower],
    [randUC, upper],
    [randNum, number],
    [randSymbol, symbol]
  ];
  //resulting string that will be filled with characterfs
  let result = "";
  //return empty line if length <= 0
  if (length <= 0) {
    return 'The length must be greater then 0';
  } else {
      //triggers only if all of the 'settings' = false
      if (!lower && !upper && !number && !symbol === true) {
        return 'At least one of the parameters must be true';
      } else {
        while (result.length < length) {
          let curentFunc = funcs[randFunc(funcs.length)];
          //add output of the function to the result if it's 'setting' != false
          curentFunc[1] ? result += curentFunc[0]() : false;
        }
        return result;
      }
    }
  };
  
  console.log(getRandomString())
  