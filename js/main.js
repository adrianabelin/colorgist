$(document).ready(function(){
  $("#hex-input").keyup(function(){
    processHexInput();
  });

  $("#rgb-input").keyup(function(){
    processRgbInput();
  });
});

function processHexInput() {
  var userInput = $("#hex-input").val();
  console.log("the user inputed: "+(userInput[0] + userInput[1]));

  var rValue = parseInt(userInput[0] + userInput[1], 16);
  var gValue = parseInt(userInput[2] + userInput[3], 16);
  var bValue = parseInt(userInput[4] + userInput[5], 16);

  $("#rgb-input").val(rValue.toString() + gValue.toString() + bValue.toString()); //. means to call a function
}

function processRgbInput() {
  $("#hex-input").val("hex value");
}
