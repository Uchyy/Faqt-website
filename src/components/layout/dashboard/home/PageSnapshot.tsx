import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { timeAgo } from "../../../../utils/timeAgo";

type Props = {
    businessName: string;
    url: string;
    status: "Published" | "Draft";
    updatedAt: Date;
    snapshot?: React.ReactNode;
};

const PREVIEW_WIDTH = 1500;
const PREVIEW_HEIGHT = 900;

export default function PageSnapshot({ businessName, url, status, updatedAt, snapshot,}: Readonly<Props>) {

    const published = status === "Published";
    const slugIsEmpty = url.length === 0;
    const slug = url.length > 0 ? url : "No URL yet";

    const previewRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const preview = previewRef.current;
        if (!preview) return;

        const updateScale = () => {
            const availableWidth = preview.clientWidth * 0.7;
            const availableHeight = preview.clientHeight;

            if (!availableWidth || !availableHeight) return;

            const widthScale = availableWidth / PREVIEW_WIDTH;
            const heightScale = availableHeight / PREVIEW_HEIGHT;

            setScale(Math.min(widthScale, heightScale));
        };

        updateScale();

        const observer = new ResizeObserver(updateScale);
        observer.observe(preview);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mt-5 rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-md">

            {/* HEADER */}
            <div className="mb-5">
                <h2 className="font-heading text-xl font-bold text-text">
                    Your Public Page
                </h2>

                <p className="mt-1 font-blackOps font-semibold text-xs tracking-[0.02rem] text-muted-foreground">
                    This is what customers currently see.
                </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

                {/* SNAPSHOT */}
                <div  ref={previewRef}
                    className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-accent/5 md:h-[250px] ">
                    {snapshot ? (
                        <div className="absolute left-0 top-0 origin-top-left" style={{width: `${PREVIEW_WIDTH}px`,transform: `scale(${scale})`,}}>
                            {snapshot}
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center font-unica text-xs font-bold uppercase tracking-[0.15rem] text-muted-foreground">
                            Snapshot will appear here
                        </div>
                    )}
                </div>

                {/* DETAILS */}
                <div className="flex min-w-0 flex-1 flex-col items-stretch justify-between">

                    <div>
                        <h3 className="font-blackOps text-sm font-bold text-text md:text-xl">
                            {businessName}
                        </h3>

                        <div className="mt-1 flex min-w-0 items-center gap-2">

                            {slugIsEmpty ? (
                                <p className="font-cinzel text-xs font-bold tracking-[0.08rem] text-muted-foreground">
                                    Publish your page to get a URL
                                </p>
                            ) : (
                                <a  href={slug}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-w-0 max-w-full truncate font-blackOps text-sm font-bold tracking-[0.08rem] text-accent hover:underline">
                                    {slug}
                                </a>
                            )}

                            {!slugIsEmpty && (
                                <ExternalLink
                                    size={20}
                                    className="shrink-0 text-accent"
                                />
                            )}

                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">

                        <div>
                            <div className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 ${ published ? "bg-accent/10" : "bg-yellow-100"}`}>
                                    
                                <span className={`h-2 w-2 rounded-full ${ published ? "bg-accent" : "bg-yellow-500" }`}/>

                                <span className={`font-unica text-xs font-bold tracking-[0.08rem] ${published  ? "text-accent"  : "text-yellow-700"}`}>
                                    {status}
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="font-unica text-sm font-semibold uppercase tracking-[0.02rem] text-muted-foreground md:tracking-[0.12rem]">
                                {`Last Updated ${timeAgo(updatedAt)}`}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}