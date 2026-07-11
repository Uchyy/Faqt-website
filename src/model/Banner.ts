export type Banner = {
  enabled: boolean;
  message: string;
  type: "info" | "warning" | "success";
  showUntil: Date | null;
};