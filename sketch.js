const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var rubber,stone,iron,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,50);
    rubber = new Rubber(900,200,25);
    stone = new Stone(400,400,100,90);
    hammer = new Hammer(10,100);
    iron = new Iron(600,300,100,20);
    ball1 = new Ball(200,200,10);
    ball2 = new Ball(220,200,10);
    ball3 = new Ball(240,200,10);
    ball4 = new Ball(260,200,10);
    ball5 = new Ball(280,200,10);
    ball6 = new Ball(300,200,10);
    ball7 = new Ball(350,200,10);
    ball8 = new Ball(400,200,10);
    ball9 = new Ball(500,200,10);
    ball10 = new Ball(600,200,10);
    ball11 = new Ball(620,200,10);
    ball12 = new Ball(700,200,10);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    rubber.display();
    hammer.display();
    stone.display();
    iron.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();

    
 
}