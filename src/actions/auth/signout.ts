"use server";

import { cookieOptions, authCookies } from "@/constants/cookie";
import { APP_ROUTES } from "@/constants/routes";
import { deleteSession } from "@/lib/auth/session";
import { actionClient } from "@/lib/safe-action";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export const signOutAction = actionClient
	.metadata({ actionName: "sign-out" })
	.action(async () => {
		await deleteSession();
		redirect(APP_ROUTES.Auth.Login, RedirectType.replace);
	});

export const setSession = async (accessToken: string, refreshToken: string) => {
	const cookieStore = await cookies();
	cookieStore.set(authCookies.accessToken, accessToken, {
		...cookieOptions.accessToken,
	});

	cookieStore.set(authCookies.refreshToken, refreshToken, {
		...cookieOptions.refreshToken,
	});
};
