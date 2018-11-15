var data;
var url;
var baseurl;
var apikey;
var query
var brand;
var type;
var category;
var active1=false;
var active2=true;
var active3=false;

function setup(){
  createCanvas(500,500);
  background(25);
  baseUrl="http://makeup-api.herokuapp.com/api/v1/products.json?"
  //apikey="MDphODNlNWI5MC1lNjM5LTExZTgtOWM5ZS1hNzY5M2YxZWI3Mzk6VVQ3QUpKRmFMV2tscWpPelJOTDd2YUlBTkVuY0w0enAwTUc1"
  //brand="boosh"
  type="lipstick"
  category="lipstick"
  url=baseUrl+"product_category="+type+"&product_type="+type;
  console.log(url)


}

function draw(){
  if (active1==true){
    fill(100);
  }
  else{
    fill(200);
  }
  rect(10,10,10,10);
  if (active2==true){
    fill(100);
  }
  else{
    fill(200);
  }
  rect(160,10,10,10);
  if (active3==true){
    fill(100);
  }
  else{
    fill(200);
  }
  rect(310,10,10,10);

  textSize(12);
  text("EYELINER",30,10,500,500);
  text("LIPSTICK",180,10,500,500);
  text("EYESHADOW",330,10,500,500);

  text("PRESS ENTER FOR A COLOR",100,50,500,500);

}


function callBack(data){
  //var colors=[]

  // for(var i=0;i<data.length;i++){
  //   for (var j=0;j<data[i].product_colors.length;j++){
  //       console.log(data[i].product_colors[j])
  //
  //   }
  // }
  background(25);
  var i=int(random(0,data.length))
  var j=int(random(0,data[i].product_colors.length))
  //console.log(data[i])
  while (data[i].product_colors[j]==null){
    i=int(random(0,data.length));
    j=int(random(0,data[i].product_colors.length));
  }
  //console.log(data[i].product_colors[j])
  fill(data[i].product_colors[j].hex_value)
  rect(90,100,300,300);
  fill(255);
  textSize(20);
  text(data[i].product_colors[j].colour_name.toUpperCase(),100,400,500,500);
}

function keyPressed(){
  if(keyCode==ENTER){
  data=loadJSON(url,callBack);
  }
}

function  mousePressed(){
  if(mouseX>10 && mouseX<20 && mouseY>10 && mouseY<20){
    type="eyeliner"
    category="liquid"
    url=baseUrl+"product_category="+category+"&product_type="+type;
    active1=true;
    active2=false;
    active3=false;
  }

  if(mouseX>160 && mouseX<170 && mouseY>10 && mouseY<20){
    type="lipstick"
    category="lipstick"
    url=baseUrl+"product_category="+category+"&product_type="+type;
    active2=true;
    active1=false;
    active3=false;
  }


  if(mouseX>310 && mouseX<320 && mouseY>10 && mouseY<20){
    type="eyeshadow"
    category="palette"
    url=baseUrl+"product_category="+category+"&product_type="+type;
    active3=true;
    active1=false;
    active2=false;
  }
}
