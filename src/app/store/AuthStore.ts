import { observable, action, makeObservable } from 'mobx';

class useAuthStore {
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

const authStore = new useAuthStore();
export default authStore;
