import TrackCard from "../components/music/TrackCard";
import Reveal from "../components/ui/Reveal";
import tracks from "../data/tracks";

function Music() {
  return (
    <section
      id="music"
      className="border-b border-[#c8ff00]/15 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <div className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
              01 — Discography
            </p>

            <h2 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Listen & Stream
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
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
              <TrackCard track={track} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Music;