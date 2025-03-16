import withPWA from "next-pwa";

module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});
