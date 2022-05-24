"use strict";
const inputs = document.querySelectorAll(".test__input-checkbox");
const radios = document.querySelectorAll(".test__input-radio");
const buttonSubmitTest = document.querySelector(".test__button-submit");
let isRadioChecked = false;
let isCheckboxChecked = false;

function toggleSubmitButton() {
  if (isRadioChecked && isCheckboxChecked) {
    buttonSubmitTest.classList.add("test__button-submit_enabled");
    buttonSubmitTest.removeAttribute("disabled");
  } else {
    buttonSubmitTest.classList.remove("test__button-submit_enabled");
    buttonSubmitTest.setAttribute("disabled", "disabled");
  }
}

inputs.forEach(inputItem => {
  inputItem.addEventListener("change", function () {
    isCheckboxChecked = this.checked;
    toggleSubmitButton();
  });
});

radios.forEach(radioItem => {
  radioItem.addEventListener("change", function () {
    isRadioChecked = this.checked;
    toggleSubmitButton();
  });
});

function handleTestFormSubmit(evt) {
  evt.preventDefault();
}

buttonSubmitTest.addEventListener("submit", handleTestFormSubmit);

