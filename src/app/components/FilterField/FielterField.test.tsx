// FilterField.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterField from './FilterField';

describe('FilterField', () => {
  it('renders FilterField component', () => {
    render(<FilterField label="Test Label" value="" onChange={() => {}} />);
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    
    render(<FilterField label="Test Label" value="" onChange={mockOnChange} />);
    
    fireEvent.change(screen.getByLabelText('Test Label'), { target: { value: 'test value' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('test value');
  });
});
