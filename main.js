var _hex = "#ffffff";

function hexToBgr(_hex) {
  var output = String(_hex.substring(4, 6) + _hex.substring(2, 4) + _hex.substring(0, 2));
  console.log(output);
}

function colorChange() {
  var color = document.getElementById("inputcolor");
  var input = color.value;
  var hex = "#" + String(input);
  color.style.backgroundColor = hex;
  hexToBgr(hex);
}
