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
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] py-12 sm:w-[min(1200px,calc(100%-48px))] sm:py-16">
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <a
                href="#home"
                className="inline-block font-serif text-3xl font-semibold tracking-tight text-white transition hover:opacity-80"
              >
                <span className="text-[#c8ff00]">
                  {artist.name.charAt(0)}
                </span>{" "}
                {artist.name.slice(1).toUpperCase()}
              </a>

              <p className="mt-4 max-w-md text-[13px] leading-6 text-neutral-500 sm:mt-5 sm:text-sm sm:leading-7">
                Music without boundaries. {artist.genres.join(", ")} brought
                together through one sound and one identity.
              </p>

              <div className="mt-5 sm:mt-6">
                <SocialLinks />
              </div>
            </div>

            {/* Mobile / Tablet Link Columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-1 lg:contents">
              {/* Navigation */}
              <div>
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-5 sm:text-[10px] sm:tracking-[0.25em]">
                  Explore
                </p>

                <nav className="flex flex-col gap-3 sm:gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors duration-300 hover:text-white sm:text-xs sm:tracking-[0.16em]"
                    >
                      <span className="h-px w-0 bg-[#c8ff00] transition-all duration-300 group-hover:w-4" />

                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Genres */}
              <div>
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-5 sm:text-[10px] sm:tracking-[0.25em]">
                  Genres
                </p>

                <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.14em] text-neutral-500 sm:gap-4 sm:text-xs sm:tracking-[0.16em]">
                  {artist.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 pt-6 text-[9px] uppercase tracking-[0.13em] text-neutral-700 sm:gap-4 sm:pt-8 sm:text-[10px] sm:tracking-[0.16em] md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl leading-5">
            © {new Date().getFullYear()} {artist.name}. All rights reserved.
            Made by{" "}
            <a
              href="https://redlinesystemsco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8ff00] transition hover:text-[#ddff51] hover:underline"
            >
              Redline Systems Co.
            </a>
          </p>

          <p className="shrink-0">Official Artist Website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;