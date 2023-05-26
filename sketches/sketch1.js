function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Draw head
  fill('bisque')
  ellipse(200,200,400,300)
  
  //Add eyes 
  strokeWeight(5)
  fill('white')
  ellipse(110,130,110,10,)
  ellipse(280,130,110,10)
 fill('black')
  ellipse(280,130,20,5)
  fill('black')
  ellipse(110,130,20,5)
  
  //Mouth
  strokeWeight(5)
  fill('black')
  ellipse(190,235,130)
  
  
  
  //show mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0)
  text('Mouse X:  '+ mouseX,0,20)
  text('Mouse Y:  '+ mouseY,0,40)
}