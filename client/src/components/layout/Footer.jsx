import SocialLinks from "../ui/SocialLinks";

const navLinks = [
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Genres", href: "#genres" },
  { label: "Vote", href: "#vote" },
];

function Footer() {
  return (
    <footer className="bg-[#050505]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block font-serif text-3xl font-semibold tracking-tight text-white"
            >
              <span className="text-[#c8ff00]">J</span> VICK
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
              Music without boundaries. Rap, country, hip-hop, and rock brought
              together through one sound and one identity.
            </p>

            <div className="mt-6">
              <SocialLinks target="_blank" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-xs uppercase tracking-[0.16em] text-neutral-500 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
              Genres
            </p>

            <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
              <span>Rap</span>
              <span>Country</span>
              <span>Hip-Hop</span>
              <span>Rock</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[10px] uppercase tracking-[0.16em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} J Vick. All rights reserved. Made by <em><a href="https://redlinesystemsco.com/" target="_blank" rel="noopener noreferrer" className="text-[#c8ff00] hover:underline">Redline Systems Co.</a></em>
          </p>

          <p>
            Official Artist Website
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;