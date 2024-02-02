import styled from "styled-components";
import { Button } from '@mui/material';

export const SidebarContainer = styled.aside`
  width: 200px;
  height: 100vh;
  background-color: #20232a;
  color: #61dafb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarButton = styled(Button)`
  && {
    margin-top: 10px; /* Adicionei espaçamento entre os botões */
    width: 100%; /* Garante que os botões ocupem a largura total do Sidebar */
  } 
`;

export const LogoutButton = styled(Button)`
  && {
    margin-top: auto; /* Faz com que o botão fique no final do Sidebar */
    width: 100%;
  }
`;
