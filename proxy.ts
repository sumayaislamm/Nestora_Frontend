import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/properties","/login", "/register" ];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;
  //   console.log(decodedToken)
  let userRole = null;

  if (decodedToken) {
    userRole = decodedToken.role;
  }
// User Login but trying to access login page 
if(accessToken && AUTH_ROUTES.includes(pathname)){
    if(userRole === "TENANT"){
        return NextResponse.redirect(new URL('/tenant-dashboard', request.url))
    }else if(userRole === "LANDLORD"){
        return NextResponse.redirect(new URL('/landlord-dashboard', request.url))
    }else if(userRole === "ADMIN"){
        return NextResponse.redirect(new URL('/admin-dashboard', request.url))
    }else{
        return NextResponse.redirect(new URL("/", request.url));
    }
}
const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));

const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));

if(!accessToken && !isPublicRoute && !isAuthRoute)  {
return NextResponse.redirect(new URL("/login", request.url));
}

return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
