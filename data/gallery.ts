// data/gallery.ts

export interface GalleryMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string; // Opsional: thumbnail/poster untuk video
}

export interface GalleryItem {
  id: number;
  category: "armada" | "kantor" | "perjalanan" | "pelayanan";
  title: string;
  description: string;
  media: GalleryMedia[];
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    category: "armada",
    title: "Zenix V Hybrid Modelista",
    description: "Nikmati perjalanan yang aman dan menyenangkan melintasi kota-kota di Jawa Timur dengan armada terawat kami.",
    media: [
      {
        type: "video",
        src: "/video/Zenix-V-Hybrid-Modelista.mp4",
        poster: "/img/car/ZENIX_V_HYBRID_MODELISTA/Zenix_V_Hybrid_Modelista_1.jpg",
        alt: "Perjalanan di jalan tol saat senja"
      },
      {
        type: "image",
        src: "/img/car/ZENIX_V_HYBRID_MODELISTA/ZENIX_V_HYBRID_MODELISTA_1.jpg",
        alt: "ZENIX V HYBRID MODELISTA"
      },
      {
        type: "image",
        src: "/img/car/ZENIX_V_HYBRID_MODELISTA/ZENIX_V_HYBRID_MODELISTA_2.jpg",
        alt: "ZENIX V HYBRID MODELISTA"
      },
      {
        type: "image",
        src: "/img/car/ZENIX_V_HYBRID_MODELISTA/ZENIX_V_HYBRID_MODELISTA_3.jpg",
        alt: "ZENIX V HYBRID MODELISTA"
      }
    ]
  },
  {
    id: 2,
    category: "armada",
    title: "Innova Reborn",
    description: "Medium MPV legendaris yang tangguh dan nyaman untuk segala medan.",
    media: [
      {
        type: "image",
        src: "/img/car/INNOVA_REBORN/INNOVA_REBORN.jpeg",
        alt: "Innova Reborn - Eksterior"
      },
      {
        type: "image",
        src: "/img/car/INNOVA_REBORN/INNOVA_REBORN_SEAT_1.jpeg",
        alt: "Innova Reborn - Interior"
      },
      {
        type: "image",
        src: "/img/car/INNOVA_REBORN/INNOVA_REBORN_SEAT_2.jpeg",
        alt: "Innova Reborn - Kursi Belakang"
      }
    ]
  },
  {
    id: 3,
    category: "armada",
    title: "Toyota Alphard",
    description: "Standar kemewahan untuk tamu VIP dan perjalanan bisnis.",
    media: [
      {
        type: "image",
        src: "/img/car/TOYOTA_ALPHARD/TOYOTA_ALPHARD.jpeg",
        alt: "Toyota Alphard - Eksterior"
      }
    ]
  },
  {
    id: 4,
    category: "armada",
    title: "Toyota Alphard New 2025",
    description: "Generasi terbaru Alphard dengan desain lebih futuristik dan kenyamanan maksimal.",
    media: [
      {
        type: "image",
        src: "/img/car/TOYOTA_ALPHARD_NEW_2025/TOYOTA_ALPHARD_NEW_2025.jpeg",
        alt: "Toyota Alphard New 2025 - Eksterior"
      },
      {
        type: "image",
        src: "/img/car/TOYOTA_ALPHARD_NEW_2025/TOYOTA_ALPHARD_NEW_2025_SEAT.jpeg",
        alt: "Toyota Alphard New 2025 - Interior"
      }
    ]
  },
  {
    id: 5,
    category: "armada",
    title: "Toyota Hiace Premio",
    description: "Solusi transportasi grup dengan kapasitas besar dan tampilan eksklusif.",
    media: [
      {
        type: "image",
        src: "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO.jpeg",
        alt: "Toyota Hiace Premio - Eksterior"
      },
      {
        type: "image",
        src: "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO_SEAT.jpeg",
        alt: "Toyota Hiace Premio - Kursi Penumpang"
      },
      {
        type: "image",
        src: "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO_2.jpeg",
        alt: "Toyota Hiace Premio - Samping"
      }
    ]
  },
  {
    id: 6,
    category: "armada",
    title: "Zenix G Hybrid",
    description: "MPV modern yang sangat irit bahan bakar dan ramah lingkungan.",
    media: [
      {
        type: "image",
        src: "/img/car/ZENIX_G_HYBRID/ZENIX_G_HYBRID.jpeg",
        alt: "Zenix G Hybrid - Eksterior"
      }
    ]
  },
  {
    id: 7,
    category: "armada",
    title: "Zenix Q Modelista",
    description: "Varian tertinggi Zenix dengan fitur keselamatan lengkap dan tampilan sporty.",
    media: [
      {
        type: "image",
        src: "/img/car/ZENIX_Q_MODELISTA/ZENIX_Q_MODELISTA.jpeg",
        alt: "Zenix Q Modelista - Eksterior"
      }
    ]
  },
  {
    id: 8,
    category: "armada",
    title: "Elf Long 19 Seats",
    description: "Minibus 19 kursi ideal untuk travel rombongan dan transportasi antar kota.",
    media: [
      {
        type: "image",
        src: "/img/car/ELF_LONG_19_SEAT/ELF_LONG_19_SEAT.jpeg",
        alt: "Elf Long 19 Seats - Eksterior"
      },
      {
        type: "image",
        src: "/img/car/ELF_LONG_19_SEAT/ELF_LONG_19_SEAT_SEAT.jpeg",
        alt: "Elf Long 19 Seats - Interior"
      }
    ]
  }
];
