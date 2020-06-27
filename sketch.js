var bullet,wall1,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52)
  
  bullet=createSprite(50,200,50,50);
  wall1=createSprite(1200,200,thickness,height/2)
  wall1.shapeColor=colour(80,80,80)
}


function draw() {
  background(255,255,255); 
  bullet.velocityX=speed; 
  if(hasColided(bullet,wall1))
  {
     bullet.velocityX=0
     var damage= 0.5 * weight * speed* speed/(thickness* thickness *thickness);
     
     if(damage>10){
      wall1.shapeColor=colour(255,0,0)
     }

     if(damage<10){
      wall1.shapeColor=colour(0,255,0)
     }

  }
 drawSprites();
}
function hasColided (bullet,wall1){
      bulletRightEdge = bullet.x,bullet.width;
      wall1LeftEdge=wall.x;
      if (bulletRightEdge>=wall1LeftEdge){
        return true
      }
      return false
}







