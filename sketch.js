
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

	//Create the Bodies Here.

	box=new Box(600,645,10,70)
	box2=new Box(690,645,10,70)
	box3=new Box(645,670,100,10)
	ground=new Ground(400,690,805,30)
	ball=new Ball(200,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-15});
    }
  }


