function beginning(){
	background(0);
	greeting = createP("Please type your name and press enter");
	createElement("br");

	nameInput = createInput("type your name here");
	nameInput.changed(startStory);


}
function startStory(){
greeting.hide();
nameInput.hide();
userName = createElement('h1', nameInput.value());
title = createElement('h1', "get home before the sun sets");

firstOption = createA("#", "walk towards the sun");
createElement('br');
secondOption = createA("#", "go home");

firstOption.mousePressed(toSun);
secondOption.mousePressed(toHome);

}

function toSun(){

walkToSun = true;
userName.html(nameInput.value());

title.html('you walk towards the sun it gets bigger');
firstOption.html('walkCloser');
secondOption.html('control the sun');
firstOption.mousePressed(walkCloserToSun);

}

function toHome(){
firstOption.hide();
secondOption.hide();

title.html('you have gone home. good night');

}
function walkCloserToSun(){
walkCloser = true;
walkToSun = false;

userName.html(nameInput.value());

title.html('you are very close to the sun');
firstOption.html('go home');
secondOption.html('fly away');

sunSlider = createSlider(0,255,0);
sunslider.position(50,600);

}