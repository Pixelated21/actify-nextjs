export default function HomeLayout({
	children,
}: { children: React.ReactNode }) {
	return <div className="flex flex-1 flex-row">{children}</div>;
}
