function setup() {
  createCanvas(500, 400);
}

function draw() {
 background(120);
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
  line(400, 0, 400, 400);
  
  
  if (mouseX > 0 && mouseX <= 100) {
    fill('blue') //fill it blue
    ellipse(mouseX, mouseY, 40, 40)
    text('Dragon',30, 200)
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill('green')
    ellipse(mouseX, mouseY, 40, 40);
    text('unicorn',130, 200)
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill('red')
    ellipse(mouseX, mouseY, 40, 40);
    text('goblin',240, 200)
  }
  
    else if (mouseX > 300 && mouseX <= 400) {
    fill('bisque')
    ellipse(mouseX, mouseY, 40, 40);
    text('ogre',340, 200)
  }
    else if (mouseX > 400 && mouseX <= 500) {
    fill('yellow')
    ellipse(mouseX, mouseY, 40, 40);
    text('Centaur',420, 200)
  }
  
  
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}







