interface EventPageProps {
	params: Promise<{ eventId: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
	const { eventId } = await params;

	return <div>Event {eventId}</div>;
}
