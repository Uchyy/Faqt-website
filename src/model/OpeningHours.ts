
/* -----------------------
   OPENING HOURS
----------------------- */

export type OpeningHoursSection = {
  enabled: boolean;
  schedule: OpeningHoursDay[];
  updatedAt: Date;
};

export type OpeningHoursDay = {
  day: | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  closed: boolean;
  periods: OpeningPeriod[];
};

export type OpeningPeriod = {
  open: string;
  close: string;
};