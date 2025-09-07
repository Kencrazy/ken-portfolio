import React, { useState, useEffect, useRef } from 'react';
import { musicList } from './constant';

export default function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(musicList[0].audio));

  // Handle audio playback
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  // Update audio source when track changes
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = musicList[currentTrackIndex].audio;
    audio.load();
    if (isPlaying) audio.play().catch((err) => console.error('Playback error:', err));
    setCurrentTime(0);
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error('Playback error:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musicList.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + musicList.length) % musicList.length);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-10 sm:right-2 z-10 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
        aria-label="Show music player"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 -right-2 w-1/2 sm:w-2/14 p-2 sm:p-4 z-10">
      <div
        className="relative overflow-hidden rounded-lg transition-all duration-300 group bg-background/20 hover:scale-[1.02] text-foreground backdrop-blur-[2px] p-4 sm:p-6 bg-black hover:shadow-lg hover:shadow-primary/20"
      >
        <div
          className="absolute inset-0 z-0 h-full w-full rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all pointer-events-none dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
        ></div>

        <div
          className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg glass-effect"
        ></div>

        <div className="relative z-10">
          <div className="flex items-start gap-2">
            <div
              className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 -mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-500"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <div
                className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl"
              ></div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="space-y-1">
                  <p
                    className="font-semibold leading-none tracking-tight text-foreground dark:text-white text-xs sm:text-sm"
                  >
                    Now Playing
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 dark:text-zinc-400">
                    {musicList[currentTrackIndex].name}
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  aria-label="Hide music player"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 sm:size-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 text-foreground dark:text-white">
            <div className="space-y-1 sm:space-y-2">
              <div
                className="relative h-1 sm:h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/50 dark:bg-zinc-800/50"
                role="presentation"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20 dark:from-white/5 dark:via-white/10 dark:to-white/5"
                ></div>
                <div
                  className="absolute inset-y-0 left-0 flex bg-gradient-to-r from-black/50 via-black/50 to-black/50 dark:from-white/80 dark:via-white/80 dark:to-white/80 transition-all duration-200 ease-out"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/5"
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs font-medium">
                <span className="tabular-nums text-zinc-600 dark:text-zinc-400">{formatTime(currentTime)}</span>
                <span className="tabular-nums text-zinc-600 dark:text-zinc-400">{formatTime(duration)}</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={playPrevious}
                className="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-7 w-7 sm:h-9 sm:w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                aria-label="Previous track"
              >
                <div
                  className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                ></div>
                <div
                  className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"
                ></div>
                <div className="pointer-events-none z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 sm:size-5"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </div>
              </button>

              <button
                onClick={togglePlayPause}
                className="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-7 w-7 sm:h-9 sm:w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <div
                  className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                ></div>
                <div
                  className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"
                ></div>
                <div className="pointer-events-none z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 sm:size-5"
                  >
                    {isPlaying ? (
                      <>
                        <rect width="4" height="16" x="6" y="4"></rect>
                        <rect width="4" height="16" x="14" y="4"></rect>
                      </>
                    ) : (
                      <path d="M5 3l14 9-14 9V3z"></path>
                    )}
                  </svg>
                </div>
              </button>

              <button
                onClick={playNext}
                className="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-7 w-7 sm:h-9 sm:w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                aria-label="Next track"
              >
                <div
                  className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                ></div>
                <div
                  className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"
                ></div>
                <div className="pointer-events-none z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 sm:size-5"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent dark:via-white/5 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"
        ></div>
      </div>
    </div>
  );
}