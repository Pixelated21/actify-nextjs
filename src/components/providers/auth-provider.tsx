"use client";

import { type CurrentUser, currentUser } from "@/lib/auth/current-user";
import { deleteSession } from "@/lib/auth/session";
import { useRouter } from "next/navigation";
import {
	createContext,
	useContext,
	type ReactNode,
	useState,
	useEffect,
	useCallback,
	startTransition,
} from "react";

interface AuthContextType {
	session: NonNullable<CurrentUser>["user"] | null;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const REFRESH_INTERVAL = 300000; // 5 minutes

export function AuthProvider({ children }: { children: ReactNode }) {
	const router = useRouter();
	const [session, setSession] = useState<
		NonNullable<CurrentUser>["user"] | null
	>(null);
	const [isLoading, setIsLoading] = useState(true);

	const redirectToLogin = useCallback(() => {
		window.history.replaceState(null, "", "/auth/login");
		router.replace("/auth/login");
	}, [router]);

	const checkSession = async () => {
		try {
			const session = await currentUser();
			if (!session) {
				console.log("culprit");
				await deleteSession();
				// Batch these updates together
				startTransition(() => {
					setSession(null);
					setIsLoading(false);
					redirectToLogin();
				});
			} else {
				startTransition(() => {
					setSession(session.user);
					setIsLoading(false);
				});
			}
		} catch (error) {
			console.error("Failed to fetch session:", error);
			startTransition(() => {
				setSession(null);
				setIsLoading(false);
			});
		}
	};

	// Initial session check
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		checkSession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Periodic session check
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(checkSession, REFRESH_INTERVAL);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Handle redirects
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!isLoading && !session) {
			redirectToLogin();
		}
	}, [isLoading, session, router, redirectToLogin]);

	return (
		<AuthContext.Provider value={{ session, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
