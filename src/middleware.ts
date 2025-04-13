import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

export function middleware(request: NextRequest) {
  const user = auth.currentUser;

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!login).*)'],
};
