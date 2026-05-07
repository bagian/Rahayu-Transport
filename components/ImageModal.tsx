"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[95vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Moved down to avoid navbar obstruction */}
        <button
          onClick={onClose}
          className="absolute top-10 right-4 z-20 bg-white/20 hover:bg-red-600 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 md:top-10 md:right-6 cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Image Container - More responsive */}
        <div className="relative w-full aspect-[4/6] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[25/12]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* Navigation Buttons - More responsive */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-red-600 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 md:left-4 cursor-pointer"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-red-600 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 md:right-4 cursor-pointer"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Image Info - More responsive */}
        {/* <div className="bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 lg:p-8 text-white">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight">
            {image.title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
            {image.description}
          </p>
          <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-red-600 text-white text-xs md:text-sm font-bold rounded-full uppercase">
            {image.category}
          </span>
        </div> */}
      </div>
    </div>
  );
}
