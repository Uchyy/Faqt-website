/* -----------------------
   SERVICES
----------------------- */

export type Service = {
  id: string;

  name: string;
  description: string;

  price?: string;

  createdAt: Date;
  updatedAt: Date;
};