console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = 1;
let diameter2 = 2;

function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 * 0.5;
  const radius2 = diameter2 * 0.5;
  const pizzaArea1 = Math.PI * Math.pow(radius1, 2);
  const pizzaArea2 = Math.PI * Math.pow(radius2, 2);
  const pizzaGain = Math.round(((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100);
  outputSection.innerHTML = `<h2>Gain in Pizza: ${pizzaGain} %</h2>`;
}

function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100;
  let newWidth = (pizzaElement.style.width = displaySize + "px");
}

function updateOutputColor(size1, size2) {
  let bgColor = outputSection.style.background - color;
  if (pizzaGain > 0) {
    bgColor = "var(--green)";
  } else if (pizzaGain > 0) {
    bgColor = "var(--red)";
  }
}

pizzaInput1.addEventListener("input", function () {
  diameter1 = pizzaInput1.value;
  const result = calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor();
  return result;
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value;
  const result = calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  return result;
});

// Task 1: Define the function `calculatePizzaGain` here

// Task 2: Define the function `updatePizzaDisplay` here

// Task 3: Define the function `updateOutputColor` here
