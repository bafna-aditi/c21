var fixedobject, movingobject
function setup() {
  createCanvas(800,400);
  fixedobject = createSprite(600,300,50,50)
  movingobject = createSprite(700,200,50,50)
  fixedobject.shapeColor = "yellow"
  movingobject.shapeColor = "yellow"
 
}


function draw() {
  background("black"); 
  movingobject.x = mouseX
  movingobject.y = mouseY

  

 var restults = objects(fixedobject,movingobject)
  if(restults == true){
    movingobject.shapeColor = "turquoise"
    fixedobject.shapeColor = "turquoise"
  }

  if(restults == false){
    movingobject.shapeColor = "yellow"
    fixedobject.shapeColor = "yellow"
  }
  drawSprites();
}


