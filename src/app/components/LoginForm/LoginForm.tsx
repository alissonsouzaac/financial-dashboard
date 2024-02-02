import React, { useState } from 'react';
import { Button, Form, Input, Label, LoginContainer, Title } from './styles';
import { LoginFormProps } from './types';
import AlertComponent from '../AlertComponent/AlertComponent';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const mockUser = {
      email: 'alisson@example.com',
      password: '123senha',
    };
 
    if (email === mockUser.email && password === mockUser.password) {
      
      onSubmit(email, password);
      setError(null);
    } else {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password:
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
      {error && <AlertComponent text={error}/>}
    </LoginContainer>
  );
};

export default LoginForm;
