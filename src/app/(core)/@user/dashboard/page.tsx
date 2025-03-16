import {
	Badge,
	BadgeCheck,
	Calendar,
	Clock,
	MapPin,
	QrCode,
	Trophy,
	UserCircle,
	Users,
	CheckCircle,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
	// Mock data for prototype
	const user = {
		name: "Sarah Johnson",
		points: 750,
		completedTasks: 12,
		level: 3,
	};

	// Updated data structure to show events with tasks
	const upcomingEvents = [
		{
			id: 1,
			title: "Community Park Cleanup",
			location: "Central Park",
			date: "Tomorrow, 9 AM - 1 PM",
			organizer: "Green Earth Initiative",
			urgency: "high",
			tasks: [
				{
					id: 101,
					title: "Trash Collection",
					assigned: true,
					completed: false,
				},
				{
					id: 102,
					title: "Recycling Sorting",
					assigned: true,
					completed: false,
				},
				{
					id: 103,
					title: "Equipment Distribution",
					assigned: false,
					completed: false,
				},
			],
		},
		{
			id: 2,
			title: "Food Bank Support Day",
			location: "Community Center",
			date: "Sat, 10 AM - 2 PM",
			organizer: "Local Food Bank",
			urgency: "medium",
			tasks: [
				{ id: 201, title: "Food Sorting", assigned: true, completed: false },
				{
					id: 202,
					title: "Package Assembly",
					assigned: true,
					completed: false,
				},
				{ id: 203, title: "Distribution", assigned: false, completed: false },
			],
		},
	];

	const recommendedEvents = [
		{
			id: 3,
			title: "Animal Shelter Weekend",
			location: "Paws Rescue",
			date: "Sun, 1 PM - 5 PM",
			organizer: "Paws Rescue Center",
			match: "98%",
			tasks: [
				{
					id: 301,
					title: "Dog Walking",
					description: "Take dogs for walks in the park",
				},
				{
					id: 302,
					title: "Cat Socialization",
					description: "Spend time with cats needing socialization",
				},
				{
					id: 303,
					title: "Kennel Cleaning",
					description: "Help clean the animal living spaces",
				},
			],
		},
		{
			id: 4,
			title: "Senior Home Visiting Day",
			location: "Golden Years Center",
			date: "Mon, 4 PM - 6 PM",
			organizer: "Elder Care Association",
			match: "85%",
			tasks: [
				{
					id: 401,
					title: "Companionship",
					description: "Spend time talking with seniors",
				},
				{
					id: 402,
					title: "Game Host",
					description: "Host board games and activities",
				},
				{
					id: 403,
					title: "Reading Assist",
					description: "Read to seniors with vision difficulties",
				},
			],
		},
	];

	const achievements = [
		{
			id: 1,
			title: "First-Time Volunteer",
			description: "Completed your first task",
			icon: "🌟",
		},
		{
			id: 2,
			title: "Environmental Hero",
			description: "Completed 5 eco-friendly tasks",
			icon: "🌱",
		},
	];

	return (
		<div className="bg-gray-50 min-h-screen overflow-x-hidden">
			{/* Mobile header with profile summary */}
			<header className="bg-white p-4 shadow-sm sticky top-0 z-10">
				<div className="flex items-center justify-between w-full max-w-7xl mx-auto">
					<div className="flex items-center gap-2 sm:gap-3">
						<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center">
							<UserCircle className="text-indigo-600" />
						</div>
						<div>
							<h2 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
								{user.name}
							</h2>
							<div className="flex items-center text-xs text-gray-500">
								<Trophy className="w-3 h-3 mr-1" /> Level {user.level}
							</div>
						</div>
					</div>
					<div className="bg-indigo-100 px-3 py-1 rounded-full flex items-center">
						<span className="text-indigo-600 font-semibold text-sm">
							{user.points} pts
						</span>
					</div>

					{/* Desktop Navigation - Hidden on mobile, visible on larger screens */}
					<nav className="hidden md:flex items-center gap-6 ml-auto mr-4">
						<Link href="/dashboard" className="text-indigo-600 font-medium">
							Dashboard
						</Link>
						<Link
							href="/events"
							className="text-gray-600 hover:text-indigo-600 transition-colors"
						>
							Explore Events
						</Link>
						<Link
							href="/achievements"
							className="text-gray-600 hover:text-indigo-600 transition-colors"
						>
							Achievements
						</Link>
						<Link
							href="/profile"
							className="text-gray-600 hover:text-indigo-600 transition-colors"
						>
							Profile
						</Link>
					</nav>
				</div>
			</header>

			<main className="p-3 sm:p-4 mx-auto max-w-full sm:max-w-lg md:max-w-4xl lg:max-w-7xl">
				{/* Quick Actions */}
				<div className="grid grid-cols-4 gap-1 sm:gap-2 my-3 sm:my-4">
					<Link
						href="/scanner"
						className="flex flex-col items-center justify-center bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center mb-1">
							<QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
						</div>
						<span className="text-xs text-gray-600">Scan QR</span>
					</Link>
					<Link
						href="/events"
						className="flex flex-col items-center justify-center bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
							<Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
						</div>
						<span className="text-xs text-gray-600">Find Events</span>
					</Link>
					<Link
						href="/achievements"
						className="flex flex-col items-center justify-center bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
							<BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
						</div>
						<span className="text-xs text-gray-600">Rewards</span>
					</Link>
					<Link
						href="/profile"
						className="flex flex-col items-center justify-center bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center mb-1">
							<UserCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
						</div>
						<span className="text-xs text-gray-600">Profile</span>
					</Link>
				</div>

				{/* Two-column layout for desktop */}
				<div className="md:flex md:gap-6">
					{/* Left column on desktop */}
					<div className="md:w-3/5">
						{/* Upcoming Events Section */}
						<div className="mb-6">
							<div className="flex items-center justify-between mb-3">
								<h2 className="text-lg font-semibold text-gray-900 md:text-xl">
									Your Upcoming Events
								</h2>
								<Link
									href="#viewall"
									className="text-sm text-indigo-600 hover:text-indigo-800"
								>
									View all
								</Link>
							</div>

							<div className="space-y-4">
								{upcomingEvents.map((event) => (
									<div
										key={event.id}
										className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
									>
										{/* Event header */}
										<div className="p-3 border-b border-gray-100">
											<div className="flex justify-between items-start">
												<div className="pr-2">
													<h3 className="font-medium text-gray-900 break-words">
														{event.title}
													</h3>
													<p className="text-xs text-gray-500 mt-1">
														Organized by {event.organizer}
													</p>
												</div>
												<span
													className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
														event.urgency === "high"
															? "bg-red-100 text-red-600"
															: event.urgency === "medium"
																? "bg-yellow-100 text-yellow-600"
																: "bg-green-100 text-green-600"
													}`}
												>
													{event.urgency === "high"
														? "Urgent"
														: event.urgency === "medium"
															? "Soon"
															: "Flexible"}
												</span>
											</div>
											<div className="mt-2 text-sm text-gray-500 flex flex-col gap-1">
												<div className="flex items-center">
													<MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
													<span className="truncate">{event.location}</span>
												</div>
												<div className="flex items-center">
													<Clock className="w-4 h-4 mr-1 flex-shrink-0" />
													<span>{event.date}</span>
												</div>
											</div>
										</div>

										{/* Tasks list */}
										<div className="px-3 py-2">
											<div className="flex items-center justify-between mb-2">
												<h4 className="text-sm font-medium text-gray-700">
													Your Assigned Tasks
												</h4>
												<span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
													{event.tasks.filter((t) => t.assigned).length} of{" "}
													{event.tasks.length}
												</span>
											</div>
											<div className="space-y-2">
												{event.tasks
													.filter((task) => task.assigned)
													.map((task) => (
														<div
															key={task.id}
															className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
														>
															<div className="flex items-center mr-2 overflow-hidden">
																<div
																	className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${task.completed ? "bg-green-100" : "bg-gray-200"}`}
																>
																	{task.completed ? (
																		<CheckCircle className="w-4 h-4 text-green-600" />
																	) : (
																		<div className="w-3 h-3 bg-white rounded-full" />
																	)}
																</div>
																<span className="text-sm truncate">
																	{task.title}
																</span>
															</div>
															<Link
																href={`/events/${event.id}/tasks/${task.id}/check-in`}
																className={`text-xs px-3 py-1 rounded-lg flex-shrink-0 ${
																	task.completed
																		? "bg-green-100 text-green-700"
																		: "bg-indigo-100 text-indigo-700"
																}`}
															>
																{task.completed ? "Completed" : "Check In"}
															</Link>
														</div>
													))}
											</div>
										</div>

										<div className="px-3 py-2 flex justify-between border-t border-gray-100">
											<span className="text-xs text-gray-500 flex items-center">
												<Users className="w-4 h-4 mr-1 flex-shrink-0" />
												<span className="truncate">
													42 volunteers attending
												</span>
											</span>
											<Link
												href={`/events/${event.id}`}
												className="text-xs text-indigo-600 flex items-center hover:text-indigo-800 ml-2 flex-shrink-0"
											>
												Event details
												<ChevronRight className="w-4 h-4 ml-1" />
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Recommended Events */}
						<div className="mb-6">
							<div className="flex items-center justify-between mb-3">
								<h2 className="text-lg font-semibold text-gray-900 md:text-xl">
									Recommended Events
								</h2>
								<Link
									href="#viewall"
									className="text-sm text-indigo-600 hover:text-indigo-800"
								>
									View all
								</Link>
							</div>

							<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
								{recommendedEvents.map((event) => (
									<div
										key={event.id}
										className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
									>
										<div className="p-3 border-b border-gray-100">
											<div className="flex justify-between items-start">
												<h3 className="font-medium text-gray-900 truncate pr-2">
													{event.title}
												</h3>
												<span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 flex-shrink-0">
													{event.match} match
												</span>
											</div>
											<p className="text-xs text-gray-500 mt-1 truncate">
												Organized by {event.organizer}
											</p>
											<div className="mt-2 text-sm text-gray-500 flex flex-col gap-1">
												<div className="flex items-center">
													<MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
													<span className="truncate">{event.location}</span>
												</div>
												<div className="flex items-center">
													<Clock className="w-4 h-4 mr-1 flex-shrink-0" />
													<span>{event.date}</span>
												</div>
											</div>
										</div>

										{/* Available tasks preview */}
										<div className="px-3 py-2">
											<h4 className="text-xs font-medium text-gray-500 mb-2">
												Available Tasks
											</h4>
											<div className="space-y-1">
												{event.tasks.slice(0, 2).map((task) => (
													<div
														key={task.id}
														className="text-sm text-gray-700 truncate"
													>
														• {task.title}
													</div>
												))}
												{event.tasks.length > 2 && (
													<div className="text-xs text-gray-500">
														+{event.tasks.length - 2} more tasks
													</div>
												)}
											</div>
										</div>

										<div className="p-3 border-t border-gray-100">
											<Link
												href={`/events/${event.id}`}
												className="w-full bg-white border border-indigo-600 text-indigo-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-indigo-50 transition-colors inline-block text-center"
											>
												View & Sign Up
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right column on desktop */}
					<div className="md:w-2/5">
						{/* Recent Achievements */}
						<div className="mb-6">
							<div className="flex items-center justify-between mb-3">
								<h2 className="text-lg font-semibold text-gray-900 md:text-xl">
									Recent Achievements
								</h2>
								<Link
									href="#achievements"
									className="text-sm text-indigo-600 hover:text-indigo-800"
								>
									All badges
								</Link>
							</div>

							<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-2 md:gap-3 md:overflow-x-visible">
								{achievements.map((achievement) => (
									<div
										key={achievement.id}
										className="bg-white p-3 rounded-lg shadow-sm min-w-[140px] sm:min-w-[160px] border border-indigo-100 hover:shadow-md transition-shadow md:min-w-0 flex-shrink-0"
									>
										<div className="flex flex-col items-center text-center">
											<div className="text-3xl mb-2">{achievement.icon}</div>
											<h3 className="font-medium text-gray-900 text-sm">
												{achievement.title}
											</h3>
											<p className="text-xs text-gray-500 mt-1">
												{achievement.description}
											</p>
										</div>
									</div>
								))}
								<div className="bg-gray-100 p-3 rounded-lg shadow-sm min-w-[140px] sm:min-w-[160px] border border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors md:min-w-0 flex-shrink-0">
									<Badge className="w-8 h-8 text-gray-400 mb-2" />
									<h3 className="font-medium text-gray-600 text-sm">
										Complete more tasks
									</h3>
									<p className="text-xs text-gray-500 mt-1">
										Unlock new badges
									</p>
								</div>
							</div>
						</div>

						{/* Impact summary */}
						<div className="bg-indigo-50 p-4 rounded-lg">
							<h2 className="font-semibold text-indigo-900 mb-2 md:text-lg">
								Your Impact
							</h2>
							<div className="grid grid-cols-3 gap-2 sm:gap-3">
								<div className="bg-white p-2 sm:p-3 rounded-lg text-center hover:shadow-md transition-shadow">
									<div className="text-xl sm:text-2xl font-bold text-indigo-600 md:text-3xl">
										{user.completedTasks}
									</div>
									<div className="text-xs text-gray-500 md:text-sm">
										Tasks Completed
									</div>
								</div>
								<div className="bg-white p-2 sm:p-3 rounded-lg text-center hover:shadow-md transition-shadow">
									<div className="text-xl sm:text-2xl font-bold text-indigo-600 md:text-3xl">
										24
									</div>
									<div className="text-xs text-gray-500 md:text-sm">
										Volunteer Hours
									</div>
								</div>
								<div className="bg-white p-2 sm:p-3 rounded-lg text-center hover:shadow-md transition-shadow">
									<div className="text-xl sm:text-2xl font-bold text-indigo-600 md:text-3xl">
										5
									</div>
									<div className="text-xs text-gray-500 md:text-sm">
										Organizations
									</div>
								</div>
							</div>
						</div>

						{/* Upcoming events preview - Desktop only */}
						<div className="hidden md:block mt-6 bg-white p-4 rounded-lg shadow-sm">
							<h2 className="font-semibold text-gray-900 mb-3 text-lg">
								Upcoming This Week
							</h2>
							<div className="space-y-3">
								<div className="flex border-l-4 border-indigo-500 pl-3">
									<div className="w-12 h-12 bg-indigo-50 rounded-lg flex flex-col items-center justify-center mr-3 flex-shrink-0">
										<div className="text-xs font-bold text-indigo-600">OCT</div>
										<div className="text-lg font-bold text-indigo-600">15</div>
									</div>
									<div className="min-w-0">
										<h3 className="font-medium text-gray-900 truncate">
											Beach Cleanup
										</h3>
										<p className="text-xs text-gray-500 truncate">
											Oceanside Beach, 8 AM - 12 PM
										</p>
										<div className="mt-1 flex items-center text-xs text-indigo-600">
											<span className="bg-indigo-100 rounded-full w-4 h-4 inline-flex items-center justify-center mr-1 flex-shrink-0">
												2
											</span>
											tasks assigned
										</div>
									</div>
								</div>
								<div className="flex border-l-4 border-gray-300 pl-3">
									<div className="w-12 h-12 bg-gray-50 rounded-lg flex flex-col items-center justify-center mr-3 flex-shrink-0">
										<div className="text-xs font-bold text-gray-600">OCT</div>
										<div className="text-lg font-bold text-gray-600">18</div>
									</div>
									<div className="min-w-0">
										<h3 className="font-medium text-gray-700 truncate">
											Shelter Meal Prep
										</h3>
										<p className="text-xs text-gray-500 truncate">
											Downtown Shelter, 5 PM - 7 PM
										</p>
										<p className="mt-1 text-xs text-gray-500">
											No tasks assigned yet
										</p>
									</div>
								</div>
							</div>
							<div className="mt-3 pt-3 border-t">
								<Link
									href="/calendar"
									className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
								>
									View full calendar <Calendar className="w-4 h-4 ml-1" />
								</Link>
							</div>
						</div>

						{/* Leaderboard - Desktop only */}
						<div className="hidden md:block mt-6 bg-white p-4 rounded-lg shadow-sm">
							<h2 className="font-semibold text-gray-900 mb-3 text-lg">
								Volunteer Leaderboard
							</h2>
							<div className="space-y-3">
								<div className="flex items-center justify-between pb-2 border-b">
									<div className="flex items-center overflow-hidden">
										<div className="bg-yellow-100 text-yellow-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
											1
										</div>
										<span className="font-medium truncate">Alex Chen</span>
									</div>
									<span className="text-indigo-600 font-semibold ml-2 flex-shrink-0">
										1,250 pts
									</span>
								</div>
								<div className="flex items-center justify-between pb-2 border-b">
									<div className="flex items-center overflow-hidden">
										<div className="bg-gray-100 text-gray-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
											2
										</div>
										<span className="font-medium truncate">Maria Garcia</span>
									</div>
									<span className="text-indigo-600 font-semibold ml-2 flex-shrink-0">
										980 pts
									</span>
								</div>
								<div className="flex items-center justify-between pb-2 border-b">
									<div className="flex items-center overflow-hidden">
										<div className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
											3
										</div>
										<span className="font-medium truncate">John Smith</span>
									</div>
									<span className="text-indigo-600 font-semibold ml-2 flex-shrink-0">
										870 pts
									</span>
								</div>
								<div className="flex items-center justify-between pt-1">
									<div className="flex items-center overflow-hidden">
										<div className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
											5
										</div>
										<span className="font-medium text-indigo-600 truncate">
											You
										</span>
									</div>
									<span className="text-indigo-600 font-semibold ml-2 flex-shrink-0">
										{user.points} pts
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Fixed bottom navigation - hidden on desktop */}
			<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-3 md:hidden">
				<div className="flex justify-around items-center">
					<Link
						href="/dashboard"
						className="flex flex-col items-center text-indigo-600"
					>
						<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
						<span className="text-xs mt-1">Home</span>
					</Link>
					<Link
						href="/events"
						className="flex flex-col items-center text-gray-500"
					>
						<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
						<span className="text-xs mt-1">Events</span>
					</Link>
					<Link
						href="/scanner"
						className="flex flex-col items-center text-gray-500"
					>
						<div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-full flex items-center justify-center -mt-4 sm:-mt-5">
							<QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
						</div>
						<span className="text-xs mt-1">Scan</span>
					</Link>
					<Link
						href="/rewards"
						className="flex flex-col items-center text-gray-500"
					>
						<Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
						<span className="text-xs mt-1">Rewards</span>
					</Link>
					<Link
						href="/profile"
						className="flex flex-col items-center text-gray-500"
					>
						<UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
						<span className="text-xs mt-1">Profile</span>
					</Link>
				</div>
			</nav>

			{/* Padding to prevent content from being hidden behind the fixed bottom nav on mobile */}
			<div className="h-16 md:hidden" />
		</div>
	);
}
