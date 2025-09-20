import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();

  // 프리뷰 환경에서 noindex 헤더 설정
  const isPreview =
    process.env.VERCEL_ENV === "preview" || 
    process.env.NODE_ENV !== "production" ||
    process.env.NEXT_PUBLIC_ROBOTS === "noindex";

  if (isPreview) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
