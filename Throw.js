class Throw{
    constructor(){
  ​    var options = {
  
  ​      bodyA:bodyA,
  ​      pointB:pointB,
  ​      stiffness:0.01,
  ​      length:10
  
  ​    }
  ​    this.pointB = pointB;
  ​    this.throw = Constraint.create(options);
  ​    World(world,this.throw);
    }
  
    fly(){
  ​    this.throw.bodyA = null;
  
    }
    launch(bodyA){
  ​    this.throw.bodyA = bodyA;
  
    }
    display(){
    }  
 }