// data/fleet.ts

export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  category: "Premium" | "MPV" | "SUV" | "City Car";
  transmission: "Manual" | "Automatic";
  capacity: number;
  pricePerDay: number;
  images: string[];
  features: string[];
  year: string; // Menentukan unit baru/lama
  engine: string; // Misal: 2.0L, 1.5L, dll
  fuelType: string; // Bensin/Diesel
  luggage: number; // Estimasi muat koper
  isAvailable: boolean; // Status unit
  description: string; // Deskripsi singkat per unit
}

export const FLEET_DATA: Vehicle[] = [
  // {
  //   id: 1,
  //   slug: "toyota-innova-zenix-hybrid",
  //   name: "Toyota Innova Zenix Hybrid",
  //   category: "MPV",
  //   transmission: "Automatic",
  //   capacity: 7,
  //   pricePerDay: 850000,
  //   images: [
  //     "/img/car/Toyota-Innova-Zenix-2.jpg",
  //     "/img/car/Toyota-Innova-Zenix.webp",
  //   ],
  //   features: [
  //     "AC Double Blower",
  //     "USB Charger",
  //     "Bluetooth Connector",
  //     "ISOFIX",
  //   ],
  //   year: "2023",
  //   engine: "2.0L VVTi",
  //   fuelType: "Bensin",
  //   luggage: 4,
  //   isAvailable: true,
  //   description:
  //     "Medium MPV tercanggih dengan kabin sangat luas dan suspensi yang sangat nyaman untuk perjalanan keluarga.",
  // },
  // {
  //   id: 2,
  //   slug: "mitsubishi-pajero-sport",
  //   name: "Mitsubishi Pajero Sport",
  //   category: "SUV",
  //   transmission: "Automatic",
  //   capacity: 7,
  //   pricePerDay: 1200000,
  //   images: ["/img/car/Mitsubishi-Pajero-Sport.webp"],
  //   features: ["Sunroof", "4WD", "Leather Seats", "Cruise Control"],
  //   year: "2022",
  //   engine: "2.4L MIVEC Diesel",
  //   fuelType: "Diesel",
  //   luggage: 3,
  //   isAvailable: true,
  //   description:
  //     "SUV tangguh dengan tampilan gagah, sangat cocok untuk kebutuhan bisnis atau perjalanan medan berat.",
  // },
  // {
  //   id: 3,
  //   slug: "honda-brio",
  //   name: "Honda Brio",
  //   category: "City Car",
  //   transmission: "Manual",
  //   capacity: 5,
  //   pricePerDay: 350000,
  //   images: ["/img/car/Honda-Brio.webp"],
  //   features: [
  //     "Irit Bahan Bakar",
  //     "Mudah Parkir",
  //     "Audio System",
  //     "Digital AC",
  //   ],
  //   year: "2021",
  //   engine: "1.2L i-VTEC",
  //   fuelType: "Bensin",
  //   luggage: 2,
  //   isAvailable: true,
  //   description:
  //     "Mobil lincah dan sangat irit bahan bakar, pilihan utama untuk mobilitas di dalam kota Sidoarjo.",
  // },
  {
    id: 1,
    slug: "innova-reborn",
    name: "Innova Reborn",
    category: "MPV",
    transmission: "Automatic", // Tersedia Manual, tapi unit sewa dominan Matic
    capacity: 7,
    pricePerDay: 1250000,
    images: [
      "/img/car/INNOVA_REBORN/INNOVA_REBORN.jpeg",
      "/img/car/INNOVA_REBORN/INNOVA_REBORN_SEAT_1.jpeg",
      "/img/car/INNOVA_REBORN/INNOVA_REBORN_SEAT_2.jpeg",
    ],
    features: ["Double Blower", "Tilt Steering", "Eco/Power Mode"],
    year: "",
    engine: "2.4L",
    fuelType: "Diesel", // Versi paling populer di rental
    luggage: 3,
    isAvailable: true,
    description:
      "Medium MPV legendaris yang tangguh dan nyaman untuk segala medan.",
  },
  {
    id: 2,
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    category: "Premium",
    transmission: "Automatic",
    capacity: 6, // Captain Seat mewah
    pricePerDay: 2650000,
    images: ["/img/car/TOYOTA_ALPHARD/TOYOTA_ALPHARD.jpeg"],
    features: ["Sunroof", "Captain Seat", "Power Sliding Door"],
    year: "",
    engine: "2.5L",
    fuelType: "Bensin",
    luggage: 4,
    isAvailable: true,
    description: "Standar kemewahan untuk tamu VIP dan perjalanan bisnis.",
  },
  {
    id: 3,
    slug: "toyota-alphard-new-2025",
    name: "Toyota Alphard New 2025",
    category: "Premium",
    transmission: "Automatic",
    capacity: 6,
    pricePerDay: 3850000,
    images: [
      "/img/car/TOYOTA_ALPHARD_NEW_2025/TOYOTA_ALPHARD_NEW_2025.jpeg",
      "/img/car/TOYOTA_ALPHARD_NEW_2025/TOYOTA_ALPHARD_NEW_2025_SEAT.jpeg",
    ],
    features: ["Advanced Safety Sense", "Heated Seats", "Theater Screen"],
    year: "2025",
    engine: "2.5L",
    fuelType: "Bensin / Hybrid",
    luggage: 4,
    isAvailable: true,
    description:
      "Generasi terbaru Alphard dengan desain lebih futuristik dan kenyamanan maksimal.",
  },
  {
    id: 4,
    slug: "toyota-hiace-premio",
    name: "Toyota Hiace Premio",
    category: "MPV",
    transmission: "Manual",
    capacity: 12,
    pricePerDay: 1500000,
    images: [
      "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO.jpeg",
      "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO_SEAT.jpeg",
      "/img/car/TOYOTA_HIACE_PREMIO/TOYOTA_HIACE_PREMIO_2.jpeg",
    ],
    features: ["Spacious Cabin", "Semi-Bonnet Design", "Euro 4 Standard"],
    year: "",
    engine: "2.8L",
    fuelType: "Diesel",
    luggage: 6,
    isAvailable: true,
    description:
      "Solusi transportasi grup dengan kapasitas besar dan tampilan eksklusif.",
  },
  {
    id: 5,
    slug: "zenix-g-hybrid",
    name: "Zenix G Hybrid",
    category: "MPV",
    transmission: "Automatic",
    capacity: 7,
    pricePerDay: 1450000,
    images: ["/img/car/ZENIX_G_HYBRID/ZENIX_G_HYBRID.jpeg"],
    features: ["Hybrid System Gen-5", "EV Mode", "Vehicle Stability Control"],
    year: "",
    engine: "2.0L",
    fuelType: "Hybrid",
    luggage: 4,
    isAvailable: true,
    description:
      "MPV modern yang sangat irit bahan bakar dan ramah lingkungan.",
  },
  {
    id: 6,
    slug: "zenix-q-modelista",
    name: "Zenix Q Modelista",
    category: "MPV",
    transmission: "Automatic",
    capacity: 6, // Dilengkapi Captain Seat dengan Ottoman
    pricePerDay: 1750000,
    images: ["/img/car/ZENIX_Q_MODELISTA/ZENIX_Q_MODELISTA.jpeg"],
    features: [
      "Modellista Bodykit",
      "Captain Seat with Ottoman",
      "Panoramic Roof",
      "Toyota Safety Sense",
    ],
    year: "",
    engine: "2.0L",
    fuelType: "Hybrid",
    luggage: 4,
    isAvailable: true,
    description:
      "Varian tertinggi Zenix dengan fitur keselamatan lengkap dan tampilan sporty.",
  },
  {
    id: 7,
    slug: "elf-long-19",
    name: "Elf Long 19 Seats",
    category: "MPV",
    transmission: "Manual",
    capacity: 19,
    pricePerDay: 1350000,
    images: [
      "/img/car/ELF_LONG_19_SEAT/ELF_LONG_19_SEAT.jpeg",
      "/img/car/ELF_LONG_19_SEAT/ELF_LONG_19_SEAT_SEAT.jpeg",
    ],
    features: ["Full AC", "Karaoke", "TV"],
    year: "",
    engine: "",
    fuelType: "Diesel",
    luggage: 0,
    isAvailable: true,
    description:
      "Minibus 19 kursi ideal untuk travel rombongan dan transportasi antar kota.",
  },
];
