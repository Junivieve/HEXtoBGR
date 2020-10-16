function colorChange() {
  var color = document.getElementById("inputcolor");
  var input = color.value;
  color.style.backgroundColor = "#" + String(input);
}
