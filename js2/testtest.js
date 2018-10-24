var zipcode

//images
var city1BG;
var city2BG;
var canvas;

function preload(){ 

//dontuseloadJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=pn5qGALkYAVAlv549t6sXgnML3hrAQWa", gotTicketmasterData);
//loadJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG", gotTicketmasterData);

//loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=ca790623f3a3050023d72613a5637057", gotWeatherData);
city1BG = loadImage('js/city1.jpg');
city2BG = loadImage('js/city2.jpg');
}


function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index","-1");

    var greeting = createP("Please type your zipcode and press enter");
	createElement("br");

	var zipcodeInput = createInput("type your zipcode here");
	zipcodeInput.changed(beginning);
//beginning();


}

function beginning(){
	background(city1BG); 
  image(city1BG, displayWidth, displayHeight);
	


}