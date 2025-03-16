"use server";

import { SERVER_ROUTES } from "@/constants/routes";
import { cache } from "react";
import serverApi from ".";
import type { Event } from "@/types/event";

export const getEvents = cache(async (): Promise<Event[] | null> => {
	try {
		const response = await serverApi.get(SERVER_ROUTES.Events.Index);
		const data = response.data;

		if (!Array.isArray(data)) {
			console.warn("Unexpected response format:", data);
			return [];
		}

		return data;
	} catch (error) {
		console.error("Error fetching events data:", error);
		return null;
	}
});

export const showEvent = cache(
	async ({
		eventId,
	}: {
		eventId: string;
	}): Promise<Event | null> => {
		try {
			const response = await serverApi.get(
				`${SERVER_ROUTES.Events.Index}/${eventId}`,
			);
			const data = response.data;

			if (!data) {
				console.warn("Unexpected response format:", data);
				return null;
			}
			return data;
		} catch (error) {
			console.error("Error fetching event data:", error);
			return null;
		}
	},
);
