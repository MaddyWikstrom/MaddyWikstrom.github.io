var canvas;

//text

var title;
var title2;
var greeting; 
var firstOption;
var secondOption;
var thirdOption;
var fourthOption;
var name;
var txt;
var txt2;

//inputs
var nameInput;

//animation variables0
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
var hiding = false;
var txtt = false;
var sec = false;

//sounds

var crickets;

//images
var forestBG; 
var dogBG;
var cabinBG;
var pettingBG;
var sunriseBG;
var dogleadBG;
var darkForestBG;


function preload(){
forestBG = loadImage('./images/forest.png');
dogBG = loadImage('./images/dog.jpg');
cabinBG = loadImage('./images/cabin.png');
sunriseBG = loadImage('./images/sunrise.jpg');
dogleadBG = loadImage('./images/doglead.jpg');
pettingBG = loadImage('./images/petting.jpg');
darkForestBG = loadImage('./images/darkForest.jpg');


crickets = loadSound('./audio/crickets.mp3')
//bark = loadSound('./audio/bark.mp3');

}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    
    beginning();
}

function beginning(){
	if(hiding == true){
		title.hide();
		firstOption.hide();
		txt.hide();
		secondOption.hide();

	}
	background(forestBG);
	image(forestBG, displayWidth, displayHeight);
	crickets.play();
	greeting = createP('Escape the forest and get back to the city');
	
	createElement('br');

	txt = createP("Click here to begin");
	txt.style("background-color", "rgba(221,224,57,0.5)");
	txt.style("padding-top", "0.9em");
	txt.style("padding-bottom", "0.9em");
	txt.style("font-family", "Verdana");
	txt.style("font-size", "1.2em");
	txt.style("position", "sticky");
	txt.style("top", "65%");
	txt.style("bottom", "65%");
	txt.style("transform", "translateX(-50%)", "translateY(-50%);");
	txt.mouseOver(changeStyle);
	txt.mouseOut(revertStyle);
	txt.mousePressed(startStory);
}

function changeStyle(){
txt.style("background-color", "rgba(233, 200, 245, 0.5");
txt.style("padding-top", "0.9em");
txt.style("padding-bottom", "0.9em");
}
function changeStyle2(){
txt2.style("background-color", "rgba(233, 200, 245, 0.5");
txt2.style("padding-top", "0.9em");
txt2.style("padding-bottom", "0.9em");
}
function revertStyle(){
txt.style("background-color", "rgba(221,224,57,0.5)");
txt.style("padding-top", "0.9em");
txt.style("padding-bottom", "0.9em");
}
function revertStyle2(){
txt2.style("background-color", "rgba(221,224,57,0.5)");
txt2.style("padding-top", "0.9em");
txt2.style("padding-bottom", "0.9em");
}


function startStory(){
greeting.hide();
txt.hide();

title = createP("try and escape the forest as quick as possible");

firstOption = createA("#", "go right"); //get text to be on correct sides

	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "85%");
	firstOption.style("bottom", "70%");
createElement('br');
secondOption = createA("#", "go left");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");


firstOption.mousePressed(walkRight2);
secondOption.mousePressed(walkLeft2);
}


//this is what happens when you walk left



function walkLeft2(){
	sec = true;
	firstOption.hide();
	secondOption.hide();

	background(dogBG);
	image(dogBG, displayWidth, displayHeight);


title.html('you see a stray dog');
firstOption = createA("#", "go pet it");
firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "85%");
	firstOption.style("bottom", "70%");

createElement('br');
secondOption = createA("#", "run away");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");

firstOption.mousePressed(goPet);
secondOption.mousePressed(runAway);
}

function goPet(){
	txtt = true;
	firstOption.hide();
	secondOption.hide();

	background(pettingBG);
	image(pettingBG, displayWidth, displayHeight);
	//goPet = true;

title.html('the dog is friendly, it starts to run off, do you follow it?');

//txt = createP("the dog is friendly");
txt = createP("go follow");
	txt.style("background-color", "rgba(221,224,57,0.5)");
	txt.style("padding-top", "0.9em");
	txt.style("padding-bottom", "0.9em");
	txt.style("font-family", "Verdana");
	txt.style("font-size", "1.2em");
	txt.style("position", "absolute");
	txt.style("top", "85%");
	txt.style("bottom", "70%");
	txt.mouseOver(changeStyle);
	txt.mouseOut(revertStyle);
	txt.mousePressed(showLeadImage);

	txt2 = createP("run away");
	txt2.style("background-color", "rgba(221,224,57,0.5)");
	txt2.style("padding-top", "0.9em");
	txt2.style("padding-bottom", "0.9em");
	txt2.style("font-family", "Verdana");
	txt2.style("font-size", "1.2em");
	txt2.style("position", "absolute");
	txt2.style("top", "70%");
	txt2.style("bottom", "65%");
	txt2.mouseOver(changeStyle2);
	txt2.mouseOut(revertStyle2);
	txt2.mousePressed(runAway);
}

//when you leave the forest

function leaveForest(){

	sec = true;
	
	secondOption = createA("#", "leave forest");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");
	secondOption.mousePressed(showSunrise);

}
function showLeadImage(){
	sec = true;
	txt.hide();
	txt2.hide();
background(dogleadBG);
image = (dogleadBG, displayWidth,displayHeight);
title.html('the dog leads you out of the forest');
secondOption = createA("#", "leave forest");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");
secondOption.mousePressed(showSunrise);
}

function showSunrise(){
	txtt == true;
	if(sec == true){
		firstOption.hide();
	secondOption.hide();
	}
	
//	txt.hide();
//	txt2.hide();
background(sunriseBG);
image = (sunriseBG, displayWidth,displayHeight);
title.html('congratulations you made it out alive');
	title.style("font-family", "Verdana");
	title.style("font-size", "2em");
	title.style("color", "pink");
	title.style("position", "sticky");
	title.style("top", "50%");
	title.style("bottom", "50%");
}


//when you run away

function runAway(){
	background(darkForestBG); 
	image(darkForestBG, windowWidth,windowHeight);
	if(txtt == true){
	txt.hide();
	txt2.hide();
}
 if(sec == true){
	secondOption.hide();
	firstOption.hide();
}

title.html("");
firstOption = createA("#", "keep running");
firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "50%");
	firstOption.style("bottom", "50%");
	firstOption.style("text-align", "center");
firstOption.mousePressed(youAreTired);

}

function youAreTired(){
	firstOption.hide();
	firstOption = createA("#", "keep running");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "50%");
	firstOption.style("bottom", "50%");

title.html('you start running...');
firstOption.mousePressed(tiredZoom);

}


//loadSound / preload images .stop .play .isPlaying waybackmachine
//save as an .mp3 in sound folder and call from sound folder in .html
//these are closed eye and run away anims

function tiredZoom(){
	background(0);  //eye shows up blinking slowly

	firstOption.hide();
	firstOption = createA("#", "keep running");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "50%");
	firstOption.style("bottom", "50%");

title.html('you start to get tired...');
firstOption.mousePressed(tiredZoom2);

}

function tiredZoom2(){
	background(0); //eye starts to close
	firstOption.hide();
	firstOption = createA("#", "keep running");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "50%");
	firstOption.style("bottom", "50%");

title.html('	you slow down...');
firstOption.mousePressed(closedEye);

}

function closedEye(){
background(0); //eye is closed
	firstOption.hide();
	title.html('you  have     fallen   asleep');
	firstOption = createA("#", "what now?");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "50%");
	firstOption.style("bottom", "50%");
	firstOption.mousePressed(fallenAsleep);
}

function fallenAsleep(){
hiding = true;
firstOption.hide();
title.hide();
title = createA("#", "go back to start");
title.style("font-family", "Verdana");
	title.style("font-size", "20px");
	title.style("position", "absolute");
	title.style("top", "50%");
	title.style("bottom", "50%");


title.mousePressed(beginning);

}

function startOver(){
hiding = true;
//txt.hide();
//title.hide();
background(forestBG);
image(forestBG, windowWidth, windowHeight);

title = createA("#", "go back to start");
title.style("font-family", "Verdana");
	title.style("font-size", "20px");
	title.style("position", "absolute");
	title.style("top", "50%");
	title.style("bottom", "50%");
title.mousePressed(beginning);

}

//animations for cabin and dog options
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

for(var i = 0; i < 100000000; i++){
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
function walkRight2(){
	sec = true;
	firstOption.hide();
	secondOption.hide();

	title.html('you see a cabin');
	firstOption = createA("#", "walk towards cabin");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "85%");
	firstOption.style("bottom", "70%");

createElement('br');
secondOption = createA("#", "run away");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");

	firstOption.mousePressed(walkTowardsCabin);
	secondOption.mousePressed(runAway);

}

function walkTowardsCabin(){
	sec = true;
	firstOption.hide();
	secondOption.hide();

	background(cabinBG);
	image(cabinBG, windowWidth, windowHeight);
	title.html('you see someone in the cabin');
	firstOption = createA("#", "go inside");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "85%");
	firstOption.style("bottom", "70%");

createElement('br');
secondOption = createA("#", "run away");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");

	firstOption.mousePressed(walkInside);
	secondOption.mousePressed(runAway);


}

function walkInside(){
	sec = true;
	firstOption.hide();
	secondOption.hide();

	background(cabinBG);
	image(cabinBG, windowWidth, windowHeight);
	title.html('you see a persons standing in front of the fireplace with their back to you, do you say something?');
	firstOption = createA("#", "ask for directions");
	firstOption.style("font-family", "Verdana");
	firstOption.style("font-size", "20px");
	firstOption.style("position", "absolute");
	firstOption.style("top", "85%");
	firstOption.style("bottom", "70%");

createElement('br');
secondOption = createA("#", "leave");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");

	firstOption.mousePressed(askForDirections);
	secondOption.mousePressed(runAway);


}
function askForDirections(){

	sec = true;
	firstOption.hide();
	secondOption.hide();
background(cabinBG);
image = (cabinBG, displayWidth,displayHeight);
title.html('they lend you a map and you find your way out of the forest');
secondOption = createA("#", "leave forest");

	secondOption.style("font-family", "Verdana");
	secondOption.style("font-size", "20px");
	secondOption.style("position", "absolute");
	secondOption.style("top", "70%");
	secondOption.style("bottom", "65%");
secondOption.mousePressed(showSunrise);
}



/*
function draw(){

if(walkRight == true){

//	(); //put cabin anim here

}
else if(walkLeft == true){
//	();   //put dog anim here
}
}
*/
function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
}



