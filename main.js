var rangeUpdateButton = document.querySelector('.range-update');
// var minValue = document.querySelector('#input-min-range');
var minValue = document.querySelector('.min-range');
var maxValue = document.querySelector('.max-range');
var minNumber = document.querySelector('.min-num');
var maxNumber = document.querySelector('.max-num');



rangeUpdateButton.addEventListener('mouseover', function () {
  var backgroundColor = rangeUpdateButton.style.backgroundColor;
  var textColor = rangeUpdateButton.style.color;
  console.log(backgroundColor, 'textColor');
  rangeUpdateButton.style.backgroundColor = textColor;
});

rangeUpdateButton.addEventListener('click', function () {
  var minimumValue = minValue.value;
  var maximumValue = maxValue.value;
  console.log(minimumValue, maximumValue);
  minNumber.textContent = minimumValue;
  maxNumber.innerText = maximumValue;
  
});