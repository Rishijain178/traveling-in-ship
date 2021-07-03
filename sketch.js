
function preload(){
  seaImg=loadImadge("sea.png");
  shipImg1=loadAnimation();
}

function setup(){
  createCanvas(400,400);
  beach.addImage(seaImg);
  
}

function draw() 
  background("blue");
 if(sea.x < 0){
   sea.x=sea.width/2;
 }
 
