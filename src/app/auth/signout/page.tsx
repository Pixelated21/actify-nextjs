import { LogOutButtons } from "@/app/auth/_components/logout-buttons";
import { AuthContainer } from "@/app/auth/_components/auth-container";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { APP_ROUTES } from "@/constants/routes";
import { currentUser } from "@/lib/auth/current-user";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Sign out",
	description: "Sign out of your account",
};

export default async function SignOutPage() {
	const session = await currentUser();

	if (!session) {
		redirect(APP_ROUTES.Auth.Login);
	}

	return (
		<AuthContainer maxWidth={"lg"}>
			<Card>
				<CardHeader>
					<CardTitle className="text-center">Sign out</CardTitle>
					<CardDescription className="text-center">
						Are you sure you want to sign out?
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<LogOutButtons />
				</CardFooter>
			</Card>
		</AuthContainer>
	);
}
