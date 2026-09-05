import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Genres", href: "#genres" },
  { label: "Vote", href: "#vote" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["music", "about", "genres", "vote"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 160) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-lime-400/15 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] w-[min(1200px,calc(100%-48px))] items-center justify-between">
        <a
          href="#home"
          className="font-serif text-xl font-bold tracking-tight"
        >
          <span className="text-[#c8ff00]">J</span> VICK
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const section = link.href.replace("#", "");

            const isActive = activeSection === section;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-[#c8ff00]"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[#c8ff00] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          className="flex items-center justify-center text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-lime-400/10 bg-black px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/5 py-4 text-xs uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-[#c8ff00]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;