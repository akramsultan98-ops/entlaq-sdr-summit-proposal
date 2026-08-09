/**
 * Minimal stroke icon set. One consistent weight, one consistent grid.
 * Deliberately plain — icons label a card, they do not decorate it.
 */

const P: Record<string, string> = {
  music: "M8 15V4l8-1.5V13",
  cup: "M4 6h9v5a4.5 4.5 0 0 1-9 0V6Zm9 1h2.5a2 2 0 0 1 0 4H13M3 17h11",
  badge: "M10 3l6 3v4c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V6l6-3Z",
  wall: "M3 4h14v12H3V4Zm0 4h14M9 8v8",
  poll: "M5 15V9m5 6V5m5 10v-4",
  pen: "M4 16l1-3.5L13 4l3 3-8.5 8.5L4 16Z",
  grid: "M3 3h6v6H3V3Zm8 0h6v6h-6V3ZM3 11h6v6H3v-6Zm8 0h6v6h-6v-6Z",
  camera: "M3 6h3l1.5-2h5L14 6h3v10H3V6Zm7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  link: "M8.5 11.5a3 3 0 0 0 4.2 0l2.3-2.3a3 3 0 0 0-4.2-4.2l-1 1M11.5 8.5a3 3 0 0 0-4.2 0L5 10.8a3 3 0 0 0 4.2 4.2l1-1",
  disc: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  guitar: "M13 3l4 4M12.5 6.5l1 1M8 11a3.5 3.5 0 1 0 1.5 6.6C12 16.5 11 14 13 12l-2.5-2.5C8.5 11.5 6 10.5 4.9 13",
  sun: "M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-11v1m0 12v1M3 10h1m12 0h1M5 5l.7.7m8.6 8.6l.7.7m0-10l-.7.7M5.7 14.3L5 15",
  leaf: "M4 16c0-6 4-10 12-11 0 8-4 12-9 12H4Zm2-2c2-3 4-4 7-5",
  flag: "M5 17V3m0 1h9l-2 3 2 3H5",
  star: "M10 3l2.2 4.5 5 .7-3.6 3.5.9 4.9L10 14.3 5.5 16.6l.9-4.9L2.8 8.2l5-.7L10 3Z",
  bed: "M3 16v-6m0 3h14v3m0-3V9a2 2 0 0 0-2-2H9v6M3 10V6m3 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  car: "M3 13v3h2v-3m10 0v3h2v-3M3 13l1.5-5h11L17 13H3Zm2.5 0h9",
  shield: "M10 3l6 2.5V10c0 3.5-2.4 6.2-6 7-3.6-.8-6-3.5-6-7V5.5L10 3Z",
};

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const d = P[name] ?? P.star;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-[18px] w-[18px] ${className}`}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
