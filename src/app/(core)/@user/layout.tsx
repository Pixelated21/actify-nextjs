import { SidebarInset } from "@/components/ui/sidebar";
import { APP_ROUTES } from "@/constants/routes";
import { currentUser } from "@/lib/auth/current-user";
import { redirect } from "next/navigation";

export default async function AdminLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await currentUser();

	if (!session) redirect(APP_ROUTES.Auth.Login);

	return (
		<div className="flex flex-1 flex-row ">
			<SidebarInset>{children}</SidebarInset>
		</div>
	);
}
