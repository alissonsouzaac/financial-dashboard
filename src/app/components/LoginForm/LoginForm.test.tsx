import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render the login form', () => {
    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    // Verificando se os elementos estão presentes no formulário
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('should call onSubmit with email and password when the form is submitted', () => {
    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    // Preenchendo o formulário
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password123' } });

    // Submetendo o formulário
    fireEvent.submit(screen.getByRole('button', { name: 'Login' }));

    // Verificando se a função onSubmit foi chamada com os valores corretos
    expect(mockSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
