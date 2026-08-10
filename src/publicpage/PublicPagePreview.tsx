import { Page } from "../model/Page";
import BrandThemeProvider from "./context/BrandThemeContext";
import Bold from "./Bold";
import Card from "./Card";
import Minimal from "./Minimal";

type Props = {
    page: Page;
};

export default function PublicPagePreview({ page }: Readonly<Props>) {

    if (
        !page.branding.brandColor ||
        !page.business.shortDescription ||
        !page.business.name ||
        !page.business.tagline
    ) {
        return null;
    }

    const hero = (
        <>
            {page.branding.selectedStyle === "minimal" && (
                <Minimal page={page}/>
            )}

            {page.branding.selectedStyle === "bold" && (
                <Bold page={page}/>
            )}

            {page.branding.selectedStyle === "card" && (
                <Card page={page}/>
            )}
        </>
    );

    return (
        <BrandThemeProvider color={page.branding.brandColor} >
            {hero}
        </BrandThemeProvider>
    );
}