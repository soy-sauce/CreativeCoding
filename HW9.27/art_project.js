var colors;
var colorval;

function setup() {
  colors=[color('#671c1'),color('#a76332'),color('#b33157'),color('#1c7d74'),color('#c3baa9'),color('#1e4ba6'),color('#b5a87b'),color('#1c7bd7'),color('#ae862f'),color('#1f3946'),color('#9a2d40'),color('#87a55b')];
  createCanvas(1000,900);

  noLoop();
}

function draw() {
  noStroke();
  for(var i=0;i<1000;i+=50){
      for(var j=0;j<1000;j+=35){
        colorval=colors[int(random(1,11))];
        fill(colorval);
        quad(i,j,i+50,j-35,i+50,j,i,j+35);

  }
}
}
