"use server";

import { cache } from "react";
import { getSessionData } from "./session";

export const currentUser = cache(async () => {
	const session = await getSessionData();
	return session;
});

export type CurrentUser = Awaited<ReturnType<typeof currentUser>>;
