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
    category: "perjalanan",
    title: "Perjalanan Nyaman Lintas Jawa",
    description: "Nikmati perjalanan yang aman dan menyenangkan melintasi kota-kota di Jawa Timur dengan armada terawat kami.",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=B0enveZcdjc",
        poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
        alt: "Perjalanan di jalan tol saat senja"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
        alt: "Armada Bus Modern"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200",
        alt: "Pemandangan dari jendela kendaraan"
      }
    ]
  },
  {
    id: 2,
    category: "armada",
    title: "Perawatan Berkala & Uji Kelayakan",
    description: "Kami berkomitmen untuk melakukan pemeriksaan rutin sebelum armada berangkat demi keamanan perjalanan Anda.",
    media: [
      {
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-cars-on-a-highway-at-night-40899-large.mp4",
        poster: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
        alt: "Armada siap berangkat"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
        alt: "Proses pemeliharaan berkala"
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
