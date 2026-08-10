import { Styles } from "./Styles";

export type BrandingSection = {
  selectedStyle: Styles;

  logo: string;
  coverImage: string;

  brandColor: string;
  gallery: string[];

  updatedAt: Date;
};