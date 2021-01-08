class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,200,options)
        this.radius = 200
        World.add(world,this.body)
    }
    display(){
        
            var pos = this.body.position;
            var angle = this.body.angle;
            noStroke();
            
            imageMode(CENTER);
            image(boyImg,pos.x,pos.y,this.radius*2.5,this.radius*2.5)
            //image(stoneImg, this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
          }
        }