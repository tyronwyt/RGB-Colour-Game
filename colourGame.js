var numSquares = 6;
var colours = [];
var goalColour;
var squares = document.querySelectorAll(".square");
var goalDisplay = document.getElementById('goalDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (i = 0; i < squares.length; i++) {
    //add initial colours to squares
    squares[i].style.background = colours[i];

    // click listeners to sqaures
    squares[i].addEventListener('click', function(event){
      //grab colour of clicked square
        var clickedColour = this.style.backgroundColor;
      // compare to clicked colourGame
        if(clickedColour === goalColour) {
          messageDisplay.textContent = "Correct!";
          newGame.textContent = "Play Again?";
          changeColours(clickedColour);
        } else {
          this.style.background = "#232323";
          messageDisplay.textContent = "Try Again!";
        }
    });
  }
}

function reset() {
  messageDisplay.textContent = "";
  //generate all random colours
  colours = generateRandomColours(numSquares);
  //Pick new goal colour
  goalColour =  pickGoalColour();
  //change colour display to mach picked colour
  goalDisplay.textContent = goalColour;
  //change colours on page
  for (i = 0; i < squares.length; i++) {
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colours[i];
    } else {
      squares[i].style.display= "none";
    }

  }
  newGame.textContent = "New Colours";
  h1.style.background = "steelblue";

}

newGame.addEventListener('click', function() {
  reset();
});



function changeColours(colour) {
  //loop through all sqaures
  for (i = 0; i < squares.length; i++) {
  //change each colour to match goal colour
  squares[i].style.background = colour;
  }
  h1.style.background = colour;
}

function pickGoalColour() {
  //pick random colour
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  //make array
  var arr = [];
  //add num random colours to array
  for (var i = 0; i < num; i++) {
   //get random colour and push into arr;
   arr.push(randomColour());
  }
  //return array
  return arr;
}

function randomColour() {
  //pick a "red" form 0 - 255
  var red = Math.floor(Math.random() * 256);
  //pick a "green" form 0 - 255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" form 0 - 255
  var blue = Math.floor(Math.random() * 256);
  var colour = "rgb(" + red + ", " + green + ", " + blue + ")";
  return colour;
}
