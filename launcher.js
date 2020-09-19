class Launcher{

    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04,    
        }
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher);
    }
    display(){
       if(this.launcher.bodyA!=null){

        
        var positionA=this.launcher.bodyA.position;     
        var positionB=this.launcher.pointB;
        push();
        strokeWeight(5);
        stroke("red");
        line(positionA.x,positionA.y,positionB.x,positionB.y);
        pop();
       }
    }

    fly(){
this.launcher.bodyA=null;

}

}








