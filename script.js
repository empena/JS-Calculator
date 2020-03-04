const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});


// function userInput() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }
// }

// A user should be able to enter 2 numbers and click on an operator.

// The result should be output on the screen.

// You should prevent dividing by zero.

// Style the calculator. (HINT: the grid system in your choice of CSS framework works really well for a calculator layout/or css grids)
// Things to think about
// a basic calculator equation has a leftHand value an operator value and a rightHand value
// for example: 4 + 4
// When writing your code make sure you have at least 1 leftHand value before letting the user click on an operator button
// Before you can click on the equal button make sure you have a leftHand value an operator value and a rightHand value or else you don't have a valid equation!
// Use innerText to get and set the text of the calculator "Screen" to show the user the equation and the result of the equation