import { ReactNode } from "react";
import { Page } from "../../model/Page";

export type HeroProps = {
  shortDesc: string;
  logo: ReactNode;
  longDesc?: string;
  name: string;
  tagline: string;
};

export type PublicStyleProps = {
  page: Page
  skeleton?: boolean

}