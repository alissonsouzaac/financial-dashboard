import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card title="Test Title" value={1000} color="blue" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('$1000')).toBeInTheDocument();
  });

  it('applies the correct color style', () => {
    render(<Card title="Test Title" value={1000} color="red" />);
    
    const valueElement = screen.getByText('$1000');
    expect(valueElement).toHaveStyle('color: red');
  });
});
