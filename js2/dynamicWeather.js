var weatherData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=ca790623f3a3050023d72613a5637057";

var citySelect;

function setup(){
createCanvas(500,500);
citySelect = createSelect(); //createing a dropdown bar
citySelect.position(10,10);
citySelect.option("Chicago");
citySelect.option("New York");
citySelect.option("Ann Arbor");
citySelect.changed(changeCity);

}

function changeCity(){
var weatherURL = api + citySelect.value() + apiKey;
loadJSON(weatherURL, gotWeatherData);

}

function gotWeatherData(data){

weatherData = data;
console.log(weatherData);

}

function draw(){
	background(0);
	if(weatherData){

		ellipse(windowWidth/2, windowHeight/2, weatherData.main.temp, weatherData.main.temp);


	}


}