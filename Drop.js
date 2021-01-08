class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'friction':0.001,
            'restitution':0.1
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        
            var pos = this.body.position;
            var angle = this.body.angle;
            noStroke();
            fill("blue")
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,this.radius,this.radius)
            //image(stoneImg, this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
          }
    update(){
        if(this.body.position.y>height)
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
    }
    }
