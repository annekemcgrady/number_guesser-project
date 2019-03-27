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

var displayScoreOne = document.querySelector('.latest-score-1'); 
var displayScoreTwo = document.querySelector('.latest-score-2');
  

var displayGuessOne = document.querySelector('.latest-score-guess-1'); 
var displayGuessTwo = document.querySelector('.latest-score-guess-2');

var messageOne = document.querySelector('.message-1');
var messageTwo = document.querySelector('.message-2');

// queries the reset button - to clear all input fields and generates new random number
var resetButton = document.querySelector('.reset-game');

var randomNum;

var minimumValue = parseInt(minValue.value);
var maximumValue = parseInt(maxValue.value);

var cardContainer = document.querySelector('.card-container');

var guessCounter = 0;
var currentCount = guessCounter.value;

// queries inputs of player one and two name and guess inputs
// var resetNameOne = document.querySelector('.challenger-1');
// var resetNameTwo = document.querySelector('.challenger-2');
// var resetGuessOne = document.querySelector('.guess-1');
// var resetGuessTwo = document.querySelector('.guess-2');

var numGuessOne = parseInt(inputGuessOne.value);
var numGuessTwo = parseInt(inputGuessTwo.value);

//EVENT LISTENERS

//Event listener for the inputs in challenger user input section

inputChallengerOne.addEventListener('keyup', checkInputs);
inputChallengerTwo.addEventListener('keyup', checkInputs);
inputGuessOne.addEventListener('keyup', checkInputs);
inputGuessTwo.addEventListener('keyup', checkInputs);

// create error if max is less than min on either input

minValue.addEventListener('keyup', checkMinMax);
maxValue.addEventListener('keyup', checkMinMax);

//create errors is guess 1 or 2 is not a number or out of range
inputGuessOne.addEventListener('keyup', guessErrorOne);
inputGuessTwo.addEventListener('keyup', guessErrorTwo);
inputGuessOne.addEventListener('keyup', guessRangeErrorOne);
inputGuessTwo.addEventListener('keyup', guessRangeErrorTwo);

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
  // var displayGuessOne = document.querySelector('.latest-score-guess-1');
  var displayScoreOne = document.querySelector('.latest-score-1'); 
  var displayScoreTwo = document.querySelector('.latest-score-2');
  
  displayScoreOne.textContent = nameChallengerOne;
  displayScoreTwo.textContent = nameChallengerTwo;

  var displayGuessOne = document.querySelector('.latest-score-guess-1'); 
  var displayGuessTwo = document.querySelector('.latest-score-guess-2');
  
  displayGuessOne.textContent = numGuessOne;
  displayGuessTwo.textContent = numGuessTwo;

  guessCounter += 2;
});

// update latest score area with player one player name and guess

submitGuessButton.addEventListener('click', function() {
  var numGuessOne = parseInt(inputGuessOne.value);
  var messageOne = document.querySelector('.message-1');
  
  // console.log(numGuessOne);
  // console.log(messageOne);

  if (numGuessOne === randomNum) {
  	messageOne.innerText = "BOOM\!";
  	boomOne();
  	
   } else if (numGuessOne < randomNum){
   	messageOne.innerText = "that\'s too low";
   
   } else 
     messageOne.innerText = "that\'s too high";
})

// update latest score area with player two name and guess
submitGuessButton.addEventListener('click', function() {
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var messageTwo = document.querySelector('.message-2');
  
  // var guessTwoValue = parseInt(inputGuessTwo.value);
  // console.log(numGuessTwo);
  // console.log(messageTwo);

    if (numGuessTwo === randomNum) {
  	messageTwo.innerText = 'BOOM\!';
  	boomTwo();
  	
   } else if (numGuessTwo < randomNum){
   	messageTwo.innerText = 'that\'s too low';
   
   } else 
     messageTwo.innerText = 'that\'s too high';
})

  // clear button clears the input field but doesn't reset random number

clearButton.addEventListener('click', clearPlayerInputs);

// reset button clears range and input and current player field and resets random number
resetButton.addEventListener('click', function() {

	clearPlayerInputs();
	clearMinMaxRange();
	getRandomNumber(1,100);
	console.log(randomNum);
  clearLatestScore();
  
  messageOne.innerText = "waiting for guess...";
  messageTwo.innerText = "waiting for guess...";
  guessCounter = 0;

});

// FUNCTIONS  

// function generating random number
function getRandomNumber(minimumValue,maximumValue){
  randomNum = Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;

};  

function clearMinMaxRange(){

  var minValue = document.querySelector('.min-range');
  var maxValue = document.querySelector('.max-range');
  var minNumber = document.querySelector('.min-num');
  var maxNumber = document.querySelector('.max-num');
  minValue.value = "";
  maxValue.value = "";
  minNumber.innerText = 1;
  maxNumber.innerText = 100;

};

function clearLatestScore(){
  displayGuessOne.innerText = "?";
  displayGuessTwo.innerText = "?";
  displayScoreOne.innerText = "Challenger 1 Name";
  displayScoreTwo.innerText = "Challenger 2 Name";
};

function clearPlayerInputs(){
  var resetNameOne = document.querySelector('.challenger-1');
  var resetNameTwo = document.querySelector('.challenger-2');
  var resetGuessOne = document.querySelector('.guess-1');
  var resetGuessTwo = document.querySelector('.guess-2');

  resetNameOne.value = "";
  resetNameTwo.value = "";
  resetGuessOne.value = "";
  resetGuessTwo.value = "";

};

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

  var cardOne = document.querySelector('.card-container');
  // counter display query and current counter - NOT WORKING
  var cardGuessCount = document.querySelector('.card-guess')
  
	cardOnePlayOne.innerText = NameChalOne;
	cardOnePlayTwo.innerText = NameChalTwo;
	cardOneWinner.innerText = NameChalOne;

  cardOne.style.visibility = 'visible';

  // This is not working
  console.log(currentCount + "is the current count");
  cardGuessCount.innerText = currentCount;  
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
  var cardOne = document.querySelector('.card-1');
	
  cardOnePlayOne.innerText = NameChalOne;
  cardOnePlayTwo.innerText = NameChalTwo;
  cardOneWinner.innerText = NameChalTwo;

  cardOne.style.visibility = 'visible';
};

function checkMinMax() {
  var minValue = document.querySelector('.min-range');
  var maxValue = document.querySelector('.max-range');
  var minimumValue = parseInt(minValue.value);
  var maximumValue = parseInt(maxValue.value);
  var minMaxError = document.querySelector('.min-max-error');
  
  if (maximumValue < minimumValue) {

    rangeUpdateButton.disabled = true;
    minMaxError.classList.remove('hidden');
    minValue.classList.add('error');
    maxValue.classList.add('error');

  } else {
    rangeUpdateButton.disabled = false;
    minMaxError.classList.add('hidden');
    minValue.classList.remove('error');
    maxValue.classList.remove('error');
  }
};

function guessErrorOne(){
  var inputGuessOne = document.querySelector('.guess-1');
  var inputGuessTwo = document.querySelector('.guess-2');
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var guessOneErrorMsg = document.querySelector('.guess-1-error-msg');
  var guessTwoErrorMsg = document.querySelector('.guess-2-error-msg');  
  

  if (isNaN(numGuessOne))  {
    guessOneErrorMsg.classList.remove('hidden');
    inputGuessOne.classList.add('error');
  
  } else {
    guessOneErrorMsg.classList.add('hidden');
    inputGuessOne.classList.remove('error');

  } 
}; 

function guessErrorTwo(){
  var inputGuessOne = document.querySelector('.guess-1');
  var inputGuessTwo = document.querySelector('.guess-2');
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var guessOneErrorMsg = document.querySelector('.guess-1-error-msg');
  var guessTwoErrorMsg = document.querySelector('.guess-2-error-msg');  
  

  if (isNaN(numGuessTwo))  {
    guessTwoErrorMsg.classList.remove('hidden');
    console.log("NUM ONE GUESS ERROR!!");
    inputGuessTwo.classList.add('error');
  
  } else {
    guessTwoErrorMsg.classList.add('hidden');
    inputGuessTwo.classList.remove('error');

  } 
}; 

function checkInputs() {
  var playOneInput = inputChallengerOne.value;
  var playTwoInput = inputChallengerTwo.value;
  var playOneGuess = inputGuessOne.value;
  var playTwoGuess = inputGuessTwo.value;

  
	if (playOneInput==="" || playTwoInput ==="" || playOneGuess ==="" || playTwoGuess ==="") {
    console.log("if is working");
		clearButton.disabled = true;
		resetButton.disabled = true;

  } else {
		console.log("else is working");
		clearButton.disabled = false;
    resetButton.disabled = false;
  }
};

  function guessRangeErrorOne(){
  var minimumValue = parseInt(minValue.value);
  var maximumValue = parseInt(maxValue.value);
  var inputGuessOne = document.querySelector('.guess-1');
  var inputGuessTwo = document.querySelector('.guess-2');
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var guessOneRangeErrorMsg = document.querySelector('.guess-1-range-error-msg');
  var guessTwoRangeErrorMsg = document.querySelector('.guess-2-range-error-msg');

  if(numGuessOne < minimumValue || numGuessOne > maximumValue) {
    guessOneRangeErrorMsg.classList.remove('hidden');
    inputGuessOne.style.color = "#DD1972";
    inputGuessOne.classList.add('error');
  } else {
    guessOneRangeErrorMsg.classList.add ('hidden');
    inputGuessOne.style.color = "#6E6E6E";
    inputGuessOne.classList.remove('error');
  }
};

function guessRangeErrorTwo(){
  var minimumValue = parseInt(minValue.value);
  var maximumValue = parseInt(maxValue.value);
  var inputGuessOne = document.querySelector('.guess-1');
  var inputGuessTwo = document.querySelector('.guess-2');
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  var guessOneRangeErrorMsg = document.querySelector('.guess-1-range-error-msg');
  var guessTwoRangeErrorMsg = document.querySelector('.guess-2-range-error-msg');
  console.log(guessTwoRangeErrorMsg + "is here!");

  if(numGuessTwo < minimumValue || numGuessTwo > maximumValue) {
    guessTwoRangeErrorMsg.classList.remove('hidden');
    inputGuessTwo.style.color = "#DD1972";
    inputGuessTwo.classList.add('error');
  } else {
    guessTwoRangeErrorMsg.classList.add ('hidden');
    inputGuessTwo.style.color = "#6E6E6E";
    inputGuessTwo.classList.remove('error');
  }

};







