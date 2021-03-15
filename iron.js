class Iron{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':3.0,
            'density':30
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 80;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        
        var angle = this.body.angle;
        var pos = this.body.position;
       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("yellow");
        fill("brown");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    
      }
}