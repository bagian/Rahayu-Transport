import { CarFront, CalendarCheck, CreditCard, Route } from "lucide-react";

export default function BookingSteps() {
  const steps = [
    {
      title: "Pilih Armada",
      desc: "Tentukan mobil yang sesuai dengan gaya dan kebutuhan perjalanan Anda.",
      icon: CarFront,
    },
    {
      title: "Atur Jadwal",
      desc: "Pilih tanggal dan lokasi penjemputan unit di area yang kami jangkau.",
      icon: CalendarCheck,
    },
    {
      title: "Selesaikan Pembayaran",
      desc: "Proses transaksi aman dengan berbagai pilihan metode pembayaran.",
      icon: CreditCard,
    },
    {
      title: "Nikmati Perjalanan",
      desc: "Unit kami antarkan ke lokasi Anda dalam kondisi bersih dan bensin penuh.",
      icon: Route,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-red-600 rounded-full"></span>
              Proses Sewa
            </span>
            <h2 className="text-4xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Cara Mudah <br className="hidden md:block" /> Pesan Kendaraan
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed border-l-2 border-red-100 pl-6">
            Hanya butuh 4 langkah mudah untuk memulai perjalanan Anda bersama
            Rahayu Transport. Proses cepat, transparan, dan tanpa ribet.
          </p>
        </div>

        {/* Layout  (Staggered Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 flex flex-col justify-between h-full min-h-[320px] ${
                  // efek naik-turun pada desktop
                  index % 2 !== 0 ? "lg:translate-y-12" : ""
                }`}
              >
                {/* Latar Belakang Nomor Besar (Watermark) */}
                <div className="absolute right-4 top-4 text-slate-100/90 font-black text-8xl z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-red-100/80 pointer-events-none">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  {/* Ikon Langkah */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
                    <Icon
                      size={28}
                      className="text-slate-400 group-hover:text-white transition-colors duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Indikator Progres di bawah card */}
                <div className="relative z-10 w-full h-1 bg-slate-100 rounded-full mt-8 overflow-hidden">
                  <div className="h-full bg-red-600 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
