"use client";

import { useState } from "react";

export default function Faq() {
  // State untuk melacak apakah semua FAQ sedang ditampilkan
  const [showAll, setShowAll] = useState(false);

  // Anggap ini berisi 20 FAQ kamu
  const faqs = [
    {
      q: "Apa itu Rahayu Transport?",
      a: "Rahayu Transport adalah perusahaan jasa transportasi yang menyediakan layanan Sewa Mobil, Sewa Hiace, Sewa Elf Long, dan Sewa Bus Pariwisata untuk berbagai kebutuhan seperti wisata, perjalanan dinas, outing perusahaan, ziarah, study tour, dan antar jemput bandara.",
    },
    {
      q: "Rahayu Transport Tersedia Di Kota Mana Saja?",
      a: "Rahayu Transport melayani penyewaan kendaraan di 8 kota besar di Indonesia, yaitu: Lombok, Bali, Banyuwangi, Surabaya, Yogyakarta, Semarang, Bandung, Palembang. Dengan jaringan tersebut, kami siap melayani berbagai kebutuhan wisata maupun perjalanan di berbagai wilayah.",
    },
    {
      q: "Apa Saja Kendaraan Yang Tersedia Di Rahayu Transport?",
      a: "Kami menyediakan berbagai jenis kendaraan sesuai dengan kebutuhan perjalanan anda: Sewa Mobil (Avanza, Innova, dan Lainnya), Toyota Hiace, Elf Long, dan Bus Pariwisata.",
    },
    {
      q: "Berapa Kapasitas Kendaraan Yang Tersedia?",
      a: "Berikut kapasitas kendaraan yang tersedia di Rahayu Transport: Mobil: 4-6 penumpang, Toyota Hiace: 10-15 penumpang, Elf Long: 15-19 Penumpang, Bus Pariwisata: 25-59 Penumpang.",
    },
    {
      q: "Apakah Rahayu Transport Melayani Perjalanan Wisata?",
      a: "Ya, kami melayani berbagai jenis perjalanan seperti: Wisata Keluarga, Wisata Rombongan, Study Tour Sekolah, Outing Perusahaan, Perjalanan Ziarah, Kunjungan Kerja.",
    },
    {
      q: "Apakah Tersedia Layanan Sewa Hiace?",
      a: "Ya, Rahayu Transport menyediakan sewa Toyota Hiace yang cocok untuk perjalanan rombongan kecil seperti wisata keluarga, perjalanan kantor, maupun antar jemput bandara.",
    },
    {
      q: "Apakah Tersedia Sewa Elf Long Untuk Rombongan?",
      a: "Tentu. Elf Long sangat cocok untuk rombongan sekitar 15–19 orang seperti perjalanan wisata keluarga besar, acara komunitas, atau perjalanan kantor.",
    },
    {
      q: "Apakah Tersedia Sewa Bus Pariwisata?",
      a: "Ya, kami menyediakan bus pariwisata dengan berbagai kapasitas, mulai dari bus medium hingga bus besar untuk perjalanan rombongan besar.",
    },
    {
      q: "Apakah Sewa Kendaraan Sudah Termasuk Dengan Supir?",
      a: "Sebagian besar layanan sudah termasuk sopir dengan kualifikasi profesional dan berpengalaman, sehingga perjalanan Anda lebih aman, nyaman, dan bebas repot.",
    },
    {
      q: "Apakah Bisa Sewa Kendaraan Untuk Perjalanan Luar Kota?",
      a: "Ya, Rahayu Transport melayani perjalanan dalam kota maupun luar kota, termasuk perjalanan wisata antar kota dan antar provinsi.",
    },
    {
      q: "Apakah Bisa Dijemput Di Bandara, Hotel, Atau Lokasi Tertentu?",
      a: "Ya, Kami menyediakan layanan antar jemput di bandara, hotel, rumah, maupun kantor sesuai dengan lokasi yang Anda Tentukan.",
    },
    {
      q: "Bagaiamana Cara Booking Kendaraan Di Rahayu Transport?",
      a: "Anda dapat melakukan pemesanan melalui: WhatsApp, Telepon, dan Form pemesanan di website. Tim kami akan membantu memastikan ketersediaan armada dan jadwal pejalanan.",
    },
    {
      q: "Berapa Minimal Waktu Sewa Kendaraan?",
      a: "Minimal waktu sewa biasanya 12 jam untuk penggunaan dalam kota. Untuk perjalanan luar kota, durasi akan menyesuaikan dengan paket perjalanan.",
    },
    {
      q: "Bagaimana Sistem Pembayaran Sewa Kendaraan?",
      a: "Pembayaran dapat dilakukan melalui transfer bank atau pembayaran langsung. Untuk pemesanan biasanya diperlukan DP (Down Payment) sebagai tanda jadi booking.",
    },
    {
      q: "Apakah Armada Selalu Dalam Kondisi Baik?",
      a: "Semua armada Rahayu Transport selalu dirawat secara rutin, bersih, dan dalam kondisi prima untuk memastikan keamanan dan kenyamanan perjalanan Anda.",
    },
    {
      q: "Apakah Rahayu Transport Pernah Menangani Tamu VIP Atau VVIP?",
      a: "Ya. Rahayu Transport berpengalaman menangani tamu VIP dan VVIP, termasuk layanan transportasi untuk tamu kenegaraan, kementerian, serta tamu-tamu negara yang membutuhkan standar pelayanan tinggi.",
    },
    {
      q: "Apakah Rahayu Transport Berpengalaman Melayani Acara Resmi Pemerintah?",
      a: "Tentu. Kami telah dipercaya untuk mendukung berbagai kegiatan resmi pemerintah, kementerian, dan kunjungan delegasi dengan layanan transportasi yang profesional.",
    },
    {
      q: "Apakah Kendaraan Untuk Tamu VIP Memilki Standar Khusus?",
      a: "Ya. Untuk layanan VIP dan VVIP kami memastikan: Armada dalam kondisi prima dan bersih, Sopir profesional dan berpengalaman, Kendaraan nyaman dan represntatif, Pelayanan tepat waktu dan profesional.",
    },
    {
      q: "Apakah Rahayu Transport Bisa Menangani Transportasi Untuk Event Besar?",
      a: "Ya, kami dapat menangani transportasi untuk event besar, konferensi, kegiatan pemerintahan, maupun kunjungan delegasi, dengan menyediakaan armada dari mobil hingga bus pariwisata.",
    },
    {
      q: "Mengapa Memilih Rahayu Transport?",
      a: "Beberapa alasan memilih Rahayu Transport: (1) Armada lengkap: Mobil, Hiace, Elf Long, dan Bus Pariwisata. (2) Tersedia di 8 kota besar di Indonesia. (3) Armada bersih dan terawat. (4) Berpengalaman menangani tamu VIP, Kementerian, dan Tamu Negara.",
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);
  return (
    <section className="py-24 bg-slate-100">
      <div className="mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
            F.A.Q
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Pertanyaan Populer
          </h2>
          <p className="text-slate-500">
            Punya pertanyaan mengenai layanan Rahayu Trans? Mungkin sudah kami
            jawab di sini.
          </p>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
            >
              <summary className="flex justify-between items-center p-7 cursor-pointer font-bold text-slate-800 list-none select-none">
                <span className="pr-4">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-open:rotate-180 transition-transform duration-300 shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </summary>
              <div className="px-7 pb-7 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-5 animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Tombol Lihat Semua / Sembunyikan */}
        {faqs.length > 5 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full text-sm font-bold border-2 border-red-100 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              {showAll ? "Sembunyikan Pertanyaan" : "Lihat Semua Pertanyaan"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
