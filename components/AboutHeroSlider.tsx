"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600",
      alt: "Luxury Fleet Experience",
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&q=80&w=1600",
      alt: "Professional Transportation Service",
    },
    {
      src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1600",
      alt: "Comfortable Journey",
    },
  ];

  const handleDotClick = (idx: number) => {
    swiperRef?.slideToLoop(idx);
  };

  return (
    <section className="mb-16 md:mb-24">
      <div className="relative w-full h-[480px] md:h-[750px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group">
        <Swiper
          onSwiper={setSwiperRef}
          onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
              />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </Swiper>

        {/* ── Floating Slide Indicators ── */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-2 rounded-full"
          style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)" }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                ? "w-5 h-2 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
