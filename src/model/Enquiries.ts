/* -----------------------
   ENQUIRIES
----------------------- */

export type Enquiry = {
  id: string;

  name: string;
  email?: string;
  phone?: string;

  title: string;
  description: string;

  status: "new" | "in-progress" | "resolved";

  createdAt: Date;
  updatedAt: Date;
};