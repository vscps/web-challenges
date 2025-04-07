console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour <= 12) {
    const greeting = "Good Morning!";
    return greeting;
  } else if (currentHour >= 13 && currentHour <= 18) {
    const greeting = "Good Afternoon!";
    return greeting;
  } else if (currentHour >= 19 && currentHour <= 22) {
    const greeting = "Good Afternoon!";
    return greeting;
  } else {
    const greeting = "Good Night!";
    return greeting;
  }
}

function getDayColor() {
  const currentDay = new Date().getDay();
  console.log(currentDay);
  if (currentDay == 1) {
    const color = "darkgray";
    return color;
  } else if (currentDay >= 2 && currentDay > 6) {
    const color = "lightblue";
    return color;
  } else {
    const color = "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
