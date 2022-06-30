var canvas;
var backgroundImage, obs1,obs2, obs3;
var man1, man2 
//var man1Moving

//man1Moving=false

function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  man1Img = loadAnimation("assets/Runner-1.png","assets/Runner-2.png");
  man2Img = loadAnimation("assets/Runner-3.png","assets/Runner-4.png")

  obs1Img = loadImage("assets/obs1.png"); 
  obs2Img = loadImage("assets/obs2.png"); 

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 // bg = createSprite(windowWidth, windowHeight);
  //bg.addImage("bg",backgroundImage);

  man1 = createSprite(450,500)
  man1.addAnimation("m1",man1Img);
  man1.scale= 0.1

  man2 = createSprite(800,500)
  man2.addAnimation("m2",man2Img);
  man2.scale= 0.3
  

}

function draw() {
  background(0);
  image(backgroundImage, 0, -height * 5, width, height * 6);

 drawSprites()
randNo = Math.round(random(1,2));

if (frameCount % 50 == 0) {
  if (randNo == 1) {
    o1 = createSprite(510, 200)
  o1.addImage("o1",obs1Img);
  o1.scale= 0.2
  }
  else {
    o2 = createSprite(800,500)
    o2.addImage("o2",obs2Img);
  }
}


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
    
     
  