class Stone{

    constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:0.3,
    friction:1,
    density:1.2,
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body);
    this.image= loadImage("Plucking mangoes/stone.png");
    this.radius=r;
    }
    display(){
    
    
    var positionA=this.body.position;     
    push();
    imageMode(CENTER);
    image(this.image,positionA.x,positionA.y,this.radius,this.radius);
    pop();
    }
    
    }
    
    
    
    