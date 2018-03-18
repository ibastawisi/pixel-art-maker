// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const inputWidth = document.querySelector('#inputWidth');
const inputHeight = document.querySelector('#inputHeight');

// set default values
colorPicker.value = '#00b5e9';
inputWidth.value = 20;
inputHeight.value = 20;

// function to make a grid
const canvas = document.querySelector('#pixelCanvas');

function makeGrid(width, height) {
    for (let r = 0; r < height; r++) {
        canvas.appendChild(document.createElement('tr'));
    }
    for (let c = 0; c < width; c++) {
        canvas.querySelectorAll('tr').forEach(tr => {
            tr.appendChild(document.createElement('td'));
        });
    }
}

// make default grid
makeGrid(inputWidth.value, inputHeight.value);

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#sizePicker input[type="submit"]');
submit.addEventListener('click', function (event) {
    event.preventDefault();
    canvas.innerHTML = '';
    makeGrid(inputWidth.value, inputHeight.value);
});

// hex to rgb function
hex2rgb = function (hex) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// canvas click event
canvas.addEventListener('click', function (event) {
    if (event.target.nodeName === 'TD') { event.target.style.backgroundColor =
        event.target.style.backgroundColor === hex2rgb(colorPicker.value) ? '#fff' : colorPicker.value; }
});