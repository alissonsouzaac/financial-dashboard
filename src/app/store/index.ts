// stores/index.ts
import AuthStore from './AuthStore';

const AuthStoreInstance = new AuthStore();

const stores = {
  AuthStore: AuthStoreInstance,
};

export default stores;
export { AuthStoreInstance };
