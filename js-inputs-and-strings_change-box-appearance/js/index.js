console.clear();

const box = document.querySelector("[data-js=box]");
const color = document.querySelector("[data-js=input-color]");
const radius = document.querySelector("[data-js=input-radius]");
const rotation = document.querySelector("[data-js=input-rotation");

console.log("color");

color.addEventListener("change", (event) => {
  const hue = event.target.value;
  box.style["background-color"] = "rgb(128, 0 , 0";
  // "hsl(" + hue + "deg 100% 100%);";
  const test = box.style["background-color"];
  console.log(event.target.value);
  console.log(test);
});
