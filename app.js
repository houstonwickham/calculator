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

// empty strings to hold the display content
let display = "";
let displayTop = "";
let answer = "Answer"

// on num button click concat button copy to display string, if zero, remove zero
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        if (display === "0") {
           display = ""; 
        }
        display = display + numBtns[i].textContent;
        displayLower.textContent = display;
    });
}


// on maths button click
for (let i = 0; i < mathsBtns.length; i++) {
    mathsBtns[i].addEventListener("click", function() {
        //  don't push maths if no number present && /\d/g.test(display[display.length - 1])
        console.log(/\d/g.test(display[display.length - 1]))
        if (/\d/g.test(display[display.length - 1])) {
            console.log(/\d/g.test(display[display.length - 1]))
            // push existing string plus maths symbol to display-upper
            displayTop = displayTop + display + " " + mathsBtns[i].textContent + " ";
            displayUpper.textContent = displayTop;
            // reset lower display
            display = "";
            displayLower.textContent = display;
        }
    });
}

// on equal button click
equalBtn.addEventListener("click", function() {
    // convert string to array and separate by maths symbols
    console.log(displayTop + display)
    // separate calculation and split by order of operations
    // return answer to calculation

    // change display to answer and reset display holders
    displayLower.textContent = answer;
    displayTop = "";
    displayUpper.innerHTML = "&nbsp;";
    display = ""
});

// maths functions
    // addition
    // subtraction
    // multiplication
    // division

// clear function 
function clearFunc() {
    // set display upper to nbsp
    displayUpper.innerHTML = "&nbsp;";
    // set display lower to 0
    displayLower.textContent = "0";
    // reset displays to empty strings
    display = "";
    displayTop = "";
}

// on clear button press
    // run clear function
clearBtn.addEventListener("click", function() {
    clearFunc();
});

// set display-upper and display-lower on page load
clearFunc();
