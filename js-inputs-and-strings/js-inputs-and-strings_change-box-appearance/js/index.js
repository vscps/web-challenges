console.clear();

const box = document.querySelector("[data-js=box]");
const color = document.querySelector("[data-js=input-color]");
const radius = document.querySelector("[data-js=input-radius]");
const rotation = document.querySelector("[data-js=input-rotation");

console.log("color");

color.addEventListener("change", (event) => {
  const hue = event.target.value;
  console.log(hue);
  box.style.backgroundColor = `hsl(${hue} 70% 60%)`;
});

radius.addEventListener("change", (event) => {
  const radius = event.target.value;
  console.log(radius);
  box.style.borderRadius = `${radius}%`;
});

rotation.addEventListener("change", (event) => {
  const rotation = event.target.value;
  console.log(rotation);
  box.style.transform = `rotate(${rotation}deg)`;
});
