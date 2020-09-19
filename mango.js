class Mangoes{

constructor(x,y,r){
var options={
isStatic:true,
restitution:0,
friction:1,
}
this.mangoes=Bodies.circle(x,y,r,options)
World.add(world,this.mangoes);
this.image= loadImage("Plucking mangoes/mango.png");
this.radius=r;
}
display(){


var positionA=this.mangoes.position;     
push();
imageMode(CENTER);
image(this.image,positionA.x,positionA.y,this.radius,this.radius);
pop();
}

}



