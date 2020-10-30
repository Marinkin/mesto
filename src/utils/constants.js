export const profileModal = document.querySelector(".popup_profile");

export const placeModalSelector = ".popup_place";
export const profileModalSelector = ".popup_profile";

export const form = profileModal.querySelector(".form");

export const openProfileEditButton = document.querySelector(".profile__edit-button");
export const openProfileAddButton = document.querySelector(".profile__add-button");

export const profileName = ".profile__name";
export const profileProfession = ".profile__profession";

export const inputName = form.querySelector(".form__input_type_name");
export const inputJob = form.querySelector(".form__input_type_job");

export const formPlace = document.querySelector('.form_place');
export const formProfile = document.querySelector('.form_profile');

export  const cardElementSelector = '.element';


export const settings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

export const initialCards = [
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