"use client";

import { useRouter } from "next/navigation";

import { signOutAction } from "@/actions/auth/signout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";

export function LogOutButtons() {
	const router = useRouter();
	const mounted = useMounted();

	const signOut = useAction(signOutAction);

	const handleSignOut = () => {
		signOut.execute();
	};

	return (
		<div className="flex w-full flex-col-reverse items-center gap-2 sm:flex-row">
			<Button
				variant="secondary"
				size="sm"
				className="w-full"
				onClick={() => router.back()}
			>
				Go back
				<span className="sr-only">Previous page</span>
			</Button>
			{mounted ? (
				<Button onClick={handleSignOut} size="sm" className="w-full">
					Log out
					<span className="sr-only">Log out</span>
				</Button>
			) : (
				<Skeleton
					className={cn(
						buttonVariants({ size: "sm" }),
						"w-full bg-muted text-muted-foreground",
					)}
				>
					Log out
				</Skeleton>
			)}
		</div>
	);
}
