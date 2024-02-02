'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import LoginForm from '../components/LoginForm/LoginForm';
import { LoginFormContainer } from './styles';
import authStore from '../store/AuthStore';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log('chegou para esse aqui')
    authStore.login();
    router.push('/');
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleLogin} />
    </LoginFormContainer>
  );
};

export default Login;
