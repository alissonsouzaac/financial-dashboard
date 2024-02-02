// components/LoginForm.tsx
import React, { useState } from 'react';
import { Button, Form, Input, Label, LoginContainer, Title } from './styles';
import { LoginFormProps } from './types';
import AlertComponent from '../AlertComponent/AlertComponent';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Mock usuário e senha
    const mockUser = {
      email: 'alisson@example.com',
      password: '123senha',
    };

    // Verificar se as credenciais correspondem ao usuário mockado
    if (email === mockUser.email && password === mockUser.password) {
      // Login bem-sucedido, chame a função onSubmit
      onSubmit(email, password);
      setError(null); // Limpar qualquer mensagem de erro existente
      console.log('login')
      //router.push('/');
    } else {
      // Login falhou, exibir mensagem de erro
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
