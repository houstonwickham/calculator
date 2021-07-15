// declaring displays and button div for event listener
const keys = document.querySelector('#buttons');
const displayUpper = document.querySelector('#display-upper');
const displayLower = document.querySelector('#display-lower');
let operator = "";
let firstNumber = "";
let secondNumber = "";


// event listener on entire buttons div
keys.addEventListener("click", function(event) {
    // click isn't on a button do nothing
    if (!event.target.closest('button')) return;
    // declare click key, key value, display values, key class, and previous key class?
    const key = event.target;
    const keyValue = event.target.textContent;
    const displayUpperValue = displayUpper.textContent;
    const displayLowerValue = displayLower.textContent;
    const type = key.className;
    const previous = keys.className;
    
    if (type === "num") {
        // reset if last press was equal
        if (previous === "equal") {
            displayLower.textContent = "0";
        }
        // if 0 replace 0 with key, else replace with key plus existing number
        if (displayLowerValue === '0' || previous === 'maths') {
            displayLower.textContent = keyValue
          } else {
            displayLower.textContent = displayLowerValue + keyValue
          }
    } else if (type === "maths") {
        // reset if last press was equal
        if (previous === "equal") {
            displayLower.textContent = "0";
         }
        //  set firstnumber as existing number, save operator for calc func
        firstNumber = displayLowerValue;
        operator = key.textContent;
        //  if no first number remove bottom number, if yes first number get answer
        if (displayUpper.textContent === "") {
            displayLower.textContent = "";
        } else {
            displayLower.textContent = calculate(firstNumber, operator, secondNumber);
        }
        // add first number to dusplay upper
        displayUpper.textContent = firstNumber;
    } else if (type === "equal") {
        // set second number
        secondNumber = displayLowerValue;
        // set lower display to answer
        displayLower.textContent = calculate(firstNumber, operator, secondNumber);
        // empty upper display
        displayUpper.textContent = "";
    } else if (type === "clear") {
        keys.className = "";
        displayLower.textContent = "0";
        displayUpper.textContent = "";
    }

    // set previous after button click and everything executes
    keys.className = type;
    console.log(firstNumber)
});

// do the math things
function calculate (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
  
    if (operator === '+') return firstNumber + secondNumber
    if (operator === '-') return firstNumber - secondNumber
    if (operator === 'x') return firstNumber * secondNumber
    if (operator === '&#247;') return firstNumber / secondNumber
  }

// broken things:
// multiple equations don't work right
// need way to clear after equals without erasing answer