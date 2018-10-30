var circle1;
var circle2;
var circle3;
var circle4;
var color;
var rval;
var gval;
var bval;

function setup(){
  createCanvas(500,500);

  rval=random(200,255);
  gval=random(70,100);
  bval=random(70,100);


  color=color(rval,gval,bval);
  circle1=new Circle(170,250,color);
  circle2=new Circle(220,250,color);
  circle3=new Circle(270,250,color);
  circle4=new Circle(320,250,color);

}

function draw(){
  background(10);
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle1.jump();
  circle2.jump();
  circle3.jump();
  circle4.jump();


}

function Circle(xPos,yPos,color){
  this.x=xPos;
  this.y=yPos;
  this.originalY=yPos;
  this.color=color;
  this.vel=random(.5,4);
  this.height=random(100,200);

  this.display=function(){
    fill(this.color);
    ellipse(this.x,this.y,20,20);
  }

  this.jump=function(){

    this.y-=this.vel;
    if(this.y<=this.height){

      this.color=random(150,255);
      this.vel*=-1;
    }
    else if(this.y>=this.originalY && this.vel<0){
      this.color=random(255);
      this.vel*=-1;
    }
  }


};
