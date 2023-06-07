
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800, 680, 1200, 20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(850,600,20,120)
	ball = Bodies.circle(400,100,20,ball_options);
	

	Engine.run(engine);


	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
  leftSide.display()
  rightSide.display()
 ground.display()
 Engine.update(engine);
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	
	}
}


