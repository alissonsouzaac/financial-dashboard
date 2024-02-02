'use client'
import useIsAuthenticated from '../shared/hooks/useAuthenticated';
import { WelcomeContainer, WelcomeSubtitle, WelcomeTitle } from './styled';

export default function Home() {

  useIsAuthenticated();
  
  return (
    <WelcomeContainer>
      <WelcomeTitle>Bem-vindo ao Dashboard Financeiro</WelcomeTitle>
      <WelcomeSubtitle>
        Comece a gerenciar suas finanças de maneira eficiente e intuitiva.
      </WelcomeSubtitle>
    </WelcomeContainer>
  );
}
