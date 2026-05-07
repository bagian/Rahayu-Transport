"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHeroSlider() {
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
    {
      src: "https://images.unsplash.com/photo-1464202687220-a8fb228b1c1c?auto=format&fit=crop&q=80&w=1600",
      alt: "Premium Fleet",
    },
  ];

  return (
    <section className="mb-16 md:mb-24">
      <div className="relative w-full h-[480px] md:h-[750px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300">
            <ChevronRight size={24} />
          </button>
        </Swiper>
      </div>
    </section>
  );
}
