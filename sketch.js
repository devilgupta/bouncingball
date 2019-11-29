const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ob1;
var ground, ball;
function setup(){
    var Canvas=createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

   /* var ob1_options={
        isStatic: true
    }

    ob1=Bodies.rectangle(200,100,50,50,ob1_options);
    World.add(world,ob1);*/

    var ground_options={
        isStatic: true
    }

    ground=Bodies.rectangle(200,400,200,20,ground_options);
    World.add(world,ground);


    var ball_options={
        restitution: 10.0
    }
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    /*console.log(ob1);
    console.log(ob1.type);
    console.log(ob1.position.x);
    console.log(ob1.position.y);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}