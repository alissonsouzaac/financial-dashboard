// components/Layout.tsx
'use client'
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/SideBar';
import { LayoutProps } from './types';

  const LayoutStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyle style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '40px', overflowX: 'auto' }}>
        {children}
    </main>
    </LayoutStyle>
  );
};

export default Layout;
