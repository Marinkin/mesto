import './index.css';
import FormValidator from "../components/formValidator.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";
import {
    settings,
    formPlace,
    formProfile,
    initialCards,
    cardElementSelector,
    placeModalSelector,
    openProfileAddButton,
    openProfileEditButton,
    profileModalSelector,
    profileName,
    profileProfession,
    inputJob,
    inputName,
} from "../utils/constants.js";

new FormValidator(settings, formPlace).enableValidation();
const profileFormValidator =  new FormValidator(settings, formProfile);
profileFormValidator.enableValidation();

const userInfo = new UserInfo({
    nameSelector: profileName,
    infoSelector: profileProfession,
});
const popupWithForm = new PopupWithForm({
    popupSelector: profileModalSelector,
    handleFormSubmit: (items) => {
        userInfo.setUserInfo(items);
        userInfo.renderUserInfo();
        popupWithForm.close();
    },
});
popupWithForm.setEventListeners();

openProfileEditButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    inputJob.value = userData.info;
    inputName.value = userData.name;
    popupWithForm.open();
    preparePopup(profileModalSelector, false);
});

const placePopup = new PopupWithForm({
    popupSelector: placeModalSelector,
    handleFormSubmit: (item) => {
        const cardList = new Section(
            {
                items: [item],
                renderer: (item) => {
                    const card = new Card(item, "#figure", () => {
                        const imagePopup = new PopupWithImage(".popup_window");
                        imagePopup.setEventListener();
                        imagePopup.open({ link: item.link, name: item.name });
                    });
                    const cardElement = card.createCardView();
                    cardList.addItem(cardElement);
                },
            },
            cardElementSelector
        );

        cardList.generateElements();
        placePopup.close();
    },
});
placePopup.setEventListeners();

openProfileAddButton.addEventListener("click", () => {
    placePopup.open();
    preparePopup(placeModalSelector, true);
});

function preparePopup(modalSelector, buttonDisabled) {
    const form = document.querySelector(modalSelector).querySelector(settings.formSelector);
    const formFields = Array.from(form.querySelectorAll(settings.inputSelector));

    formFields.forEach((formField) => {
        const errorElement = formField.closest(modalSelector).querySelector("#" + formField.name + "-error");
        profileFormValidator.hideError(formField, errorElement);
    });

    const button = form.querySelector(settings.submitButtonSelector);

    if (buttonDisabled) {
        button.classList.add(settings.inactiveButtonClass);
    } else {
        button.classList.remove(settings.inactiveButtonClass);
    }
    button.disabled = buttonDisabled;
}

const cardList = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item, "#figure", () => {
                const imagePopup = new PopupWithImage(".popup_window");
                imagePopup.setEventListener();
                imagePopup.open({ link: item.link, name: item.name });
            });
            const cardElement = card.createCardView();
            cardList.addItem(cardElement);
        },
    },
    cardElementSelector
);

cardList.generateElements();
