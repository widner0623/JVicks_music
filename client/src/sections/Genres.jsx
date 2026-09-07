import { ArrowUpRight } from "lucide-react";

import Reveal from "../components/ui/Reveal";
import genres from "../data/genres";

function Genres() {
  return (
    <section
      id="genres"
      className="border-b border-[#c8ff00]/15 bg-[#050505] py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] sm:w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              03 — Sound
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Across Every Genre
            </h2>

            <p className="mt-4 max-w-2xl text-[13px] leading-6 text-neutral-500 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
              Different sounds. Different moods. One identity. J Vick moves
              between genres without losing the character behind the music.
            </p>
          </div>
        </Reveal>

        <div className="grid border-l border-t border-[#c8ff00]/20 md:grid-cols-2">
          {genres.map((genre, index) => (
            <Reveal
              key={genre.id}
              delay={index * 0.08}
              y={24}
              className="h-full"
            >
              <article className="group relative h-full min-h-[260px] overflow-hidden border-b border-r border-[#c8ff00]/20 bg-[#0b0b0b] p-5 transition-all duration-300 hover:bg-[#101010] sm:min-h-[290px] sm:p-7 md:min-h-[320px] md:p-10">
                <div className="absolute right-4 top-4 font-serif text-5xl text-white/[0.035] transition-all duration-300 group-hover:scale-105 group-hover:text-[#c8ff00]/10 sm:right-5 sm:top-5 sm:text-6xl md:text-8xl">
                  {genre.number}
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-8 flex items-center justify-between sm:mb-10">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8ff00] sm:text-xs sm:tracking-[0.25em]">
                        Genre {genre.number}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c8ff00] sm:h-5 sm:w-5"
                      />
                    </div>

                    <h3 className="font-serif text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
                      {genre.name}
                    </h3>
                  </div>

                  <p className="mt-8 max-w-md text-[13px] leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300 sm:mt-10 sm:text-sm sm:leading-7">
                    {genre.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8ff00] transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Genres;