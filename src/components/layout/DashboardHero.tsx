import Container from "../ui/Container";

function DashboardHero() {
  const name = "User";

  const stats = [
    { label: "Views", value: 347 },
    { label: "FAQs", value: 12 },
    { label: "Status", value: "Live" },
  ];

  return (
    <section className="bg-gradient-to-r from-accent/15 to-accent py-12">
      <Container>

        {/* Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left */}
          <div className="max-w-md justify-center md:justify-start text-center md:text-left">
            <h1 className="text-3xl font-bold text-text font-heading">
              Welcome back, {name}
            </h1>

            <p className="text-sm text-muted-foreground mt-2 leading-relaxed mx-auto md:mx-0">
              Manage your FAQ page — update answers and keep everything ready to share instantly.
            </p>
          </div>

          {/* Centered Stats */}
          <div className="flex flex-1 justify-center">
            <div className="flex items-end gap-10">

              {stats.map((stat, i) => (
                <div key={i} className="text-center relative">

                  {/* BIG VALUE */}
                  <p className="text-3xl font-bold text-text font-unica leading-none">
                    {stat.value}
                  </p>

                  {/* LABEL */}
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                    {stat.label}
                  </p>

                  {/* divider */}
                  {i !== stats.length - 1 && (
                    <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 h-6 w-px bg-accent" />
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}

export default DashboardHero;