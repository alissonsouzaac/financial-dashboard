import AuthStore from '@/app/store/AuthStore';
import { redirect } from 'next/navigation';
import react, { useEffect, useState } from 'react';

const useIsAuthenticated = () => {
  const authStoreInstance = new AuthStore();
  const [isAuthCheckComplete, setIsAuthCheckComplete] = useState(false);

  useEffect(() => {
    if (!authStoreInstance.isAuthenticated) {
      redirect('/login');
    } else {
      setIsAuthCheckComplete(true);
    }
  }, [authStoreInstance.isAuthenticated]);

  return { isAuthCheckComplete };
};

export default useIsAuthenticated;
