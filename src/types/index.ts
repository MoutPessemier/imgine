export const CATEGORIES = [
  "Info",
  "Tips",
  "Trails",
  "Community",
  "Status",
  "Appointments",
] as const;

export type Category = (typeof CATEGORIES)[number];
