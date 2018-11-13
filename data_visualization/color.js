var data;
var offset=75;
var scaleData=5;
var img;

function preload(){
  data=loadJSON("./color.json");

}

function setup(){

  createCanvas(250,1000);
  background(230);
  textSize(30);
  text("Color Palettes",10,10,500,100);
  console.log(data.palettes.length);



  for(var i=0;i<data.palettes.length;i++){

      //console.log(data.palettes[i]);
      for(var j=0;j<data.palettes[i].length;j++){
        var txt="Palette: "+str(i+1);
        textSize(10);
        fill(0);
        text(txt,10,i*20+70,100,100);
        fill(data.palettes[i][j]);
        rect(j*20+100,i*20+70,10,10);
      }


}
}
function draw(){


}
