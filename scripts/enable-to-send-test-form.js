"use strict";
const inputs = document.querySelectorAll(".test__input-checkbox");
const radios = document.querySelectorAll(".test__input-radio");
const buttonSubmitTest = document.querySelector(".test__button-submit");
let radioCheckedStatus = false;
let checkboxCheckedStatus = false;

inputs.forEach(inputItem => {
  inputItem.addEventListener("change", function () {
    checkboxCheckedStatus = false;
    // buttonSubmitTest.setAttribute("disabled", "disabled");
    // buttonSubmitTest.classList.remove("test__button-submit_enable");
    if (this.checked) {
      checkboxCheckedStatus = true;
    }
    if (this.checked && radioCheckedStatus) {
      buttonSubmitTest.classList.add("test__button-submit_enable");
      buttonSubmitTest.removeAttribute("disabled");
    } else if (!radioCheckedStatus) {
      buttonSubmitTest.classList.remove("test__button-submit_enable");
      buttonSubmitTest.setAttribute("disabled", "disabled");
    }
  });
});

radios.forEach(radioItem => {
  radioItem.addEventListener("change", function () {
    radioCheckedStatus = false;
    buttonSubmitTest.setAttribute("disabled", "disabled");
    buttonSubmitTest.classList.remove("test__button-submit_enable");
    if (this.checked) {
      radioCheckedStatus = true;
    }
    if (this.checked && checkboxCheckedStatus) {
      buttonSubmitTest.classList.add("test__button-submit_enable");
      buttonSubmitTest.removeAttribute("disabled");
    }
  });
});

function handleTestFormSubmit(evt) {
  evt.preventDefault();
}

buttonSubmitTest.addEventListener("submit", handleTestFormSubmit);

