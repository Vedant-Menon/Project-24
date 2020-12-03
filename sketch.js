
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    paper = new Paper(200,100,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  paper.display();
  drawSprites();
  
}



