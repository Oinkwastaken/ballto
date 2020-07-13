class dustpin{
  
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            friction:0.7,
            density:1.0,
          }
       this.body = Bodies.rectangle(x, y, width, height, options);
  
        this.width =  width;
        this.height = height;
        this.world =  world;
        this.image=loadImage('sprites/dustbingreen.png') 
        World.add(world,this.body)
      }
      display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+100, this.height+90);
        pop();
      }
}