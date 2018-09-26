var canvas;

//text

var title;
var greeting; 
var firstOption;
var secondOption;
var thirdOption;
var name;

//inputs
var nameInput;

//animation variables

var walking;
var running;
var openEye;
var closedEye;
var asleep;
var timer;
var cabinSlider;
var dogSlider;


//boolean
var firstScreen;
var walkRight;
var walkLeft;
var goPet;
var tired;


function setup(){
background(0);
greeting = createP('Hello, which way path you choose');
createElement('br');

	nameInput = createInput("type your name here");
	nameInput.changed(startStory);


}
function startStory(){
greeting.hide();
nameInput.hide();
userName = createElement('h1', nameInput.value());
title = createElement('h1', "try and escape the forest as quick as possible");

firstOption = createA("#", "go right");
createElement('br');
secondOption = createA("#", "go left");

firstOption.mousePressed(walkRight);
secondOption.mousePressed(walkLeft);
}

function walkLeft(){

walkLeft = true;
userName.html(nameInput.value());

title.html('you see a stray dog');
firstOption.html('go pet it');
secondOption.html('run away');
firstOption.mousePressed(goPet);

secondOption.mousePressed(runAway);
}

function goPet(){

background(0);  // go pet dog here
title.html('the dog is friendly');
if(mousePressed == true){
leaveForest();
}

}
function leaveForest(){

	background(0); //background of dog leading you out
	title.html('the dog leads you out of the forest');
	background(0);//road with sunset
	title.html('congratulations you made it out alive');
}

function youAreTired(){

title.html('you start running...');
if(mousePressed() == true){
tiredZoom();  //eye shows up blinking slowly
title.html('you start to get tired...');
}
if(mousePressed() == true){
	tiredZoom2(); //eye starts to close
	title.html('	you slow down...');
	
}
	if(mousePressed() == true){

	closedEye(); //eye is closed
	title.html('you  have     fallen   asleep');

}
}

//loadSound / preload images .stop .play .isPlaying
//these are closed eye and run away anims

function tiredZoom(){
background(0);  //eye shows up blinking slowly

}

function tiredZoom2(){
background(0); //eye starts to close

}

function closedEye(){
background(0); //eye is closed

}

function runAway(){
youAreTired();
}
//animations for cab and dog options
function cabinAnim(){
//background(cabin);

fill(cabinSlider.value(), 0,0);
// so you can zoom in the cabin image(windowWidth / 2, windowHeight / 2, cabinSlider.value(), cabinSlider.value());

}

function dogAnim(){
//background(dog);
fill(dogSlider.value(), 0,0);
//image(windowWidth / 2, windowHeight / 2, dogSlider.value(), dogSlider.value());

}


//timer

function timer(){
 //fix
var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;

for(int i = 0; i < 100000000; i++){
seconds++;
if(seconds == 59){
	minutes++;
	seconds = 0;
}
if(minutes == 59){
	hours++;
	minutes = 0;
}
title.html(seconds);
}


/*
for(int i = 0; i < 100000000; i++){

	if(i > 60){
		minutes = 1 + ':' + seconds++;
	}
	else if(minutes > 60){

		hours = 1 + ':' + minutes + seconds++;
	}
	title.html(i);

}
*/

//first walk right and walk left functions

}
function walkRight(){
	walkRight = true;
	title.html('you see a cabin');
	firstOption.html('walk towards the cabin');
	secondOption.html('run away');
	firstOption.mousePressed(cabinAnim());

	secondOption.mousePressed(runAway);

}





function draw(){
	background(0);
//background(forestbackground);
//image(spaceBG, displayWidth, displayHeight, 900,50); //check parameters
if(walkRight == true){

//	(); //put cabin anim here

}
else if(walkLeft == true){
//	();   //put dog anim here
}
}


function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
    



}



