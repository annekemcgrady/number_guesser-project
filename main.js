var rangeUpdateButton = document.querySelector('.range-update');
var submitGuessButton = document.querySelector('.submit-guess');
// var minValue = document.querySelector('#input-min-range');
var minValue = document.querySelector('.min-range');
var maxValue = document.querySelector('.max-range');
var minNumber = document.querySelector('.min-num');
var maxNumber = document.querySelector('.max-num');
var inputChallengerOne = document.querySelector('.challenger-1');
var inputChallengerTwo = document.querySelector('.challenger-2');
var inputGuessOne = document.querySelector('.guess-1');
var inputGuessTwo = document.querySelector('.guess-2');

var randomNum = Math.floor((Math.random() * 100) + 1);


rangeUpdateButton.addEventListener('mouseover', function () {
  var backgroundColor = rangeUpdateButton.style.background-color;
  var textColor = rangeUpdateButton.style.color;
  console.log(backgroundColor, 'textColor');
  rangeUpdateButton.style.backgroundColor = textColor;
});

rangeUpdateButton.addEventListener('click', function () {
  var minimumValue = parseInt(minValue.value);
  var maximumValue = parseInt(maxValue.value);
  console.log(minimumValue, maximumValue);
  if (minimumValue === 333)
  	console.log('minimumValue is a number!')
   if (maximumValue===999)
   	console.log('maximumValue is a number!!')
  minNumber.textContent = minimumValue;
  maxNumber.innerHTML = maximumValue;
  
  var rndNum = getRandomIntInclusive(minimumValue, maximumValue);
  console.log('Random number is : ', rndNum);
});

submitGuessButton.addEventListener('click', function() {
  var nameChallengerOne = inputChallengerOne.value;
  var nameChallengerTwo = inputChallengerTwo.value;
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  console.log(numGuessOne, numGuessTwo);
  var displayGuessOne = document.querySelector('.latest-score-guess-1');
  console.log(displayGuessOne.textContent);
  var displayScoreOne = document.querySelector('.latest-score-1');
  var displayScoreTwo = document.querySelector('.latest-score-2');
  displayScoreOne.textContent = nameChallengerOne;
  displayScoreTwo.textContent = nameChallengerTwo;

  var displayGuessOne = document.querySelector('.latest-score-guess-1');
  var displayGuessTwo = document.querySelector('.latest-score-guess-2');
  displayGuessOne.textContent = numGuessOne;
  displayGuessTwo.textContent = numGuessTwo;

  /* JMO testing random number generator */
  for (i = 0; i <100; i++) {
  console.log('Random number is: ', randomNum, '\n'); 
  randomNum = Math.floor((Math.random() * 100) + 1);
  }
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



