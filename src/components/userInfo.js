export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
        this._userInfo = {};
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            info: this._infoSelector.textContent,
        };
    }

    setUserInfo(userInfo) {
        this._userInfo = userInfo;
    }

    renderUserInfo() {
        this._nameSelector.textContent = this._userInfo.name_profile;
        this._infoSelector.textContent = this._userInfo.profession;
    }
}
