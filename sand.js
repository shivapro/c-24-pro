class Sand{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':0.5
        }
        this.x=x;
        this.y=y;
        this.r=radius
       
        this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
        World.add(world, this.body);
      }
      display(){
        
        
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
       
        strokeWeight(4);
        stroke("black");
        fill("yellow");
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
    
      }
}