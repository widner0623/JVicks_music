import { useState } from "react";

import TrackCard from "../components/music/TrackCard";
import Reveal from "../components/ui/Reveal";
import tracks from "../data/tracks";

function Music() {
  const [activeTrackId, setActiveTrackId] = useState(null);

  const handleTrackPlay = (trackId) => {
    setActiveTrackId(trackId);
  };

  const handleTrackPause = (trackId) => {
    if (activeTrackId === trackId) {
      setActiveTrackId(null);
    }
  };

  return (
    <section
      id="music"
      className="border-b border-[#c8ff00]/15 bg-[#050505] py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] sm:w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <div className="mb-10 sm:mb-12">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c8ff00] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              01 — Discography
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Listen & Stream
            </h2>

            <p className="mt-4 max-w-2xl text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7 md:text-base">
              Play a sample, then open the full track on your preferred
              platform.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-[#c8ff00]/20 md:grid-cols-2 xl:grid-cols-3">
          {tracks.map((track, index) => (
            <Reveal
              key={track.id}
              delay={index * 0.08}
              y={20}
              className="h-full"
            >
              <TrackCard
                track={track}
                isActive={activeTrackId === track.id}
                onPlay={() => handleTrackPlay(track.id)}
                onPause={() => handleTrackPause(track.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Music;