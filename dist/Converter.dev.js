"use strict";

function getCurrents(i) {
  return document.getElementById("numberPrinted").innerText;
}

function printCurrents(num) {
  document.getElementById("numberPrinted").innerText = num;
}

function reverseNumbers(num) {
  return num.replace(/,/g, '');
}

function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en", {
    maximumFractionDigits: 20
  });
  return value;
}

var button = document.getElementsByClassName("button");
var unit = "";
var units = "";
console.log(unit); // get and print input

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    var output = reverseNumbers(getCurrents());
    console.log(output);
    console.log(this.value);

    if (output != NaN) {
      if (this.value == ".") {
        if (output.includes('.')) return;
        output = getFormattedNumber(output);
        output += this.value;
        printCurrents(output);
      } else {
        output += this.value;
        output = getFormattedNumber(output);
        printCurrents(output);
      }
    }
  });
}

function innerChange(x) {
  document.getElementById("unit").innerHTML = x;
  unit = x;
}

function innerChanged(x) {
  document.getElementById("units").innerHTML = x;
  units = x;
}