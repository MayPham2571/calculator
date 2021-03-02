function getCurrents(i) {
    return document.getElementById("numberPrinted").innerText;
    
}

function printCurrents(num) {
    document.getElementById("numberPrinted").innerText = num;
    if (num !== 0) {
        document.getElementById ("AC").innerText = "EC";
    }
}

function reverseNumbers(num) {
    return (num.replace(/,/g, ''));
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en", { maximumFractionDigits: 100 });
    return value;
}

var button = document.getElementsByClassName("button");
var unit = "Centimeters";
var units = "Inches";
var output = 0;

function unitChanges(unit) {
    switch(unit){
        case "Centimeters": 
            unitChange.cm = Number(output);
            console.log(unitChange.cm);
            unitChange.km = output/100000;
            unitChange.m = output/100;
            unitChange.mm = output * 10;
            unitChange.inch = output * 0.39370;
            break;
        case "Kilometers":
            unitChange.cm = output * 100000;
            unitChange.km = Number(output);
            unitChange.m = output * 100;
            unitChange.mm = output * 1000000;
            unitChange.inch = output * 39370;
            break;
        case "Meters": 
            unitChange.cm = output * 100;
            unitChange.km = output / 100;
            unitChange.m = Number(output);
            unitChange.mm = output * 1000;
            unitChange.inch = output * 39.370;
            break;
        case "Milimeters":
            unitChange.cm = output / 10;
            unitChange.km = output / 1000000;
            unitChange.m = output / 1000;
            unitChange.mm = Number(output);
            unitChange.inch = output * 0.03937;
            break;
        case "Inches": 
            unitChange.cm = output / 0.39370;
            unitChange.km = output / 39370;
            unitChange.m = Number(output / 39.370);
            unitChange.mm = Number(output / 0.03937);
            unitChange.inch = Number(output);
    }

}

// get and print input
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        output = reverseNumbers(getCurrents());
        console.log(output);
        console.log(this.value);
        
        if (output != NaN) {
            if (this.value == ".") {
                if (output.includes('.')) return
                // output = getFormattedNumber(output);
                output += this.value;
                unitChanges(unit);
                console.log(unitChange);
                printCurrents(output);
                unitsChange(units);
            } else {
                output += this.value;
                
                // output = getFormattedNumber(output);
                unitChanges(unit);
                console.log(unitChange);
                printCurrents(Number(output));
                unitsChange(units);
            }
        }
    });
}

function unitsChange(units){
    switch(units){
        case "Centimeters":
            document.getElementById("inner").innerText = unitChange.cm.toString();
            break;
        case "Inches":
            document.getElementById("inner").innerText = unitChange.inch.toString();
            break;
        case "Kilometers":
            document.getElementById("inner").innerText = unitChange.km.toString();
            break;
        case "Milimeters":
            document.getElementById("inner").innerText = unitChange.mm.toString();
            break;
        case "Meters":
            document.getElementById("inner").innerText = unitChange.m.toString();
    }
}

function innerChange(x) {
    document.getElementById("unit").innerHTML = x;
    unit = x;
    unitChanges(unit);
    unitsChange(units);
}

function innerChanged(x) {
    document.getElementById("units").innerHTML = x;
    units = x;
    unitsChange(x);
}

var unitChange = { 
    cm: 0, km: 0, m: 0, mm: 0, inch: 0
};

function clearNum(){
    output = Math.floor(output/10);
    unitChanges(unit);
    printCurrents(output);
    unitsChange(units);
    console.log(output);
    if (output == 0) {
        document.getElementById("AC").innerText = "AC";
    }
}