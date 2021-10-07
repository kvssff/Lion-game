var img;
var lion;
var bg;
function preload(){
bg = loadImage("images/background.jpg")
  img = loadImage("images/lion.jpg")
}


function setup (){
    createCanvas(1000,1000)
}
function draw(){
background = createSprite(1000,1000)
lion = createSprite(500,500,20,20)
lion.addImage(img)
lion.scale = 0.5
if(keyDown("UP_ARROW")){
 lion.y = lion.y+40;
}












drawSprites()
}