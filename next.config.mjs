/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    /**
     * Modern formats first — a 2.2 MB PNG reference image is served as a
     * few-hundred-KB AVIF/WebP at the size actually rendered. Falls back to
     * the original format automatically for older clients.
     */
    formats: ["image/avif", "image/webp"],

    // Breakpoints for full-width imagery (hero, lightbox)
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    // Breakpoints for grid tiles — the reference galleries live here
    imageSizes: [256, 320, 384, 480, 640],

    // Reference imagery is browsed, not archived; 60s is ample for a static build
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
