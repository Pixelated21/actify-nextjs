import type * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { Logo } from "@/components/logo";
import { APP_ROUTES } from "@/constants/routes";

const containerVariants = cva("mx-auto w-full min-w-[360px] space-y-6", {
	variants: {
		maxWidth: {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
		},
	},
	defaultVariants: {
		maxWidth: "sm",
	},
});

export type AuthContainerProps = React.PropsWithChildren &
	VariantProps<typeof containerVariants>;

export function AuthContainer({
	maxWidth,
	children,
}: AuthContainerProps): React.JSX.Element {
	return (
		<div className={containerVariants({ maxWidth })}>
			<Link href={APP_ROUTES.Root}>
				<Logo className="justify-center" />
			</Link>
			<div className="mt-10">{children}</div>
		</div>
	);	
}
