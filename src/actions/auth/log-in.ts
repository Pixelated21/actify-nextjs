"use server";

import { authCookies, cookieOptions } from "@/constants/cookie";
import { SERVER_ROUTES } from "@/constants/routes";
import { actionClient } from "@/lib/safe-action";
import serverApi from "@/queries";
import { passThroughLogInSchema } from "@/schema/auth/log-in-schema";
import type { LoginResponse } from "@/types/authentication";
import { cookies } from "next/headers";
import httpStatus from "http-status";

export const logInAction = actionClient
	.metadata({ actionName: "login" })
	.schema(passThroughLogInSchema)
	.action(async ({ parsedInput }) => {
		try {
			const cookieStore = await cookies();

			const response = await serverApi.post<LoginResponse>(
				`${SERVER_ROUTES.Authentication.Login}`,
				parsedInput,
			);

			if (!response.data || response.status !== httpStatus.OK) {
				throw new Error("Failed to log in");
			}

			const data = response.data;

			console.log(data);

			cookieStore.set(authCookies.accessToken, data.tokens.accessToken, {
				...cookieOptions.accessToken,
			});

			cookieStore.set(authCookies.refreshToken, data.tokens.refreshToken, {
				...cookieOptions.refreshToken,
			});

			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Failed to log in");
		}
	});
