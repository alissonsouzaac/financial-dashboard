// // hocs/withAuth.tsx
// import { useAuth } from '@/app/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const withAuth = (WrappedComponent: React.FC) => {
//   const AuthenticatedRoute: React.FC = (props) => {
//     const authStore = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//       if (!authStore.isAuthenticated) {
//         router.push('/login');
//       }
//     }, [authStore.isAuthenticated, router]);

//     return authStore.isAuthenticated ? <WrappedComponent {...props} /> : null;
//   };

//   return AuthenticatedRoute;
// };

// export default withAuth;
