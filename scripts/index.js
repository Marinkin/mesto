import FormValidator from './FormValidator.js';
import Card from './Card.js';

const profileModal = document.querySelector(".popup_profile");
const placeModal = document.querySelector(".popup_place");
const windowModal = document.querySelector(".popup_window");

const form = profileModal.querySelector(".form");
const placeForm = placeModal.querySelector(".form");

const openProfileEditButton = document.querySelector(".profile__edit-button");
const openProfileAddButton = document.querySelector(".profile__add-button");

const closeProfileModalButton = profileModal.querySelector(
    ".popup__closed-icon"
);
const closePlaceModalButton = placeModal.querySelector(".popup__closed-icon");
const windowCloseModalButton = windowModal.querySelector(".popup__closed-icon");

const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

const inputName = form.querySelector(".form__input_type_name");
const inputJob = form.querySelector(".form__input_type_job");
const placeName = placeForm.querySelector(".form__input_type_name_mesto");
const placeLink = placeForm.querySelector(".form__input_type_link");

const formPlace = document.querySelector('.form_place');
const formProfile = document.querySelector('.form_profile');

const settings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

new FormValidator(settings, formPlace).enableValidation();
new FormValidator(settings, formProfile).enableValidation();

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

function escapePopupHandler(evt) {
    const modal = document.querySelector(".popup_opened");
    if (isModalOpened(modal)) {
        if (evt.key === "Escape") {
            toggleModal(modal);
        }
    }
}

function isModalOpened(modal) {
    return modal.classList.contains("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputJob.value;
    toggleModal(profileModal);
}

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    prependCard(placeName.value, placeLink.value);
    toggleModal(placeModal);
}

function toggleProfileModal() {
    if (!profileModal.classList.contains("popup_opened")) {
        inputName.value = profileName.textContent;
        inputJob.value = profileProfession.textContent;
    }
    toggleModal(profileModal);
}

form.addEventListener("submit", formSubmitHandler);
placeForm.addEventListener("submit", placeFormSubmitHandler);

openProfileEditButton.addEventListener("click", () => {
    toggleProfileModal();
});

closeProfileModalButton.addEventListener("click", () => {
    toggleModal(profileModal);
});

openProfileAddButton.addEventListener("click", () => {
    toggleModal(placeModal);
});
closePlaceModalButton.addEventListener("click", () => {
    toggleModal(placeModal);
});

windowCloseModalButton.addEventListener("click", () => {
    toggleModal(windowModal);
});

const initialCards = [
    {
        name: "Архыз",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const figureTemplate = document
    .querySelector("#figure")
    .content.querySelector(".element__container");

const cardElement = document.querySelector(".element");

initialCards.forEach((data) => {
    prependCard(data.name, data.link)
});

function prependCard(name, link) {
    const card = new Card(name, link, figureTemplate);
    cardElement.prepend(card.createCardView());
}
