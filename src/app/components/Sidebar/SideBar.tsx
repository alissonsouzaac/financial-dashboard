'use client'
import { useRouter } from 'next/navigation'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import { LogoutButton, SidebarButton, SidebarContainer } from './styles';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log('logout')
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <SidebarContainer className='SideBar'>
      <SidebarButton
        size="large"
        variant="contained"
        color="primary"
        onClick={() => router.push('/')}
      >
       <HomeIcon fontSize='small' /> Home 
      </SidebarButton>
      <SidebarButton
        size="large"
        variant="contained"
        color="primary"
        onClick={() => router.push('/dashboard')}
      >
        <DashboardIcon fontSize='small' />Dashboard
      </SidebarButton>
      <LogoutButton
        size="large"
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Logout ⚡
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
