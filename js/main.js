$(document).ready(function(){
  $("#hex-input").keyup(function(){
    processHexInput();
  });

  $("#rgb-input").keyup(function(){
    processRgbInput();
  });
});

function processHexInput() {
  var userInput = $("#hex-input").val(); //obtain user input
  //console.log("the user inputed: "+(userInput[0] + userInput[1]));
  if (userInput[0] == "#") {
    userInput = userInput.substr(1);
  }



  var rValue = parseInt(userInput[0] + userInput[1], 16); //pase int converts base 16 to base 10
  var gValue = parseInt(userInput[2] + userInput[3], 16);
  var bValue = parseInt(userInput[4] + userInput[5], 16);

  var rValueString = rValue.toString(); //rValueString is the string version of rValue
  var gValueString = gValue.toString();
  var bValueString = bValue.toString();

  var combinedString = rValueString + ", " + gValueString + ", " + bValueString;
  //we use strings instead of ints here to prevent the program from adding the numbers like math.

  $("#rgb-input").val(combinedString); //. means to call a function
  //.val says that combinedString will be the new value for rgb-input.
}


function processRgbInput() {
  $("#hex-input").val("hex value");
}
