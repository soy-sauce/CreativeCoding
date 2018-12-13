//music from freesounds.com and City Girl

import processing.sound.*;
import processing.serial.*;
Serial port;

String level;
LowPass filter;
float lheight;
float yoff = 0.0;        // 2nd dimension of perlin noise
PImage nowater;
PImage bloom;
PImage thrive;
PImage glitch1;
PImage glitch2;
PImage glitch3;
PImage glitch4;
PImage glitch5;
ArrayList<PImage> lotswater = new ArrayList<PImage>();
SoundFile music;
SoundFile breathe;
SoundFile muffled;
SoundFile wave;
SoundFile glitchsound;

void setup() {
  filter=new LowPass(this);
  nowater = loadImage("nowater.png");
  bloom = loadImage("bloom.png");
  thrive = loadImage("thrive.png");
  glitch1 = loadImage("glitch1.png");
  glitch2 = loadImage("glitch2.png");
  glitch3 = loadImage("glitch3.png");
  glitch4 = loadImage("glitch4.png");
  glitch5 = loadImage("glitch5.png");
  
  lotswater.add(glitch1);
  lotswater.add(glitch2);
  lotswater.add(glitch3);
  lotswater.add(glitch4);
  lotswater.add(glitch5);

  music = new SoundFile(this, "music2.mp3");
  wave= new SoundFile(this, "wave.wav");
  //muffled = new SoundFile(this, "muffled.wav");
  breathe = new SoundFile(this, "breathe.wav");
  glitchsound = new SoundFile(this, "glitch.wav");
  breathe.amp(0.01);
  glitchsound.amp(0.01);
  music.amp(0.1);
  //muffled.amp(0.2);
  wave.amp(0.8);
  
  size(2000, 800);
  noStroke();
  port = new Serial(this, "COM3", 9600);
}

void draw() {
  if(port.available()>0){
    level=port.readStringUntil('\n');
    lheight=800-float(level);
    //println(level);
  }

  background(5);


  if (lheight>=725){
    image(nowater,0,0);
    music.stop();
    filter.stop();
    //muffled.stop();
    wave.stop();
    glitchsound.stop();
    if(!breathe.isPlaying()){
      breathe.play();
    }
  }
  
  else if(lheight<725 && lheight>=525){
    image(bloom,0,0);
    filter.stop();
    music.stop();
    breathe.stop();
    //muffled.stop();
    glitchsound.stop();
    if(!wave.isPlaying()){
      wave.play();
    }

  }
  
  
  else if(lheight<525 && lheight>=250){
    image(thrive,0,0);
    filter.stop();
    breathe.stop();
    //muffled.stop();
    glitchsound.stop();
    if(!wave.isPlaying()){
      wave.play();
    }
    if(!music.isPlaying()){
      music.play();
    }
    music.amp(0.1);
  }

  else if(lheight<250){
    int count=int(random(0,4));
    PImage todraw=lotswater.get(count);
    image(todraw,0,0);
    
    breathe.stop();
    wave.stop();
    
    if(!glitchsound.isPlaying()){
      glitchsound.play();
    }
    if(!music.isPlaying()){
      music.play();
    }
    music.amp(0.01);
    //music.play();
    filter.process(music,800);
  }
  
  
  //Perlin Noise from Dan Schiffman processing.org
  fill(41,181,184,170);
  beginShape(); 
  float xoff = 0;       // Option #1: 2D Noise
  for (float x = 0; x <= width; x += 10) {
    float y = map(noise(xoff, yoff), 0, 1, lheight+100,lheight);
    vertex(x, y); 
    xoff += 0.05;
  }
 
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  //end perlin
  
}
