import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

export const actionClient = createSafeActionClient({
	defineMetadataSchema() {
		return z.object({
			actionName: z.string(),
		});
	},
});

export const authActionClient = actionClient.use(async ({ next }) => {
	// const session = await dedupedAuth();
	// if (!checkSession(session)) {
	//   return redirect(getLoginRedirect());
	// }
	// return next({ ctx: { session } });
	return next();
});
