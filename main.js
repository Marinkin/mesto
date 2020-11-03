(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._form=n}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._form.querySelectorAll(this._settings.inputSelector));t.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n);var r=e._form.querySelector(e._settings.submitButtonSelector);e._changeButtonState(r,t)}))}))}},{key:"_checkInputValidity",value:function(e){var t=e.closest(this._settings.formSelector).querySelector("#"+e.name+"-error");this._isValidInput(e)?this.hideError(e,t):this._showError(e,t)}},{key:"_changeButtonState",value:function(e,t){this._isInputsNotValid(t)?(e.disabled=!0,e.classList.add(this._settings.inactiveButtonClass)):(e.disabled=!1,e.classList.remove(this._settings.inactiveButtonClass))}},{key:"hideError",value:function(e,t){e.classList.remove(this._settings.inputErrorClass),t.textContent="",t.classList.remove(this._settings.errorClass)}},{key:"_showError",value:function(e,t){e.classList.add(this._settings.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._settings.errorClass)}},{key:"_isInputsNotValid",value:function(e){var t=this;return e.some((function(e){return!t._isValidInput(e)}))}},{key:"_isValidInput",value:function(e){return e.validity.valid}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._template=n,this._handleCardClick=r}var t,r;return t=e,(r=[{key:"createCardView",value:function(){return this._element=this._getTemplate(),this._elementTitle=this._element.querySelector(".element__title"),this._elementImage=this._element.querySelector(".element__image"),this._elementLikeButton=this._element.querySelector(".element__like"),this._elementTrash=this._element.querySelector(".element__trash"),this._setEventListeners(),this._elementTitle.textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element}},{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element__container").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeButton.addEventListener("click",(function(){e._handleLikeClick(e._elementLikeButton)})),this._elementTrash.addEventListener("click",(function(){e._handleTrashClick(e._elementTrash)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._elementImage)}))}},{key:"_handleLikeClick",value:function(){this._elementLikeButton.classList.toggle("element__like_active")}},{key:"_handleTrashClick",value:function(){this._elementTrash.closest(".element__container").remove()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"generateElements",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector("".concat(t)),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__closed-icon"))&&e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&s(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function s(){return l(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupElement.querySelector(".popup__title").textContent=n;var r=this._popupElement.querySelector(".popup__image");r.src=t,r.alt=n,f(_(s.prototype),"open",this).call(this)}}])&&a(t.prototype,n),s}(c);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,n))._popupForm=t._popupElement.querySelector(".form"),t._button=t._popupElement.querySelector("button"),t._buttonDefoultText=t._button.textContent,t._handleFormSubmit=r,t}return t=s,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupForm.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),v(S(s.prototype),"setEventListener",this).call(this)}},{key:"close",value:function(){this._popupForm.reset(),v(S(s.prototype),"close",this).call(this)}}])&&d(t.prototype,n),s}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._infoSelector=document.querySelector(r),this._userInfo={}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,info:this._infoSelector.textContent}}},{key:"setUserInfo",value:function(e){this._userInfo=e}},{key:"renderUserInfo",value:function(){this._nameSelector.textContent=this._userInfo.name_profile,this._infoSelector.textContent=this._userInfo.profession}}])&&E(t.prototype,n),e}(),C=document.querySelector(".popup_profile"),L=".popup_place",O=".popup_profile",q=C.querySelector(".form"),j=document.querySelector(".profile__edit-button"),I=document.querySelector(".profile__add-button"),P=q.querySelector(".form__input_type_name"),x=q.querySelector(".form__input_type_job"),T=document.querySelector(".form_place"),R=document.querySelector(".form_profile"),V={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"};new t(V,T).enableValidation();var B=new t(V,R);B.enableValidation();var D=new w({nameSelector:".profile__name",infoSelector:".profile__profession"}),F=new g({popupSelector:O,handleFormSubmit:function(e){D.setUserInfo(e),D.renderUserInfo(),F.close()}});F.setEventListeners(),j.addEventListener("click",(function(){var e=D.getUserInfo();x.value=e.info,P.value=e.name,F.open(),M(O,!1)}));var U=new h(".popup_window");U.setEventListener();var A=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){z(e)}},".element"),N=new g({popupSelector:L,handleFormSubmit:function(e){z(e),N.close()}});function z(e){var t=new r(e,"#figure",(function(){U.open({link:e.link,name:e.name})})).createCardView();A.addItem(t)}function M(e,t){var n=document.querySelector(e).querySelector(V.formSelector);Array.from(n.querySelectorAll(V.inputSelector)).forEach((function(t){var n=t.closest(e).querySelector("#"+t.name+"-error");B.hideError(t,n)}));var r=n.querySelector(V.submitButtonSelector);t?r.classList.add(V.inactiveButtonClass):r.classList.remove(V.inactiveButtonClass),r.disabled=t}N.setEventListeners(),I.addEventListener("click",(function(){N.open(),M(L,!0)})),A.generateElements()})();