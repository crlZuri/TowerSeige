const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand,stand2;
var polygon;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var polygonImage;
var sbox1, sbox2, sbox3, sbox4, sbox5, sbox6, sbox7, sbox8, sbox9;


function preload()
{
	polygonImage=loadImage("polygon.png");
}

function setup(){

    var canvas=createCanvas(1000,400);
    engine = Engine.create();
      world = engine.world;
   // createSprite(400, 200, 50, 50);
	Engine.run(engine);
	

    ground = new Ground();
    stand = new Stand(400, 300,300,10);
    stand2 = new Stand(750,320,225,10);

    box1= new Box(275,270,30,30);
    box2= new Box(315,270,30,30);
    box3= new Box(355,270,30,30);
    box4= new Box(395,270,30,30);
    box5= new Box(435,270,30,30);
    box6= new Box(475,270,30,30);
    box7= new Box(515,270,30,30);
    
    box8= new Box(315,225,30,30);
    box9= new Box(355,225,30,30);
    box10= new Box(395,225,30,30);
    box11= new Box(435,225,30,30);
    box12= new Box(475,225,30,30);
  
    box13= new Box(355,185,30,30);
    box14= new Box(395,185,30,30);
    box15= new Box(435,185,30,30);
  
    box16= new Box(395,145,30,30);
  
    sbox1= new Box(670,300,30,30);
    sbox2= new Box(710,300,30,30);
    sbox3= new Box(750,300,30,30);
    sbox4= new Box(790,300,30,30);
    sbox5= new Box(830,300,30,30);
  
    sbox6= new Box(710,260,30,30);
    sbox7= new Box(750,260,30,30);
    sbox8= new Box(790,260,30,30);
  
    sbox9= new Box(750,240,30,30);
    
    polygon= Bodies.circle(50,200,10);
  World.add(world,polygon);

  slingshot= new Slingshot(this.polygon,{x:100,y:200});

  

    
}

function draw() {
  background(255,255,255);  

	ground.display();
	stand.display();
	stand2.display();

	fill("skyblue");
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();

	fill("pink");
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();

	fill("turquoise");
	box13.display();
	box14.display();
	box15.display();

	fill("tan");
	box16.display();


	fill("skyblue");
	sbox1.display();
	sbox2.display();
	sbox3.display();
	sbox4.display();
	sbox5.display();

	
	fill("turquoise");
	sbox6.display();
	sbox7.display();
	sbox8.display();

	fill("pink");
	sbox9.display();



	imageMode(CENTER)
	image(polygonImage,polygon.position.x,polygon.position.y,40,40);
	slingshot.display();



}


function mouseDragged()
{
	Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}






