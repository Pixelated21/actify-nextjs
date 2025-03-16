import type { NextRequest } from "next/server";

export function createRouteMatcher(patterns: string[]) {
	// Convert each pattern to a RegExp object
	const regexPatterns = patterns.map((pattern) => {
		return new RegExp(`^${pattern.replace(/\(.*\)/, ".*")}$`);
	});

	console.log(regexPatterns);

	// Return a function that tests if a path matches any of the patterns
	return (req: NextRequest) => {
		const pathName = req.nextUrl.pathname;
		console.log(pathName);
		return regexPatterns.some((pattern) => pattern.test(pathName));
	};
}
