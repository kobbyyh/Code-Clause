function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to the first one
document.getElementById("length").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";





//
// start length
function metertocentimeter(valNum) {
  document.getElementById("outputCentimeter").innerHTML = valNum * 100;
}
function metertokilometer(valNum) {
  document.getElementById("outputKilometer").innerHTML = valNum / 1000;
}
function centimetertometer(valNum) {
  document.getElementById("outputMeter").innerHTML = valNum / 100;
}
function centimetertokilometer(valNum) {
  document.getElementById("outputKilo").innerHTML = valNum / 100000;
}
function kilometertometer(valNum) {
  document.getElementById("outputMet").innerHTML = valNum * 1000;
}
function kilometertocentimeter(valNum) {
  document.getElementById("outputCent").innerHTML = valNum * 100000;
}
//end length

//start temperature
function degreetokelvin(valNum) {
  document.getElementById("outputKelvin").innerHTML = valNum + 273.15;
}
function kelvintodegree(valNum) {
  document.getElementById("outputDegree").innerHTML = valNum - 273.15;
}
function fahrenheittokelvin(valNum) {
  document.getElementById("outputfahrenheit").innerHTML = (valNum + 459.67) * 5 / 9;
}
function fahrenheittodegree(valNum) {
  document.getElementById("outputDeg").innerHTML = (valNum - 32) * 5 / 9;
}
function kelvintofahrenheit(valNum) {
  document.getElementById("outputFah").innerHTML = (valNum - 273.18) * 1.8 + 32;
}
function degreetofahrenheit(valNum) {
  document.getElementById("outputFahrenheit").innerHTML = (valNum * 38) + 32;
}
//end temperature

//start area
function sqrmetertosqrkilometer(valNum) {
  document.getElementById("outputSqrKilometer").innerHTML = valNum / 1000000;
}
function sqrmetertosqrcentimeter(valNum) {
  document.getElementById("outputSqrCentimeter").innerHTML = valNum * 10000;
}
function sqrkilometertosqrcentimeter(valNum) {
  document.getElementById("outputSqrCent").innerHTML = valNum * 10000000000;
}
function sqrkilometertosqrmeter(valNum) {
  document.getElementById("outputSqrMeter").innerHTML = valNum * 1000000;
}
function sqrcentimetertosqrmeter(valNum) {
  document.getElementById("outputSqrMet").innerHTML = valNum / 10000;
}
function sqrcentimetertosqrkilometer(valNum) {
  document.getElementById("outputSqrKilo").innerHTML = valNum / 10000000000;
}
//end area

//start volume
function cubicmetertocubickilometer(valNum) {
  document.getElementById("outputCubicKilometer").innerHTML = valNum / 1000000000;
}
function cubicmetertocubicCentimeter(valNum) {
  document.getElementById("outputCubicCentimeter").innerHTML = valNum * 1000000;
}
function cubickilometertocubicmeter(valNum) {
  document.getElementById("outputCubicMeter").innerHTML = valNum * 1000000000;
}
function cubickilometertocubicCentimeter(valNum) {
  document.getElementById("outputCubicCent").innerHTML = valNum * 1000000000000000;
}
function cubiccentimetertocubicmeter(valNum) {
  document.getElementById("outputCubicMet").innerHTML = valNum / 1000000;
}
function cubiccentimetertocubickilometer(valNum) {
  document.getElementById("outputCubicKilo").innerHTML = valNum / 1000000000000000;
}
//end volume

// start weight
function poundstokilogram(valNum) {
  document.getElementById("outputKilograms").innerHTML = valNum / 2.2046;
}
function kilotopound(valNum) {
  document.getElementById("kilogramtopounds").innerHTML = valNum / 0.45359237;
}
function kilotogram(valNum) {
  document.getElementById("outputGrams").innerHTML = valNum * 1000;
}
function gramtokilo(valNum) {
  document.getElementById("outputKilogram").innerHTML = valNum / 1000;
}
// end weight

//start time
function secondstominutes(valNum) {
  document.getElementById("outputMinutes").innerHTML = valNum / 60;
}
function secondstohour(valNum) {
  document.getElementById("outputHour").innerHTML = valNum / 3600;
}
function minutestoseconds(valNum) {
  document.getElementById("outputSeconds").innerHTML = valNum * 60;
}
function minutestohour(valNum) {
  document.getElementById("outputHr").innerHTML = valNum / 60;
}
function hourtoseconds(valNum) {
  document.getElementById("outputSec").innerHTML = valNum * 3600;
}
function hourtominutes(valNum) {
  document.getElementById("outputMin").innerHTML = valNum * 60;
}
