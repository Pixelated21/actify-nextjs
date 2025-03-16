import { AuthProvider } from "@/components/providers/auth-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ROLES, type Role } from "@/constants/role";
import { APP_ROUTES } from "@/constants/routes";
import { currentUser } from "@/lib/auth/current-user";
import { RedirectType, redirect } from "next/navigation";
import type { ReactNode } from "react";

interface MainLayoutProps {
	children: ReactNode;
	admin: ReactNode;
	user: ReactNode;
}

export default async function CoreLayout({ admin, user }: MainLayoutProps) {
	const session = await currentUser();

	if (!session) {
		redirect(APP_ROUTES.Auth.Login, RedirectType.replace);
	}

	const role = session?.user.role as Role;

	return (
		<AuthProvider>
			<SidebarProvider>{role === ROLES.ADMIN ? admin : user}</SidebarProvider>
		</AuthProvider>
	);
}
