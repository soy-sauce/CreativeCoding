var img;
var baseurl;
var url;
var apikey;
var query;
var myData;

function  setup(){
  createCanvas(800,800);
  background(200);
  apikey="lqbFWfjbOHBX8PuKGhbIEFAHsx73tSRc"
  baseurl="http://api.giphy.com/v1/gifs/search?";
  url=baseurl+"q="+query+"&api_key="+apikey;
  query="cat";
  //img=createImg("http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif");
  img=createImg("https://sites.google.com/site/piyathida27sp/_/rsrc/1531057327377/%24RXH0QHO.gif?attachauth=ANoY7cpl6TLPl-8l7MQj9OgboFUc66gLCAok6Pp2Jrm1Rq1B5HtsAKp_5syC8Btwy6uAqJMy0fggynlrikLLVPXcJ8GGXIG7Zl4t8HigufpFRFp0E8rl4jnTGu8eCym9Xz7hPtbHOF7oBz2f-sVMah0lTkW4Rx6ajz5-MYvNrm-xpFDOJCyc_BkZy47yFtyq-9EZy1xThTRvV5jlMB_7aH0u9Z2uaQ4vKw%3D%3D&attredirects=0");
  img.position(40,100);

  input=createInput("Enter a key word for a gif")
  input.position(50,65);
  input.style('width','150');
  button=createButton('submit')
  button.position(220,65);
  button.mousePressed(display);
}

function draw(){
  background(200);
}

function display(){
  background(200);
  button=createButton('submit')
  button.position(220,65);
  button.mousePressed(display);

  background(200);
  query=input.value()
  url=baseurl+"q="+query+"&api_key="+apikey;
  myData=loadJSON(url,callBack)

  //console.log(data[random(0,data.length)].url)

}

function callBack(){
  img.hide(); //erase previous image
  var rand=int(random(0,myData.data.length-1)); //get random image with the keyword

  string=myData.data[rand].url //URL in JSON and url used to embed are different
  resulturl="https://media2.giphy.com/media/"
  i=string.length-1
  var code=""
  while (string[i]!='-'){ //retrive the code from URL to create an adress to embed
    code=str(string[i])+code;
    i--;
  }
  resulturl+=code;
  resulturl+='/200.gif'
  console.log(resulturl);
  console.log(myData.data[rand].url)



  img=createImg(resulturl);
  img.position(40,100);
  img.show();
}
