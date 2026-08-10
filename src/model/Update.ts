export type UpdateType =
  | "business_info"
  | "opening_hours"
  | "service"
  | "faq"
  | "contact"
  | "social"
  | "location"
  | "document"
  | "gallery"
  | "announcement";

export type Updates = {
  id: string;
  pageId: string;
  type: UpdateType;
  title: string;
  summary?: string;
  createdAt: string;
};