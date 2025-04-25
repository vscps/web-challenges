console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
for (const language in languages) {
  const option = document.createElement("option");
  option.textContent = languages[language];
  select.append(option);
}
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");

for (const entry in nav) {
  const linkList = nav[entry];
  const navLinks = [];

  for (const item in linkList) {
    navLinks.push(linkList[item]);
  }
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = navLinks[0];
  a.textContent = navLinks[1];
  li.append(a);
  ul.append(li);
}

main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--
