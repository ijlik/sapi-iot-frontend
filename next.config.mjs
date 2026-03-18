/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/login', destination: '/login.html' },
      { source: '/dashboard', destination: '/dashboard.html' },
      { source: '/command', destination: '/command.html' },
      { source: '/voice', destination: '/voice.html' },
    ];
  },
};

export default nextConfig;
