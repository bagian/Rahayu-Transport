import { ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Syarat dan Ketentuan | Rahayu Transport",
  description:
    "Syarat, ketentuan, dan kebijakan layanan perjalanan dan transportasi di Rahayu Transport Surabaya.",
};

export default function TermsAndConditions() {
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
            Syarat & Ketentuan
          </h1>

          <div className="inline-block bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm">
            <span className="text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2">
              <ShieldCheck size={16} className="text-red-600" />
              Terakhir Diperbarui:{" "}
              <span className="text-red-600">14 Maret 2026</span>
            </span>
          </div>
        </div>

        {/* KERTAS DOKUMEN (Single Document Container) */}
        <div className="bg-white rounded-[24px] md:rounded-[40px] border border-slate-200 p-6 sm:p-10 md:p-16 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          {/* Aksen visual di pojok kertas */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10" />

          {/* Intro */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium border-l-4 border-red-600 pl-5 bg-slate-50 py-4 pr-4 rounded-r-2xl">
            Harap baca Syarat & Ketentuan ini dengan saksama sebelum melakukan
            pemesanan. Dengan membayar uang muka atau melunasi biaya perjalanan,
            Anda dianggap telah memahami dan menyetujui seluruh ketentuan di
            bawah ini.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">1.</span> Pendaftaran dan
                Pemesanan
              </h2>
              <ul className="space-y-3">
                {[
                  "Pendaftaran dapat dilakukan melalui situs web, aplikasi, atau datang langsung ke kantor kami. Jl. Jawa No.5A, Gubeng, Kec. Gubeng, Surabaya, Jawa Timur 60295.",
                  "Pemesanan dianggap sah apabila pelanggan telah memberikan data identitas yang valid (KTP/Paspor) dan membayar Uang Muka (DP) sesuai ketentuan. ",
                  "Pelanggan bertanggung jawab atas keakuratan data yang diberikan. Kesalahan pada nama tiket akibat kesalahan data sepenuhnya menjadi tanggung jawab pelanggan. ",
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

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">2.</span> Pembayaran
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Uang Muka (DP):",
                    desc: "Sebesar 50% dari total biaya harus dibayarkan saat pendaftaran dan bersifat non-refundable (tidak dapat dikembalikan) kecuali ditentukan lain. ",
                  },
                  {
                    title: "Pelunasan:",
                    desc: "Harus dilakukan paling lambat 2 hari sebelum tanggal keberangkatan. Jika pelunasan tidak dilakukan tepat waktu, kami berhak membatalkan pesanan secara sepihak dan uang muka dianggap hangus. ",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0 mt-2.5" />
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

            {/* Section 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">3.</span> Biaya Perjalanan
                Termasuk & Tidak Termasuk
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Termasuk:",
                    desc: "Transportasi, Akomodasi, dan Service Makan. ",
                  },
                  {
                    title: "Tidak Termasuk:",
                    desc: "Biaya pribadi (laundry, telepon, tip), asuransi tambahan, dan biaya di luar program yang disepakati. ",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0 mt-2.5" />
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

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">4.</span> Pembatalan oleh
                Pelanggan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Apabila terjadi pembatalan oleh pelanggan, maka akan dikenakan
                biaya pembatalan sebagai berikut:
              </p>
              <ul className="space-y-3">
                {[
                  "Pembatalan 2 hari sebelum berangkat: Potongan sebesar DP. ",
                  "Pembatalan 2-3 hari sebelum berangkat: Potongan 50% dari harga total. ",
                  "Pembatalan kurang dari 1 hari sebelum berangkat: Potongan 100% (tidak ada pengembalian uang). ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2.5" />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">5.</span> Perubahan Jadwal dan
                Force Majeure
              </h2>
              <ul className="space-y-3">
                {[
                  "Rahayu Transport berhak mengubah rute, jadwal, atau hotel demi keamanan dan kenyamanan peserta. ",
                  "Kami tidak bertanggung jawab atas kerugian atau penundaan yang disebabkan oleh Force Majeure (keadaan di luar kendali), seperti bencana alam, kerusuhan, wabah penyakit, kebijakan pemerintah, atau pembatalan dari pihak maskapai/kereta api. ",
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
                <span className="text-red-600">6.</span> Tanggung Jawab Peserta
              </h2>
              <ul className="space-y-3">
                {[
                  "Setiap peserta wajib membawa dokumen perjalanan yang sah dan masih berlaku (minimal 6 bulan untuk paspor). ",
                  "Peserta wajib membawa identitas pribadi Kartu tanda penduduk, Surat izin mengemudi atau Paspor.",
                  "Kami berhak mengeluarkan peserta dari rombongan jika peserta dianggap mengganggu kenyamanan atau keamanan peserta lain tanpa pengembalian biaya. ",
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

            {/* Section 7 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">7.</span> Asuransi Perjalanan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kami sangat menyarankan setiap peserta untuk memiliki asuransi
                perjalanan sendiri. Kami tidak bertanggung jawab atas
                kecelakaan, kehilangan barang pribadi, atau biaya medis selama
                perjalanan di luar cakupan yang kami sediakan (jika ada).
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">8.</span> Dokumentasi
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kami berhak menggunakan foto atau video peserta selama
                perjalanan untuk keperluan promosi atau media sosial perusahaan,
                kecuali peserta menyatakan keberatan secara tertulis sebelum
                perjalanan dimulai.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-red-600">9.</span> Hukum yang Berlaku
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Syarat dan Ketentuan ini tunduk pada hukum yang berlaku di
                Republik Indonesia. Segala perselisihan akan diselesaikan secara
                musyawarah mufakat atau melalui pengadilan yang berwenang di
                Surabaya.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Note & Action */}
        <div className="mt-12 bg-slate-900 rounded-[24px] md:rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Setuju dengan ketentuan kami?
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
              Dengan melakukan pemesanan (booking) melalui WhatsApp atau form
              website, Anda dianggap telah membaca, memahami, dan menyetujui
              seluruh Syarat & Ketentuan yang berlaku.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/armada"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
              >
                Pilih Kendaraan
              </Link>
              <Link
                href="/kebijakan-privasi"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white hover:text-slate-900 transition-colors"
              >
                Baca Kebijakan Privasi
              </Link>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
