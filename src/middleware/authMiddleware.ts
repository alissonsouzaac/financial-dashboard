// middleware/authMiddleware.ts
import { AuthStoreInstance } from '@/app/store';
import { NextResponse, NextRequest } from 'next/server';

export function authMiddleware(request: NextRequest) {
  const isAuthenticated = AuthStoreInstance.isAuthenticated;

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  api: {
    bodyParser: false,
  },
};
