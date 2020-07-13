var dustpin1,Ground,a
var paper1,paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Ground=new ground(400,680,800,40)
	Engine.run(engine);
	paper1=new paper(100,500,10,10)
	dustpin3=new dustpin(510,610,80,10)
	dustpin4=new dustpin(410,605,10,90)
	dustpin5=new dustpin(590,605,10,90)
	a=-2
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display()
  dustpin3.display()
  Ground.display()
  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:a});
	a=a+0.13
	if(a>5){
		a=0
	}

}	
  drawSprites();
 
}


