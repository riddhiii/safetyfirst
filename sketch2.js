var security1,security2;
var bg;
var childgroup;
var robAnimation;
var robAnimation2;
var robber;
var pg,security;
var boy,boy_left,boy_right;
var flag=0;
function preload(){
bg=loadImage("playg.png");
childgroup=loadImage("childgroup.png");
robAnimation1=loadAnimation("robber3.png");
robAnimation2=loadAnimation("robber4.png");
robAnimation3=loadAnimation("robber2.png","robber1.png","robber3.png","robber4.png");
pg=loadImage("pg.jpg");
security1=loadAnimation("security1.png","security2.png","security3.png","security4.png");
security2=loadAnimation("security5.png");
boy = loadAnimation("one.png");
boy_left=loadAnimation("leftrun.jpg");
boy_right=loadAnimation("rightrun1.jpg");

}
 
function setup(){
    createCanvas(displayWidth-20,750);
    road= createSprite(displayWidth/2,720,displayWidth-20,10);
    road.visible=false;
robber=createSprite(100,100);
robber.addAnimation("robber1",robAnimation1);
robber.addAnimation("robber2",robAnimation2);
robber.velocityY=2;
robber.scale=0.3;
securityButton=createButton("call security");
securityButton.position(600,50);

securityButton1=createButton("Run left");
securityButton1.position(400,50);

securityButton2=createButton("Run Right");
securityButton2.position(800,50);


securityButton3=createButton("proceed to next level");
securityButton3.position(1000,750);


security=createSprite(displayWidth-100,700);
security.addAnimation("security1",security1);
security.addAnimation("security2",security2);
security.visible=false;


boy1= createSprite(600,700);
boy1.addAnimation("boy1",boy);
boy1.addAnimation("boy2",boy_left);
boy1.addAnimation("boy3",boy_right);


}


function draw(){
background(pg);
textSize(30);
fill ("black");
text ("what will you do when a kidnapper is near you",250,30);
image(bg,600,300,500,500);
image(childgroup,980,500);

if(security.isTouching(robber)){
    security.velocityX=0;
security.changeAnimation("security2");
}

if(robber.collide(road))
{
    robber.changeAnimation("robber2");  
}
securityButton.mousePressed(()=>{
    security.visible=true;
    security.velocityX=-2;
    flag1=1;
})

securityButton1.mousePressed(()=>{
    boy1.changeAnimation("boy2");
    boy1.velocityX=-2;
    
})
securityButton2.mousePressed(()=>{
    boy1.changeAnimation("boy3");
    boy1.velocityX=2;
    flag=1;
    
})

securityButton3.mousePressed(()=>{
    if(flag===1)
    location.replace("third.html");
    else
    alert("think wisely!!!")
    
})




drawSprites()
}