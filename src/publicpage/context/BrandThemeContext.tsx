import { createContext, useContext,useMemo, } from "react";

import { createBrandTheme } from "../utils/createBrandTheme";
import { BrandTheme } from "../../model/BrandTheme";

const BrandThemeContext = createContext<BrandTheme | null>(null);

type Props = {  color: string;  children: React.ReactNode;};

export default function BrandThemeProvider({color,children,}: Readonly<Props>) {
  const theme = useMemo( () => createBrandTheme(color), [color] );

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