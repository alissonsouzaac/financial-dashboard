import authStore from "./AuthStore";

describe('AuthStore', () => {
  it('should initialize isAuthenticated as true', () => {
    expect(authStore.isAuthenticated).toBe(false);
  });

  it('should set isAuthenticated to true on login', () => {
    authStore.login();
    expect(authStore.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to false on logout', () => {
    authStore.logout();
    expect(authStore.isAuthenticated).toBe(false);
  });
});
