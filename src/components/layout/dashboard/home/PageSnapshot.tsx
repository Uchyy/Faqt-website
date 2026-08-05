import {ExternalLink} from "lucide-react"
import { timeAgo } from "../../../../utils/timeAgo";

type Props = {
    businessName: string;
    url: string;
    status: "Published" | "Draft";
    updatedAt: Date;
    snapshot?: React.ReactNode;
};

export default function PageSnapshot({ businessName, url, status, updatedAt, snapshot,}: Readonly<Props>) {
    const published = status === "Published";
    const slugIsEmpty = url.length === 0;
    const slug = url.length > 0 ?  url : "No URL yet";

    return (
        <div className="mt-5 rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-md">

            {/* HEADER */}
            <div className="mb-5">
                <h2 className="font-heading text-xl font-bold text-text">
                    Your Public Page
                </h2>

                <p className="mt-1 font-blackOps text-xs tracking-[0.02rem] text-muted-foreground">
                    This is what customers currently see.
                </p>
            </div>

            {/* CONTENT */}
            <div className="flex  items-stretch gap-10">

                {/* SNAPSHOT */}
                <div className="w-[50%] shrink-0 overflow-hidden rounded-xl border border-border bg-accent/5">
                    {snapshot ?? (
                        <div className="flex h-full items-center justify-center font-unica text-xs font-bold uppercase tracking-[0.15rem] text-muted-foreground sm:text-center">
                            Snapshot will appear here
                        </div>
                    )}

                </div>

                {/* DETAILS */}
                <div className="flex  min-w-0  flex-1 flex-col justify-between">
                    <div>
                        <h3 className="font-blackOps text-sm md:text-xl font-bold text-text">
                            {businessName}
                        </h3>

                        <div className="mt-1 flex min-w-0 items-center gap-2">
                            {slugIsEmpty ? (
                                <p className="font-cinzel text-xs font-bold tracking-[0.08rem] text-muted-foreground">
                                    Publish your page to get a URL
                                </p>
                            ) : (
                                <a href={slug} target="_blank" rel="noopener noreferrer" className=" min-w-0 max-w-full truncate font-blackOps text-sm font-bold tracking-[0.08rem] text-accent hover:underline">
                                    {slug}
                                </a>
                            )}
                           
                           {!slugIsEmpty && ( <ExternalLink size={20} className="text-accent" />) }

                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                        <div>                        
                            <div className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 ${ published ? "bg-accent/10" : "bg-yellow-100"}`}>
                                <span className={`h-2 w-2 rounded-full ${ published ? "bg-accent" : "bg-yellow-500"}`}/>

                                <span className={`font-unica text-xs font-bold tracking-[0.08rem] ${ published ? "text-accent" : "text-yellow-700" }`}>
                                    {status}
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="font-unica uppercase text-sm tracking-[0.02rem] md:tracking-[0.12rem] font-semibold text-muted-foreground">
                                {`Last Updated ${timeAgo(updatedAt)}`}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}