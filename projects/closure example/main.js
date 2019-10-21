let swaper = id => {
  let elems = document.getElementsByClassName(id),
    length = elems.length,
    counter = 0;
  return direction => {
    elems[counter].style.background = "white";
    if (direction === "back") counter == 0 ? (counter = length - 1) : counter--;
    if (direction === "front")
      counter == length - 1 ? (counter = 0) : counter++;
    elems[counter].style.background = "red";
  };
};

let swap = swaper("box");
