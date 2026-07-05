import Button from "../ui/Button";

function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 text-center">

      {/* Subtext */}
      <p className="mt-5 text-lg text-muted font-unica">
        One page. All the answers.
      </p>
      
      {/* Heading */}
      <h1 className="font-heading text-5xl font-bold tracking-tight text-text ">
        A shareable FAQ page for your business.
      </h1>

      <p className="mt-5 text-lg text-muted font-body text-center">
        Stop answering the same questions over and over. Send customers a link or QR code and let them find the answer themselves.
      </p>

      {/* Search box */}
      <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white border border-border bg-card p-2 shadow-sm">
        
        <input
          type="text"
          placeholder="Search for a business..."
          className="w-full bg-transparent px-4 py-3 text-text outline-none"
        />

        <Button color="accent">
          Search
        </Button>
      </div>

    </section>
  );
}



export default Hero;