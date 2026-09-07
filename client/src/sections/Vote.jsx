import { ArrowUpRight, ExternalLink } from "lucide-react";

import Reveal from "../components/ui/Reveal";
import artist from "../data/artist";

function Vote() {
  return (
    <section
      id="vote"
      className="relative overflow-hidden border-b border-[#c8ff00]/15 bg-[#090909] py-20 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#c8ff00]/5 blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-32px))] sm:w-[min(1200px,calc(100%-48px))]">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Left */}
          <Reveal y={28}>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
                04 — Fan Vote
              </p>

              <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Help Put {artist.name}
                <span className="block text-[#c8ff00]">On Top.</span>
              </h2>

              <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                Show your support and cast your vote for {artist.name}. Voting
                takes place on the official external voting page.
              </p>

              <a
                href={artist.voteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#c8ff00] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#050505] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ddff51] sm:mt-9 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.18em]"
              >
                Vote for {artist.name}
                <ArrowUpRight size={17} />
              </a>

              <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-neutral-600 sm:mt-4 sm:text-[11px] sm:tracking-[0.14em]">
                <ExternalLink size={12} />
                Opens official voting page
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.12} y={28}>
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-full w-full border border-[#c8ff00]/20 sm:-left-3 sm:-top-3" />

              <div className="group relative border border-[#c8ff00]/20 bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-[#101010] sm:p-7 md:p-9">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8ff00] sm:text-xs sm:tracking-[0.24em]">
                  Support the movement
                </span>

                <div className="my-6 h-px w-full bg-[#c8ff00]/15 sm:my-8" />

                <p className="font-serif text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
                  Every vote helps push the music further.
                </p>

                <p className="mt-5 text-[13px] leading-6 text-neutral-500 sm:mt-6 sm:text-sm sm:leading-7">
                  Click below to leave this website and continue to the official
                  voting platform.
                </p>

                <a
                  href={artist.voteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 flex min-h-13 items-center justify-between gap-4 border border-[#c8ff00]/30 px-4 py-4 transition-all duration-300 hover:border-[#c8ff00] hover:bg-[#c8ff00]/5 sm:mt-8 sm:px-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.16em]">
                    Go to Voting Page
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#c8ff00] transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Vote;