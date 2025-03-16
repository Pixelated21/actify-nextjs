"use server";
import "server-only";

import { authCookies } from "@/constants/cookie";
import { serverEnv } from "@/env/server";
import axios from "axios";
import { cookies } from "next/headers";

const serverApi = axios.create({
	baseURL: serverEnv.SERVER_API_BASE_URL,
	withCredentials: true,
});

serverApi.defaults.headers.common["x-application-context"] = "customer";

// Add type for tokens
type Tokens = {
	accessToken: string;
	refreshToken: string;
};

export const refreshToken = async (): Promise<Tokens | null> => {
	const cookieStore = await cookies();
	try {
		const refreshToken = cookieStore.get(authCookies.refreshToken)?.value;
		if (!refreshToken) {
			throw new Error("No refresh token found");
		}

		const response = await serverApi.post<{ tokens: Tokens }>(
			"/auth/refresh",
			{},
			{
				headers: { Authorization: `Bearer ${refreshToken}` },
				withCredentials: true,
			},
		);

		return response.data.tokens;
	} catch (error) {
		console.error("Failed to refresh token:", error);
		return null;
	}
};

serverApi.interceptors.request.use(async (config) => {
	const cookieStore = await cookies();
	const token = cookieStore.get("access-token")?.value;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

serverApi.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// Check if we're already retrying to prevent infinite loops
		if (originalRequest._retry) {
			throw error;
		}

		if (error.response?.status === 401) {
			originalRequest._retry = true;
			const tokens = await refreshToken();

			if (!tokens) {
				throw new Error("Failed to refresh token");
			}

			originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`;
			return serverApi(originalRequest);
		}
		return Promise.reject(error);
	},
);

export default serverApi;
