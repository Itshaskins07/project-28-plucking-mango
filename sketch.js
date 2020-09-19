
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimg, treeImg;
function preload(){
boyimg=loadImage("Plucking mangoes/boy.png");
treeImg=loadImage("Plucking mangoes/tree.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mangoes(700,500,40);
	mango2=new Mangoes(459,393,40);
	mango3=new Mangoes(330,454,40);
	mango4=new Mangoes(646,416,40);
	mango5=new Mangoes(782,459,40);
  stoneObj=new Stone(70,560,40);
  launcher=new Launcher(stoneObj.body,{x:70,y:560})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
  textSize(22);
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  imageMode(CENTER);
  image(boyimg,160,630,270,270);
  image(treeImg,550,550,550,370);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  launcher.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}



function mouseReleased(){
launcher.fly();

	
}


function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.mangoes.position;
stoneBodyPosition=lstone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.mangoes,false);

}
}



function keyPressed(){
if(keyCode == 32){
//Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
launcher.attach(stoneObj.body);
}
	}