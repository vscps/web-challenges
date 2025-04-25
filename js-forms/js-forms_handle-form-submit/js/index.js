console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", function getFormContent(event) {
  console.log(event);
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const age = Number(data["age"]);
  const badness = Number(data["badness"]);
  const ageBadness = age + badness;
  console.log(ageBadness);
  //event.target.reset();
  event.target.elements.firstName.focus();
});
