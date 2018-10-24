var me;
var colorAge;
var ageColorMap;

function preload(){
me = loadJSON("js/me.json");

}


function setup(){
	createCanvas(windowWidth,windowHeight);
	print(me);
	print(me.name);
	print(me.age);
	print(me.weight);
	print(me.birth);

	colorAge = me.age;
	print(colorAge);
	ageColorMap = map(colorAge, 0, 100, 0, 255);
	print(ageColorMap);

}

function draw(){
background(0);
fill(255);
strokeWeight(1);
text(me.name, 10, 30);
text(me.birth, 10, 50);
stroke(ageColorMap, 0, 0);
strokeWeight(me.weight);
line(0,height/2, width, height/2);


}