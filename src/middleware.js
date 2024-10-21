import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;
  // If the user is not authenticated and tries to access protected routes like / or /dashboard
  if (!token && (pathname === "/" || pathname.startsWith("/dashboard"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user is authenticated and tries to access the login page, redirect them to /dashboard
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Allow the request to continue if no redirect is needed
  return NextResponse.next();
}

// Apply the middleware to specific routes (/, /dashboard, and /login)
export const config = {
  matcher: ["/", "/dashboard", "/login"], // Middleware applies to these routes
};

// import { authConfig } from "@/authConfig";
// import NextAuth from "next-auth";

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
