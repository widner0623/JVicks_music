import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaPlayCircle,
  FaSoundcloud, 
} from "react-icons/fa";

import { BsAppleMusic } from "react-icons/bs";

function TrackCard({ track }) {
  return (
    <article className="group border border-[#c8ff00]/20 bg-[#0d0d0d] p-5 transition duration-300 hover:border-[#c8ff00]/60">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8ff00] text-[#c8ff00] transition hover:bg-[#c8ff00] hover:text-black"
            aria-label={`Play ${track.title}`}
          >
            <FaPlayCircle size={18} fill="currentColor" />
          </button>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              {track.title}
            </h3>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="border border-[#c8ff00]/40 bg-[#c8ff00]/10 px-2 py-0.5 text-[10px] tracking-wider text-[#c8ff00]">
                {track.genre}
              </span>

              <span className="text-xs text-neutral-500">
                {track.year}
              </span>
            </div>
          </div>
        </div>

        <span className="pt-1 text-xs text-neutral-500">
          {track.duration}
        </span>
      </div>

      <div className="mb-5">
        <div className="h-[3px] w-full bg-white/5">
          <div className="h-full w-[8%] bg-[#c8ff00]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {track.spotify && (
          <a
            href={track.spotify}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition hover:border-[#c8ff00]/40 hover:text-white"
          >
            <FaSpotify size={13} />
            Spotify
          </a>
        )}

        {track.appleMusic && (
          <a
            href={track.appleMusic}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition hover:border-[#c8ff00]/40 hover:text-white"
          >
            <BsAppleMusic size={13} />
            Apple Music
          </a>
        )}

        {track.youtubeMusic && (
          <a
            href={track.youtubeMusic}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition hover:border-[#c8ff00]/40 hover:text-white"
          >
            <FaYoutube size={13} />
            YouTube Music
          </a>
        )}

        {track.amazonMusic && (
          <a
            href={track.amazonMusic}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition hover:border-[#c8ff00]/40 hover:text-white"
          >
            <FaAmazon size={13} />
            Amazon Music
          </a>
        )}

        {track.soundcloud && (
          <a
            href={track.soundcloud}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300 transition hover:border-[#c8ff00]/40 hover:text-white"
          >
            <FaSoundcloud size={13} />
            SoundCloud
          </a>
        )}

      </div>
    </article>
  );
}

export default TrackCard;