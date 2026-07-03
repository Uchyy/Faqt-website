import logo from "../assets/faqt.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto">
        <nav className="flex items-center justify-between rounded-2xl bg-card px-5 py-3 shadow-sm">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-accent font-bold text-white bg-accent p-2 transition hover:opacity-90">
              <img src={logo} alt="FAQT Logo" className="h-full w-full object-contain" />
            </div>

            <span className="text-2xl font-bold tracking-tight text-text font-unica">
              Faqt
            </span>
          </div>

          {/* Actions */}
          <button className="rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
            Sign Up
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;