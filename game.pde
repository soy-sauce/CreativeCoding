float angle=0;  //angle of branches
float weight=1; //weight of stroke
int dist; //distance from tree

void setup(){
  size(1000,1000);
}

void draw(){
  background(0); //redraw background each time
  angle=(dist(width/2,height,mouseX,mouseY))/100; //angle is based on how far mouse is from tree
  println(angle);
  stroke(250); //set stroke color

  translate(width/2,height); //the translate method will change the start of the new branch
  branch(250); //calls branch drawing function
}

void branch(float len){ //this is a recursive function that continues to draw branches
  line(0,0,0,-len);
  translate(0,-len);
  //weight=weight*.75;
  strokeWeight(weight);
  if (len>4){
   if (len<7){
    //stroke(0,255,0); 
   }
    pushMatrix();
    rotate(angle);
    branch(len*.75);
    popMatrix();
    pushMatrix();
    rotate(-angle);
    branch(len*0.67);
    popMatrix();
    }
}
