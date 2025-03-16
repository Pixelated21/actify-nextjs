export const authCookies = {
  accessToken: "access-token",
  refreshToken: "refresh-token",
};

export const cookieOptions = {
  accessToken: {
    maxAge: 60, // 1 minute
    path: "/",
    httpOnly: true,
    secure: true,

  },
  refreshToken: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
    httpOnly: true,
    secure: true,
  },
};