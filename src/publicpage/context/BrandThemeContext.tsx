import { createContext, useContext,useMemo, } from "react";

import { createBrandTheme } from "../utils/createBrandTheme";
import { BrandTheme } from "../../model/BrandTheme";
import { BrandColor } from "../../model/BrandColour";

const BrandThemeContext = createContext<BrandTheme | null>(null);

type Props = {  color: BrandColor; children: React.ReactNode;};

export default function BrandThemeProvider({color,children,}: Readonly<Props>) {
  const brandColor = color.alpha != null  ? hexToRgba(color.hex, color.alpha)  : color.hex;
  const theme = useMemo( () => createBrandTheme(brandColor), [color] );

  return (
    <BrandThemeContext.Provider value={theme}>
      {children}
    </BrandThemeContext.Provider>
  );
}

export function useBrandTheme() {
  const context = useContext(BrandThemeContext);

  if (!context) {
    throw new Error(
      "useBrandTheme must be used inside BrandThemeProvider"
    );
  }

  return context;
}