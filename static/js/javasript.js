let redColor = 0;
let blueColor = 0;
let greenColor = 0;

let redNumber = document.querySelector('#red');
let blueNumber = document.querySelector('#blue');
let greenNumber = document.querySelector('#green');

let redBinary = document.querySelector('#r');
redBinary.innerHTML = 'Red: ' + 0;
let blueBinary = document.querySelector('#b');
blueBinary.innerHTML = 'Blue: ' + 0;
let greenBinary = document.querySelector('#g');
greenBinary.innerHTML = 'Green: ' + 0;


redNumber.addEventListener('input', setRedNumber);
blueNumber.addEventListener('input', setBlueNumber);
greenNumber.addEventListener('input', setGreenNumber);


function setRedNumber(e) {
    redColor = e.target.value;
    let redBinary = document.querySelector('#r');
    redBinary.innerHTML = 'Red: ' + redColor;
    transformColor();
}

function setBlueNumber(f) {
    blueColor = f.target.value;
    let blueBinary = document.querySelector('#b');
    blueBinary.innerHTML = 'Blue: ' + blueColor;
    transformColor();

}

function setGreenNumber(g) {
    greenColor = g.target.value;
    let greenBinary = document.querySelector('#g');
    greenBinary.innerHTML = 'Green: ' + greenColor;
    transformColor();

}

function transformColor() {

    let bodyDetails = document.getElementsByTagName('body')
    let finalNumber = rgbToHex(redColor, greenColor, blueColor);
    console.log(finalNumber);
    console.log(typeof finalNumber);
    let finalNumberPlace = document.querySelector('.final-number');
    finalNumberPlace.innerHTML = 'HEX value: ' + finalNumber;
    document.body.style.backgroundColor = finalNumber;
}


function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}




