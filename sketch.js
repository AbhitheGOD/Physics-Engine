const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  rect1=Bodies.rectangle(400,200,50,50);
  World.add(world,rect1);
  var options={isStatic:true}
ground=Bodies.rectangle(400,height,800,20,options)
World.add(world,ground);
var options={restitution:0.5}
ball=Bodies.circle(400,200,25,options);
World.add(world,ball);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill("red")
  rect(rect1.position.x,rect1.position.y,50,50);
  fill("blue")
  rect(ground.position.x,ground.position.y,800,20);
  fill("green")
  ellipse(ball.position.x,ball.position.y,25);
  fill("yellow")
}