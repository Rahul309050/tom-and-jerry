var cat_img,cat_,cat_end
var garden_img,garden
var mouse_img,mouse_end

function preload() {
  cat_img=loadImage("cat1.png")
  garden_img=loadImage("garden.png")
  cat_=loadAnimation("cat2.png","cat3.png")
  mouse_img=loadImage("mouse1.png")
  mouse_=loadAnimation("mouse2.png","mouse3.png")
  mouse_end=loadImage("mouse4.png")
  cat_end=loadImage("cat4.png")
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400)
    garden.addImage(garden_img)
    garden.scale=1.15
    

    cat=createSprite(840,600)
    cat.addImage(cat_img)
    cat.scale=0.2   
    mouse = createSprite(100,600)
    mouse.addImage(mouse_img)
    mouse.scale=0.2
    mouse.setCollider("rectangle",0,0,mouse.width=15,mouse.height)
    mouse.debug=false
}

function draw() {

    background(0);
 
    keyPressed()
    


    drawSprites();

}


function keyPressed(){
if(keyWentDown(LEFT_ARROW)){ 
    cat.velocityX=-5

   cat.addAnimation("catrunning",cat_);
   cat.changeAnimation("catrunning")

   mouse.addAnimation("mouseMoving",mouse_)
   mouse.changeAnimation("mouseMoving")
   
   
}
if(cat.isTouching(mouse)){
    cat.velocityX=0
    cat.addImage("end",cat_end)
    cat.changeImage("end")
    mouse.addImage("ending",mouse_end)
    mouse.changeImage("ending")
}

}

