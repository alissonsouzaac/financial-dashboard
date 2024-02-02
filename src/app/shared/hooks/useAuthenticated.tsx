import authStore from '@/app/store/AuthStore';
import { redirect } from 'next/navigation';
import react, { useEffect, useState } from 'react';

const useIsAuthenticated = () => {
  
  const [isAuthCheckComplete, setIsAuthCheckComplete] = useState(false);

  useEffect(() => {
    if (!authStore.isAuthenticated) {
      redirect('/login');
    } else {
      setIsAuthCheckComplete(true);
    }
  }, [authStore.isAuthenticated]);

  return { isAuthCheckComplete };
};

export default useIsAuthenticated;
