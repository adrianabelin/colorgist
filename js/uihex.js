$(document).ready(function() {
	$("#hex-input").keyup(function() {
		processValue();
	});
});

function processValue() {
	var rawValue = $("#hex-input").val();
	var newValue = rawValue.toLowerCase();

	var red = parseInt(newValue[0]+newValue[1], 16);
	var grn = parseInt(newValue[2]+newValue[3], 16);
	var blu = parseInt(newValue[4]+newValue[5], 16);

	$("#rgb-input").html("UIColor(red: "+red+", green: "+grn+", blue: "+blu+", alpha: 1)");
}
