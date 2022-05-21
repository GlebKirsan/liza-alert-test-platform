'use strict';
const inputs = document.querySelectorAll('.test__input-checkbox');
const radios = document.querySelectorAll('.test__input-radio');
const buttonSubmitTest = document.querySelector('.test__button-submit');
let radioCheckedStatus = false;

inputs.forEach((inputItem) => {
  inputItem.addEventListener('change', function () {
    if (this.checked) {
      buttonSubmitTest.classList.add('test__button-submit_enable');
      buttonSubmitTest.removeAttribute('disabled');
    } else if (!radioCheckedStatus) {
      buttonSubmitTest.classList.remove('test__button-submit_enable');
      buttonSubmitTest.setAttribute('disabled');
    }
  });
});

radios.forEach((radioItem) => {
  radioItem.addEventListener('change', function () {
    if (this.checked) {
      buttonSubmitTest.classList.add('test__button-submit_enable');
      buttonSubmitTest.removeAttribute('disabled');
      radioCheckedStatus = true;
    } else {
      buttonSubmitTest.classList.remove('test__button-submit_enable');
      buttonSubmitTest.setAttribute('disabled');
      radioCheckedStatus = false;
    }
  });
});

function handleTestFormSubmit(evt) {
  evt.preventDefault();
}

buttonSubmitTest.addEventListener('submit', handleTestFormSubmit);
