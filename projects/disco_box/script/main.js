const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const squares_quantity = 400;

for (let i = 0; i < squares_quantity; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    //adding random color and shadow to an element
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  });

  square.addEventListener("mouseout", () => {
    //romoving random color and shadow from an element
    square.style.background = "#1d1d1d";
    square.style.boxShadow = `none`;
  }); 
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];


//for embeded jsfiddle code
window.onload = () => window.getElementById('tabs').style.height = "100vh";