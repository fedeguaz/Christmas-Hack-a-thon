var ben, queen, queenj, guardiaj, guardia1, guardia2;
var dimensioneMinore;

function preload() {
    ben = loadImage("./assets/bigben.png");
    queen = loadImage("./assets/queen.png");
    queenj = loadImage("./assets/queenj.png");
    guardia1 = loadImage("./assets/guardx.png");
    guardia2 = loadImage("./assets/guardsx.png");
    guardiaj = loadImage("./assets/guardiaj.png");
}

function setup() {

	// Create the canvas
	createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    angleMode(DEGREES);

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
    
    
}

function draw() {

    
	//get the volume
	var volume = mic.getLevel();

//SFONDO
	background('#2A52BE');
    
    push();
    for(x=0;x<width;x+=25) {
        for(y=0;y<height; y+=40){
            var diametro = mic.getLevel();
            fill(250,235,215,80);
            textSize(diametro*190);
            textStyle(BOLD);
            textFont('Mountains of Christmas');
            text('*',x,y);
        }
    }
    pop();
    
    push();
    for(x=0;x<width;x+=10) {
        for(y=0;y<height; y+=30){
            var diametro = mic.getLevel();
            fill('#D2D2D2');
            textSize(diametro*150);
            textStyle(BOLD);
            textFont('Mountains of Christmas');
            text('*',x,y);
        }
    }
    
    fill(255);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(35);
    textFont('Mountains of Christmas');
    text('MARRY XMAS',width/2,height/8);
    pop();
    
    fill('#D2D2D2');
    noStroke();
    rect(0,height/4*3,width,height);
    
    push();
    translate(width/2, height/2);
    image(ben,0, 0, ben.width/2, ben.height/2);
    pop();
	
    
//    push();
//
//	//Start with transformations
//	//move to the center of the canvas
//	translate(width / 2, height / 2);
//
//	// Set the new size. Volume goes from 0 to 1.
//	// You can remap it to any size you want.
//	var minSize = width / 20;
//	var maxSize = width;
//	var size = map(volume, 0, 1, minSize, maxSize);

//	//draw an ellipse
//	ellipse(0, 0, size);
//
//	//All transformation are now dropped and the coordinate system is resetted.
//	pop();
    
//REGINA
    push();
    translate (width/2, height);
    image(queenj,0, 0, queenj.width/4, queenj.height/4);
    pop();
    
    push();
    var diametro = mic.getLevel;
    translate(width/2,height/4*3.1);
    
    var minSize = width / 20;
    var maxSize = width/10;
    var size = map(volume, 0, 1, minSize, maxSize);
    
    
    image(queen,0, 0, queen.width*size/50, queen.height*size/50);
    pop();

//GUARDIA
    push();
    translate (width/6, height/3*2.8);
    image(guardiaj,0, 0, guardiaj.width/6, guardiaj.height/6);
    pop();
    
    push();
    translate (width/6, height/3*2);
    image(guardia1,0, 0, guardia1.width*1.2, guardia1.height*1.2);
    pop();
    

    
    

//GUARDIA
    push();
    translate (width/3*2.5, height/3*2.8);
    image(guardiaj,0, 0, guardiaj.width/6, guardiaj.height/6);
    pop();
    
    push();
    translate (width/3*2.5, height/3*2);
    image(guardia2,0, 0, guardia2.width*1.2, guardia2.height*1.2);
    pop();
    

push();

translate(width /6*1.3, height /3*2.35);

var minSize = width / 20;
var maxSize = width;
var size = map(volume, 0, 1, minSize, maxSize);
fill('#F984E5');
ellipse(0, 0, size);
   
if(volume>=0.2) {
    fill('#F0F8FF');
}
pop();

push();

translate(width /3*2.32, height/3*2.35);

var minSize = width / 20;
var maxSize = width;
var size = map(volume, 0, 1, minSize, maxSize);

fill('#F984E5');
ellipse(0, 0, size);
pop();


}



//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}