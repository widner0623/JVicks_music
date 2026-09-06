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
      className="border-b border-[#c8ff00]/15 bg-[#090909] py-24 md:py-32"
    >
      <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Artist Image */}
        <Reveal y={30}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#c8ff00]/30" />

            <div className="group relative overflow-hidden bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79"
                alt={`${artist.name} artist portrait placeholder`}
                className="aspect-[4/5] h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
                  Independent Artist
                </p>

                <p className="mt-1 font-serif text-2xl text-white">
                  {artist.name}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* About Content */}
        <Reveal delay={0.12} y={30}>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
              02 — The Artist
            </p>

            <h2 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              About {artist.name}
            </h2>

            {/* Bio */}
            <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-400 md:text-base">
              {artist.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="my-10 border-l-2 border-[#c8ff00] pl-6">
              <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
                “{artist.quote}”
              </p>
            </blockquote>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-600">
                Follow {artist.name}
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  if (!social.href) {
                    return (
                      <span
                        key={social.name}
                        title={`${social.name} coming soon`}
                        className="inline-flex cursor-not-allowed items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-700"
                      >
                        <Icon size={17} />
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
                      className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:bg-white/10 hover:text-[#c8ff00]"
                    >
                      <Icon
                        size={17}
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