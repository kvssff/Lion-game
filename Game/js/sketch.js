var img;
var lion;
function preload(){
img = loadImage("images/male_lion.jpg")
}


function setup (){
    createCanvas(1000,1000)
}
function draw(){
background(220);
lion = creatSprite(500,500,20,20)
lion.addImage(img)
drawSprites()
}