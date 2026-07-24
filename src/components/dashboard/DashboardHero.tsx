import { useDashboardUI } from "../../context/DashboardUIContext";
import Container from "../ui/Container";

function DashboardHero() {
    const name = "User";

    const stats = [
        { label: "FAQTs", value: 12 },
        { label: "Views", value: 347 },
        { label: "Completion", value: "72%" },
    ];

    const { sidebarMode } = useDashboardUI();

    return (
        <section className="py-8">
            <Container>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    <div className="max-w-xl">

                        {sidebarMode === "mobile" && (
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                Dashboard
                            </p>
                        )}

                        <h1 className="mt-2 text-3xl font-bold font-heading text-text">
                            Welcome back, {name}
                        </h1>

                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed uppercase">
                            Manage your FAQTs, update your information, and keep your page ready to share.
                        </p>

                    </div>


                    <div className="flex gap-3">
                        {stats.map((stat) => (
                            <div key={stat.label}
                                className="min-w-[110px] rounded-3xl border border-border bg-black/65 px-5 py-4 shadow-sm">
                                <p className="text-2xl text-center uppercase font-bold font-unica text-white">
                                    {stat.value}
                                </p>

                                <p className="mt-1 text-xs text-center uppercase tracking-wide text-white/70">
                                    {stat.label}
                                </p>

                                {stat.label === "Completion" && (
                                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                                        <div className="h-full rounded-full bg-accent" style={{ width: stat.value }}  />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </Container>
        </section>
    );
}

export default DashboardHero;