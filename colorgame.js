var easybtn = document.getElementById("easy");
var hardbtn = document.getElementById("hard");
easybtn.addEventListener("click" , function(){
    easybtn.classList.add("selected")
    hardbtn.classList.remove("selected");
    colors = generateColors(3);
    pickedColor = pickedcolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; ++i){
        if(colors[i]) squares[i].style.background = colors[i];
        else squares[i].style.display = "none";
    }
})
hardbtn.addEventListener("click" , function(){
    easybtn.classList.remove("selected")
    hardbtn.classList.add("selected");
    colors = generateColors(6);
    pickedColor = pickedcolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; ++i){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

var colors = generateColors(6);

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var pickedColor = pickedcolor();
colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent = "correct!";
            gotrightcolor(clickedColor);
            reset.textContent = "Play Again?";
            h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
		}
	});
   
}

function gotrightcolor(color){
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
       squares[i].style.background = pickedColor;
}
}

function pickedcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];
    for(var i = 0; i < num ; ++i){
        arr[i] = randomcolor();
    }

    return arr;
}

function randomcolor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb("+red +", " + green + ", " + blue + ")"
}

var reset = document.getElementById("buttonfornew");
reset.addEventListener("click",function(){
    message.textContent = "";
    colors = generateColors(6);
    pickedColor = pickedcolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    reset.textContent = "New colors";
});



