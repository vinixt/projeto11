var barco
var sea





function preload(){

barcox = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  //criando o barco!
sea = createSprite(200,200,100,100);
sea. addImage("balanço", seaImg);
if (sea.x < 0){
sea.x = sea.width/2;

}
barco = createSprite(100,320,10,10);
barco. addAnimation("running", barcox);
barco.scale = 0.2;

}

function draw() {
  background("blue");
    drawSprites();

 
}
