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
  console.log("the user inputed: "+userInput);
  $("#rgb-input").val(userInput); //. means to call a function 
}

function processRgbInput() {
  $("#hex-input").val("hex value");
}
