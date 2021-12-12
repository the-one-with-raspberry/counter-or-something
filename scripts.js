var blue = 0;
var red = 0;

function addBlue() {
    blue = blue + 1;
    document.getElementById("blue").innerText = blue;
}

function subtractBlue() {
    blue = blue - 1;
    document.getElementById("blue").innerText = blue;
}

function addRed() {
    red = red + 1;
    document.getElementById("red").innerText = red;
}

function subtractRed() {
    red = red - 1;
    document.getElementById("red").innerText = red;
}

function reset() {
    blue = 0;
    red = 0;
    document.getElementById("blue").innerText = "0";
    document.getElementById("red").innerText = "0";
}

function bluecheck() {
    if (blue < 0) {
        blue = blue + 1;
    }
}

function redcheck() {
    if (red < 0) {
        red = red + 1;
    }
}