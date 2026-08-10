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

  /**
   * `.jfif` has no registered MIME mapping, so a static host serves it as
   * `application/octet-stream`. Next's own optimizer sniffs magic bytes and
   * copes; Vercel's edge optimizer validates the upstream Content-Type and
   * rejects anything that is not `image/*` — which is why .jfif rendered
   * locally but broke in production. The shipped files are .jpg now; this
   * keeps any future .jfif drop safe rather than silently broken.
   */
  async headers() {
    return [
      {
        source: "/:path*.jfif",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
    ];
  },
};

export default nextConfig;
