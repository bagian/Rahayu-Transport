import { Users, Clock, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AKDP_DATA, TravelAKDP } from "@/data/akdp";

export const metadata = {
  title: "Travel AKDP Surabaya - Bondowoso PP | Rahayu Transport",
  description:
    "Layanan travel antar kota dalam provinsi (AKDP) rute Surabaya ke Bondowoso dan sebaliknya dengan armada Hiace dan Innova yang nyaman.",
};

const TravelCard = ({ travel }: { travel: TravelAKDP }) => (
  <Link
    href={`/travel-akdp/${travel.slug}`}
    className="group flex flex-col bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 hover:border-red-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 cursor-pointer h-full"
  >
    {/* Image Section */}
    <div className="relative h-48 sm:h-56 w-full bg-slate-100 overflow-hidden shrink-0">
      {travel.image ? (
        <Image
          src={travel.image}
          alt={travel.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
      ) : (
        <div className="w-full h-full bg-slate-200 animate-pulse" />
      )}

      {/* Badge Kanan Atas (Tipe Travel) */}
      <div className="absolute top-4 right-4">
        <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[9px] md:text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-100 shadow-sm">
          {travel.type} Class
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
          Rute {travel.route.replace("-", " ➔ ")}
        </span>
      </div>

      {/* Judul berubah merah saat card di-hover */}
      <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-red-600 transition-colors line-clamp-2">
        {travel.name}
      </h3>

      {/* Specs Row (Kapasitas & Jam) */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Users size={16} className="text-slate-400 shrink-0" />
          <span className="text-xs font-bold text-slate-700">
            {travel.seats} Kursi
          </span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Clock size={16} className="text-slate-400 shrink-0" />
          <span className="text-xs font-bold text-slate-700">
            {travel.departureTime}
          </span>
        </div>
      </div>

      {/* Features List (Dibuat otomatis agar layout sama persis) */}
      <ul className="space-y-2 mb-8 flex-grow">
        {[
          "Antar Jemput Alamat (Door to Door)",
          `Melewati Jalur ${travel.via}`,
          "Gratis Bagasi Penumpang",
        ].map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-[11px] md:text-xs text-slate-500 font-medium"
          >
            <CheckCircle2 size={14} className="text-red-600 shrink-0" />
            <span className="truncate">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer / Price */}
      <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
        <div>
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Harga Tiket
          </span>
          <p className="text-xl font-black text-slate-900">
            {/* Format disesuaikan ke gaya "175k" */}
            Rp {(travel.price / 1000).toLocaleString("id-ID")}k
            <span className="text-xs font-medium text-slate-400 ml-1">
              /pax
            </span>
          </p>
        </div>
        <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl text-xs font-black group-hover:bg-red-600 transition-all shadow-lg shadow-slate-200 group-hover:shadow-red-500/30 shrink-0">
          Pesan Tiket
        </div>
      </div>
    </div>
  </Link>
);

export default function TravelAKDPPage() {
  const surabayaToBondowoso = AKDP_DATA.filter(
    (item) => item.route === "Surabaya-Bondowoso",
  );
  const bondowosoToSurabaya = AKDP_DATA.filter(
    (item) => item.route === "Bondowoso-Surabaya",
  );

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen selection:bg-red-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[1440px]">
        {/* Header - Minimalist */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Layanan{" "}
              <span className="text-red-600 font-extrabold">Travel</span> AKDP
            </h1>
            <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg font-medium">
              Nikmati perjalanan yang nyaman, aman, dan tepat waktu dengan
              layanan door-to-door (antar jemput alamat) kami.
            </p>
          </div>
        </div>

        {/* SECTION 1: SURABAYA - BONDOWOSO */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Surabaya ➔ Bondowoso
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Jadwal keberangkatan dari Sidoarjo / Surabaya.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
            {surabayaToBondowoso.map((travel) => (
              <TravelCard key={travel.id} travel={travel} />
            ))}
          </div>
        </div>

        {/* SECTION 2: BONDOWOSO - SURABAYA */}
        <div>
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Bondowoso ➔ Surabaya
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Jadwal keberangkatan menuju Sidoarjo / Surabaya / Bandara
                Juanda.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
            {bondowosoToSurabaya.map((travel) => (
              <TravelCard key={travel.id} travel={travel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
