const ball = document.getElementById("ball");

ball.onmousedown = e => {
  const coords = getCoords(ball),
    shiftX = e.pageX - coords.left,
    shiftY = e.pageY - coords.top;

  const moveAt = e => {
    ball.style.left = e.pageX - shiftX + "px";
    ball.style.top = e.pageY - shiftY + "px";
  };

  moveAt(e);

  document.onmousemove = e => {
    moveAt(e);
  };

  ball.onmouseup = () => {
    document.onmousemove = null;
    ball.onmouseup = null;
  };
};

const getCoords = elem => {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left
  };
};
