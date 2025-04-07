const box = document.querySelector("[data-js=box]");

/*
We want to add functionality to the buttons on this page. When a button is clicked, the corresponding color should be applied to the box.
  1. Create a function `removeAllColors` that removes all color classes from the box.
  2. Create a function `addColor` that takes a class name as a parameter and adds that class to the box.
  3. Use the two functions in the event listeners for the buttons to apply the corresponding color to the box when a button is clicked.
*/

function removeAllColors(element) {
  /*Overwrite the existing classes with "box" only */
  element.className = "box";
}

function addColor(element, color) {
  element.classList.add(color);
}

function changeColor(event) {
  removeAllColors(box);
  /* Reference the onClick event on the button element itself from the HTML file. Derive the color from the data-js string. */
  const color = event.target.getAttribute("data-js").split("-")[1];
  addColor(box, color);
}

// Write your two functions below:
