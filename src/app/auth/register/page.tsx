import { LoginCard } from "@/app/auth/_components/login-card";
import { AuthContainer } from "@/app/auth/_components/auth-container";
import { createTitle } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: createTitle("Register"),
};

export default async function RegisterPage() {
	return (
		<AuthContainer>
			<LoginCard />
		</AuthContainer>
	);
}
