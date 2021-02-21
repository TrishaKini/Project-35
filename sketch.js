var balloon;
var database;
var position;




function preLoad(){
  hABImg = loadImage(HAB.jpg)



}
function setup() {
  database = firebase.database();
  createCanvas(800,400);
   balloon = createSprite(400, 200, 50, 50);

   var balloonPosition = database.ref('balloon/position');
   balloonPosition.on("value",readPosition,showError)


  
}



function draw() {

  if(keyDown (LEFT_ARROW) ) {
    balloon.x = balloon.x -10;
  }
    else if(keyDown (RIGHT_ARROW) ) {
    
    balloon.x = balloon.x +10;
    }
    else if(keyDown (UP_ARROW) ) {
    balloon.y = balloon.y -10;}
    
    else if (keyDown (DOWN_ARROW) ) {
    balloon.y = balloon.y +10;
    }

  balloon = addImage("hABImg")
  background(255,255,255);  
  drawSprites();
}

function readPosition(data){
  position = data.val();
  console.log(position);
  balloon.x = position.x
  balloon.y = position.y
  
  }
  
  
  
  function changePosition(x,y){
  database.ref('balloon/position').set({
      'x':position.x + x,
      'y':position.y + y
  
  })
  }
  
  function showError(){
  console.log("error in reading from the database")
  
  }