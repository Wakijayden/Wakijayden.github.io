//set the initial value for x
let x = 0;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightblue');
  img = loadImage('Runner.jpeg');
}


function draw() {

  //Set background color
 
  background('lightblue');
  image(img, 250 + 1.1*x, 300, 100, 100);
 
  //The Ground
  noStroke();
  fill('darkgreen');
  rect(0,400,windowWidth,100);


  //The House
  fill('darkred');
  strokeWeight(10);
  stroke('yellow');
  rect(50,200,230,250);

  //Windows
  fill('yellow');
  strokeWeight(10);
  stroke('black');
  rect(70,220,50,50);
  rect(210,220,50,50);
  rect(70,290,50,50);
  rect(210,290,50,50);

  //Chimney
  fill('darkred')
  rect(200,100,50,100);
 
  //Triangle
  fill('yellow');
  triangle(50,200,100,100,270,200);

  //Door
  fill('red')
  rect(140,350,50,100);

  //Knob
  fill('yellow')
  strokeWeight(5);
  ellipse(180,400,10,10)

  //Tree
  fill('orange')
  rect(420,350,20,100);

  //Tree Part 2
  fill('darkgreen')
  ellipse(410,350,50,50)
  ellipse(460,350,50,50)
  ellipse(440,370,50,50)
  ellipse(430,320,50,50)
  ellipse(430,340,50,50)

  //Spongebob
  x = x + 1;
  //If the distance has gone over 600, reset it to zero
  if (x>600){
    x = 0;
  }
}



