const input = document.getElementById("input-field");
const button = document.getElementById("submit");
const errorMessage = document.getElementById("error");

button.addEventListener("click", (e) => {
  e.preventDefault();

  ValidateEmail(input);
});

function ValidateEmail(inputText) {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    input.classList.contains(`border-lightRed`)
      ? input.classList.replace(`border-lightRed`, `border-green`)
      : input.classList.replace(`border-paleBlue`, `border-green`);
    setTimeout(() => {
      input.classList.replace(`border-green`, `border-paleBlue`);
      error.classList.add("hidden");
    }, 2000);
    input.value = "";
    error.classList.replace(`text-lightRed`, `text-green`);
    error.textContent = "Thank you for subscribing :)";
    error.classList.remove(`hidden`);
  } else {
    input.classList.replace(`border-paleBlue`, `border-lightRed`);
    error.classList.remove(`hidden`);
  }
}
