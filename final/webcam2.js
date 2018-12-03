var canvas;
var canvas2;
var canvas3;
var canvas4;
var playButton;
// var seriously;
// var target;
// var src;


var capture3;
var w = 640;
var h = 480;

//sound
var neongravestones;

//images
var topbg;

//videos
var videos = ['topint.mp4','tylercover.mp4','topinterview.mp4']; 
var vidSelect;
var tylercovervid;

//booleans
vidPlaying = false;
undo1 = false;
trench = false;
selftitled = false;
vessel = false;

//webcam
var webcam;
var cap;
var showButton;
var capture;
var video;
var video2;
var blur;
var slider;

//filters
var trechButton;
var blurryfaceButton;
var vesselButton;
var selftitledButton;
var undoButton;




function preload(){
 topbg = loadImage('images/topbg1.png');

}

function setup(){
  
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    canvas.id('p5canvas'); 



 neongravestones = createAudio('audio/07 Neon Gravestones.mp3');
 neongravestones.autoplay(true);
 neongravestones.showControls();
 neongravestones.loop();
 neongravestones.volume(.3);

tylercovervid = createVideo(['']);
tylercovervid.hide();

offButton = createButton('hide video');
  offButton.mousePressed(vidOff);
  offButton.position(725,670);



 vidSelect = createSelect();
 vidSelect.position(20,90);

  for(i = 0; i < videos.length; i++){
  	vidSelect.option(videos[i]);
  }
  vidSelect.changed(changeVid);

 playButton = createButton('Play Video');
 playButton.mousePressed(playVid);
 playButton.position(20, 150);

 showButton = createButton('Webcam');
 //showButton.html("Webcam");
 showButton.mousePressed(cam);
 showButton.position(20,175);



}

function vidOff(){

tylercovervid.hide();


}

function filters(){



 //webcam filter buttons
  trenchButton = createButton('Trench');
  trenchButton.mousePressed(trenchFilter);
  trenchButton.position(820,120);

  blurryfaceButton = createButton('blurryface');
  blurryfaceButton.mousePressed(blurryfaceFilter);
  blurryfaceButton.position(900,120);

  vesselButton = createButton('Vessel');
  vesselButton.mousePressed(vesselFilter);
  vesselButton.position(820,225);

  selftitledButton = createButton('self-titled');
  selftitledButton.mousePressed(selfTitledFilter);
  selftitledButton.position(900,225);

  offButton = createButton('hide webcam');
  offButton.mousePressed(camOff);
  offButton.position(725,670);


}


function changeVid(){
	tylercovervid.attribute('src', 'videos/' + vidSelect.value());
	tylercovervid.showControls();
	//tylercovervid.position(150, 300);
	tylercovervid.show();
}

function playVid(){
	if(vidPlaying == true){
		tylercovervid.pause();
		playButton.html('Play Video');
	} else {
		tylercovervid.play();
		tylercovervid.loop();
		playButton.html('Pause Video');
	}
	vidPlaying = !vidPlaying;
}
function draw(){
background(topbg);
image(topbg, 0,0, windowWidth, windowHeight);

tylercovervid.position(450,300);
neongravestones.position(10,670);


if(trench == true){

image(capture,600,350,320,240);
filter('INVERT');

}
if(selftitled == true){

  filter('INVERT');
}
if(vessel == true){
   
   filter('INVERT');

}
 

}


function cam(){
   

   // if(undo1 == true){
   //  undo();
   // }
   //somehow clear all previous filters maybe make multiple functions
   capture = createCapture(VIDEO);
   capture.size(320, 240);
   capture.id('p5video');
   capture.position(600,350);

   filters();


   // image(capture, 800, 500, 800, 500); // this is being painted onto the canvas
  
  

}


function trenchFilter(){

  trench = true;
  draw();
 // image(capture, 0, 0, 600, 350);
 //capture.filter('INVERT');

}

function blurryfaceFilter(){
  
  undo1 = false;
  capture.hide();
  canvas2 = createCanvas(320,240,WEBGL);
  canvas2.position(600,350);

  canvas2.id('p5canvas2');

  video = createCapture(VIDEO);
  video.size(320,240);
  video.position(600,650);
  video.hide();
  video.id('p5video2');

  slider = createSlider(0,1,0.5,0.01);
  slider.position(700,620);
  slider.id('blur-range');

  var seriously = new Seriously();
  var target = seriously.target('#p5canvas2');
  var src = seriously.source('#p5video2');

  blur = seriously.effect('blur');
  blur.amount = '#blur-range';
  blur.source = src;
  target.source = blur;
  seriously.go();

}
function camOff(){

capture.hide();
//video.hide();
//canvas2.hide();
slider.hide();
clear();

}


function vesselFilter(){






  // undoButton = createButton('undo filter');
  // undoButton.position(725,670);
  // undoButton.mousePressed(cam);


}

function selfTitledFilter(){

selftitled = true;
draw();
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

