console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", function getFormContent(event) {
  console.log(event);
  event.preventDefault();
  const formContent = event.target.elements;
  console.log(formContent);
  event.target.reset();
  event.target.elements.firstName.focus();
});
