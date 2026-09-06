import {
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaPlay,
  FaSoundcloud,
} from "react-icons/fa";

import { BsAppleMusic } from "react-icons/bs";

function TrackCard({ track }) {
  return (
    <article className="group flex h-full flex-col border border-[#c8ff00]/20 bg-[#0d0d0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/60 hover:bg-[#101010]">
      {/* Track Information */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          {/* Play Button */}
          <button
            type="button"
            aria-label={`Play ${track.title}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8ff00] text-[#c8ff00] transition-all duration-300 hover:scale-105 hover:bg-[#c8ff00] hover:text-[#050505]"
          >
            <FaPlay size={14} />
          </button>

          {/* Title / Genre */}
          <div className="min-w-0">
            <h3 className="truncate font-serif text-xl font-semibold text-white">
              {track.title}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="border border-[#c8ff00]/40 bg-[#c8ff00]/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#c8ff00]">
                {track.genre}
              </span>

              <span className="text-xs text-neutral-500">
                {track.year}
              </span>
            </div>
          </div>
        </div>

        {/* Duration */}
        <span className="shrink-0 pt-1 text-xs text-neutral-500">
          {track.duration}
        </span>
      </div>

      {/* Progress Bar Placeholder */}
      <div className="mb-6">
        <div className="h-[3px] w-full overflow-hidden bg-white/5">
          <div className="h-full w-[8%] bg-[#c8ff00] transition-all duration-500 group-hover:w-[14%]" />
        </div>
      </div>

      {/* Streaming Platforms */}
      <div className="mt-auto flex flex-wrap gap-2">
        {track.spotify && (
          <a
            href={track.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Spotify`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white"
          >
            <FaSpotify size={14} />
            Spotify
          </a>
        )}

        {track.appleMusic && (
          <a
            href={track.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Apple Music`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white"
          >
            <BsAppleMusic size={14} />
            Apple Music
          </a>
        )}

        {track.youtubeMusic && (
          <a
            href={track.youtubeMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on YouTube Music`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white"
          >
            <FaYoutube size={14} />
            YouTube Music
          </a>
        )}

        {track.amazonMusic && (
          <a
            href={track.amazonMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Amazon Music`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white"
          >
            <FaAmazon size={14} />
            Amazon Music
          </a>
        )}

        {track.soundcloud && (
          <a
            href={track.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on SoundCloud`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white"
          >
            <FaSoundcloud size={14} />
            SoundCloud
          </a>
        )}
      </div>
    </article>
  );
}

export default TrackCard;