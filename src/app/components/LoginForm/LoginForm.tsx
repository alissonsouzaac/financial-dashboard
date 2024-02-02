// components/LoginForm.tsx
import React from 'react';
import { Button, Form, Input, Label, LoginContainer, Title } from './styles';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        onSubmit(email, password);
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
    </LoginContainer>
  );
};

export default LoginForm;
