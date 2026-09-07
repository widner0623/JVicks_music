import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import Reveal from "../components/ui/Reveal";
import artist from "../data/artist";

function About() {
  const socialLinks = [
    {
      name: "Instagram",
      href: artist.socials.instagram,
      icon: FaInstagram,
    },
    {
      name: "Spotify",
      href: artist.socials.spotify,
      icon: FaSpotify,
    },
    {
      name: "YouTube",
      href: artist.socials.youtube,
      icon: FaYoutube,
    },
    {
      name: "TikTok",
      href: artist.socials.tiktok,
      icon: FaTiktok,
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-[#c8ff00]/15 bg-[#090909] py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto grid w-[min(1200px,calc(100%-32px))] gap-10 sm:w-[min(1200px,calc(100%-48px))] sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Artist Image */}
        <Reveal y={30}>
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
            <div className="absolute -left-2 -top-2 h-full w-full border border-[#c8ff00]/30 sm:-left-3 sm:-top-3" />

            <div className="group relative overflow-hidden bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79"
                alt={`${artist.name} artist portrait placeholder`}
                className="aspect-[4/5] h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:text-[10px] sm:tracking-[0.25em]">
                  Independent Artist
                </p>

                <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                  {artist.name}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* About Content */}
        <Reveal delay={0.12} y={30}>
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              02 — The Artist
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              About {artist.name}
            </h2>

            {/* Bio */}
            <div className="mt-7 space-y-4 text-[13px] leading-6 text-neutral-400 sm:mt-8 sm:space-y-5 sm:text-sm sm:leading-7 md:text-base">
              {artist.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="my-8 border-l-2 border-[#c8ff00] pl-4 sm:my-10 sm:pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-white sm:text-2xl md:text-3xl">
                “{artist.quote}”
              </p>
            </blockquote>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 sm:text-[10px] sm:tracking-[0.22em]">
                Follow {artist.name}
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  if (!social.href) {
                    return (
                      <span
                        key={social.name}
                        title={`${social.name} coming soon`}
                        className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-2.5 text-[10px] uppercase tracking-[0.12em] text-neutral-700 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.14em]"
                      >
                        <Icon size={16} />
                        {social.name}
                      </span>
                    );
                  }

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${artist.name} on ${social.name}`}
                      className="group inline-flex min-h-11 items-center gap-2 border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] uppercase tracking-[0.12em] text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:bg-white/10 hover:text-[#c8ff00] sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.14em]"
                    >
                      <Icon
                        size={16}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;