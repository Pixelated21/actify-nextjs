"use server";
import "server-only";

import { serverEnv } from "@/env/server";
import * as jose from "jose";
import { cookies } from "next/headers";
import { authCookies, cookieOptions } from "../../constants/cookie";

export interface CurrentUserPayload {
  id: string;
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  middleNameInitial: string | null;
  parish: string;
  trn: string;
  identifier: string;
  phoneNumber: string;
  role: string;
  locationIdentifier: string;
  referralCode: string;
  exp: number;
  iat: number;
}

export async function getSessionData() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(authCookies.accessToken)?.value;

  if (!accessToken) return null;

  const decodedToken: CurrentUserPayload = jose.decodeJwt(accessToken);

  const isExpired = decodedToken.exp < Date.now() / 1000;

  return {
    isExpired: isExpired,
    user: decodedToken,
  };
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(authCookies.accessToken);
  cookieStore.delete(authCookies.refreshToken);
}

export const setSessionTokens = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieStore = await cookies();
  cookieStore.set(authCookies.accessToken, accessToken, {
    ...cookieOptions.accessToken,
  });

  cookieStore.set(authCookies.refreshToken, refreshToken, {
    ...cookieOptions.refreshToken,
  });
};

export async function retrieveTokenPair() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get(authCookies.accessToken)?.value;
  const refreshToken = cookieStore.get(authCookies.refreshToken)?.value;

  return { accessToken, refreshToken };
}

export async function refreshTokens() {
  const cookieStore = await cookies();

  try {
    const refreshToken = cookieStore.get(authCookies.refreshToken)?.value;

    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const response = await fetch(
      `${serverEnv.SERVER_API_BASE_URL}/auth/refresh`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${refreshToken}` },
        credentials: "include",
      },
    );

    const results = await response.json();

    return {
      accessToken: results.tokens.accessToken,
      refreshToken: results.tokens.refreshToken,
    };
  } catch (error) {
    console.error("Failed to refresh token", error);
    return null;
  }
}
