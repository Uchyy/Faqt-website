import { Check, CircleAlert } from "lucide-react";
import { getPageCompletionDetails } from "../../utils/pageCompletion";
import { Page } from "../../model/Page";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';

type Props = {
    page: Page;
};


export default function PageCompletion({ page }: Readonly<Props>) {

    const completion = getPageCompletionDetails(page);
    const percentColor = completion.percentage < 40 ? "red" : "green"
    return (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-lg mb-5">

            <div className="flex items-center justify-between mb-4">

                <div>
                    <h2 className="font-heading text-xl font-bold text-text">
                        Page Completion
                    </h2>

                    <p className="mt-1 font-blackOps text-xs tracking-[0.02rem] text-muted-foreground">
                        Complete your page to help customers discover your business.
                    </p>
                </div>
            </div>

            <div className="space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-accent/5 px-4 py-3">
                    <div>
                        <p className="font-unica text-sm font-bold text-text">
                            {completion.checks.filter(item => item.complete).length} of {completion.checks.length} completed
                        </p>

                        <p className="font-blackOps text-xs text-muted-foreground">
                            Keep improving your page
                        </p>
                    </div>

                   <div className="h-16 w-16 [&_.CircularProgressbar-text]:font-bold [&_.CircularProgressbar-text]:font-unica [&_.CircularProgressbar-text]:text-center ">
                        <CircularProgressbar
                            value={completion.percentage}
                            text={`${completion.percentage}%`}
                            styles={buildStyles({
                                pathColor: percentColor,
                                trailColor: "#E5E7EB",
                                textColor: percentColor,
                                textSize: "24px",
                            })}
                        />
                    </div>
                </div>


                <div>
                    <p className="mb-2 font-unica text-sm font-bold uppercase tracking-wider text-muted-foreground">
                        Missing
                    </p>

                    <div className="flex flex-wrap gap-2">

                        {completion.missing.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1" >
                                <CircleAlert
                                    size={14}
                                    className="text-yellow-600"
                                />

                                <span className="font-unica text-xs font-semibold text-yellow-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>


                {completion.missing.length === 0 && (
                    <div className="flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3">
                        <Check size={16} className="text-accent"/>

                        <p className="font-unica text-sm font-semibold text-accent">
                            Your page is complete
                        </p>
                    </div>
                )}

            </div>


        </div>
    );
}