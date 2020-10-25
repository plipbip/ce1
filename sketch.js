var zenia , wall;
var speed, weight;


function setup() {
  createCanvas(1200,400);
  zenia = createSprite(50 , 200 , 50 , 50 );

  wall=createSprite(1000,200,60,height/2);

speed=random(55,90)
weight=random(400,1500);
zenia.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(wall.x-zenia.x<(zenia.width+wall.width)/2){
   
   zenia.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   if(deformation>180) 
   {
     zenia.shapeColor=color(255,0,0);
   } 
   
  if(deformation<180 && deformation >100){
    zenia.shapeColor=color(230,230,0);
  }
  if(deformation<100){
  zenia.shapeColor=color(0,255,0);
  }


  }









  drawSprites();
}