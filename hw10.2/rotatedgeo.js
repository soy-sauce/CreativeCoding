//roated geometry with push/pop, then for loop, animated based on mouse position(mapping)

function setup(){
  createCanvas(500,500);
  background(200);
}

function draw(){
//PUSH/POP Part 1
/*  fill(0);
  push();
    translate(100,250);
    rotate(PI/3);
    rect(0,0,10,10);
  pop();
  push();
    translate(250,250);
    rotate(PI/4);
    rect(0,0,10,10);
  pop();
  push();
    translate(400,250);
    rotate(PI/2);
    rect(0,0,10,10);
  pop();
*/

//FOR loop Part 2
/*
for(i=0;i<4;i++){
  push();
  translate(100+i*100,250);
  rotate(PI/i);
  rect(0,0,10,10);
  pop();
}
*/

}

//animated based on interaction Part 3
function mouseMoved(){
  push();
  translate(100,250);
  rotate(PI/(mouseX/200));
  rect(0,0,10,10);
  pop();
  push();
    translate(250,250);
    rotate(PI/(mouseX/300));
    rect(0,0,10,10);
  pop();
  push();
    translate(400,250);
    rotate(PI/(mouseX/100));
    rect(0,0,10,10);
  pop();

}
