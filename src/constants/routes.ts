export const APP_ROUTES = {
	Root: "/",

	Dashboard: {
		Index: "/dashboard",
	},

	Admin: {
		Users: {
			Index: "/users",
			Create: "/users/create",
		},
	},
	Volunteer: {
		Dashboard: {
			Index: "/dashboard",
		},
	},
	Organizer: {
		Dashboard: {
			Index: "/dashboard",
		},
	},

	Auth: {
		Index: "/auth",
		Login: "/auth/login",
		Register: "/auth/register",
		Logout: "/auth/logout",
		ForgotPassword: "/auth/forgot-password",
	},
};

export const SERVER_ROUTES = {
	Authentication: {
		Login: "/auth/login",
		Register: "/auth/register",
		Logout: "/auth/logout",
	},
	Events: {
		Index: "/events",
	},
};
