// Card.tsx
import React from 'react';
import { CardContainer, Title, Value } from './styles';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ title, value, color = 'forestgreen' }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Value style={{color}}>${value}</Value>
    </CardContainer>
  );
};

export default Card;
