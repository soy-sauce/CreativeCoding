var pulse1;
var pulses;
var heart;
var beep;
var beat;
var opp_pulse;

function preload(){
  heart=loadImage("heart.png");
  beep=loadSound("beep.mp3");
  beep2=loadSound("beep2.mp3")
  beat=loadSound("beat.wav");
}

function setup(){
  createCanvas(1000,1000);
  pulses=[];

  for(var i=0;i<6;i++){
    pulses[i]=new Pulse(500,500,i*150,1,255);
  }
  opp_pulse=new Pulse(500,500,10,-5,150)
}

function draw(){
  background(20);
  for(var i=0;i<pulses.length;i++){
    pulses[i].display();
    pulses[i].move();
  }

  opp_pulse.display();
  opp_pulse.move();
  image(heart,410,375);

}


function Pulse(x,y,size,speed,color){
  this.originalsize=900;
  this.size=size;
  this.x=x;
  this.y=y;
  this.vel=speed;
  this.color=color;
  this.counter=0;

  this.display=function(){
    noFill();
    stroke(color);
    ellipse(this.x,this.y,this.size,this.size);
  }

  this.move=function(){

    if(this.size<=1){
      this.size=this.originalsize;
      beat.play();
      //play heartbeat
    }
    else if((this.size>=this.originalsize)&&this.counter==3){
    this.size=0;
    beep.amp(0.2);
    beep2.play();
    this.counter=0;
  }
    else if(this.size>=this.originalsize){
    this.size=0;
    beep.amp(0.2);
    beep.play();
    this.counter+=1;
    //play beep
}

    this.size-=this.vel;
  }


};
