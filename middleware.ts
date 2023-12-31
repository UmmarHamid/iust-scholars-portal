import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fetchUserDetails } from './utils/utils';

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userDetails = await fetchUserDetails(session?.user.email || '');

  const redirectUrl = req.nextUrl.clone();

  // Check auth condition
  if (session?.user.email) {
    // User is authenticated

    // Check user role
    if (
      userDetails.role === 'scholar' &&
      req.nextUrl.pathname.startsWith('/protected/scholars')
    ) {
      return res;
    }
    if (
      userDetails.role === 'supervisor' &&
      req.nextUrl.pathname.startsWith('/protected/supervisor')
    ) {
      return res;
    }
    if (
      userDetails.role === 'office-staff' &&
      req.nextUrl.pathname.startsWith('/protected/office')
    ) {
      return res;
    }
    if (
      userDetails.role === 'drc-staff' &&
      req.nextUrl.pathname.startsWith('/protected/drc')
    ) {
      return res;
    }
    if (
      userDetails.role === 'srac-staff' &&
      req.nextUrl.pathname.startsWith('/protected/srac')
    ) {
      return res;
    }

    // If the user's role doesn't match the allowed routes, redirect to home page.
    redirectUrl.pathname = '/';
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Auth condition not met, redirect to home page.
  redirectUrl.pathname = '/';
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: '/protected/:path*',
};
