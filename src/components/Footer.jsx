function Footer() {
  return (
    <footer className="bg-background py-6 bg-card">
      <div className="mx-auto max-w-6xl px-6 text-center text-muted font-unica">
        &copy; {new Date().getFullYear()} FAQT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;