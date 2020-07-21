const profileModal = document.querySelector('.popup_profile');
const placeModal = document.querySelector('.popup_place');
const windowModal = document.querySelector('.popup_window');

const form = profileModal.querySelector('.form');
const placeForm = placeModal.querySelector('.form');

const openProfileEditButton = document.querySelector('.profile__edit-button');
const openProfileAddButton = document.querySelector('.profile__add-button');

const closeProfileModalButton = profileModal.querySelector('.popup__closed-icon');
const closePlaceModalButton = placeModal.querySelector('.popup__closed-icon');
const windowCloseModalButton = windowModal.querySelector('.popup__closed-icon');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


const inputName = form.querySelector('.form__input_type_name');
const inputJob = form.querySelector('.form__input_type_job');
const placeName = placeForm.querySelector('.form__input_type_name_mesto');
const placeLink = placeForm.querySelector('.form__input_type_link');

const windowModalTitle = windowModal.querySelector('.popup__title');
const windowModalImage = windowModal.querySelector('.popup__image');


function toggleModal(modal) {
    if (!modal.classList.contains('popup')) {
        inputName.value = profileName.textContent;
        inputJob.value = profileProfession.textContent;
    }
    modal.classList.toggle('popup_opened');
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputJob.value;
    toggleModal(profileModal);
}

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({name: placeName.value, link: placeLink.value});
    toggleModal(placeModal);
}

form.addEventListener('submit', formSubmitHandler);
placeForm.addEventListener('submit', placeFormSubmitHandler);

openProfileEditButton.addEventListener('click', () => {
    toggleModal(profileModal);
    if (profileModal.classList.contains('popup_opened')) {
        inputName.value = profileName.textContent;
        inputJob.value = profileProfession.textContent;
    }
});

closeProfileModalButton.addEventListener('click',() => {
    toggleModal(profileModal)
});

openProfileAddButton.addEventListener('click', () =>{
    toggleModal(placeModal)
});
closePlaceModalButton.addEventListener('click',() => {
    toggleModal(placeModal)
});

windowCloseModalButton.addEventListener('click',() => {
    toggleModal(windowModal)
});

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const figureTemplate = document.querySelector('#figure').content.querySelector('.element__container');
const cardElement = document.querySelector('.element');


function handleLikeClick(elementLikeButton) {
    elementLikeButton.classList.toggle('element__like_active');
}
function handleTrashClick(elementTrash) {
    elementTrash.closest('.element__container').remove();
}

function handleImageClick(elementImage){

    windowModalImage.src = elementImage.src;
    windowModalTitle.textContent = elementImage.closest('figure').querySelector('.element__title').textContent;

    toggleModal(windowModal);

}


function createCard(data){
    const element = figureTemplate.cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    const elementSrc = element.querySelector('.element__image');
    const elementTitle = element.querySelector('.element__title');
    const elementLikeButton = element.querySelector('.element__like');
    const elementTrash = element.querySelector('.element__trash');

    elementLikeButton.addEventListener('click', () => {
        handleLikeClick(elementLikeButton)
    });

    elementTrash.addEventListener('click', () =>{
        handleTrashClick(elementTrash)
    });
    elementImage.addEventListener('click', () =>{
        handleImageClick(elementImage)
    });

    elementTitle.textContent = data.name;
    elementImage.src = data.link;
    elementSrc.textContent = data.name;

    return element;

}
function renderCard(data) {
    cardElement.prepend(createCard(data));
}

initialCards.forEach((data) => {

    renderCard(data)
});