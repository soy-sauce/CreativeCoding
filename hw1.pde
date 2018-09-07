void setup(){
  size(1000,1000);
  background(230,100,100);
  strokeWeight(0);
}

void draw(){
  //portrait will be made with shapes
  //face
  fill(254,224,205);
  beginShape();
  vertex(320,280);
  vertex(520,280);
  vertex(520,500);
  vertex(320,500);
  endShape();
  
  
  fill(50,50,50); //black
  beginShape(); //first section of hair
  vertex(400,220);
  vertex(500,220);
  vertex(500,240);
  vertex(540,240);
  vertex(540,260);
  vertex(560,260);
  vertex(560,280);
  vertex(580,280);
  vertex(580,300);
  vertex(580,400);
  vertex(560,400);
  vertex(560,380);
  vertex(520,380);
  vertex(520,360);
  vertex(500,360);
  vertex(500,340);
  vertex(460,340);
  vertex(460,320);
  vertex(420,320);
  vertex(420,300);
  vertex(400,300);
  vertex(400,280);
  vertex(380,280);
  vertex(380,300);
  vertex(380,300);
  vertex(340,300);
  vertex(340,360);
  vertex(320,360);
  vertex(320,480);
  vertex(300,480);
  vertex(300,300);
  vertex(320,300);
  vertex(320,280);
  vertex(340,280);
  vertex(340,260);
  vertex(360,260);
  vertex(360,240);
  vertex(400,240);
  vertex(400,220);
  endShape();
  
  beginShape(); //second part of hair
  vertex(320,480);
  vertex(340,480);
  vertex(340,500);
  vertex(360,500);
  vertex(360,540);
  vertex(340,540);
  vertex(340,520);
  vertex(320,520);
  endShape();
  
  fill(0,0,0); //shading of hair
  rect(320,360,20,120);
  rect(340,460,20,40);
  rect(360,480,20,60);
  rect(500,480,60,60);
  rect(520,400,60,100);
  rect(520,380,40,100);
  rect(380,360,40,20);
  rect(480,360,40,20);
  
  fill(106,106,106); //eyes
  rect(380,380,20,20);
  rect(480,380,20,20);
  
  rect(460,280,20,20); //highlights of hair
  rect(480,300,20,20);
  rect(500,280,20,20);
  rect(500,280,20,20);
  rect(520,300,20,20);
  
  fill(255,174,201); //cheeks
  rect(360,400,20,20);
  rect(500,400,20,20);
  
  fill(255,0,0); //mouth
  rect(420,420,80,20);
  
  fill(253,194,155);
  rect(380,280,20,20);
  rect(380,300,40,20);
  rect(400,320,60,20);
  rect(440,340,60,20);
  
  rect(500,440,20,40);
  rect(480,480,20,20);
}
