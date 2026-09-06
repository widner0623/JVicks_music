import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="border-b border-[#c8ff00]/15 bg-[#090909] py-24 md:py-32"
    >
      <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* =========================
            ARTIST IMAGE
        ========================== */}
        <div className="relative">
          {/* Offset green border */}
          <div className="absolute -left-3 -top-3 h-full w-full border border-[#c8ff00]/30" />

          <div className="relative overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79"
              alt="J Vick artist portrait placeholder"
              className="aspect-[4/5] h-full w-full object-cover grayscale"
            />

            {/* Image gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Artist label */}
            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
                Independent Artist
              </p>

              <p className="mt-1 font-serif text-2xl text-white">
                J Vick
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
            02 — The Artist
          </p>

          <h2 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            About J Vick
          </h2>

          {/* Bio */}
          <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-400 md:text-base">
            <p>
              J Vick is an independent artist focused on creating music that
              crosses genres without losing its identity.
            </p>

            <p>
              His sound blends elements of rap, hip-hop, trap, drill, and R&B,
              giving each release a different energy while still keeping a
              recognizable style.
            </p>

            <p>
              Whether the track is aggressive, reflective, melodic, or built
              for late nights, the goal stays the same: make music people feel.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="my-10 border-l-2 border-[#c8ff00] pl-6">
            <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
              “I don&apos;t want every song to sound the same. I want every song
              to sound like me.”
            </p>
          </blockquote>

          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-600">
              Follow J Vick
            </p>

            <div className="flex flex-wrap gap-3">

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="J Vick on Instagram"
                className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
              >
                <FaInstagram
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Instagram
              </a>

              {/* Spotify */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="J Vick on Spotify"
                className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
              >
                <FaSpotify
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Spotify
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="J Vick on YouTube"
                className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
              >
                <FaYoutube
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                YouTube
              </a>

              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="J Vick on TikTok"
                className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
              >
                <FaTiktok
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;