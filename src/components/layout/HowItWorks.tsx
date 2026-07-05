import howitworks from "../../assets/howitworks.png";

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl">

        <div className="text-center">
            <br></br>
            <br></br>

            <h2 className="font-heading text-3xl font-bold text-text">
                How it works
            </h2>

            <p className="mt-3 text-muted">
                Create a shareable FAQ page in minutes
            </p>
            <br></br>

            <img src={howitworks} alt="How It Works" className="h-full w-full object-contain" />

            {/* Section title */}
        
      </div>
    </section>
  );
}

export default HowItWorks;