//Connie Zhou
//Creative Coding
//Midterm


//vars for drawClouds
var xpos=0;

//vars for skycolor
var c1;
var c2;

//vars for rain
var drops  = [];
var axisY = 1;
var axisX = 0;

//preload assets
var song;
var rain;
var sun;
var sunset;
var night;
var rainsound;
var daymusic;
var setmusic;
var nightmusic;

//set states
var isRain=true;
var val;

//preload all sounds and icons
function preload(){
  daymusic=loadSound("day.mp3");
  setmusic=loadSound("sunset.mp3");
  nightmusic=loadSound("night.mp3");
  rainsound=loadSound("rain.mp3")
  rain=loadImage("rain.png");
  sun=loadImage("sun.png");
  sunset=loadImage("sunset.png");
  night=loadImage("night.png");
}


function setup(){
  rainsound.amp(0.2);
  rainsound.play();
  setmusic.amp(0.3);
  setmusic.play()
  val=1;

  //song.play();
  createCanvas(1000,550); //set up canvas
  background(0);

  //sunSlider=createSlider(0,1000,0); //create slider for the time of day

  for(var i=0; i<400; i++){//set up raindrop array
		drops[i] = new Drop();
  }

}

function draw(){


  //sunSlider.position(400,500);//set slider position
  //var sunPos=sunSlider.value();//get slider value

//switch case for time of day
  switch(val){
    case 0: //daytime
      c1=color(56, 158, 201); //top color
      c2=color(232, 185, 124); //bottom color
      createSky(c1,c2,0,0,1000,700);


      fill(250,235,215,200); //fill for sun
      noStroke();//no stroke for sun
      ellipse(400,100,100,100);//draw the sun
      break;
    case 1: //sunset
      c1=color(238, 70, 93); //top color
      c2=color(255, 207, 166); //bottom color
      createSky(c1,c2,0,0,1000,700);

      fill(250,235,215,200); //fill for sun
      noStroke();//no stroke for sun
      ellipse(300,400,250,250);//draw the sun
      break;
    case 2: //night

      c1=color(24, 12, 46); //top color
      c2=color(18, 77, 117); //bottom color
      createSky(c1,c2,0,0,1000,700);

      fill(250,235,215,200); //fill for sun
      noStroke();//no stroke for sun
      ellipse(400,100,100,100);//draw the sun

      break;

    default:
    break;

  }

  //createSky(0,0,1000,700);//create sky based on size

  //draw buildings
  backBuildings();
  drawBuildings(0); //draw the buildings
  drawWindows(0,0); //draw windows


  //animation of the clouds
  if(xpos>=1000){
    xpos=0;
  }
  else{
  xpos=xpos+.75;
  }


  //flicker the clouds every 200 frames
  if(frameCount%100==0 && isRain==true){
    drawClouds(xpos,random(200));
  }
  else{
    drawClouds(xpos,50);
  }

  //draw raindrops
  if(isRain==true){
    for(var i=0; i<drops.length; i++){
      drops[i].show();
    	drops[i].move();
    }
  }

  //draw icons
  image(rain,10,490);
  image(sun,110,490);
  image(sunset,210,490);
  image(night,310,490);


}

//gradient function taken from p5.js
//https://p5js.org/examples/color-linear-gradient.html
function createSky(c1, c2,x,y,w,h){ //uses lerpColor for gradient
  //c1=color(238, 70, 93); //top color
  //c2=color(255, 207, 166); //bottom color
  for (var i=y;i<y+h;i++){
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
  }
}


function drawBuildings(color){ //hard coded-buildings never change
  fill(2,0,40);
  noStroke();
  beginShape();
  vertex(0,250);
  vertex(75,250);
  vertex(75,450);
  vertex(150,450);
  vertex(150,350);
  vertex(250, 350);
  vertex(250,425);
  vertex(400,425);
  vertex(400,400);
  vertex(500,400);
  vertex(500,275);
  vertex(700,275);
  vertex(700,450);
  vertex(750,450);
  vertex(750,300);
  vertex(850,300);
  vertex(850,460);
  vertex(950,460);
  vertex(950,250);
  vertex(1000,250);
  vertex(1000,800);
  vertex(0,800);
  vertex(0,250);
  endShape();
  //embellishments
  rect(15,240,5,30);
  rect(50,245,5,30);
  rect(90,440,5,30);
  rect(100,445,5,30);
  rect(120,445,20,30);
  rect(170,340,5,30);
  rect(190,330,5,30);
  rect(190,340,20,30);
  rect(225,345,20,30);
  rect(270,415,20,30);
  rect(280,405,5,30);
  rect(325,415,5,30);
  rect(330,420,5,30);
  rect(335,415,10,30);
  rect(405,395,5,30);
  rect(405,395,30,2);
  rect(425,390,20,30);
  rect(430,380,5,30);
  rect(470,375,5,30);
  rect(520,265,180,30);
  rect(620,255,5,30);
  rect(640,245,5,30);
  rect(755,295,5,30);
  rect(755,295,50,2);
  rect(805,290,5,30);
  rect(815,295,5,30);
  rect(950,240,50,5);
  rect(950,240,5,30);
  rect(960,240,2,30);
}

//added later or add more depth
function backBuildings(){
  fill(42,40,58);
  beginShape();
  vertex(0,300);
  vertex(100,300);
  vertex(100,500);
  vertex(250,500);
  vertex(250,250);
  vertex(325,250);
  vertex(335,250);
  vertex(335,275);
  vertex(335,500);
  vertex(360,500);
  vertex(370,500);
  vertex(370,350);
  vertex(420,350);
  vertex(420,500);
  vertex(700,500);
  vertex(700,300);
  vertex(715,300);
  vertex(715,400);
  vertex(800,400);
  vertex(800,800);
  vertex(920,800);
  vertex(920,300);
  vertex(1000,300);
  vertex(1000,800);
  vertex(0,800);
  endShape();

  //embellishments
  beginShape();
  vertex(90,290);
  vertex(95,290);
  vertex(95,600);
  vertex(280,600);
  vertex(280,250);
  vertex(280,245);
  vertex(300,245);
  vertex(300,240);
  vertex(305,240);
  vertex(305,500);
  vertex(385,500);
  vertex(385,330);
  vertex(390,330);
  vertex(390,500);
  vertex(935,500);
  vertex(935,280);
  vertex(940,280);
  vertex(940,500);
  vertex(90,500);
  endShape();

}

function drawWindows(color,speed){//position hard coded, opacity random
  fill(255,255,0,random(0,255));
  rect(10,275,10,10);
  fill(255,255,0,random(0,255));
  rect(30,300,10,10);
  fill(255,255,0,random(0,255));
  rect(30,320,10,10);
  fill(255,255,0,random(0,255));
  rect(30,400,10,10);
  fill(255,255,0,random(0,255));
  rect(50,400,10,10);
  fill(250,260,0,random(0,255));
  rect(170,370,10,10);
  fill(255,255,0,random(0,255));
  rect(170,400,10,10);
  fill(255,255,0,random(0,255));
  rect(225,370,10,10);

  fill(255,255,0,random(0,255));
  rect(515,300,10,10);
  fill(255,255,0,random(0,255));
  rect(515,370,10,10);
  fill(255,255,0,random(0,255));
  rect(540,300,10,10);
  fill(255,255,0,random(0,255));
  rect(600,350,10,10);
  fill(255,255,0,random(0,255));
  rect(650,400,10,10);
  fill(255,255,0,random(0,255));
  rect(650,370,10,10);

  fill(255,255,0,random(0,255));
  rect(760,400,10,10);
  fill(255,255,0,random(0,255));
  rect(760,380,10,10);
  fill(255,255,0,random(0,255));
  rect(800,350,10,10);
  fill(255,255,0,random(0,255));
  rect(830,310,10,10);

  fill(255,255,0,random(0,255));
  rect(960,300,10,10);
  fill(255,255,0,random(0,255));
  rect(980,390,10,10);
}

//clouds draw relative to position x
function drawClouds(x,opacity){

  fill(255,255,255,opacity);
  ellipse(x-1000,50,100,50);
  ellipse(x-975,60,80,40);
  ellipse(x-725,100,180,80);
  ellipse(x-650,120,200,50);
  ellipse(x-600,50,75,30);
  ellipse(x-300,200,150,40);
  ellipse(x-275,185,100,30);
  ellipse(x-250,180,100,30);
  ellipse(x-250,180,100,30);
  ellipse(x-050,100,200,100);
  ellipse(x-000,60,80,40);

  ellipse(x,50,100,50);
  ellipse(x+25,60,80,40);
  ellipse(x+275,100,180,80);
  ellipse(x+350,120,200,50);
  ellipse(x+400,50,75,30);
  ellipse(x+700,200,150,40);
  ellipse(x+725,185,100,30);
  ellipse(x+750,180,100,30);
  ellipse(x+750,180,100,30);
  ellipse(x+950,100,200,100);
}


//mouse clicked for icons
//when mouse clicks on specfic icons, music and switch case changes
function mouseClicked(){
    if(mouseX>0 && mouseX<70 && mouseY>475&& mouseY<550){
      if(isRain==true){
        rainsound.stop();
        isRain=false;
        print("rainoff");
      }
      else{
        isRain=true;
        rainsound.amp(0.2);
        rainsound.play();
        print("rainon");
      }
    }

    if(mouseX>100 && mouseX<170 && mouseY>475&& mouseY<550){
      setmusic.stop();
      daymusic.stop();
      nightmusic.stop()
      daymusic.amp(0.3);
      daymusic.play();
      val=0;
      print("sun");
    }
    else if(mouseX>200 && mouseX<270 && mouseY>475&& mouseY<550){
      setmusic.stop();
      daymusic.stop();
      nightmusic.stop()
      setmusic.amp(0.3);
      setmusic.play();
      print("sunset");
      val=1;
    }
    else if(mouseX>300 && mouseX<370 && mouseY>475&& mouseY<550){
      setmusic.stop();
      daymusic.stop();
      nightmusic.stop()
      nightmusic.amp(0.3);
      nightmusic.play();
      print("night");
      val=2;
    }

}


function Drop(){
//display drops
	this.x = random(0,width);
	this.y = random(-10, height);
	this.h = random(2, 10);
  this.d = 2;
  this.h = random(2, 10);
  this.col= map(this.h, 2, 10, 100, 255);

//move object
	this.vel = 0;
	this.grv = map(this.h,2,10,3,10);
	this.off = map(this.h,2,10,height/2,height);

  this.show = function(){
		noStroke();
		fill(this.col,100);
		ellipse(this.x, this.y, this.d, this.h);
	}

	this.move = function(){
		this.y += this.vel;
		this.vel = this.grv;
		if(this.y > this.off){
			this.y = -10;
		}
	}
}
