"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import { GALLERY_DATA, GalleryImage } from "@/data/gallery";
import { FLEET_DATA } from "@/data/fleet";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fleetImages: GalleryImage[] = FLEET_DATA.flatMap((vehicle, vehicleIndex) =>
    vehicle.images.map((src, imageIndex) => ({
      id: 1000 + vehicleIndex * 10 + imageIndex,
      src,
      alt: `${vehicle.name} ${imageIndex + 1}`,
      category: "armada",
      title: vehicle.name,
      description: vehicle.description,
    }))
  );

  const filteredImages = [...GALLERY_DATA, ...fleetImages];

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setSelectedIndex(filteredImages.indexOf(image));
  };

  const handleNextImage = () => {
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex =
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen selection:bg-red-100">
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
                Jelajahi koleksi lengkap armada premium dan layanan profesional Rahayu Transport.
                Setiap gambar menceritakan komitmen kami terhadap kualitas dan kepuasan pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image)}
                className="relative group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-72"
              >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={85}
                  />

                  {/* Overlay on Hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                    <h3 className="text-white font-bold text-xs md:text-sm line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-[10px] md:text-xs line-clamp-1">
                      {image.description}
                    </p>
                  </div> */}

                  {/* Category Badge */}
                  {/* <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-red-600 text-white px-2 md:px-3 py-1 text-[8px] md:text-xs font-bold rounded-full uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div> */}
                </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                Tidak ada gambar tersedia
              </p>
            </div>
          )}
        </section>
      </div>

      {/* IMAGE MODAL */}
      <ImageModal
        image={selectedImage}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}
