import type { Page } from "../../model/Page";
import PublicPagePreview from "../../publicpage/PublicPagePreview";

type SkeletonizedPageProps = {
    page: Page;
    className?: string;
};

export default function SkeletonizedPage({ page,className = "", }: Readonly<SkeletonizedPageProps>) {
    return (
         <div className={`skeletonized-page ${className}`}>
            <div className="skeletonized-page__content">
                <PublicPagePreview page={page} />
            </div>
        </div>
    );
}

