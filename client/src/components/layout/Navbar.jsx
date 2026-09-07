import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import artist from "../../data/artist";

const links = [
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Genres", href: "#genres" },
  { label: "Vote", href: "#vote" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["music", "about", "genres", "vote"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const firstLetter = artist.name.charAt(0);
  const restOfName = artist.name.slice(1).toUpperCase();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-[#c8ff00]/15 bg-black/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-[min(1200px,calc(100%-32px))] items-center justify-between sm:h-[78px] sm:w-[min(1200px,calc(100%-48px))]">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="font-serif text-xl font-bold tracking-tight text-white transition hover:opacity-80"
          aria-label={`${artist.name} home`}
        >
          <span className="text-[#c8ff00]">{firstLetter}</span>{" "}
          {restOfName}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => {
            const section = link.href.replace("#", "");
            const isActive = activeSection === section;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#c8ff00]"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[#c8ff00] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white transition hover:border-[#c8ff00]/40 hover:text-[#c8ff00] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-x-0 bottom-0 top-[72px] bg-black/80 backdrop-blur-md sm:top-[78px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Navigation */}
            <motion.nav
              className="relative z-40 border-t border-[#c8ff00]/10 bg-[#050505] px-4 pb-6 sm:px-6 md:hidden"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mx-auto max-w-[1200px]">
                {links.map((link, index) => {
                  const section = link.href.replace("#", "");
                  const isActive = activeSection === section;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between border-b border-white/5 py-5 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                        isActive
                          ? "text-[#c8ff00]"
                          : "text-neutral-400 hover:text-white"
                      }`}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <span>{link.label}</span>

                      <div className="flex items-center gap-3">
                        {isActive && (
                          <span className="text-[9px] font-normal uppercase tracking-[0.18em] text-[#c8ff00]/60">
                            Current
                          </span>
                        )}

                        <span
                          className={`h-1.5 w-1.5 rounded-full transition ${
                            isActive
                              ? "bg-[#c8ff00]"
                              : "bg-neutral-800 group-hover:bg-neutral-600"
                          }`}
                        />
                      </div>
                    </motion.a>
                  );
                })}

                {/* Mobile Menu Footer */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.22,
                    duration: 0.3,
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-700">
                    Official Artist Website
                  </p>

                  <p className="mt-2 font-serif text-lg text-white">
                    <span className="text-[#c8ff00]">{firstLetter}</span>{" "}
                    {restOfName}
                  </p>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;