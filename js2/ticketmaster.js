
var canvas;

//ticketmaster url data
var ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG";
var ticketmasterURL2 = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=pn5qGALkYAVAlv549t6sXgnML3hrAQWa";
var ticketmaster;
var gotTicketmasterData;
var page = 0;
var api2 = 'https://app.ticketmaster.com/discovery/v2/events.json?'
var apikey2 = 'apikey=pn5qGALkYAVAlv549t6sXgnML3hrAQWa';
var locations = ''

//random vars
var zipcodeInput;
var greeting;
var zipcode;
var input;

//weather url data
var gotWeatherData;
var weatherData;
var fillTemp;
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=ca790623f3a3050023d72613a5637057";

//api vars
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=ca790623f3a3050023d72613a5637057';
var units = '&units=imperial';
var zipweather = 'zip='
var countryUS = ',us';

var imageAPI = "http://openweathermap.org/img/w/";
var pngkey = '.png'



//images
var city1BG;
var city2BG;


function preload(){

loadJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG", gotTicketmasterData);
//loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=ca790623f3a3050023d72613a5637057", gotWeatherData);
//loadJSON("api.openweathermap.org/data/2.5/forecast?q={city name},{country code}", gotWeatherData);

city1BG = loadImage('js/city1.jpg');
city2BG = loadImage('js/city2.jpg');

}


//weather functions

function updateWeather(){

loadJSON(weatherURL, gotWeatherData);

}

function gotWeatherData(data){
weatherData = data;
console.log(weatherData);
console.log(weatherData.weather[0].description);
console.log(weatherData.main.temp)
console.log(weatherData.wind.speed);

}

function ifweather(){

	if(gotWeatherData(weatherData.main.temp) > 70){
    console.log(gotTicketmasterData.main.classifications.genre.name == "Rap");

  }
  else if(gotWeatherData(weatherData.main.temp) > 35 && gotWeatherData(weatherData.main.temp) < 70){
    console.log(gotTicketmasterData.main.classifications.genre.name == "Alternative Rock");
  }
  else if(gotWeatherData(weatherData.main.temp > 10 && gotWeatherData(weatherData.main.temp) < 35)){
    console.log(gotTicketmasterData.main.classifications.gerne.name == "Pop");
  }
  else{
    console.log(gotTicketmasterData.main.classifications.genre.name == "Rock");
  }
	


}


function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index","-1");

var button = select('#submit'); 
button.mousePressed(weatherAsk);   //,displayWeather

// var button2 = select('#go');
// button2.mousePressed(ifweather());

input = select('#city');

 beginning();

}

function weatherAsk(){

var url = api + input.value() + apikey + units; // + zipweather + zipcodeInput.value() + countryUS;
loadJSON(url, gotWeatherData);
}

function displayWeather(){


}


function gotTicketMaster(data2){

  ticketmasterData = data2;
}


function beginning(){  
  background(city1BG);
  image(city1BG, displayWidth, displayHeight);
  //getLocation(); 
  greeting = createP("Please type your zipcode and press enter");
  createElement("br");

  zipcodeInput = createInput("type your zipcode here");
  zipcodeInput.changed(getLocation);


//you have an extra getevents function call somewhere as
//well as you need to figure out your input bars 

//have one input for getLocation
//one for showEvent
//one for zipcode weather

//also you need to figure out whats wrong with the askweather funct it 
//might be being called somewhere else 
//organize ur shit and gets some actual methods maybe watch a video and cut down on some methods
//maybe create a new class at least for the time being and then combine it all
//fianlly psuh everything to your git repository


//figure out if weather and console log stuff its super fucked
//also get html shit together your divs are messed up


  //zipcodeInput.changed(getEvents(page);

 //getEvents(page); 
//getLocation(); 


}

function search(){
greeting.hide();
zipcodeInput.hide();
//maybe have an array of zips??
for(var i = 0; i < zipcode.length; i++){


}

}

function draw(){




}



//ticketmaster javascript funcitons for locating events 
//


function getLocation() {
  background(city2BG);
  image(city2BG, displayWidth, displayHeight);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        var x = document.getElementById("location");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var x = document.getElementById("location");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    var latlon = position.coords.latitude + "," + position.coords.longitude;


    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&latlong="+latlon,
      //url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=pn5qGALkYAVAlv549t6sXgnML3hrAQWa="+latlon,
       //figure out how to change the location to chicago or implemt the zip here
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
                  var e = document.getElementById("events");
                  e.innerHTML = json.page.totalElements + " events found.";
                  //showEvents(json);
                   for(var i=0; i<json.page.size; i++) {
                      $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
                   }
                  initMap(position, json);
               },
      error: function(xhr, status, err) {
                  console.log(err);
               }
    });

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


function showEvents(json) {
  for(var i=0; i<json.page.size; i++) {
    $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
  }
}


function initMap(position, json) {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: 10
  });
  for(var i=0; i<json.page.size; i++) {
    addMarker(map, json._embedded.events[i]);
  }
}

function addMarker(map, event) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
    map: map
  });
  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
  console.log(marker);
}




//getLocation();


function getEvents(page) {
  $("#events-panel").show();
  $("#attraction-panel").hide();

  if (page < 0) {
    page = 0;
    return;
  }
  if (page > 0) {
    if (page > getEvents.json.page.totalPages-1) {
      page=0;
    }
  }
  
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&size=4&page="+page,
    async:true,
    dataType: "json",
    success: function(json) {
          getEvents.json = json;
          showEvents(json);
         },
    error: function(xhr, status, err) {
          console.log(err);
         }
  });
}


function showEvents(json) {
  //addbg
  var items = $("#events .list-group-item");
  items.hide();
  var events = json._embedded.events;
  var item = items.first();
  for (var i=0;i<events.length;i++) {
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    try {
      item.children(".venue").text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
    } catch (err) {
      console.log(err);
    }
    item.show();
    item.off("click");
    item.click(events[i], function(eventObject) {
      console.log(eventObject.data);
      try {
        getAttraction(eventObject.data._embedded.attractions[0].id);
      } catch (err) {
      console.log(err);
      }
    });
    item=item.next();
  }
}

$("#prev").click(function() {  
  getEvents(--page);
});

$("#next").click(function() {
  getEvents(++page);
});

function getAttraction(id) {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/attractions/"+id+".json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG",
    async:true,
    dataType: "json",
    success: function(json) {
          showAttraction(json);
         },
    error: function(xhr, status, err) {
          console.log(err);
         }
  });
}

function showAttraction(json) {
  $("#events-panel").hide();
  $("#attraction-panel").show();
  
  $("#attraction-panel").click(function() {
    getEvents(page);
  });
  
  $("#attraction .list-group-item-heading").first().text(json.name);
  $("#attraction img").first().attr('src',json.images[0].url);
  $("#classification").text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
}

getEvents(page);

// function hideEvents(){
 
//  getEvents.hide();

// }


function windowResized(){

  canvas = createCanvas(windowWidth, windowHeight);
}
