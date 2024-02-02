import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  width: 80%; 
  margin: auto;
  text-align: center;
`;

export const FiltersContainer = styled.div`
  padding: 20px; 
  display:flex;
  gap: 5px;

  @media (max-width: 768px) {
    display: block; 
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 5px;
`;