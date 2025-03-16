import type { NextRequest, NextResponse } from "next/server";
import { withRefreshToken } from "./lib/auth/middleware";
import { APP_ROUTES } from "./constants/routes";

function middleware(req: NextRequest, res: NextResponse) {
	const { pathname } = req.nextUrl;

	if (pathname === APP_ROUTES.Auth.Register) {
	}

	return res;
}

export default withRefreshToken(middleware);

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
