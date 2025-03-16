import { AuthContainer } from "@/app/auth/_components/auth-container";
import { createTitle } from "@/lib/utils";
import type { Metadata } from "next";
import RegisterCard from "../_components/register-card";

export const metadata: Metadata = {
	title: createTitle("Register"),
};

export default async function RegisterPage() {
	return (
		<AuthContainer>
			<RegisterCard />
		</AuthContainer>
	);
}
