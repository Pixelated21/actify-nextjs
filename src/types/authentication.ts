export type LoginResponse = {
	tokens: {
		accessToken: string;
		refreshToken: string;
		expires: string;
	};
};

export type RegisterResponse = {
	tokens: {
		accessToken: string;
		refreshToken: string;
		expires: string;
	};
};
