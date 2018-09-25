function setup() {
  createCanvas(600,600);
  background(0,0,0);

}

function draw() {
  console.log("akfnslkdalk");
}

function mouseMoved(){
 if((mouseX<(width/2))&&(mouseY<((height)/3))){
   fill(255,0,0);
   rect(0,0,width/2,(height/3));
 }
 else if((mouseX<(width/2))&&(mouseY>(height/3))){
   fill(0,255,0); //blue
   rect(0,(height/3),width/2,(2*height)/3);
 }

  else if(mouseX>(width-50)){
    background(155);
 }

 else if(mouseX>((width/2))&&(mouseX<width-50)){
   fill(0,0,255);
   rect(width/2,0,width/2,height);
 }

}
