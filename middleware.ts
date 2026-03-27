// file: middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Cek environment variable, apakah mode maintenance aktif?
  // Menggunakan perbandingan string karena nilai env selalu string
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  // Dapatkan URL saat ini yang diakses pengunjung
  const { pathname } = request.nextUrl;

  // Jika mode maintenance AKTIF, dan pengunjung BUKAN sedang berada di halaman /maintenance
  if (isMaintenanceMode && pathname !== "/maintenance") {
    // Arahkan pengunjung ke halaman /maintenance
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.redirect(url);
  }

  // Jika mode maintenance NONAKTIF, tapi pengunjung mencoba mengakses /maintenance secara manual
  if (!isMaintenanceMode && pathname === "/maintenance") {
    // Kembalikan mereka ke halaman utama (Home)
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Tentukan rute mana saja yang akan dicegat oleh middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
