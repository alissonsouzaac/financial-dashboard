// FilterField.tsx
'use client'
import React from 'react';
import { TextField } from '@mui/material';
import { FilterFieldProps } from './types';

const FilterField: React.FC<FilterFieldProps> = ({ label, value, onChange, type = 'text' }) => {
  return (
    <TextField
      id={`outlined-basic-${label.toLowerCase()}`}
      label={label}
      variant="outlined"
      size="small"
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default FilterField;
