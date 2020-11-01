
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1,boyImg,tree,ground;

function preload()
{
 boyImg = loadImage("sprites/boy.png");	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,670,800,20);
	stone1 = new Stone(400,300);
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  stone1.display();
  
  drawSprites();
 
}



