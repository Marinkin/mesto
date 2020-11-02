export default class Card {
    constructor(item, template, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

     createCardView() {
        this._element = this._getTemplate();
        this._elementTitle = this._element.querySelector(".element__title");
        this._elementImage = this._element.querySelector(".element__image");
        this._elementLikeButton = this._element.querySelector(".element__like");
        this._elementTrash = this._element.querySelector(".element__trash");
        this._setEventListeners();
        this._elementTitle.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;

        return this._element;
    }

    _getTemplate(){
        return document.querySelector(this._template)
            .content
            .querySelector(".element__container")
            .cloneNode(true);
    }

    _setEventListeners(){
        this._elementLikeButton.addEventListener("click", () => {
            this._handleLikeClick(this._elementLikeButton);
        });

        this._elementTrash.addEventListener("click", () => {
            this._handleTrashClick(this._elementTrash);
        });
        this._elementImage.addEventListener("click", () => {
            this._handleCardClick(this._elementImage);
        });
    }

    _handleLikeClick() {
        this._elementLikeButton.classList.toggle("element__like_active");
    }

    _handleTrashClick() {
        this._elementTrash.closest(".element__container").remove();
    }
}