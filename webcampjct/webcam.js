var canvas;
var playButton;


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

//webcam
var webcam;



function preload(){
 topbg = loadImage('images/topbg1.png');

}

function setup(){
  
    canvas = createCanvas(windowWidth, windowHeight); //add back webgl
    canvas.style('z-index', '-1');
   // canvas.id('p5canvas'); 

  //canvas = createCanvas(640, 480, WEBGL);
  // canvas.id('p5canvas');
  // capture = createCapture(VIDEO);
  // capture.size(640, 480);
  // capture.hide();



  

   
 //  var seriously = new Seriously();


 neongravestones = createAudio('audio/07 Neon Gravestones.mp3');
 neongravestones.autoplay(true);
 neongravestones.showControls();
 neongravestones.loop();
 neongravestones.volume(.3);

// if(mousePressed == true){

// 	videoTabPlay();
// }
tylercovervid = createVideo(['']);
tylercovervid.hide();





 vidSelect = createSelect();
 vidSelect.position(20,90);

  for(i = 0; i < videos.length; i++){
  	vidSelect.option(videos[i]);
  }
  vidSelect.changed(changeVid);

 playButton = createButton('Play Video');
 playButton.mousePressed(playVid);
 playButton.position(20, 150);




 // webcam = createCapture(VIDEO);
 // webcam.size(320, 240);
 // webcam.id('p5video');

 
 // var src = seriously.source('#p5video');
 // var target = seriously.target('#p5canvas');
 // var slider = createSlider(0,1,0.5,0.01);
 // slider.id('blur-slider');

 // var blur = seriously.effect('blur'); 
 // blur.amount = '#blurSlider';
 // blur.source = src;
 // target.source = blur;

 // seriously.go();


}


/*
function videoTabPlay(){

 //video selection
tylercovervid = createVideo(['']);
tylercovervid.hide();


 vidSelect = createSelect();
 vidSelect.position(20,20);

  for(i = 0; i < videos.length; i++){
  	vidSelect.option(videos[i]);
  }
  vidSelect.changed(changeVid);

 playButton = createButton('Play Video');
 playButton.mousePressed(playVid);
 playButton.position(10, 35);

}
*/
function changeVid(){
	tylercovervid.attribute('src', 'videos/' + vidSelect.value());
	tylercovervid.showControls();
	tylercovervid.position(150, 300);
	tylercovervid.show();
}

function playVid(){
	if(vidPlaying == true){
		tylercovervid.pause();
		playButton.html('Play Video');
	} else {
		tylercovervid.play();
		tylercovervid.loop();//.time(10);
		//T1000.volume(.3);
		//T1000.speed(2);
		playButton.html('Pause Video');
	}
	vidPlaying = !vidPlaying;
}
function draw(){
background(topbg);
image(topbg, 0,0, windowWidth, windowHeight);

tylercovervid.position(625, 400);
neongravestones.position(10,800)

//image(capture, 0, 0, 320, 240);


}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

