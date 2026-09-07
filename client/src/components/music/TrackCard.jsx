import { useEffect, useRef, useState } from "react";
import {
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaPlay,
  FaPause,
  FaSoundcloud,
} from "react-icons/fa";

import { BsAppleMusic } from "react-icons/bs";

function TrackCard({ track, isActive, onPlay, onPause }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!isActive && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      onPause?.();
      return;
    }

    try {
      onPlay?.();

      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
      onPause?.();
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;

    if (!audio) return;

    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;

    if (!audio) return;

    setAudioDuration(audio.duration);
  };

  const handleEnded = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = 0;
    }

    setIsPlaying(false);
    setCurrentTime(0);

    onPause?.();
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio || !audioDuration) return;

    const newTime = Number(event.target.value);

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <article
      className={`group flex h-full flex-col border bg-[#0d0d0d] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101010] sm:p-5 ${
        isActive
          ? "border-[#c8ff00]/70"
          : "border-[#c8ff00]/20 hover:border-[#c8ff00]/60"
      }`}
    >
      <audio
        ref={audioRef}
        src={track.preview}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Track Information */}
      <div className="mb-6 sm:mb-7">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Play Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={
              isPlaying
                ? `Pause ${track.title}`
                : `Play ${track.title}`
            }
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c8ff00] transition-all duration-300 hover:scale-105 sm:h-12 sm:w-12 ${
              isPlaying
                ? "bg-[#c8ff00] text-[#050505]"
                : "text-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#050505]"
            }`}
          >
            {isPlaying ? (
              <FaPause size={13} />
            ) : (
              <FaPlay size={13} />
            )}
          </button>

          {/* Title / Genre */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 truncate font-serif text-lg font-semibold leading-tight text-white sm:text-xl">
                {track.title}
              </h3>

              <span className="shrink-0 pt-0.5 text-[10px] text-neutral-500 sm:text-xs">
                {track.duration}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="border border-[#c8ff00]/40 bg-[#c8ff00]/10 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-[#c8ff00] sm:text-[10px] sm:tracking-[0.12em]">
                {track.genre}
              </span>

              <span className="text-[10px] text-neutral-500 sm:text-xs">
                {track.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Progress */}
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max={audioDuration || 0}
          step="0.01"
          value={currentTime}
          onChange={handleSeek}
          aria-label={`Seek ${track.title}`}
          className="h-[3px] w-full cursor-pointer accent-[#c8ff00]"
        />

        <div className="mt-2 flex items-center justify-between text-[9px] text-neutral-600 sm:text-[10px]">
          <span>{formatTime(currentTime)}</span>

          <span>
            {audioDuration
              ? formatTime(audioDuration)
              : track.duration}
          </span>
        </div>
      </div>

      {/* Streaming Platforms */}
      <div className="mt-auto grid grid-cols-2 gap-2">
        {track.spotify && (
          <a
            href={track.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Spotify`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]"
          >
            <FaSpotify size={14} />
            <span>Spotify</span>
          </a>
        )}

        {track.appleMusic && (
          <a
            href={track.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Apple Music`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]"
          >
            <BsAppleMusic size={14} />
            <span>Apple Music</span>
          </a>
        )}

        {track.youtubeMusic && (
          <a
            href={track.youtubeMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on YouTube Music`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]"
          >
            <FaYoutube size={14} />
            <span>YouTube Music</span>
          </a>
        )}

        {track.amazonMusic && (
          <a
            href={track.amazonMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on Amazon Music`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]"
          >
            <FaAmazon size={14} />
            <span>Amazon Music</span>
          </a>
        )}

        {track.soundcloud && (
          <a
            href={track.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${track.title} on SoundCloud`}
            className="col-span-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-neutral-300 transition-all duration-300 hover:border-[#c8ff00]/40 hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]"
          >
            <FaSoundcloud size={14} />
            <span>SoundCloud</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default TrackCard;