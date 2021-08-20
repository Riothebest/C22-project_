const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var roof;
var rope1, ball1;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	myEngine = Engine.create();
	myWorld = myEngine.World;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(myWorld,roof);

	ball1 = Bodies.circle(200,150,10);
  	World.add(myWorld, ball1);

	//rope1 = new Rope(370,100,ball1);
	rope1 = Constraint.create({

		pointA: {x: 200, y:20},
		bodyB: ball1,
	   pointB: {x: 0, y:0},
	   length: 100,
	   stiffness: 0.2
	 
	  });
	  World.add(myWorld,rope1)
	//Engine.run(myEngine);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(myEngine)
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	//rope1.display();
	push();
  stroke("yellow");
  strokeWeight(3);
	line(rope1.pointA.x, rope1.pointA.y, ball1.position.x,ball1.position.y);
  pop();
  //create ellipse shape for multiple bobs here

  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,10)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
