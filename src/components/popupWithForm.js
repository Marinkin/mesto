import Popup from "./popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);

        this._popupForm = this._popupElement.querySelector(".form");
        this._button = this._popupElement.querySelector("button");
        this._buttonDefoultText = this._button.textContent;
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(
            (input) => (this._formValues[input.name] = input.value)
        );

        return this._formValues;
    }
    setEventListeners() {
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListener();
    }
    close() {
        this._popupForm.reset();
        super.close();
    }
}
export default PopupWithForm;
