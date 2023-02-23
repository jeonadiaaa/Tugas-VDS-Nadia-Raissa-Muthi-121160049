let j;

function setup() {
    // put setup code here}
 
    createCanvas(400,200);
    background(204,153,255);
    strokeWeight(5);
    line(200,0,200,200)
    stroke(0,0,0) 

    y = 320;
    j = 0;
}
       
function draw() {
        // put drawing code here

  var y = 320 + 30 * Math.sin(PI/30*j)
  j+=1
  arc(320,70,100,100,5,25);
        
  strokeWeight(8);
  arc(100,80,100,100,0,24)
  arc(120,70,100,100,5,25)
  ellipse(130,90,5,5)
  ellipse(83,95,5,5)
  ellipse(75,75,5,5)
  ellipse(100,49,5,5)
  ellipse(100,100,5,5)
  ellipse(115,100,5,5)


  fill(255,204,0)
  stroke(255,153,0)
  strokeWeight(8);

  line()

  strokeWeight(8);
  arc(300,80,100,100,0,24)
  arc(320,70,100,100,5,25)
  ellipse(335,95,5,5)
  ellipse(283,95,5,5)
  ellipse(275,75,5,5)
  ellipse(300,49,5,5)
  ellipse(300,100,5,5)
  ellipse(320,100,5,5)


  fill(255,204,0)
  stroke(255,153,0)
  strokeWeight(8);

  line()

}