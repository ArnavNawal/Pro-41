const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var boy,boyImg;
var thunder1,thunder1Img,thunder2,thunder2Img,thunder3,thunder3Img,thunder4,thunder4Img
var maxDrops = 100;
var drop = []
function preload(){
  boyImg=loadImage("Walking Frame/walking_1.png")
  thunder1Img = loadImage("thunderbolt/1.png");
  thunder2Img = loadImage("thunderbolt/2.png");
  thunder3Img = loadImage("thunderbolt/3.png");
  thunder4Img = loadImage("thunderbolt/4.png");
}

function setup(){
   engine=Engine.create()
   world=engine.world
   createCanvas(800,1500)
   //drop = new Drop(400,20,05)
   if(frameCount % 30 === 0){
    for(var i = 0; i<maxDrops; i++){
        drop.push(new Drop(random(0,800),random(0,800),5));
    }
   }
   umbrella = new Umbrella(300,1200)
   
   Engine.run(engine);
}

function draw(){
    Engine.update(engine)
    background("black")
    //image(boyImg,50,950,550,500)
    for(var i=0;i<maxDrops; i++){
        drop[i].display();
        drop[i].update();
    }
    umbrella.display();
    if(frameCount%50===0){
        var thunder = createSprite(random(10,770),100,10,10)
        thunder.scale = random(0.2,01)
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1 : thunder.addImage(thunder1Img)
            break;
            case 2 : thunder.addImage(thunder2Img)
            break;
            case 3 : thunder.addImage(thunder3Img)
            break;
            case 4 : thunder.addImage(thunder4Img)
            break;
            default : break
        }
        thunder.lifetime = 10
    }
    drawSprites();
}   

