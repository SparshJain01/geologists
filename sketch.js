
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var plane;
var hammer1;
var sand1 , sand2 , sand3 , sand4 , sand5 , sand6 , sand7 , sand8;
var stone1;
var rubber1;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)
	hammer1 = new Hammer(100,100);
     sand1 = new Sand(505,450,10);
	stone1 = new Stone(700,320,100,100);
	sand2 = new Sand (360,420,10);
	sand3 = new Sand (405,350,10);
	sand4 = new Sand (50,200,10);
	sand5 = new Sand (305,500,10);
	sand6 = new Sand (465,320,10);
	sand7 = new Sand (218,520,10);
	sand8 = new Sand (598,620,10);
	rubber1 = new Rubber (600,504,100);
    iron1 = new Iron (600,200,50,50);
}


function draw() {
  background(0);
  Engine.update(engine);

plane.display();
hammer1.display();
sand1.display();  
stone1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
rubber1.display();
iron1.display();
 
}



