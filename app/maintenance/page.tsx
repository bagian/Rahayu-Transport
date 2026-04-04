// file: app/maintenance/page.tsx

import React from "react";
import { Wrench, Clock, MessageCircle, Car, ShieldAlert } from "lucide-react";

export default function MaintenancePage() {
  const handleWhatsApp = () => {
    const message =
      "Halo Rahayu Transport, saya ingin bertanya tentang layanan sewa mobil dikarenakan website sedang dalam perbaikan.";
    return `https://wa.me/6285784809074?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 selection:bg-red-100">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-100/50 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-200/50 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 text-center">
        {/* Ikon Animasi */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-red-600 text-white w-full h-full rounded-full flex items-center justify-center shadow-lg shadow-red-200">
            <Wrench size={40} className="animate-pulse" />
          </div>
          {/* <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2 rounded-xl shadow-sm">
            <Car size={20} />
          </div> */}
        </div>

        {/* Teks Konten */}
        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          Website Sedang Dalam <span className="text-red-600">Perbaikan</span>
        </h1>

        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Kami sedang melakukan peningkatan sistem agar dapat melayani
          perjalanan Anda dengan lebih baik lagi. Proses ini tidak akan memakan
          waktu lama.
        </p>

        {/* Info Tambahan */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <Clock size={16} className="text-red-600" />
            <span>Segera Kembali</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <ShieldAlert size={16} className="text-red-600" />
            <span>Sistem Upgrade</span>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-px bg-slate-100 mb-8 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Butuh Mobil Sekarang?
          </span>
        </div>

        {/* Tombol Darurat WhatsApp */}
        <a
          href={handleWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-slate-900 hover:bg-red-600 text-white py-4 px-6 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200 hover:shadow-red-200 active:scale-[0.98] group"
        >
          <MessageCircle size={20} className="group-hover:animate-bounce" />
          Hubungi Admin via WhatsApp
        </a>
      </div>

      {/* Footer Logo */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Rahayu Transport © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
