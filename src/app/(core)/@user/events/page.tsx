import RequestPreview from "@/components/request-preview";
import { getEvents } from "@/queries/event";

export default async function EventsPage() {
	const events = (await getEvents()) || [];

	return (
		<div>
			<RequestPreview data={events} title="Events" />
		</div>
	);
}
