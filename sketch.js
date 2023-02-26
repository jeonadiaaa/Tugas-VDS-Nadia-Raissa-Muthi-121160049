let j;

function setup() {
    // put setup code here}
 
    createCanvas(400,200);
    background(204,153,255);
    strokeWeight(5);
    line(200,0,200,200)
    stroke(0,0,0) 

    x = 300;
    y = 100;
    i = 0;
    j = 0;
}
       
function draw() {
        // put drawing code here
 
 
 fill(255,204,0);
 stroke(255,153,0);
 strokeWeight(8);
 ellipse(100,80,100,100);
 arc(300,80,100,100,0,24);      

 ellipse(280,97,5,5); ellipse(275,65,5,5); ellipse(300,110,5,5); ellipse(320,100,5,5); ellipse(300,49,5,5); ellipse(100,110,5,5); ellipse(80,95,5,5); ellipse(75,65,5,5); ellipse(100,49,5,5); ellipse(120,75,5,5); ellipse(120,100,5,5);
 fill(255,204,0);
 stroke(0,0,0);
 //mata
 ellipse(85,70,7,14); ellipse(115,70,7,14); //kiri
 ellipse(285,70,7,14); //kanan diam
 //mulut 
 ellipse(100,95,5,2); //kiri
 ellipse(300,95,5,2); //kanan
       
 var x = 300 + 3 * Math.sin(PI/22*i)
 i+=1
 fill(255,204,0);
 stroke(255,153,0);
 arc(x+20,y-30,x/3,y,5,25);
 ellipse(x+35,y-37,5,5);
 fill(255,204,0);
 stroke(0,0,0);
 ellipse(x+45,y-44,7,14);


       
}