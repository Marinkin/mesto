export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    setEventListener() {
        this._popupElement.addEventListener("click", (evt) => {
            if (
                evt.target.classList.contains("popup") ||
                evt.target.classList.contains("popup__closed-icon")
            ) {
                this.close();
            }
        });
    }
    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
}
export default Popup;