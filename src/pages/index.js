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
new FormValidator(settings, formProfile).enableValidation();

const userInfo = new UserInfo({
    nameSelector: profileName,
    infoSelector: profileProfession,
});
const popupWithForm = new PopupWithForm({
    popupSelector: profileModalSelector,
    handleFormSubmit: (items) => {
        userInfo.setUserInfo(items);
        popupWithForm.close();
    },
});
popupWithForm.setEventListeners();

openProfileEditButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    inputJob.value = userData.info;
    inputName.value = userData.name;
    popupWithForm.open();
});

openProfileAddButton.addEventListener("click", () => {
    const popupWithForm = new PopupWithForm({
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
            popupWithForm.close();
        },
    });

    popupWithForm.setEventListeners();
    popupWithForm.open();
});

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
