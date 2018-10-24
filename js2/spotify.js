var spotifyURL;
var gotSpotifyData;




function preload(){

loadJSON("", );
dinos = loadJSON("js/spotify.json");
}

function updateSpotify(){

loadJSON(spotifyURL, gotSpotifyData);
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	windX = windowWidth/2;

	//setInterval(updateWeather, 60000); //checks every minute 60000 milsec

	//randDino = 
	console.log(dinos.dinosaurs.length);
	randDino = int(random(0, dinos.dinosaurs.length));
}

function draw(){

	
}