// declare displays and buttons
const displayUpper = document.querySelector('#display-upper');
const displayLower = document.querySelector('#display-lower');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const decimalBtn = document.querySelector('#decimal');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const addBtn = document.querySelector('#plus');
const subtractBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

// node lists of all num buttons and all maths buttons to loop through
const numBtns = document.querySelectorAll('.num');
const mathsBtns = document.querySelectorAll('.maths');

// empty string to hold the display content
let display = "";

// on num button click concat button copy to display string
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        display = display + numBtns[i].textContent;
        displayLower.textContent = display;
    });
}

// on maths button click push existing string plus maths symbol to display-upper
for (let i = 0; i < mathsBtns.length; i++) {
    mathsBtns[i].addEventListener("click", function() {
        display = display + " " + mathsBtns[i].textContent + " ";
        displayLower.textContent = display;
    });
}

// on equal button click
    // convert string to calculation
    // separate calculation and split by order of operations
    // return answer to calculation
    // change display to answer

// clear function
    // set display upper to nbsp
    // set display lower to 0
    // reset display to empty string
    function clearFunc() {
        displayUpper.innerHTML = "&nbsp;";
        displayLower.textContent = "0";
        display = "";
    }

// on clear button press
    // run clear function
clearBtn.addEventListener("click", function() {
    clearFunc();
});

// set display-upper and display-lower on page load
// clearFunc();
