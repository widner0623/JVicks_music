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

// Quarterfinal voting begins:
// October 5, 2026 at 10:00 PM Central Daylight Time.
const QUARTERFINAL_START = new Date(
  "2026-10-05T22:00:00-05:00",
).getTime();

// Quarterfinal voting ends:
// October 13, 2026 at 9:00 PM Central Daylight Time.
const QUARTERFINAL_END = new Date(
  "2026-10-13T21:00:00-05:00",
).getTime();

function Vote() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const votingStarted = now >= QUARTERFINAL_START;
  const votingEnded = now >= QUARTERFINAL_END;
  const votingIsLive = votingStarted && !votingEnded;

  // Countdown to voting start before the round begins.
  // Countdown to voting end while the round is live.
  const timeLeft = !votingStarted
    ? Math.max(0, QUARTERFINAL_START - now)
    : Math.max(0, QUARTERFINAL_END - now);

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
              {!votingStarted ? (
                <>
                  {/* ========================= */}
                  {/* WAITING FOR QUARTER FINALS */}
                  {/* ========================= */}

                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                    <Trophy size={15} />
                    04 — Competition Update
                  </div>

                  <div className="mb-5 flex items-center gap-2">
                    <Sparkles size={17} className="text-[#9003fc]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs">
                      Quarter Finals
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    J Vick Is In The
                    <span className="block text-[#9003fc]">
                      Quarter Finals.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    Thanks to everyone who voted and showed support,{" "}
                    {artist.name} has officially advanced to the quarter
                    finals. The next round begins October 5 at 10:00 PM
                    Central.
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 border border-[#9003fc]/30 bg-[#9003fc]/5 px-5 py-4 sm:mt-9">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-[#9003fc]"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        Quarterfinal Voting Begins
                      </p>

                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-white">
                        October 5 · 10 PM CT
                      </p>
                    </div>
                  </div>
                </>
              ) : votingEnded ? (
                <>
                  {/* ========================= */}
                  {/* WAITING FOR RESULTS */}
                  {/* ========================= */}

                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                    <Trophy size={15} />
                    04 — Competition Update
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs">
                      Voting Has Ended
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Waiting For
                    <span className="block text-[#9003fc]">
                      The Results.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    Voting for the quarter finals has officially ended.
                    Thank you to everyone who took the time to vote for{" "}
                    {artist.name} and show their support. Now we wait for the
                    results.
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 border border-[#9003fc]/30 bg-[#9003fc]/5 px-5 py-4 sm:mt-9">
                    <Clock
                      size={18}
                      className="shrink-0 text-[#9003fc]"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        Quarterfinal Voting Ended
                      </p>

                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-white">
                        October 13 · 9 PM CT
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ========================= */}
                  {/* QUARTER FINALS LIVE */}
                  {/* ========================= */}

                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs sm:tracking-[0.28em]">
                    <Trophy size={15} />
                    04 — Quarter Finals
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc] sm:text-xs">
                      Voting Is Live
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    The Quarter Finals
                    <span className="block text-[#9003fc]">
                      Are Live.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-neutral-400 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                    {artist.name} made it to the quarter finals. Now it's time
                    for another push. Cast your vote and help take him one step
                    closer to the top.
                  </p>

                  {/* Main Vote Button */}
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
                {!votingStarted ? (
                  <>
                    {/* ========================= */}
                    {/* COUNTDOWN TO START */}
                    {/* ========================= */}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-[#9003fc]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                          Quarter Finals Begin In
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

                    <div className="mt-7 text-center sm:mt-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#9003fc]/40 bg-[#9003fc]/10 shadow-[0_0_35px_rgba(144,3,252,0.12)]">
                        <Trophy size={29} className="text-[#9003fc]" />
                      </div>

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc]">
                        J Vick Advanced
                      </p>

                      <p className="mt-2 font-serif text-3xl text-white">
                        Quarter Finals
                      </p>
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-7" />

                    <div className="text-center">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-600 sm:text-[10px]">
                        Quarterfinal Voting Begins
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
                ) : votingEnded ? (
                  <>
                    {/* ========================= */}
                    {/* WAITING FOR RESULTS CARD */}
                    {/* ========================= */}

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                        Quarterfinal Voting
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#9003fc] shadow-[0_0_12px_#9003fc]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9003fc]">
                          Complete
                        </span>
                      </div>
                    </div>

                    <div className="my-6 h-px w-full bg-[#9003fc]/20 sm:my-8" />

                    <div className="flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#9003fc]/50 bg-[#9003fc]/10 shadow-[0_0_40px_rgba(144,3,252,0.15)] sm:h-24 sm:w-24">
                        <Trophy size={40} className="text-[#9003fc]" />
                      </div>
                    </div>

                    <p className="mt-7 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc]">
                      Voting Has Ended
                    </p>

                    <p className="mt-3 text-center font-serif text-4xl font-semibold text-white sm:text-5xl">
                      Waiting For Results
                    </p>

                    <p className="mx-auto mt-5 max-w-sm text-center text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7">
                      Voting has officially closed. Thank you to everyone who
                      supported {artist.name}. The results are now being
                      awaited.
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-2 border border-[#9003fc]/20 bg-[#9003fc]/5 px-4 py-4 sm:mt-8">
                      <Clock size={15} className="text-[#9003fc]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9003fc] sm:text-[10px]">
                        Results Coming Soon
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* ========================= */}
                    {/* QUARTER FINALS LIVE CARD */}
                    {/* ========================= */}

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9003fc] sm:text-xs sm:tracking-[0.24em]">
                        Quarterfinal Voting
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
                        <Trophy size={40} className="text-[#9003fc]" />
                      </div>
                    </div>

                    <p className="mt-7 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#9003fc]">
                      The Next Round Is Here
                    </p>

                    <p className="mt-3 text-center font-serif text-4xl font-semibold text-white sm:text-5xl">
                      Quarter Finals
                    </p>

                    <p className="mx-auto mt-5 max-w-sm text-center text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7">
                      Every vote counts. Help {artist.name} keep moving forward
                      and make the push toward the semifinals.
                    </p>

                    {/* Countdown Until Voting Ends */}
                    <div className="mt-7 border border-[#9003fc]/25 bg-[#9003fc]/5 p-4 sm:mt-8 sm:p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Clock
                          size={14}
                          className="text-[#9003fc]"
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9003fc] sm:text-[10px]">
                          Voting Ends In
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
                        <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-3 text-center">
                          <span className="block font-serif text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                            {formatNumber(days)}
                          </span>

                          <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.1em] text-[#9003fc] sm:text-[8px]">
                            Days
                          </span>
                        </div>

                        <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-3 text-center">
                          <span className="block font-serif text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                            {formatNumber(hours)}
                          </span>

                          <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.1em] text-[#9003fc] sm:text-[8px]">
                            Hours
                          </span>
                        </div>

                        <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-3 text-center">
                          <span className="block font-serif text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                            {formatNumber(minutes)}
                          </span>

                          <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.1em] text-[#9003fc] sm:text-[8px]">
                            Min
                          </span>
                        </div>

                        <div className="border border-[#9003fc]/20 bg-black/30 px-1 py-3 text-center">
                          <span className="block font-serif text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                            {formatNumber(seconds)}
                          </span>

                          <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.1em] text-[#9003fc] sm:text-[8px]">
                            Sec
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-center text-[8px] font-bold uppercase tracking-[0.12em] text-neutral-600 sm:text-[9px]">
                        Voting closes October 13 · 9:00 PM CT
                      </p>
                    </div>

                    {/* Vote Button */}
                    <a
                      href={artist.voteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-6 flex min-h-13 items-center justify-between gap-4 border border-[#9003fc]/40 bg-[#9003fc]/5 px-4 py-4 transition-all duration-300 hover:border-[#9003fc] hover:bg-[#9003fc]/10 sm:mt-7 sm:px-5"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.16em]">
                        Vote in the Quarter Finals
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