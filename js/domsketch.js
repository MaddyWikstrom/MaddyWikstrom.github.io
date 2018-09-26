var canvas;
var bgColor;
var userName;
var colorButton;
var paragraph;
var textInput;
var ellipseSlider;


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	bgColor = 200;

	//create a h1 element
	userName = createElement('h1', 'Maddy');
    //userName.position(100, 10);

    //creates a button 
    colorButton = createButton("Change Color");
    colorButton.mousePressed(changeColor);

   //creates a paragraph element
    paragraph = createP('this is a paragraph');
    //check to see if the mouse is hovering over paragraph
    paragraph.mouseOver(changeColor);
  //  paragraph.mousePressed(changeColor);
  // paragraph.mouseOut(changeColor) only changes when you have your mouse out of the <p>
    //creates text box
    textInput = createInput("Type your name here");
    userName.html(textInput.value());
   textInput.input(updateName);  //.changed
    textInput.changed(updateFontColor);
   // textInput.changed(updateName); after you hit enter it updates and changes the name


    //creates a slider element
    createElement('br'); //creates break tag
    ellipseSlider = createSlider(0, 600, 300); //min and max values and then start
    


}
function updateFontColor(){
	paragraph.style("color", "red");
//	paragraph.style("font-size", bgColor);
//	userName.style("color", "red");

}

function updateName(){
userName.html(textInput.value());
//changes header to what we type in real time and if you do change name it updates when you hit enter

}

function changeColor(){
	bgColor = color(random(255));

}

function draw(){
	background(bgColor)
	//fill(255, 0 , 0);
	//gets text to type and change on screen in real time
	text(textInput.value(), 400, 100);
	ellipse(width / 2, height / 2, ellipseSlider.value(), ellipseSlider.value());
	userName.position(ellipseSlider.value(), 0);//you can move your name back and forth w the slider

	if(ellipseSlider.value() > 400){
		fill(0,255,0);
		userName.hide();
	}
	else{
		userName.show();
		userName.position(ellipseSlider.value(), 0);
		fill(255,0,0);
	}


}