console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Daniel1987.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
const moduloTest = number % 2;
if (moduloTest == 0) {
  console.log("The number " + number + " is even.");
} else {
  console.log("The number " + number + " is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("You have to pay 2€ per hotdog.");
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  console.log("You have to pay 1.50€ per hotdog.");
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 100000) {
  console.log("You have to pay 1€ per hotdog.");
} else if (numberOfHotdogs > 100000) {
  console.log("You have to pay 0.10€ per hotdog.");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Sven" ? "Coach" : userName) + "!";

console.log(greeting);
