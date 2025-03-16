import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center h-screen justify-center gap-4">
			<Button asChild>
				<Link href={APP_ROUTES.Auth.Login}>Login</Link>
			</Button>
			<Button asChild>
				<Link href={APP_ROUTES.Auth.Register}>Register</Link>
			</Button>
		</div>
	);
}
