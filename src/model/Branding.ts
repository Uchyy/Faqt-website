import { BrandColor } from "./BrandColour";
import { Styles } from "./Styles";

export type MediaAsset = {
    url: string;
    name?: string;
};

export type BrandingSection = {
  selectedStyle: Styles;

  logo: MediaAsset;
  coverImage: MediaAsset;

  brandColor: BrandColor;
  gallery: MediaAsset[];

  updatedAt: Date;
};

