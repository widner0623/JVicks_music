import { Instagram, Music2, ExternalLink } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="border-b border-[#c8ff00]/15 bg-[#090909] py-24 md:py-32"
    >
      <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full border border-[#c8ff00]/30" />

          <div className="relative overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79"
              alt="Artist portrait placeholder"
              className="aspect-[4/5] h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
            02 — The Artist
          </p>

          <h2 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            About J Vick
          </h2>

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

          <blockquote className="my-10 border-l-2 border-[#c8ff00] pl-6">
            <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
              “I don’t want every song to sound the same. I want every song to
              sound like me.”
            </p>
          </blockquote>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
            >
              <Instagram size={16} />
              Instagram
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
            >
              <Music2 size={16} />
              Spotify
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-neutral-300 transition hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
            >
              <ExternalLink size={16} />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;