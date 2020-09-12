function calculate() {
  var grms = document.getElementById("grms").value;
  document.getElementById("value-1").innerHTML = getDB(grms, 1.5);
  document.getElementById("value-2").innerHTML = getDB(grms, 3.0);
  document.getElementById("value-3").innerHTML = getDB(grms, 6.0);
}

function getDB(grms, dB) {
  console.log(grms);
  var dbLevel = grms * 10 ** (dB / 10);
  return dbLevel.toFixed(4);
}