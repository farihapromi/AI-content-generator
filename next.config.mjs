/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint from failing the build
  },
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
};

export default nextConfig;
