"use client";

import { useState } from "react";

import ImageModal from "@/components/ImageModal";
import { GALLERY_DATA, GalleryItem } from "@/data/gallery";
import { Play, Layers } from "lucide-react";

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const allGalleryItems = GALLERY_DATA;

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setActiveMediaIndex(0);
  };

  const handleNextMedia = () => {
    if (!selectedItem) return;
    // Hanya navigasi dalam media item yang sama (wrap around)
    setActiveMediaIndex((prev) =>
      prev < selectedItem.media.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevMedia = () => {
    if (!selectedItem) return;
    // Hanya navigasi dalam media item yang sama (wrap around)
    setActiveMediaIndex((prev) =>
      prev > 0 ? prev - 1 : selectedItem.media.length - 1
    );
  };

  const handleSelectMedia = (index: number) => {
    setActiveMediaIndex(index);
  };

  return (
    <div className="min-h-screen selection:bg-red-100 bg-slate-50/50">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="mt-24 pb-16 lg:mt-32 lg:pb-24">
          <div className="flex flex-col items-start gap-8 border-b border-slate-100 pb-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] max-w-2xl mb-6">
                Galeri <br />
                <span className="italic font-light text-red-600">
                  Armada & Layanan Kami
                </span>
              </h1>
              <p className="max-w-2xl text-slate-500 text-sm md:text-base leading-relaxed">
                Jelajahi koleksi lengkap armada premium dan dokumentasi layanan profesional Rahayu Transport.
                Kami menyajikan foto detail serta video untuk memperlihatkan kualitas layanan terbaik kami.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allGalleryItems.map((item) => {
              const firstMedia = item.media[0];
              // Fallback to a placeholder if firstMedia is undefined or has no src
              const previewSrc = firstMedia?.type === "video"
                ? (firstMedia.poster || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200")
                : (firstMedia?.src || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200");

              const hasVideo = item.media.some((m) => m.type === "video");
              const isMultiMedia = item.media.length > 1;

              return (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-64 md:h-72 bg-white border border-slate-100"
                >


                  {/* Multi-Photo Indicator Badge */}
                  {isMultiMedia && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-lg flex items-center gap-1.5 z-10 transition-transform group-hover:scale-105">
                      <Layers size={12} className="md:w-3.5 md:h-3.5" />
                      <span>{item.media.length}</span>
                    </div>
                  )}

                  {/* Video Play Badge */}
                  {hasVideo && (
                    <div className="absolute bottom-3 right-3 bg-red-600 text-white p-2 rounded-xl shadow-md z-10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play size={14} className="fill-white md:w-4 md:h-4 text-white" />
                    </div>
                  )}

                  {/* Thumbnail Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewSrc}
                    alt={firstMedia?.alt || item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Visual Indicator for Category */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-0.5 text-[9px] md:text-[10px] font-bold rounded uppercase tracking-wider shadow-sm z-10">
                    {item.category}
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-5 z-10">
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-red-400 tracking-widest mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-white font-extrabold text-sm md:text-base leading-snug line-clamp-1 mb-1">
                      {item.title}
                    </h3>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {allGalleryItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-base md:text-lg">
                Tidak ada foto atau video tersedia di galeri.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* GALLERY DETAIL MODAL */}
      <ImageModal
        item={selectedItem}
        activeMediaIndex={activeMediaIndex}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        onNext={handleNextMedia}
        onPrev={handlePrevMedia}
        onSelectMedia={handleSelectMedia}
      />
    </div>
  );
}
