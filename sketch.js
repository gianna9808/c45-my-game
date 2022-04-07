var tanjiro
var tanjiro_img
var bg
var bg_img

function preload(){
  tanjiro_img=loadImage("tanjiro.png");
  bg_img=loadImage("wisteria_bg.jpg")
}

function setup() {
  createCanvas(1000,800);
  tanjiro=createSprite(400, 200, 50, 50); 
  tanjiro.addImage(tanjiro_img);
}

function draw() {
  background(bg_img);  
  drawSprites();
}