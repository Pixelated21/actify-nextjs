import { clientEnv } from "@/env/client";
import packageInfo from "../../package.json";

export const AppInfo = {
	APP_NAME: clientEnv.NEXT_PUBLIC_APP_NAME ?? "",
	APP_DESCRIPTION: "Actify",
	PRODUCTION: process.env.NODE_ENV === "production",
	VERSION: packageInfo.version,
	COPYRIGHT: "© 2025 Actify",
} as const;
