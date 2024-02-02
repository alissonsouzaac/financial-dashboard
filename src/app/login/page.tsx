'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import LoginForm from '../components/LoginForm/LoginForm';
import { LoginFormContainer } from './styles';

const Login = () => {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
    router.push('/');
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleLogin} />
    </LoginFormContainer>
  );
};

export default Login;
