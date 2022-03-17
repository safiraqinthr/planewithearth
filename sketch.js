var x = 280;
var y = 280;
function setup() {
  createCanvas(600,600);
 frameRate(10);
}

function draw() {
 background(255);
  
 for (var i=0;i<10;i++) {
  var xDis = random(-180, 180);
  var yDis = random(-180, 180);
  butterfly(mouseX+xDis, mouseY+yDis);
 }
 
 x = x+random(-5, 6);
 y = y+random(-4, 4);
 butterfly(x, y);
}

function butterfly (x, y) {
 line(x-15,y-10,x,y);
  line(x+15,y-10,x,y);
 // fill(YELLOW);
  ellipse(x-25,y+20,35,30);
  ellipse(x-25,y+40,35,30);
  ellipse(x+25,y+20,35,30);
  ellipse(x+25,y+40,35,30);
  ellipse(x,y+30,30,60);
}