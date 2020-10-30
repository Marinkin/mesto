export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._info.textContent,
        };
    }
    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name_profile;
        this._info.textContent = userInfo.profession;
    }
}
