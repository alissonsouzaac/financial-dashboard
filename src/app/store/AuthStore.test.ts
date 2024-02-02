import AuthStore from './AuthStore';

describe('AuthStore', () => {
  it('should initialize isAuthenticated as true', () => {
    const authStore = new AuthStore();
    expect(authStore.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to true on login', () => {
    const authStore = new AuthStore();
    authStore.login();
    expect(authStore.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to false on logout', () => {
    const authStore = new AuthStore();
    authStore.logout();
    expect(authStore.isAuthenticated).toBe(false);
  });
});
