class generator {
  constructor(
    length = 10,
    lower = true,
    upper = true,
    symbol = true,
    number = true
  ) {
    this.lower = lower;
    this.upper = upper;
    this.symbol = symbol;
    this.number = number;
    this.length = length;
  }

  randSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  randLC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  randUC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  randNum() {
    return +Math.floor(Math.random() * 10);
  }

  get generate() {
    const funcs = [
      [this.randLC, this.lower],
      [this.randUC, this.upper],
      [this.randNum, this.number],
      [this.randSymbol, this.symbol]
    ];

    let result = "";
    //return empty line if length <= 0
    if (this.length <= 0) {
      return "The length must be greater then 0";
    } else {
      if (!this.lower && !this.upper && !this.number && !this.symbol === true) {
        return "At least one of the parameters must be true";
      } else {
        while (result.length < this.length) {
          let curentFunc = funcs[+Math.floor(Math.random() * 4)];

          // curentFunc[1] ? (result += curentFunc[0]()) : false;

          if (curentFunc[1]) result += curentFunc[0]();
        }
        return result;
      }
    }
  }
}

export default generator;
