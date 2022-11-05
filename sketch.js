const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ground,ball,dustbin;
var bImg;
var launcher;

function setup(){
    engine=Engine.create();
    world=engine.world;

    var canvas=createCanvas(1200,400);
    ground=new Ground(600,375,1200,50);

    
    
    ball=new Ball(200,200,30);
    dustbin=new Dustbin(735,250,20,200,965,250,20,100,850,350,250,10);
    launcher=new Launcher(ball.body,{x:150,y:150})

    
    
   

   
}

function draw(){
    background(123,145,234);
    ground.display(181,101,29);
   
   
    
   
    launcher.display()
    ball.display();
    dustbin.display();

    Engine.update(engine);

   
    
}
function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
        launcher.attach(ball.body);
    }
}
    

function mouseDragged(){
    
   Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

