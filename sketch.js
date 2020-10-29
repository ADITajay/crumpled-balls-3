
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bar1 = new basket(630,620,20,90);
bar2 = new basket(550,650,140,20);
bar3 = new basket(490,620,20,90);
gro = new Ground(400,680,800,40);
paper = new Bird(190,200,50);
chain = new Chain(paper.body,{x:200, y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //bar1.display();  
  bar2.display();  
 // bar3.display();    
  gro.display();
  paper.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}


