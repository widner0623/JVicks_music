import Reveal from "../ui/Reveal";
import SocialLinks from "../ui/SocialLinks";
import artist from "../../data/artist";

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
        <Reveal>
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="inline-block font-serif text-3xl font-semibold tracking-tight text-white transition hover:opacity-80"
              >
                <span className="text-[#c8ff00]">
                  {artist.name.charAt(0)}
                </span>{" "}
                {artist.name.slice(1).toUpperCase()}
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                Music without boundaries. {artist.genres.join(", ")} brought
                together through one sound and one identity.
              </p>

              <div className="mt-6">
                <SocialLinks />
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
                    className="group flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#c8ff00] transition-all duration-300 group-hover:w-4" />

                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Genres */}
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
                Genres
              </p>

              <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                {artist.genres.map((genre) => (
                  <span key={genre}>
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 pt-8 text-[10px] uppercase tracking-[0.16em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-5">
            © {new Date().getFullYear()} {artist.name}. All rights reserved. Made by{" "}
            <a
              href="https://redlinesystemsco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8ff00] transition hover:text-[#ddff51] hover:underline"
            >
              Redline Systems Co.
            </a>
          </p>

          <p>Official Artist Website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;