import {
  Database,
  ClipboardCheck,
  Share2,
  ShieldCheck,
  Trash2,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kebijakan Privasi | Rahayu Transport",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan layanan sewa mobil dan travel Rahayu Transport Sidoarjo.",
};

export default function PrivacyPolicy() {
  const privacyData = [
    {
      id: "pengumpulan",
      icon: Database,
      title: "Pengumpulan Data Informasi",
      rules: [
        "Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat melakukan pemesanan (booking) melalui WhatsApp, formulir website, atau secara langsung.",
        "Data yang dikumpulkan mencakup: Nama lengkap, Nomor Telepon/WhatsApp, Alamat Domisili, Alamat Email, dan Titik Lokasi Penjemputan.",
        "Untuk keperluan verifikasi sewa lepas kunci, kami juga akan menyimpan salinan identitas resmi Anda (seperti e-KTP, SIM A, Paspor) dan dokumen jaminan (STNK motor).",
      ],
    },
    {
      id: "penggunaan",
      icon: ClipboardCheck,
      title: "Penggunaan Informasi",
      rules: [
        "Memproses dan mengelola reservasi kendaraan atau tiket travel Anda.",
        "Menghubungi Anda terkait konfirmasi pesanan, jadwal penjemputan, atau kendala operasional (perubahan armada, cuaca, dll).",
        "Mencegah tindakan penipuan, pencurian kendaraan, atau aktivitas ilegal lainnya demi keamanan aset Rahayu Transport.",
        "Meningkatkan kualitas layanan pelanggan dan pengalaman pengguna di website kami berdasarkan kritik dan saran yang Anda berikan.",
      ],
    },
    {
      id: "berbagi",
      icon: Share2,
      title: "Pembagian Data dengan Pihak Ketiga",
      rules: [
        "Rahayu Transport berkomitmen untuk TIDAK menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga manapun untuk tujuan pemasaran.",
        "Kami hanya akan membagikan data Anda kepada pihak berwajib (Kepolisian, Pengadilan) apabila diwajibkan oleh hukum yang berlaku di Indonesia, khususnya jika terjadi tindak pidana penggelapan atau kecelakaan.",
        "Data rute dan nomor telepon Anda mungkin dibagikan secara internal kepada supir (driver) yang bertugas untuk keperluan penjemputan semata.",
      ],
    },
    {
      id: "keamanan",
      icon: ShieldCheck,
      title: "Keamanan Data Pelanggan",
      rules: [
        "Kami menerapkan langkah-langkah keamanan fisik dan elektronik untuk melindungi data pribadi dan dokumen asli Anda dari akses yang tidak sah.",
        "Dokumen asli yang dijadikan jaminan (seperti STNK/Motor) akan disimpan di tempat yang aman dan terkunci di kantor operasional kami selama masa sewa berlangsung.",
        "Data digital yang dikirimkan melalui WhatsApp atau email hanya dapat diakses oleh admin atau staf manajemen yang berwenang.",
      ],
    },
    {
      id: "penyimpanan",
      icon: Trash2,
      title: "Penyimpanan & Penghapusan Data",
      rules: [
        "Kami akan menyimpan informasi pribadi dan riwayat transaksi Anda selama diperlukan untuk tujuan operasional bisnis atau selama diwajibkan oleh hukum perpajakan.",
        "Setelah masa sewa berakhir dan unit dikembalikan dalam keadaan baik, seluruh dokumen asli yang menjadi jaminan akan dikembalikan 100% kepada Anda.",
        "Anda memiliki hak untuk meminta kami menghapus data kontak Anda dari sistem database kami (misalnya agar tidak menerima pesan promosi/broadcast di masa mendatang).",
      ],
    },
    {
      id: "pembaruan",
      icon: RefreshCcw,
      title: "Pembaruan Kebijakan Privasi",
      rules: [
        "Rahayu Transport berhak untuk memperbarui, mengubah, atau memodifikasi Kebijakan Privasi ini kapan saja tanpa pemberitahuan langsung sebelumnya.",
        "Setiap perubahan material akan langsung diperbarui di halaman website ini.",
        "Dengan terus menggunakan layanan kami setelah adanya perubahan, Anda dianggap menyetujui Kebijakan Privasi yang baru.",
      ],
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-slate-50/50 selection:bg-red-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[1024px]">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
            Informasi Legal
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Kepercayaan dan keamanan data Anda adalah prioritas utama kami.
            Berikut adalah cara Rahayu Transport mengelola dan melindungi
            informasi pribadi Anda.
          </p>
        </div>

        {/* Content Section - Grouped Cards */}
        <div className="space-y-8 md:space-y-10">
          {privacyData.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 p-6 md:p-10 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-slate-50">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 block">
                      Bagian 0{index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <ul className="space-y-5">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 size={20} className="text-red-600" />
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                        {rule}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Note & Action */}
        <div className="mt-16 bg-slate-900 rounded-[24px] md:rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Punya pertanyaan terkait data Anda?
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
              Jika Anda memiliki kekhawatiran atau pertanyaan lebih lanjut
              mengenai bagaimana kami menangani dokumen dan informasi pribadi
              Anda, jangan ragu untuk menghubungi tim kami.
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
