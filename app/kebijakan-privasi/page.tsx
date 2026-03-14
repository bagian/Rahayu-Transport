import { ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kebijakan Privasi | Rahayu Transport",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan layanan Rahayu Transport Surabaya.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-slate-50/50 selection:bg-red-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
            Informasi Legal
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Kebijakan Privasi
          </h1>

          <div className="inline-block bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm">
            <span className="text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2">
              <ShieldCheck size={16} className="text-red-600" />
              Terakhir Diperbarui:{" "}
              <span className="text-red-600">13 Maret 2026</span>
            </span>
          </div>
        </div>

        {/* KERTAS DOKUMEN (Single Document Container) */}
        <div className="bg-white rounded-[24px] md:rounded-[40px] border border-slate-200 p-6 sm:p-10 md:p-16 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          {/* Aksen visual di pojok kertas */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10" />

          {/* Intro */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
            Selamat datang di{" "}
            <span className="text-slate-900 font-bold">
              Rahayu Transport Surabaya
            </span>
            . Kami sangat menghargai kepercayaan Anda dan berkomitmen untuk
            melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan menjaga informasi Anda
            saat Anda menggunakan layanan kami, baik melalui situs web,
            aplikasi, maupun pemesanan langsung.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">1.</span> Informasi yang Kami
                Kumpulkan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Untuk memproses keperluan perjalanan Anda, kami mengumpulkan
                informasi seperti:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Identitas Pribadi:",
                    desc: "Nama lengkap, nomor KTP/Paspor, tanggal lahir, dan jenis kelamin.",
                  },
                  {
                    title: "Kontak:",
                    desc: "Alamat email, nomor telepon, dan alamat rumah.",
                  },
                  {
                    title: "Detail Perjalanan:",
                    desc: "Preferensi hotel, kebutuhan medis/diet khusus, dan informasi asuransi perjalanan.",
                  },
                  {
                    title: "Informasi Pembayaran:",
                    desc: "Detail kartu kredit/debit atau informasi rekening bank (diproses melalui penyedia layanan pembayaran yang aman).",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-red-600 shrink-0 mt-1"
                    />
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-800">
                        {item.title}
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">2.</span> Bagaimana Kami
                Menggunakan Data Anda
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Kami menggunakan informasi Anda untuk:
              </p>
              <ul className="space-y-3">
                {[
                  "Melakukan pemesanan tiket pesawat, hotel, transportasi, dan tur.",
                  "Mengirimkan konfirmasi pemesanan dan pembaruan jadwal perjalanan.",
                  "Menyediakan layanan bantuan pelanggan selama perjalanan.",
                  "Mengirimkan penawaran promosi (hanya jika Anda memberikan izin).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2.5" />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">3.</span> Pembagian Informasi
                kepada Pihak Ketiga
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Untuk keberhasilan perjalanan Anda, kami perlu membagikan data
                Anda kepada mitra pihak ketiga, termasuk:
              </p>
              <ul className="space-y-3">
                {[
                  "Maskapai penerbangan, hotel, dan operator transportasi.",
                  "Otoritas pemerintah (untuk keperluan imigrasi atau visa).",
                  "Pihak berwajib, jika diwajibkan oleh hukum yang berlaku.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2.5" />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">4.</span> Keamanan Data
              </h2>
              <div className="bg-slate-50 border-l-4 border-red-600 p-5 rounded-r-2xl">
                <p className="text-slate-600 leading-relaxed mb-3">
                  Kami menerapkan langkah-langkah teknis dan organisasi yang
                  ketat untuk melindungi data Anda dari akses yang tidak sah,
                  kehilangan, atau pencurian.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Namun, perlu diingat bahwa tidak ada metode transmisi melalui
                  internet yang 100% aman.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">5.</span> Hak Anda
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Anda memiliki hak penuh atas data pribadi Anda, termasuk untuk:
              </p>
              <ul className="space-y-3">
                {[
                  "Mengakses dan meminta salinan data pribadi yang kami simpan.",
                  "Meminta koreksi jika terdapat data yang tidak akurat.",
                  "Meminta penghapusan data Anda (selama tidak bertentangan dengan kewajiban hukum kami).",
                  "Menolak penggunaan data Anda untuk tujuan pemasaran.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-red-600 shrink-0 mt-1"
                    />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">6.</span> Perubahan Kebijakan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu.
                Perubahan akan diberitahukan melalui situs web kami atau melalui
                email sebelum perubahan tersebut berlaku.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Note & Action */}
        <div className="mt-12 bg-slate-900 rounded-[24px] md:rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Punya pertanyaan terkait data Anda?
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
              Jika Anda memiliki kekhawatiran atau pertanyaan lebih lanjut
              mengenai bagaimana kami menangani dokumen dan informasi pribadi
              Anda, jangan ragu untuk menghubungi tim kami di Surabaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
              >
                Hubungi Customer Service
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white hover:text-slate-900 transition-colors"
              >
                Baca Syarat & Ketentuan
              </Link>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-600/20 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
