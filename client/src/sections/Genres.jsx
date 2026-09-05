import { ArrowUpRight } from "lucide-react";
import genres from "../data/genres";

function Genres() {
  return (
    <section
      id="genres"
      className="border-b border-[#c8ff00]/15 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
            03 — Sound
          </p>

          <h2 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Across Every Genre
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
            Different sounds. Different moods. One identity. J Vick moves
            between genres without losing the character behind the music.
          </p>
        </div>

        <div className="grid border-l border-t border-[#c8ff00]/20 md:grid-cols-2">
          {genres.map((genre) => (
            <article
              key={genre.id}
              className="group relative min-h-[320px] overflow-hidden border-b border-r border-[#c8ff00]/20 bg-[#0b0b0b] p-7 transition duration-300 hover:bg-[#101010] md:p-10"
            >
              <div className="absolute right-5 top-5 font-serif text-6xl text-white/[0.035] transition duration-300 group-hover:text-[#c8ff00]/10 md:text-8xl">
                {genre.number}
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#c8ff00]">
                      Genre {genre.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-neutral-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c8ff00]"
                    />
                  </div>

                  <h3 className="font-serif text-5xl font-semibold tracking-tight text-white md:text-6xl">
                    {genre.name}
                  </h3>
                </div>

                <p className="mt-10 max-w-md text-sm leading-7 text-neutral-500 transition-colors group-hover:text-neutral-300">
                  {genre.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8ff00] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Genres;