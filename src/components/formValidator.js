class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
    }

    enableValidation() {
        this._form.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });

        const formInputs = Array.from(
            this._form.querySelectorAll(this._settings.inputSelector)
        );

        formInputs.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);

                const button = this._form.querySelector(this._settings.submitButtonSelector);
                this._changeButtonState(button, formInputs);
            });
        });
    }

    _checkInputValidity(inputElement) {
        const errorElement = inputElement.closest(this._settings.formSelector).querySelector("#" + inputElement.name + "-error");
        if (this._isValidInput(inputElement)) {
            this.hideError(inputElement, errorElement);
        } else {
            this._showError(inputElement, errorElement);
        }
    }

    _changeButtonState(button, formInputs) {
        if (this._isInputsNotValid(formInputs)) {
            button.disabled = true;
            button.classList.add(this._settings.inactiveButtonClass);
        } else {
            button.disabled = false;
            button.classList.remove(this._settings.inactiveButtonClass);
        }
    }

    hideError(inputElement, errorElement) {
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._settings.errorClass);
    }

    _showError(inputElement, errorElement) {
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _isInputsNotValid(formInputs) {
        return formInputs.some((inputElement) => {
            return !this._isValidInput(inputElement);
        });
    }

    _isValidInput(inputElement) {
        return inputElement.validity.valid;
    }
}

export default FormValidator;
