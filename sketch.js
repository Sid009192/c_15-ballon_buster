var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon=1
var score=0;
var balloongroup , redballoongroup , pinkballoongroup , greenballoongroup,blueballoongroup

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  scene = createSprite(windowWidth/2, windowHeight/2,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(windowWidth/2 + 450,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0   
   arrrowgroup = new Group()
   balloongroup = new Group() 
   redballoongroup = new Group() 
   pinkballoongroup = new Group() 
   blueballoongroup = new Group() 
   greenballoongroup = new Group()   
   

}

function draw() {
  console.log(mouseX)
  background("black");
  fill("yellow");
  textSize(20)
  text('Score: ' + score , windowWidth/2 + 500 ,40 )  
  // text.depth = 4     
  // moving ground
    // scene.velocityX = -3 
  /*
    if (scene.x < 0){
      scene.x = scene.width/2;
    }*/
  
  //moving bow
  bow.y = World.mouseY
  ///bow.collide(scene)   ## this makes a very different change y so 
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }


  //get random number from 1 to 4 
   select_balloon = Math.round(random(1,4));

  
   arrrowgroup.bounce(balloongroup , balloonhit)
      
   if (World.frameCount % 20  == 0) {
    switch(select_balloon ){
    case 1: 
    redBalloon();
      break;
    case 2:
      blueBalloon();
      break;
    case 3:
      pinkBalloon();
      break;
    default:
      greenBalloon();
      break;
      }
      

}
    
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
if (frameCount % 6 === 0){  
  var arrow= createSprite(windowWidth/2 + 410, bow.y, 60, 10);
  arrow.addImage(arrowImage);
  // arrow.x = 360;
  // arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 300  ;
  arrow.scale = 0.3;
  arrrowgroup.add(arrow) 


}

}

function redBalloon() {
  var red = createSprite(windowWidth/2 - 450,Math.round(random(20, windowHeight - 20)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 280;
  red.scale = 0.1;
  balloongroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(windowWidth/2 - 450,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 280;
  blue.scale = 0.1;
  balloongroup.add(blue)

}

function greenBalloon() {
  var green = createSprite(windowWidth/2 - 450,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 280;
  green.scale = 0.1;
  // green
  balloongroup.add(green)

}

function pinkBalloon() {
  var pink = createSprite(windowWidth/2 - 450,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 280;
  pink.scale = 1
  //pink
  balloongroup.add(pink)
  

}


function balloonhit(arrow , ballon){
  ballon.destroy()
  arrow.destroy ()
  score ++  
}