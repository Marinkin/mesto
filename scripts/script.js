const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__closed-icon');
const modal = document.querySelector('.popup');
const form = modal.querySelector('.form');

const InputName = document.querySelector ('.form__input_type_name');
const InputJob = document.querySelector ('.form__input_type_job');
const profileName = document.querySelector ('.profile__name');
const profileProfession = document.querySelector ('.profile__profession');

function togglePopup() {
    modal.classList.toggle('popup_opened');
}
openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = InputName.value;
    profileProfession.textContent = InputJob.value;
    togglePopup();
}
form.addEventListener('submit', formSubmitHandler);