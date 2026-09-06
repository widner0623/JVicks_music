import { ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import artist from "../data/artist";

function Vote() {
  return (
    <section
      id="vote"
      className="relative overflow-hidden border-b border-[#c8ff00]/15 bg-[#090909] py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#c8ff00]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-48px))]">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Left */}
          <Reveal y={28}>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
                04 — Fan Vote
              </p>

              <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Help Put {artist.name}
                <span className="block text-[#c8ff00]">On Top.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
                Show your support and cast your vote for {artist.name}. Voting
                takes place on the official external voting page.
              </p>

              <a
                href={artist.voteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 bg-[#c8ff00] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#050505] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ddff51]"
              >
                Vote for {artist.name}
                <ArrowUpRight size={17} />
              </a>

              <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                <ExternalLink size={13} />
                Opens official voting page
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.12} y={28}>
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-[#c8ff00]/20" />

              <div className="group relative border border-[#c8ff00]/20 bg-[#0d0d0d] p-7 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-[#101010] md:p-9">
                <span className="text-xs uppercase tracking-[0.24em] text-[#c8ff00]">
                  Support the movement
                </span>

                <div className="my-8 h-px w-full bg-[#c8ff00]/15" />

                <p className="font-serif text-3xl leading-tight text-white md:text-4xl">
                  Every vote helps push the music further.
                </p>

                <p className="mt-6 text-sm leading-7 text-neutral-500">
                  Click below to leave this website and continue to the official
                  voting platform.
                </p>

                <a
                  href={artist.voteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-8 flex items-center justify-between border border-[#c8ff00]/30 px-5 py-4 transition-all duration-300 hover:border-[#c8ff00] hover:bg-[#c8ff00]/5"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                    Go to Voting Page
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#c8ff00] transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
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