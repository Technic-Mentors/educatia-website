/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep export mode for static site generation
  images: {
    unoptimized: true, // Disable Image Optimization for compatibility with export
  },
};

export default nextConfig;
