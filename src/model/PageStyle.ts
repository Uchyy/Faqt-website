import { createElement, type ReactNode } from "react";
import PublicPagePreview from "../publicpage/PublicPagePreview";
import { demoPageBold, demoPageCard, demoPageMinimal,} from "../demo/demoPage";
import Skeleton from "../components/ui/Skeleton";

export type PageStyleProps = {
    id: string;
    title: string;
    description: string;
    preview: ReactNode;
    skeleton: ReactNode;
};

export const pageStyles = [
    {
        id: "minimal",
        title: "Minimal",
        description: "Clean and simple with focus on your message.",
        preview: createElement(PublicPagePreview, { page: demoPageMinimal }),
        skeleton: createElement(Skeleton, { page: demoPageMinimal }),
    },

    {
        id: "bold",
        title: "Bold",
        description: "Large headings and a strong brand presence.",
        preview: createElement(PublicPagePreview, { page: demoPageBold }),
        skeleton: createElement(Skeleton, { page: demoPageBold}),
    },

    {
        id: "card",
        title: "Card",
        description: "Modern layout with a clean card design.",
        preview: createElement(PublicPagePreview, { page: demoPageCard }),
        skeleton: createElement(Skeleton, { page: demoPageCard}),
    },
] as const satisfies readonly PageStyleProps[];

export type PageStyle = (typeof pageStyles)[number];
export type PageStyleId = PageStyle["id"];