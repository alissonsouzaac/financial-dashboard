// Dashboard.test.tsx
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from './page';

describe('Dashboard', () => {
  it('renders Dashboard page', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
    expect(screen.getByLabelText('End Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Account')).toBeInTheDocument();
    expect(screen.getByLabelText('Industry')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();

  });


});
