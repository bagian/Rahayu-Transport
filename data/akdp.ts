// data/akdp.ts

export interface TravelAKDP {
  id: string;
  name: string;
  slug: string;
  route: "Surabaya-Bondowoso" | "Bondowoso-Surabaya";
  type: string;
  price: number;
  seats: number;
  departureTime: string;
  via: string;
  image: string;
}

export const AKDP_DATA: TravelAKDP[] = [
  // --- SECTION: SURABAYA TO BONDOWOSO ---
  {
    id: "sb-1",
    name: "Travel Hiace Executive Pagi",
    slug: "hiace-surabaya-bondowoso-pagi",
    route: "Surabaya-Bondowoso",
    type: "Executive",
    price: 175000,
    seats: 14,
    departureTime: "06:00 WIB",
    via: "Tol Probolinggo",
    image: "/img/car/HIACE-PREMIO-SILVER.webp", // Sesuaikan dengan path gambarmu
  },
  {
    id: "sb-2",
    name: "Travel Innova Zenix Malam",
    slug: "zenix-surabaya-bondowoso-malam",
    route: "Surabaya-Bondowoso",
    type: "VIP",
    price: 200000,
    seats: 6,
    departureTime: "19:00 WIB",
    via: "Tol Probolinggo",
    image: "/img/car/Toyota-Innova-Zenix.webp",
  },

  // --- SECTION: BONDOWOSO TO SURABAYA ---
  {
    id: "bs-1",
    name: "Travel Hiace Executive Pagi",
    slug: "hiace-bondowoso-surabaya-pagi",
    route: "Bondowoso-Surabaya",
    type: "Executive",
    price: 175000,
    seats: 14,
    departureTime: "05:00 WIB",
    via: "Situbondo - Tol",
    image: "/img/car/HIACE-PREMIO-SILVER.webp",
  },
  {
    id: "bs-2",
    name: "Travel Innova Zenix Sore",
    slug: "zenix-bondowoso-surabaya-sore",
    route: "Bondowoso-Surabaya",
    type: "VIP",
    price: 200000,
    seats: 6,
    departureTime: "15:00 WIB",
    via: "Situbondo - Tol",
    image: "/img/car/Toyota-Innova-Zenix.webp",
  },
];
