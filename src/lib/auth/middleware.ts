import { serverEnv } from "@/env/server";
import { jwtDecode } from "jwt-decode";
import {
  RequestCookies,
  ResponseCookies,
} from "next/dist/compiled/@edge-runtime/cookies";
import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from "next/server";
import { authCookies, cookieOptions } from "../../constants/cookie";
import { refreshTokens } from "./session";

const DEFAULT_OFFSET_SECONDS = 15;

export type NextMiddleware = (
  req: NextRequest,
  res: NextResponse,
  event: NextFetchEvent,
) => NextResponse;

export type TokenPair = {
  accessToken: string;
  refreshToken: string;
};

export type GetMiddlewareOptions = {
  shouldRefresh: (req: NextRequest) => boolean;
  fetchTokenPair: (req: NextRequest) => Promise<TokenPair>;
  onSuccess: (res: NextResponse, tokenPair: TokenPair) => void;
  onError?: (
    req: NextRequest,
    res: NextResponse,
    error: unknown,
  ) => NextResponse | undefined;
};

export const applyCookiesOnNextResponse = (
  req: NextRequest,
  res: NextResponse,
) => {
  const outgoingCookies = new ResponseCookies(res.headers);
  const incomingHeaders = new Headers(req.headers);
  const incomingCookies = new RequestCookies(incomingHeaders);

  for (const cookie of outgoingCookies.getAll()) {
    incomingCookies.set(cookie);
  }

  const nextResponseHeaders = NextResponse.next({
    request: { headers: incomingHeaders },
  }).headers;

  nextResponseHeaders.forEach((value, key) => {
    if (
      key === "x-middleware-override-headers" ||
      key.startsWith("x-middleware-request-")
    ) {
      res.headers.set(key, value);
    }
  });
};

const getMiddleware =
  ({
    shouldRefresh,
    fetchTokenPair,
    onSuccess,
    onError,
  }: GetMiddlewareOptions) =>
  (middlewareFn?: NextMiddleware) =>
  async (req: NextRequest, event: NextFetchEvent) => {
    const res = NextResponse.next();

    if (shouldRefresh(req)) {
      try {
        const tokenPair = await fetchTokenPair(req);
        onSuccess(res, tokenPair);
      } catch (error) {
        const next = onError?.(req, res, error);
        if (next) return next;
      }
    }

    applyCookiesOnNextResponse(req, res);

    return middlewareFn?.(req, res, event) ?? res;
  };

export const withRefreshToken = getMiddleware({
  shouldRefresh: (req) => {
    const accessToken = req.cookies.get(authCookies.accessToken)?.value;
    if (!accessToken) return true;
    try {
      const exp = jwtDecode(accessToken).exp;
      if (!exp) return false;
      const isExpired = exp - DEFAULT_OFFSET_SECONDS <= Date.now() / 1000;
      return isExpired;
    } catch {
      return true;
    }
  },
  fetchTokenPair: async (req) => {
    const refreshToken = req.cookies.get(authCookies.refreshToken)?.value;

    if (!refreshToken) {
      throw new Error("Refresh token not found");
    }

    const headers = new Headers();
    headers.set("x-api-key", serverEnv.FASTIFY_API_KEY);
    headers.set("Authorization", `Bearer ${refreshToken}`);

    const tokens = await refreshTokens();

    if (!tokens) {
      throw new Error("Failed to refresh token");
    }

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  },
  onSuccess: (res, tokenPair) => {
    res.cookies.set({
      name: authCookies.accessToken,
      value: tokenPair.accessToken,
      ...cookieOptions.accessToken,
    });

    res.cookies.set({
      name: authCookies.refreshToken,
      value: tokenPair.refreshToken,
      ...cookieOptions.refreshToken,
    });
  },

  onError: (_req, _res, error) => {
    console.log("error", error);
    if (error instanceof Response) {
      console.log("deleting cookies");
      _res.cookies.delete(authCookies.accessToken);
      _res.cookies.delete(authCookies.refreshToken);
      return NextResponse.redirect(new URL("/auth/login", _req.url));
    }
  },
});
