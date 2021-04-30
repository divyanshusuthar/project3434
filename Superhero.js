class Superhero{
    constructor(x,y,r){
  ​    var options = {
  
  ​      isStatic:false,
  ​      restitution:0,
  ​      frictionAir3:1,
  ​      density:1

  ​    }
  ​    this.body = Bodies.rectangle(x,y,r,options);
  ​    this.x = x;
      this.y = y;
      this.r = r;
  ​    this.image = loadImage("images/hero.png")
  ​    World.add(world,this.body)
  
    } 
    display(){
  ​    var angle = this.body.angle;
  ​    var pos = this.body.position;
  ​    Push();
  ​    translate(pos.x,pos.y);
  ​    imageMode(CENTER);
  ​    this.image(this.image,0,0,this.width,this.height);
  ​    Pop();
    }
  }
  
  