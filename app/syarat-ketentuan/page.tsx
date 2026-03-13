import {
  FileText,
  Car,
  UserSquare2,
  CreditCard,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Syarat dan Ketentuan | Rahayu Transport",
  description:
    "Syarat, ketentuan, dan kebijakan layanan penyewaan mobil dan travel di Rahayu Transport Sidoarjo dan Surabaya.",
};

export default function TermsAndConditions() {
  const termsData = [
    {
      id: "umum",
      icon: FileText,
      title: "Persyaratan Umum",
      rules: [
        "Penyewa wajib memberikan identitas asli yang valid (e-KTP atau Paspor).",
        "Penyewa harus berusia minimal 21 tahun untuk menyewa kendaraan lepas kunci.",
        "Bersedia untuk didokumentasikan (foto/video) bersama unit kendaraan saat proses serah terima.",
        "Pihak Rahayu Transport berhak menolak pesanan apabila data penyewa dianggap mencurigakan atau tidak lengkap.",
      ],
    },
    {
      id: "lepas-kunci",
      icon: Car,
      title: "Sewa Lepas Kunci (Self Drive)",
      rules: [
        "Wajib memiliki dan menunjukkan SIM A Asli yang masih berlaku.",
        "Meninggalkan jaminan berupa sepeda motor (minimal tahun 2015) beserta STNK asli atas nama penyewa selama masa sewa.",
        "Kendaraan hanya diperbolehkan untuk digunakan di area Provinsi Jawa Timur (kecuali ada kesepakatan tertulis sebelumnya).",
        "Dilarang keras meminjamkan, menyewakan kembali, atau menggadaikan unit kendaraan kepada pihak ketiga.",
        "Tidak diperkenankan menggunakan kendaraan untuk tindakan yang melanggar hukum (kriminalitas, balap liar, dll).",
      ],
    },
    {
      id: "dengan-supir",
      icon: UserSquare2,
      title: "Sewa Dengan Supir (Include Driver)",
      rules: [
        "Durasi sewa harian dengan supir adalah sesuai kesepakatan (umumnya 12 jam atau full day hingga pukul 23.59 WIB).",
        "Biaya sewa mobil + supir belum termasuk biaya BBM, Tol, Parkir, dan Tiket Masuk Wisata (kecuali mengambil paket All-In).",
        "Penyewa wajib menyediakan uang makan untuk supir (standar Rp 50.000/hari) atau mengajak supir makan bersama.",
        "Untuk perjalanan ke luar kota yang mengharuskan menginap, biaya penginapan supir ditanggung oleh penyewa (bisa berupa fasilitas kamar atau uang ganti penginapan).",
      ],
    },
    {
      id: "pembayaran",
      icon: CreditCard,
      title: "Pembayaran & Pembatalan",
      rules: [
        "Booking unit dianggap sah apabila penyewa telah membayarkan Down Payment (DP) minimal 30% dari total biaya sewa.",
        "Pelunasan biaya sewa wajib dilakukan pada saat serah terima kendaraan.",
        "Pembatalan (Cancel) pesanan pada hari H keberangkatan akan mengakibatkan DP hangus 100%.",
        "Pembatalan maksimal H-3 sebelum keberangkatan, DP akan dikembalikan 50%.",
      ],
    },
    {
      id: "asuransi",
      icon: ShieldAlert,
      title: "Tanggung Jawab & Asuransi",
      rules: [
        "Apabila terjadi kecelakaan atau kerusakan ringan (lecet, penyok), penyewa dikenakan biaya klaim asuransi (Own Risk) sebesar Rp 350.000 per titik kejadian.",
        "Kerusakan berat yang mengakibatkan mobil harus masuk bengkel dalam waktu lama, penyewa wajib mengganti biaya sewa selama mobil diperbaiki (Loss of Use).",
        "Kehilangan kendaraan akibat kelalaian penyewa (seperti kunci tertinggal/diberikan ke orang tak dikenal) menjadi tanggung jawab penuh penyewa sesuai harga unit kendaraan.",
        "Kehilangan barang bawaan pribadi milik penyewa di dalam kendaraan bukan merupakan tanggung jawab pihak Rahayu Transport.",
      ],
    },
    {
      id: "pelanggaran",
      icon: AlertTriangle,
      title: "Pelanggaran & Denda Overtime",
      rules: [
        "Keterlambatan pengembalian unit (Overtime) dikenakan biaya sebesar 10% dari harga sewa per jam.",
        "Overtime lebih dari 5 jam akan dihitung sebagai sewa full 1 hari (24 jam).",
        "Segala bentuk denda tilang elektronik (E-TLE) atau tilang fisik yang terjadi selama masa sewa adalah tanggung jawab penuh penyewa dan akan ditagihkan kepada penyewa.",
      ],
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-slate-50/50 selection:bg-red-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[1024px]">
        {" "}
        {/* Dibuat sedikit lebih sempit agar teks nyaman dibaca */}
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
            Informasi Legal
            <span className="w-8 h-1 bg-red-600 rounded-full"></span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Syarat & Ketentuan Layanan
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Harap membaca dengan seksama seluruh kebijakan dan persyaratan di
            bawah ini sebelum melakukan reservasi kendaraan di Rahayu Transport.
          </p>
        </div>
        {/* Content Section - Grouped Cards */}
        <div className="space-y-8 md:space-y-10">
          {termsData.map((section, index) => {
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
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white hover:text-slate-900 transition-colors"
              >
                Hubungi Admin
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
