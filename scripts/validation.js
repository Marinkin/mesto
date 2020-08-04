enableValidation ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
});

function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        const formInputs = Array.from(formElement.querySelectorAll(settings.inputSelector));

        formInputs.forEach((inputElement) => {
            inputElement.addEventListener('input', function (evt) {
                checkInputValidity(inputElement, settings);

                let button = formElement.querySelector('button');
                changeButtonState(button, formInputs, settings.inactiveButtonClass);
            })
        })
    });
}
function changeButtonState(button, formInputs, inactiveButtonClass) {
    if (isInputsValid(formInputs)) {
        button.disabled = false;
        button.classList.remove(inactiveButtonClass);
    } else {
        button.disabled = true;
        button.classList.add(inactiveButtonClass);
    }
}


function isInputsValid(formInputs) {
    let formValid = true;
    formInputs.forEach((inputElement) => {
        if (!isValidInput(inputElement)) {
            formValid =  false;
        }
    });

    return formValid;
}

function isValidInput(inputElement) {
    return inputElement.validity.valid;
}

function checkInputValidity (inputElement, settings) {
    const errorElement = inputElement.closest('form').querySelector('#' + inputElement.name + '-error');
    if (isValidInput(inputElement)) {
        hideError(inputElement, errorElement, settings);
    } else{
        showError(inputElement, errorElement, settings);
    }
}

function showError(inputElement, errorElement, settings) {
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent=inputElement.validationMessage;
    errorElement.classList.add(settings.errorClass);
}

function hideError(inputElement, errorElement, settings) {
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.textContent='';
    errorElement.classList.remove(settings.errorClass);
}
