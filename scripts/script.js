const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__closed-icon');
const modal = document.querySelector('.popup');
const form = modal.querySelector('.form');

const inputName = document.querySelector('.form__input_type_name');
const inputJob = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function togglePopup() {
    modal.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', function () {
    togglePopup();
    if (modal.classList.contains('popup_opened')) {
        inputName.value = profileName.textContent;
        inputJob.value = profileProfession.textContent;
    }
});
closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileProfession.textContent = inputJob.value;
    togglePopup();
}

form.addEventListener('submit', formSubmitHandler);