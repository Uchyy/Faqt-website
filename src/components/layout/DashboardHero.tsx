import Container from "../ui/Container";
import { CheckCircle2 } from "lucide-react";

function DashboardHero() {
    const name = "User";
    const completion = 72;

    const stats = [
        { label: "Views", value: 347 },
        { label: "FAQTs", value: 12 },
    ];

    return (
        <section className="py-8">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-white to-accent/40 p-6 md:p-8">

                    {/* Decorative */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />


                    <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">


                        {/* Welcome */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                Dashboard
                            </p>

                            <h1 className="mt-2 text-3xl font-bold font-heading text-text">
                                Welcome back, {name}
                            </h1>

                            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                                Manage your FAQTs and keep your information ready to share.
                            </p>
                        </div>



                        {/* Progress + Stats */}
                        <div className="flex items-center gap-4">


                            {/* Completion */}
                            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">

                                <div
                                    className="absolute inset-2 rounded-full border-[8px] border-accent/20"
                                />

                                <div
                                    className="absolute inset-2 rounded-full border-[8px] border-accent"
                                    style={{
                                        clipPath: `inset(${100 - completion}% 0 0 0)`
                                    }}
                                />


                                <div className="relative text-center">
                                    <p className="text-2xl font-bold font-unica">
                                        {completion}%
                                    </p>

                                    <p className="text-[10px] uppercase text-muted-foreground">
                                        Ready
                                    </p>
                                </div>

                            </div>



                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3">

                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="
                                            rounded-2xl
                                            bg-white/80
                                            px-5
                                            py-4
                                            min-w-[100px]
                                            shadow-sm
                                        "
                                    >

                                        <p className="text-2xl font-bold font-unica text-text">
                                            {stat.value}
                                        </p>

                                        <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                                            {stat.label}
                                        </p>

                                    </div>
                                ))}


                            </div>


                        </div>


                    </div>


                </div>
            </Container>
        </section>
    );
}

export default DashboardHero;