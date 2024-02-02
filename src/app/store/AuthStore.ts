import { observable, action, makeObservable } from 'mobx';

class AuthStore {
  isAuthenticated: boolean = false;

  constructor() {
    makeObservable(this, {
        isAuthenticated: observable,
        login: action,
        logout: action
    })
  }

  login = () => {
    this.isAuthenticated = true;
  };

  logout = () => {
    this.isAuthenticated = false;
  };
}

export default AuthStore;
