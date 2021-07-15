// Start writing JavaScript here!
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset

  if (type === 'number') {
    if (
      displayValue === '0' ||
      previousKeyType === 'operator'
    ) {
      display.textContent = keyValue
    } else {
      display.textContent = displayValue + keyValue
    }
  }

  if (type === 'operator') {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
    operatorKeys.forEach(el => { el.dataset.state = '' })
    key.dataset.state = 'selected'

    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = key.dataset.key
  }

  if (type === 'equal') {
    // Perform a calculation
    const firstNumber = calculator.dataset.firstNumber
    const operator = calculator.dataset.operator
    const secondNumber = displayValue
    display.textContent = calculate(firstNumber, operator, secondNumber)
  }

  calculator.dataset.previousKeyType = type
})

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)

  if (operator === 'plus') return firstNumber + secondNumber
  if (operator === 'minus') return firstNumber - secondNumber
  if (operator === 'times') return firstNumber * secondNumber
  if (operator === 'divide') return firstNumber / secondNumber
}

// // declare displays and buttons
// const displayUpper = document.querySelector('#display-upper');
// const displayLower = document.querySelector('#display-lower');
// const oneBtn = document.querySelector('#one');
// const twoBtn = document.querySelector('#two');
// const threeBtn = document.querySelector('#three');
// const fourBtn = document.querySelector('#four');
// const fiveBtn = document.querySelector('#five');
// const sixBtn = document.querySelector('#six');
// const sevenBtn = document.querySelector('#seven');
// const eightBtn = document.querySelector('#eight');
// const nineBtn = document.querySelector('#nine');
// const zeroBtn = document.querySelector('#zero');
// const decimalBtn = document.querySelector('#decimal');
// const clearBtn = document.querySelector('#clear');
// const equalBtn = document.querySelector('#equal');
// const addBtn = document.querySelector('#plus');
// const subtractBtn = document.querySelector('#minus');
// const multiplyBtn = document.querySelector('#multiply');
// const divideBtn = document.querySelector('#divide');

// // node lists of all num buttons and all maths buttons to loop through
// const numBtns = document.querySelectorAll('.num');
// const mathsBtns = document.querySelectorAll('.maths');

// // empty strings to hold the display content
// let display = "";
// let displayTop = "";
// let answer = "";
// let operator = "";
// let firstNumber = "";
// let secondNumber = "";

// // on num button click concat button copy to display string, if zero, remove zero
// for (let i = 0; i < numBtns.length; i++) {
//     numBtns[i].addEventListener("click", function() {
//         if (display === "0") {
//            display = ""; 
//         }
//         display = display + numBtns[i].textContent;
//         displayLower.textContent = display;
//     });
// }


// // on maths button click
// for (let i = 0; i < mathsBtns.length; i++) {
//     mathsBtns[i].addEventListener("click", function() {
//         //  don't push maths if no number present
//         if ((/\d/g.test(display[display.length - 1]))) {
//             // push existing string plus maths symbol to display-upper
//             displayTop = displayTop + display;
//             displayUpper.textContent = displayTop;
//             // set operator
//             operator = mathsBtns[i].textContent;
//             firstNumber = displayTop;
//             // reset lower display
//             if (firstNumber = "") {
//                 display = "";
//                 displayLower.textContent = display;
//             } else {
//                 secondNumber = display;
//                 displayLower.textContent = calculate(firstNumber, operator, secondNumber)
//             }
//         }
//     });
// }

// // on equal button click
// equalBtn.addEventListener("click", function() {
//     console.log();
//     // return answer to calculation
//     answer = calculate(firstNumber, operator, secondNumber)
//     // change display to answer and reset display holders
//     displayLower.textContent = answer;
//     displayTop = "";
//     displayUpper.innerHTML = "&nbsp;";
//     display = ""
//     console.log(answer, firstNumber, secondNumber);
// });

// function calculate (firstNumber, operator, secondNumber) {
//     firstNumber = parseInt(firstNumber)
//     secondNumber = parseInt(secondNumber)

//     if (operator === '+') return firstNumber + secondNumber
//     if (operator === '-') return firstNumber - secondNumber
//     if (operator === 'x') return firstNumber * secondNumber
//     if (operator === '&#247;') return firstNumber / secondNumber
//   }
// // clear function 
// function clearFunc() {
//     // set display upper to nbsp
//     displayUpper.innerHTML = "&nbsp;";
//     // set display lower to 0
//     displayLower.textContent = "0";
//     // reset displays to empty strings
//     display = "";
//     displayTop = "";
// }

// // on clear button press
//     // run clear function
// clearBtn.addEventListener("click", function() {
//     clearFunc();
// });

// // set display-upper and display-lower on page load
// clearFunc();

