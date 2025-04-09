console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numberA = Number(event.target.elements["numberA"].value);
  const numberB = Number(event.target.elements["numberB"].value);
  const operator = event.target.elements["operator"].value;
  console.log(numberA);
  console.log(numberB);
  console.log(operator);
  let result = 0;

  if (operator == "addition") {
    result = add(numberA, numberB);
    console.log(result);
    return result;
  } else if (operator == "subtraction") {
    result = subtract(numberA, numberB);
    console.log(result);
    return result;
  } else if (operator == "multiplication") {
    result = multiply(numberA, numberB);
    console.log(result);
    return result;
  } else if (operator == "division") {
    result = divide(numberA, numberB);
    console.log(result);
    return result;
  }

  console.log(result);
  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
