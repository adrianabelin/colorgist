$(document).ready(function(){
  $("#hex-input").keyup(function(){
    processHexInput();
  });

  $("#rgb-input").keyup(function(){
    processRgbInput();
  });

});

function processHexInput() {
  $("#rgb-input").val("rgb value");
}

function processRgbInput() {
  $("#hex-input").val("hex value");
}
