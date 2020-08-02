var bg

var childimg;
var d_img;
var arrow_img;
var touchPoint=[];
var touchPoint1=[];
function preload(){
bg=loadImage("bgg.jpg");
childimg=loadImage("boy.png");
d_img=loadImage("disclaimer.png");
arrow_img=loadImage("arrow.png");
}

function setup(){
    createCanvas(displayWidth-20,750);
road= createSprite(displayWidth/2,720,displayWidth-20,10);
child=createSprite(displayWidth/2,400);
child.addImage(childimg);

child.scale=3;

arrow=createSprite(10,10);
arrow.addImage(arrow_img);
arrow.scale=0.05
sq=createSprite(10,10,20,20);
sq.visible=false;
}



function draw(){
background(bg);
image(d_img,1000,600,200,100)

textSize(30);
fill ("black");
text("only click on  green square",550,30);
text("GoodTouch :"+touchPoint.length,25,100);
text("Bad Touch:"+touchPoint1.length,1000,100);
//text(mouseX+"--"+mouseY,300,100);
spawnTouchPoint();
//sq.visible=false;
arrow.x=mouseX;
arrow.y=mouseY;
 
drawSprites();
if(touchPoint1.length>2)
{
    sq.destroy();
    alert("game over!!!!try to understand the bad touch")
    exit ();
}
}
function spawnTouchPoint()
{
    if(frameCount%40===0)
    { 
      
      sq.x=random(680,800);
      sq.y=random(100,740);
        sq.visible=true;
        if((sq.y>=350 && sq.y<=410) ||(sq.y>=510 && sq.y<=580) ||(sq.y>=230 && sq.y<=260)  )
        {
            sq.shapeColor="red";
        }
        else 
        {
            sq.shapeColor="green";  
        
        }
        sq.onMousePressed = function() {
    
        
            if(sq.shapeColor==="green")
           
            
            touchPoint.push([sq]);
            else if(sq.shapeColor==="red")
            touchPoint1.push([sq]);
        }
        
    
        }
        
    }
