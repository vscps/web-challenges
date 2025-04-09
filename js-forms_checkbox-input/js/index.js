console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", (event) => {
  if (tosCheckbox.checked) {
    hideTosError();
    return;
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Box angeklickt: " + tosCheckbox.checked);
  if (tosCheckbox.checked) {
    alert("Form submitted");
    successMessage.removeAttribute("hidden");
    return;
  } else {
    return;
  }
  // --v-- write your code here --v--

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
