"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
import NextTopLoader from "nextjs-toploader";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NuqsAdapter>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<Toaster richColors />
				<TooltipProvider>
					<NextTopLoader color="#39FF14" />
					{children}
				</TooltipProvider>
			</ThemeProvider>
		</NuqsAdapter>
	);
}
