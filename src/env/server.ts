import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
	server: {
		SERVER_API_BASE_URL: z.string().min(1).url(),
		FASTIFY_API_KEY: z.string().min(1),
	},

	runtimeEnv: {
		SERVER_API_BASE_URL: process.env.SERVER_API_BASE_URL,
		FASTIFY_API_KEY: process.env.FASTIFY_API_KEY,
	},
});
