"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface ImageModalProps {
  item: GalleryItem | null;
  activeMediaIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectMedia?: (index: number) => void;
}

const getYoutubeEmbedUrl = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&enablejsapi=1`
    : null;
};

export default function ImageModal({
  item,
  activeMediaIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectMedia,
}: ImageModalProps) {
  /* ── Keyboard navigation ── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const activeMedia = item.media[activeMediaIndex];
  const youtubeUrl =
    activeMedia?.type === "video" ? getYoutubeEmbedUrl(activeMedia.src) : null;
  const hasMultiple = item.media.length > 1;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      style={{ background: "rgba(15,15,15,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/*
       * ── Modal shell ──
       * Fixed proportional size: 90vw × auto, capped at 900px wide.
       * On mobile it fills most of the screen vertically.
       */}
      <div
        className="relative flex flex-col w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{
          maxWidth: "900px",
          maxHeight: "calc(100vh - 48px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─────────────────────────────────────────────────────────
            HEADER
        ───────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 flex-shrink-0 bg-zinc-900">
          {/* Left: category badge + counter */}
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
              {item.category}
            </span>
            {hasMultiple && (
              <span className="text-slate-400 text-xs tabular-nums">
                {activeMediaIndex + 1}&thinsp;/&thinsp;{item.media.length}
              </span>
            )}
          </div>

          {/* Center: title */}
          <p className="text-white text-sm md:text-base font-semibold leading-snug line-clamp-1 flex-1 text-center px-3">
            {item.title}
          </p>

          {/* Right: close */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer flex-shrink-0"
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* ─────────────────────────────────────────────────────────
            MEDIA AREA — 16:9 aspect ratio
        ───────────────────────────────────────────────────────── */}
        <div
          className="relative w-full flex-shrink-0 bg-slate-950"
          style={{ aspectRatio: "16 / 9" }}
        >
          {activeMedia?.type === "video" ? (
            youtubeUrl ? (
              <iframe
                key={activeMedia.src}
                src={youtubeUrl}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                key={activeMedia.src}
                poster={activeMedia.poster}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={activeMedia.src} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            )
          ) : (
            <img
              key={activeMedia?.src}
              src={activeMedia?.src}
              alt={activeMedia?.alt || item.title}
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}

          {/* Prev / Next buttons — only show when there is more than 1 media */}
          {hasMultiple && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-red-600 text-slate-700 hover:text-white shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-red-600 text-slate-700 hover:text-white shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Berikutnya"
              >
                <ChevronRight size={18} />
              </button>

              {/* ── Floating slide indicators ── */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)" }}>
                {item.media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectMedia?.(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${idx === activeMediaIndex
                      ? "w-5 h-2 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label={`Media ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
