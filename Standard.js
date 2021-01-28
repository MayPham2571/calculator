function getPrevious() {
    return document.getElementById("previous").innerText;
}

function printPrevious(num) {
    document.getElementById("previous").innerText = num;
}

function getCurrent() {
    return document.getElementById("current").innerText;
}

function printCurrent(num) {
    document.getElementById("current").innerText = getFormattedNumber(num);
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num) {
    return (Number(num.replace(/,/g, '')));
}