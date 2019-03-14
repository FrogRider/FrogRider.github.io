window.onload = function(){
	var fps = 15;
  canv = document.getElementById('canv');
  ctx = canv.getContext('2d');
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000/fps);
}
  
controls: (function(){
  score = 0;
  if(!sessionStorage['hScore'])
    sessionStorage['hScore'] = 0;
  playerX=playerY=10;
  gridSize=tileCount=20; //grid size, tile count
  dotX=dotY=15;
  xVelos=yVelos=0;//velositys
  tailParts=[];
  tail = 5;
}())

function game(){
	playerX+=xVelos;
  playerY+=yVelos;
  if(playerX < 0){
  	playerX = tileCount-1;
  }
  if(playerX > tileCount - 1){
  	playerX = 0;
  }
  if(playerY < 0){
  	playerY = tileCount-1;
  }
  if(playerY > tileCount - 1){
  	playerY = 0;
  }
  ctx.fillStyle='#2A2232FF';//bg
  ctx.fillRect(0,0, canv.width, canv.height);
  scoreRecorder(score);
    if(dotX==playerX && dotY==playerY){
  		score++;
}

  ctx.fillStyle='#00C886FF';//snake
  for(var i=0; i<tailParts.length; i++){
    ctx.fillRect(tailParts[i].x*gridSize,tailParts[i].y*gridSize, gridSize-2,gridSize-2);
    if(tailParts[i].x==playerX && tailParts[i].y==playerY){
      tail=5;
      if(sessionStorage['hScore'] < score)
        sessionStorage['hScore'] = score;
      score=0;
      if(sessionStorage['hScore'] > 0)
        document.getElementById('hScore').innerHTML = `Your highest score: ${sessionStorage['hScore']} point`;
      if(sessionStorage['hScore'] > 1)
        document.getElementById('hScore').innerHTML += 's'
    }
  }
  tailParts.push({x:playerX,y:playerY});
  while(tailParts.length > tail){
  	tailParts.shift();
  }
  
  if(dotX==playerX && dotY==playerY){
    	tail++;
      dotX=random();
      dotY=random();
      for(var i=0; i<tailParts.length; i++){
        if(tailParts[i].x==dotX && tailParts[i].y==dotY){
          tail--;
          dotX=random();
          dotY=random();
        }
      }
    }
  
  ctx.fillStyle='#F90F59FF';//dot
  ctx.fillRect(dotX*gridSize,dotY*gridSize, gridSize-2,gridSize-2);
}

function keyPush(event){
  // alert(event.keyCode);
  console.log(event.keyCode);
switch(event.keyCode){
      case 37: //left
        xVelos=-1; yVelos=0;
        break;
      case 65:
        xVelos=-1; yVelos=0;
        break;
      case 38://up
        xVelos=0; yVelos=-1;
        break;
      case 87:
        xVelos=0; yVelos=-1;
        break;
      case 39://right
        xVelos=1; yVelos=0;
        break;
      case 68:
        xVelos=1; yVelos=0;
        break;
      case 40://down
        xVelos=0; yVelos=1;
        break;
      case 83:
        xVelos=0; yVelos=1;
        break;
    }
}

var scoreRecorder = function (i){
  ctx.fillStyle = "#AFACB5FF";
  ctx.font = "bold 10pt Arial";
  ctx.fillText(i, 10, 20);
}

var random = function(){
  return Math.floor(Math.random()*tileCount);
}

swipes: (function(){
  var el = document.getElementById('canv');

var hammer = new Hammer(el);
var hammer2 = new Hammer(el);
hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
// listen to events...
hammer.on("swipeup ", function(ev) {
    xVelos=0; yVelos=-1;
});
hammer.on(" swipedown", function(ev) {
    xVelos=0; yVelos=1;
});
hammer2.on("swipeleft ", function(ev) {
    xVelos=-1; yVelos=0;
});
hammer2.on(" swiperight", function(ev) {
    xVelos=1; yVelos=0;
});
}())

