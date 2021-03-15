
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	plane=new Plane(600,height,1200,30)
	//Create the Bodies Here.
	hammer =new Hammer(10,100)
	stone=new Stone(800,500,100,100)
rubber=new Rubber(900,450,70)
sand1=new Sand(500,500,10);
sand2=new Sand(520,500,10);
sand3=new Sand(540,500,10);
sand4=new Sand(560,500,10);
sand5=new Sand(580,500,10);
sand6=new Sand(600,500,10);
sand7=new Sand(610,500,10);
sand8=new Sand(630,500,10);
sand9=new Sand(650,500,10);
sand10=new Sand(660,500,10);
iron=new Iron(300,350);
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("lightBlue");
  plane.display();
  hammer.display();
  stone.display();
rubber.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
sand10.display();
iron.display();

  drawSprites();
 
}



