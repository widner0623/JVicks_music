import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Clock } from "lucide-react";

import Reveal from "../components/ui/Reveal";
import artist from "../data/artist";

// October 1, 2026 at 9:00 PM Central Daylight Time
const VOTING_END_TIME = new Date("2026-10-01T21:00:00-05:00").getTime();

function Vote() {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, VOTING_END_TIME - Date.now()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, VOTING_END_TIME - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const votingEnded = timeLeft <= 0;

  const totalSeconds = Math.floor(timeLeft / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatNumber = (number) => String(number).padStart(2, "0");

  return (
    <section
      id="vote"
      className="relative overflow-hidden border-b border-[#9003fc]/15 bg-[#090909] py-20 sm:py-24 md:py-32"
    >
      {/* Purple glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#9003fc]/10 blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#9003fc]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-32px))] sm:w-[min(1200px,calc(100%-48px))]">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* Left */}
          <Reveal y={28}>
            <div>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                <Clock size={14} />

                {votingEnded
                  ? "04 — Voting Closed"
                  : "04 — Final Voting Push"}
              </div>

              {!votingEnded ? (
                <>
                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    The Final
                    <span className="block text-[#9003fc]">
                      Hours.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    {artist.name} is making the final push for the #1 spot.
                    Every vote matters in these final hours. Help finish this
                    strong.
                  </p>

                  <a
                    href={artist.voteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#9003fc] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a62dff] hover:shadow-[0_0_35px_rgba(144,3,252,0.35)] sm:mt-9 sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.18em]"
                  >
                    Vote for {artist.name}
                    <ArrowUpRight size={17} />
                  </a>

                  <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-neutral-600 sm:mt-4 sm:text-[11px] sm:tracking-[0.14em]">
                    <ExternalLink size={12} />
                    Opens official voting page
                  </div>
                </>
              ) : (
                <>
                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Voting Has
                    <span className="block text-[#9003fc]">
                      Ended.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    Thank you to everyone who showed up and voted for{" "}
                    {artist.name}. Your support means everything.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.12} y={28}>
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-full w-full border border-[#9003fc]/25 sm:-left-3 sm:-top-3" />

              <div className="relative border border-[#9003fc]/30 bg-[#0d0d0d] p-5 sm:p-7 md:p-9">
                {!votingEnded ? (
                  <>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                        Time Remaining
                      </span>

                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-8" />

                    {/* Countdown */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div className="border border-[#9003fc]/20 bg-black/30 px-2 py-5 text-center sm:px-4 sm:py-6">
                        <span className="block font-serif text-4xl font-semibold tabular-nums text-white sm:text-5xl md:text-6xl">
                          {formatNumber(hours)}
                        </span>

                        <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#9003fc] sm:text-[10px] sm:tracking-[0.22em]">
                          Hours
                        </span>
                      </div>

                      <div className="border border-[#9003fc]/20 bg-black/30 px-2 py-5 text-center sm:px-4 sm:py-6">
                        <span className="block font-serif text-4xl font-semibold tabular-nums text-white sm:text-5xl md:text-6xl">
                          {formatNumber(minutes)}
                        </span>

                        <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#9003fc] sm:text-[10px] sm:tracking-[0.22em]">
                          Minutes
                        </span>
                      </div>

                      <div className="border border-[#9003fc]/20 bg-black/30 px-2 py-5 text-center sm:px-4 sm:py-6">
                        <span className="block font-serif text-4xl font-semibold tabular-nums text-white sm:text-5xl md:text-6xl">
                          {formatNumber(seconds)}
                        </span>

                        <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#9003fc] sm:text-[10px] sm:tracking-[0.22em]">
                          Seconds
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-center font-serif text-xl leading-tight text-white sm:mt-8 sm:text-2xl">
                      Every vote matters.
                    </p>

                    <p className="mt-2 text-center text-[10px] uppercase tracking-[0.15em] text-neutral-600 sm:text-xs">
                      Voting closes at 9:00 PM Central
                    </p>

                    <a
                      href={artist.voteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-6 flex min-h-13 items-center justify-between gap-4 border border-[#9003fc]/40 px-4 py-4 transition-all duration-300 hover:border-[#9003fc] hover:bg-[#9003fc]/10 sm:mt-8 sm:px-5"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.16em]">
                        Vote Now
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#9003fc] transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                      Thank You
                    </span>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-8" />

                    <p className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                      The votes are in.
                    </p>

                    <p className="mt-5 text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7">
                      Thank you for streaming, sharing, voting, and supporting{" "}
                      {artist.name}.
                    </p>

                    <div className="mt-8 border border-[#9003fc]/20 bg-[#9003fc]/5 p-5 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9003fc]">
                        Results Coming Soon
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Vote;