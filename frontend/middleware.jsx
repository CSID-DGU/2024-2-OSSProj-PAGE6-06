import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (!token) {
    const publicPaths = ["/sign/in", "/sign/up"];
    const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

    if (!isPublicPath) {
      return NextResponse.redirect(new URL("/sign/in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/main/:path*",
    "/club/:path*",
    "/record/:path*",
    "/library/:path*",
    "/routine/:path*",
    "/sign/:path*",
  ],
};
