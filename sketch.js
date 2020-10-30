const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;
const World= Matter.World;
const Engine =Matter.Engine;
var particles = [];
var plinkos  = [];
var divisions=[];
var ground
var divisionHeight = 300;
function setup() {
  createCanvas(800,400);
  ground = new groud (360,360,300,10);
  for(var k=0;k<=innerWidth;k=k+80){
   divisions.push(new ground(k, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40;j<=innerWidth;j=j+50) {
   plinkos .push(new plinko(j,75));
  }
  for(var j = 40; j<=width-10;j=j+50){
    plinkos.push(new plinko(j,175));
    if(frameCount%60==0){
      particles.push(new particle(random(width/2-10,width/2+10),10,10));

    }
  }
}

function draw() {
  background(255,255,255); 
  for(j=0;j<particles.length;j++){
    particles.display();
  }
  for(k=0;k<plinkos.length;k++){
    plinkos.display();
  }
  for(i=0;k<divisions.lenght;i++){
   divisions.display();
  }
  ground.display(); 
  drawSprites();
}