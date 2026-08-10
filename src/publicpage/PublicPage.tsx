import Bold from "./Bold";
import { demoPageBold, demoPageCard, demoPageLight, demoPageMinimal,} from "../demo/demoPage";
import BrandThemeProvider from "./context/BrandThemeContext";
import Minimal from "./Minimal";
import Card from "./Card";
import type { Page } from "../model/Page";
import { useContext } from "react";
import { PageContext } from "../context/PageContext";

export default function PublicPage() {
  //const { slug } = useParams({ from: "page/$slug" });
  const context = useContext(PageContext);

  if (!context) {
    return null;
  }

  const page = context.page;

  //console.log("Slug is:", slug);
  console.log("Public page:", page);

  return (
    <BrandThemeProvider color={page.branding.brandColor}>
      {renderPage(page)}
    </BrandThemeProvider>
  );
}

function renderPage(page: Page) {
  switch (page.branding.selectedStyle) {
    case "card":
      return <Card page={page} />;

    case "minimal":
      return <Minimal page={page} />;

    case "bold":
    default:
      return <Bold page={page} />;
  }
}