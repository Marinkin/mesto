const windowModal = document.querySelector(".popup_window");

function toggleModal(modal) {
    modal.classList.toggle("popup_opened");
    loadEventListeners(modal);
}

function loadEventListeners(modal) {
    const popupOverlay = modal.closest(".popup");

    if (isModalOpened(modal)) {
        popupOverlay.addEventListener("click", function (evt) {
            overlayClickHandler(evt, modal, popupOverlay);
        });
        document.addEventListener("keydown", escapePopupHandler);
    } else {
        popupOverlay.removeEventListener("click", overlayClickHandler);
        document.removeEventListener("keydown", escapePopupHandler);
    }
}

function overlayClickHandler(evt, modal, popupOverlay) {
    if (isModalOpened(modal)) {
        if (evt.target === popupOverlay) {
            toggleModal(modal);
        }
    }
}

function isModalOpened(modal) {
    return modal.classList.contains("popup_opened");
}

function escapePopupHandler(evt) {
    const modal = document.querySelector(".popup_opened");
    if (isModalOpened(modal)) {
        if (evt.key === "Escape") {
            toggleModal(modal);
        }
    }
}

class Card {
    constructor(name, link, template) {
        this._name = name;
        this._link = link;
        this._template = template;
    }

     createCardView() {
        const element = this._template.cloneNode(true);
        const elementImage = element.querySelector(".element__image");
        const elementTitle = element.querySelector(".element__title");
        const elementLikeButton = element.querySelector(".element__like");
        const elementTrash = element.querySelector(".element__trash");

        elementLikeButton.addEventListener("click", () => {
            this._handleLikeClick(elementLikeButton);
        });

        elementTrash.addEventListener("click", () => {
            this._handleTrashClick(elementTrash);
        });
        elementImage.addEventListener("click", () => {
            this._handleImageClick(elementImage);
        });

        elementTitle.textContent = this._name;
        elementImage.src = this._link;
        elementImage.alt = this._name;

        return element;
    }

    _handleImageClick(elementImage) {

        const windowModalTitle = windowModal.querySelector(".popup__title");
        const windowModalImage = windowModal.querySelector(".popup__image");

        windowModalImage.src = elementImage.src;
        windowModalTitle.textContent = elementImage
            .closest("figure")
            .querySelector(".element__title").textContent;

        toggleModal(windowModal);
    }

    _handleLikeClick(elementLikeButton) {
        elementLikeButton.classList.toggle("element__like_active");
    }

    _handleTrashClick(elementTrash) {
        elementTrash.closest(".element__container").remove();
    }
}

export default Card;