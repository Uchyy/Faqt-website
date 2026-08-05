import { Page } from "../model/Page";

type Props = {
    page: Page;
};


export default function PublicPagePreview({ page }: Readonly<Props>) {

    return (
        <div className="h-full w-full overflow-hidden" style={{background: page.branding.brandColor}}>

            {/* Cover */}
            {page.branding.coverImage ? (
                <img
                    alt=""
                    src={page.branding.coverImage}
                    className="h-24 w-full object-cover"
                />
            ) : (
                <div />
            )}


            <div className="p-4">

                {/* Logo */}
                {page.branding.logo && (
                    <img
                        alt=""
                        src={page.branding.logo}
                        className="h-12 w-12 rounded-full object-cover"
                    />
                )}


                <h2 className="mt-3 font-heading font-bold text-lg">
                    {page.business.name || "Your Business"}
                </h2>


                <p className="mt-1 text-xs text-muted-foreground">
                    {page.business.shortDescription ||
                        "Your business description will appear here"}
                </p>


                <div className="mt-4 space-y-2">

                    {page.faqts.slice(0,3).map((faqt)=>(
                        <div
                            key={faqt.id}
                            className="rounded-lg bg-accent/5 p-2"
                        >
                            <p className="text-xs font-bold">
                                {faqt.question}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}