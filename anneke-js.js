// queries the range update button
var rangeUpdateButton = document.querySelector('.range-update');
// queries bumit button
var submitGuessButton = document.querySelector('.submit-guess');

// queries the user inputs for min and max range 
var minValue = document.querySelector('.min-range');
var maxValue = document.querySelector('.max-range');

// queries the underlined fields in the current range heading
var minNumber = document.querySelector('.min-num');
var maxNumber = document.querySelector('.max-num');

// queries the user inputs for chellenger 1 and 2 names
var inputChallengerOne = document.querySelector('.challenger-1');
var inputChallengerTwo = document.querySelector('.challenger-2');

// queries the user inputs for challenger 1 and 2 guesses
var inputGuessOne = document.querySelector('.guess-1');
var inputGuessTwo = document.querySelector('.guess-2');

// queries the clear button
var clearButton = document.querySelector('.clear-game');

// queries the reset button - to clear all input fields and generates new random number

var resetButton = document.querySelector('.reset-game');

var randomNum;

var minimumValue = parseInt(minValue.value);
var maximumValue = parseInt(maxValue.value);

// queries inputs of player one and two name and guess inputs
var resetNameOne = document.querySelector('.challenger-1');
var resetNameTwo = document.querySelector('.challenger-2');
var resetGuessOne = document.querySelector('.guess-1');
var resetGuessTwo = document.querySelector('.guess-2');

// function generating random number
function getRandomNumber(minimumValue,maximumValue){
	randomNum = Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;

};

// Event listener for the range update button updating the current range heading

rangeUpdateButton.addEventListener('click', function () {
  var minimumValue = parseInt(minValue.value);
  var maximumValue = parseInt(maxValue.value);
  console.log(minimumValue, maximumValue);
  minNumber.textContent = minimumValue;
  maxNumber.innerHTML = maximumValue;
   
  getRandomNumber(minimumValue, maximumValue);
  console.log(randomNum);
});

// Event listener on submit guess button updates name guess and msg

submitGuessButton.addEventListener('click', function() {
  var nameChallengerOne = inputChallengerOne.value;
  var nameChallengerTwo = inputChallengerTwo.value;
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var displayGuessOne = document.querySelector('.latest-score-guess-1');
  var displayScoreOne = document.querySelector('.latest-score-1'); 
  var displayScoreTwo = document.querySelector('.latest-score-2');
  
  displayScoreOne.textContent = nameChallengerOne;
  displayScoreTwo.textContent = nameChallengerTwo;

  var displayGuessOne = document.querySelector('.latest-score-guess-1'); 
  var displayGuessTwo = document.querySelector('.latest-score-guess-2');
  
  displayGuessOne.textContent = numGuessOne;
  displayGuessTwo.textContent = numGuessTwo;

});

// update latest score area with player one player name and guess

submitGuessButton.addEventListener('click', function() {
  var numGuessOne = parseInt(inputGuessOne.value);
  var messageOne = document.querySelector('.message-1');
  
  // var guessTwoValue = parseInt(inputGuessTwo.value);
  console.log(numGuessOne);
  console.log(messageOne);

  if (numGuessOne === randomNum) {
  	messageOne.innerText = "BOOM";
  	boomOne();
  	
   } else if (numGuessOne < randomNum){
   	messageOne.innerText = "that's too low";
   
   } else 
     messageOne.innerText = "that's too high";

})

// update latest score area with player two name and guess
submitGuessButton.addEventListener('click', function() {
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var messageTwo = document.querySelector('.message-2');
  
  // var guessTwoValue = parseInt(inputGuessTwo.value);
  console.log(numGuessTwo);
  console.log(messageTwo);

    if (numGuessTwo === randomNum) {
  	messageTwo.innerText = "BOOM!";
  	boomTwo();
  	
   } else if (numGuessTwo < randomNum){
   	messageTwo.innerText = "that's too low";
   
   } else 
     messageTwo.innerText = "that's too high";

})

function clearPlayerInputs(){

  resetNameOne.value = "";
  resetNameTwo.value = "";
  resetGuessOne.value = "";
  resetGuessTwo.value = "";

};

  // clear button clears the input field but doesn't reset random number

clearButton.addEventListener('click', function() {
 
  clearPlayerInputs();

});

// reset button clears range and input and current player field and resets random number
resetButton.addEventListener('click', function() {

	clearPlayerInputs();
	
	var minValue = document.querySelector('.min-range');
    var maxValue = document.querySelector('.max-range');
    var minNumber = document.querySelector('.min-num');
	var maxNumber = document.querySelector('.max-num');
	minValue.value = "";
	maxValue.value = "";
	minNumber.innerText = 1;
	maxNumber.innerText = 100;

	getRandomNumber(1,100);
	console.log(randomNum);

});

function boomOne() {
	// query challenger name latest score inputs
	var inputChallengerOne = document.querySelector('.challenger-1');
	var inputChallengerTwo = document.querySelector('.challenger-2');
	var cardOneWinnerInput = document.querySelector('.latest-score-1');
	// query card outputs
	var cardOnePlayOne = document.querySelector('.card-title-chal-1');	
	var cardOnePlayTwo = document.querySelector('.card-title-chal-2');
	var cardOneWinner = document.querySelector('.card-winner-name');
	// gets values from latest score name inputs
	var NameChalOne = inputChallengerOne.value;
	var NameChalTwo = inputChallengerTwo.value;
	var cardOneWinnerOutput = cardOneWinnerInput.value;	

	cardOnePlayOne.innerText = NameChalOne;
	cardOnePlayTwo.innerText = NameChalTwo;
	cardOneWinner.innerText = NameChalOne;

};

function boomTwo() {
// query challenger name latest score inputs
var inputChallengerOne = document.querySelector('.challenger-1');
var inputChallengerTwo = document.querySelector('.challenger-2');
// query card outputs
var cardOnePlayOne = document.querySelector('.card-title-chal-1');	
var cardOnePlayTwo = document.querySelector('.card-title-chal-2');
var cardOneWinner = document.querySelector('.card-winner-name');
// gets values from latest score name inputs
var NameChalOne = inputChallengerOne.value;
var NameChalTwo = inputChallengerTwo.value;
	
cardOnePlayOne.innerText = NameChalOne;
cardOnePlayTwo.innerText = NameChalTwo;
cardOneWinner.innerText = NameChalTwo;

};

// disable update button and create error if max is less than min

maxValue.addEventListener('keyup', function(e){

	var minValue = document.querySelector('.min-range');
    var maxValue = document.querySelector('.max-range');
    var minimumValue = parseInt(minValue.value);
    var maximumValue = parseInt(maxValue.value);
    var minMaxError = document.querySelector('.min-max-error');
    e.preventDefault();

  if (maximumValue < minimumValue) {

  	console.log(maximumValue);
	  rangeUpdateButton.disabled = true;
	  rangeUpdateButton.classList.add("disabled");
	  minMaxError.innerText = "Max can't be less than min!";

 } else {
   rangeUpdateButton.disabled = false;
   rangeUpdateButton.classList.remove("disabled");
   minMaxError.innerText = "";
}
 });

function checkInputs() {

	var resetNameOne = document.querySelector('.challenger-1');
	var resetNameTwo = document.querySelector('.challenger-2');
	var resetGuessOne = document.querySelector('.guess-1');
	var resetGuessTwo = document.querySelector('.guess-2');
	// var noNameOne = resetNameOne.value;
	// var noNameTwo = resetNameTwo.value;
	// var noGuessOne = resetGuessOne.value;
	// var noGuessTwo = resetGuessTwo.value;

	if (resetNameOne.value ==""|| resetNameTwo.value ==""|| resetGuessOne ==""||resetGuessTwo =="") {

		clearButton.disabled = true;
		clearButton.classList.add("disabled");
		clearButton.classList.remove("pink");
		resetButton.disabled = true;
		resetButton.classList.remove("pink");
		resetButton.classList.add("disabled");

} else {
	console.log("this is working");
		clearButton.disabled = false;
		clearButton.classList.remove("disabled");
		resetButton.disabled = false;
		resetButton.classList.remove("disabled");
	}
};

checkInputs();


// .addEventListener('keyup', function(e){

	

// TO-DOs

// make clear and reset buttons disabled when no input
// document.getElementById("myBtn").disabled = true;



