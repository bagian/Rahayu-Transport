import { Users, Fuel, Settings2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FLEET_DATA } from "@/data/fleet"; // Mengambil data langsung dari sumber utama

export default function FeaturedFleet() {
  // Mengambil 6 mobil pertama dari database lokal untuk ditampilkan di halaman utama
  const featuredCars = FLEET_DATA.slice(0, 6);

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
              Armada Kami
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
              Pilih Kendaraan Impian
            </h2>
          </div>
          <Link
            href="/armada"
            className="flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all"
          >
            Lihat Semua Unit <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredCars.map((car) => (
            <div
              key={car.slug} // Menggunakan slug sebagai key karena pasti unik
              className="group bg-white rounded-[40px] p-5 border border-slate-200/60 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 flex flex-col"
            >
              <Link
                href={`/armada/${car.slug}`}
                className="relative h-80 w-full mb-6 overflow-hidden rounded-[30px] bg-slate-100 block"
              >
                <Image
                  src={car.images[0]} // Mengambil gambar pertama dari array images
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-red-600 shadow-sm z-10">
                  {car.category}
                </div>
              </Link>

              <div className="px-2 flex-grow">
                <Link href={`/armada/${car.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 hover:text-red-600 transition-colors">
                    {car.name}
                  </h3>
                </Link>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Users size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.capacity} Kursi
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Settings2 size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Fuel size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.fuelType}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-auto">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      Harga/Hari
                    </span>
                    <p className="text-xl font-black text-slate-900">
                      {/* Otomatis format angka ke format Rupiah (ex: 5.500.000) */}
                      Rp {car.pricePerDay.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <Link href={`/armada/${car.slug}`}>
                    <div className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-red-500/40 cursor-pointer">
                      <ArrowRight size={22} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 flex justify-center items-center">
          <Link
            href="/armada"
            className="bg-red-800 text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 flex items-center gap-2 group"
          >
            Lihat Semua Unit
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
