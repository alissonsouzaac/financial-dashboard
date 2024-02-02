import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export const WelcomeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;