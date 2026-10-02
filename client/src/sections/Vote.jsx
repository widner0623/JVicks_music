import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Trophy,
  CalendarDays,
  Sparkles,
  Clock,
} from "lucide-react";

import Reveal from "../components/ui/Reveal";
import artist from "../data/artist";

// Semifinal voting begins:
// October 5, 2026 at 10:00 PM Central Daylight Time.
const SEMIFINAL_START = new Date("2026-10-05T22:00:00-05:00").getTime();

function Vote() {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, SEMIFINAL_START - Date.now()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, SEMIFINAL_START - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const semifinalsStarted = timeLeft <= 0;

  const totalSeconds = Math.floor(timeLeft / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatNumber = (number) => String(number).padStart(2, "0");

  return (
    <section
      id="vote"
      className="relative overflow-hidden border-b border-[#9003fc]/15 bg-[#090909] py-20 sm:py-24 md:py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#9003fc]/10 blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#9003fc]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-32px))] sm:w-[min(1200px,calc(100%-48px))]">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <Reveal y={28}>
            <div>
              {!semifinalsStarted ? (
                <>
                  {/* ========================= */}
                  {/* WAITING FOR SEMIFINALS */}
                  {/* ========================= */}

                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                    <Trophy size={15} />
                    04 — Competition Update
                  </div>

                  <div className="mb-5 flex items-center gap-2">
                    <Sparkles
                      size={17}
                      className="text-[#9003fc]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs">
                      He Advanced
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    J Vick Is Going To The
                    <span className="block text-[#9003fc]">
                      Semifinals.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    Thanks to everyone who voted and showed support,{" "}
                    {artist.name} has officially advanced to the semifinals.
                    The next round begins October 5 at 10:00 PM Central.
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 border border-[#9003fc]/30 bg-[#9003fc]/5 px-5 py-4 sm:mt-9">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-[#9003fc]"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        Semifinal Voting Begins
                      </p>

                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-white">
                        October 5 · 10 PM CT
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ========================= */}
                  {/* SEMIFINALS LIVE */}
                  {/* ========================= */}

                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                    <Trophy size={15} />
                    04 — Semifinals
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs">
                      Voting Is Live
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    The Semifinals
                    <span className="block text-[#9003fc]">
                      Are Live.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    {artist.name} made it to the semifinals. Now it's time for
                    another push. Cast your vote and help take him one step
                    closer to the top.
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
              )}
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.12} y={28}>
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-full w-full border border-[#9003fc]/25 sm:-left-3 sm:-top-3" />

              <div className="relative border border-[#9003fc]/30 bg-[#0d0d0d] p-5 transition-all duration-500 sm:p-7 md:p-9">
                {!semifinalsStarted ? (
                  <>
                    {/* ========================= */}
                    {/* COUNTDOWN */}
                    {/* ========================= */}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Clock
                          size={15}
                          className="text-[#9003fc]"
                        />

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                          Semifinals Begin In
                        </span>
                      </div>

                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-8" />

                    {/* Countdown timer */}
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                      {/* Days */}
                      <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-4 text-center sm:px-3 sm:py-6">
                        <span className="block font-serif text-3xl font-semibold tabular-nums text-white sm:text-4xl md:text-5xl">
                          {formatNumber(days)}
                        </span>

                        <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.12em] text-[#9003fc] sm:text-[9px] sm:tracking-[0.18em]">
                          Days
                        </span>
                      </div>

                      {/* Hours */}
                      <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-4 text-center sm:px-3 sm:py-6">
                        <span className="block font-serif text-3xl font-semibold tabular-nums text-white sm:text-4xl md:text-5xl">
                          {formatNumber(hours)}
                        </span>

                        <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.12em] text-[#9003fc] sm:text-[9px] sm:tracking-[0.18em]">
                          Hours
                        </span>
                      </div>

                      {/* Minutes */}
                      <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-4 text-center sm:px-3 sm:py-6">
                        <span className="block font-serif text-3xl font-semibold tabular-nums text-white sm:text-4xl md:text-5xl">
                          {formatNumber(minutes)}
                        </span>

                        <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.12em] text-[#9003fc] sm:text-[9px] sm:tracking-[0.18em]">
                          Min
                        </span>
                      </div>

                      {/* Seconds */}
                      <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-4 text-center sm:px-3 sm:py-6">
                        <span className="block font-serif text-3xl font-semibold tabular-nums text-white sm:text-4xl md:text-5xl">
                          {formatNumber(seconds)}
                        </span>

                        <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.12em] text-[#9003fc] sm:text-[9px] sm:tracking-[0.18em]">
                          Sec
                        </span>
                      </div>
                    </div>

                    {/* Advanced message */}
                    <div className="mt-7 text-center sm:mt-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#9003fc]/40 bg-[#9003fc]/10 shadow-[0_0_35px_rgba(144,3,252,0.12)]">
                        <Trophy
                          size={29}
                          className="text-[#9003fc]"
                        />
                      </div>

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc]">
                        J Vick Advanced
                      </p>

                      <p className="mt-2 font-serif text-3xl text-white">
                        Semifinals
                      </p>
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-7" />

                    <div className="text-center">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-600 sm:text-[10px]">
                        Semifinal Voting Begins
                      </p>

                      <p className="mt-2 font-serif text-xl text-white sm:text-2xl">
                        October 5 · 10:00 PM CT
                      </p>
                    </div>

                    <div className="mt-6 border border-[#9003fc]/20 bg-[#9003fc]/5 p-4 text-center">
                      <p className="text-[9px] font-bold uppercase leading-5 tracking-[0.15em] text-[#9003fc] sm:text-[10px]">
                        Get ready for the next round
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* ========================= */}
                    {/* SEMIFINALS LIVE CARD */}
                    {/* ========================= */}

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                        Semifinal Voting
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9003fc]">
                          Live
                        </span>
                      </div>
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-8" />

                    <div className="flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#9003fc]/50 bg-[#9003fc]/10 shadow-[0_0_40px_rgba(144,3,252,0.15)] sm:h-24 sm:w-24">
                        <Trophy
                          size={40}
                          className="text-[#9003fc]"
                        />
                      </div>
                    </div>

                    <p className="mt-7 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc]">
                      The Next Round Is Here
                    </p>

                    <p className="mt-3 text-center font-serif text-4xl font-semibold text-white sm:text-5xl">
                      Semifinals
                    </p>

                    <p className="mx-auto mt-5 max-w-sm text-center text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7">
                      Every vote counts. Help {artist.name} keep moving forward
                      and make the push toward the finals.
                    </p>

                    <a
                      href={artist.voteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-7 flex min-h-13 items-center justify-between gap-4 border border-[#9003fc]/40 bg-[#9003fc]/5 px-4 py-4 transition-all duration-300 hover:border-[#9003fc] hover:bg-[#9003fc]/10 sm:mt-8 sm:px-5"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.16em]">
                        Vote in the Semifinals
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#9003fc] transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </a>

                    <div className="mt-3 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.12em] text-neutral-600 sm:text-[10px]">
                      <ExternalLink size={11} />
                      Official voting page
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