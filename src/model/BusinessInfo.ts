import { IndustryId } from "./Industry";

export type BusinessSection = {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: AddressSection;

  established: string;
  industry: IndustryId;
  businessType: string;

  updatedAt: Date;
};

export type AddressSection = {
    line1?: string;
    line2?: string;
    region: string;
    country: string;
    postcode: string;

    updatedAt: Date;
};