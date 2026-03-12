"use client";

import { useMemo, use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  ArrowLeft,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MessageSquare,
  Clock,
  Map,
  CheckCircle2,
  Info,
  ChevronRight as ChevronSmall,
  MapPin,
} from "lucide-react";

// MUI Components
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/id";

// Data Source KHUSUS AKDP
import { AKDP_DATA } from "@/data/akdp";

interface TravelParams {
  slug: string;
}

export default function TravelAKDPDetailClient({
  params,
}: {
  params: Promise<TravelParams>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [openStart, setOpenStart] = useState(false);

  // Ambil data spesifik dari akdp.ts
  const travel = useMemo(() => {
    return AKDP_DATA.find((t) => t.slug === slug);
  }, [slug]);

  if (!travel) notFound();

  const handleBooking = () => {
    const start = startDate ? startDate.format("DD/MM/YYYY") : "-";

    const message = `Halo Rahayu Trans, saya ingin reservasi tiket Travel AKDP:\n\nJurusan: ${travel.route}\nLayanan: ${travel.name}\nTanggal: ${start}\n\nApakah kursi masih tersedia?`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
      <div className="min-h-screen pb-20 selection:bg-red-100 pt-28">
        <nav className="sticky top-0 z-[60] border-b border-slate-100 h-16 flex items-center">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link
              href="/travel-akdp"
              className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors text-sm cursor-pointer"
            >
              <ArrowLeft size={18} />
              <span className="font-medium">Kembali ke Layanan AKDP</span>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs">
              <Link href="/" className="hover:text-red-600 cursor-pointer">
                Home
              </Link>
              <ChevronSmall size={12} />
              <Link
                href="/travel-akdp"
                className="hover:text-red-600 cursor-pointer"
              >
                Travel AKDP
              </Link>
              <ChevronSmall size={12} />
              <span className="text-slate-900 font-medium truncate max-w-[150px]">
                {travel.name}
              </span>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 md:px-6 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Image Hero Section - Sederhana karena travel biasanya hanya 1 gambar unit */}
              <div className="relative rounded-[1.5rem] overflow-hidden bg-white border border-slate-100 aspect-video shadow-sm">
                <Image
                  src={travel.image}
                  alt={travel.name}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {travel.type} Class
                </div>
              </div>

              {/* Spesifikasi Travel */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-red-600 rounded-full" />
                  <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                    Informasi Perjalanan
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { icon: MapPin, label: "Rute", val: travel.route },
                    {
                      icon: Clock,
                      label: "Berangkat",
                      val: travel.departureTime,
                    },
                    { icon: Map, label: "Jalur Via", val: travel.via },
                    {
                      icon: Users,
                      label: "Kapasitas",
                      val: `${travel.seats} Penumpang`,
                    },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-[1.5rem] border border-slate-200 flex flex-col items-center text-center group hover:border-red-200 transition-all cursor-default"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-4">
                        <spec.icon size={22} />
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-slate-900 leading-tight">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ketentuan Travel (Disusun ulang untuk relevansi Travel) */}
              <div className="mt-8 bg-white p-8 rounded-[1.5rem] border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-red-600" size={22} />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Ketentuan Penumpang Travel
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Penjemputan Alamat",
                      desc: "Layanan Door-to-Door. Driver akan mengkonfirmasi lokasi penjemputan 1 jam sebelum jadwal.",
                    },
                    {
                      title: "Ketepatan Waktu",
                      desc: "Harap bersiap 30 menit sebelum jadwal. Keterlambatan penumpang tidak akan ditunggu lama demi kenyamanan bersama.",
                    },
                    {
                      title: "Bagasi Bawaan",
                      desc: "Maksimal 1 tas ukuran sedang per penumpang. Kelebihan bagasi akan dikenakan biaya tambahan (charge).",
                    },
                    {
                      title: "Pembatalan Tiket",
                      desc: "Pembatalan sepihak di hari H keberangkatan maka DP (Down Payment) hangus / tiket dianggap hangus.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-red-100"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-red-600 shrink-0 mt-0.5"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-900">
                          {item.title}
                        </span>
                        <span className="text-xs leading-relaxed text-slate-500">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: BOOKING CARD (Diubah untuk Tiket Travel) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white rounded-[1.5rem] p-8 md:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 sticky top-32">
                <div className="mb-8">
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-4 inline-block">
                    Pemesanan Tiket Travel
                  </span>
                  <h1 className="text-3xl font-semibold text-slate-900 mb-2 leading-tight">
                    {travel.name}
                  </h1>
                  <div className="flex items-center gap-4 text-slate-400 text-xs pt-4">
                    <div className="flex items-center gap-1 font-medium text-slate-600">
                      <MapPin size={14} className="text-red-500" />{" "}
                      {travel.route}
                    </div>
                  </div>
                </div>

                <div className="py-6 border-y border-slate-50">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">
                    Harga Tiket
                  </p>
                  <div className="flex items-baseline gap-2 text-slate-900">
                    <span className="text-4xl font-semibold text-slate-900">
                      Rp {travel.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-slate-400 text-xs">/ Orang</span>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {/* DATEPICKER BERANGKAT (Travel tidak butuh tanggal selesai) */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Tanggal Keberangkatan
                    </label>
                    <div className="relative w-full">
                      <CalendarDays
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-red-500 z-30 pointer-events-none"
                        size={20}
                      />
                      <MobileDatePicker
                        open={openStart}
                        onOpen={() => setOpenStart(true)}
                        onClose={() => setOpenStart(false)}
                        value={startDate}
                        minDate={dayjs()}
                        onChange={(newValue) => {
                          setStartDate(newValue as Dayjs | null);
                          setOpenStart(false);
                        }}
                        slots={{ openPickerIcon: () => null }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            placeholder: startDate ? "" : "Pilih Tanggal",
                            inputProps: { readOnly: true },
                            onClick: () => setOpenStart(true),
                            className:
                              "custom-datepicker w-full h-full bg-slate-100 rounded-2xl font-bold text-slate-900 border-none outline-none focus:ring-0 transition-all placeholder:text-slate-400 cursor-pointer",
                            sx: {
                              "& .MuiOutlinedInput-root": {
                                padding: 0,
                                height: 60,
                                cursor: "pointer",
                                "& fieldset": { border: "none" },
                              },
                              "& .MuiPickersInputBase-sectionsContainer": {
                                paddingLeft: "35px",
                                paddingTop: "19px",
                                cursor: "pointer",
                                color: "#0f172a",
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white py-5 rounded-[1.5rem] font-medium text-sm transition-all flex items-center justify-center gap-3 mt-8 shadow-xl shadow-slate-200 hover:shadow-red-200 active:scale-[0.96] cursor-pointer"
                >
                  <MessageSquare size={20} /> Booking Tiket
                </button>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="text-center text-red-600 text-[10px] font-bold uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Tanya Ketersediaan Kursi
                  </Link>
                  <p className="text-center text-slate-400 text-[10px]">
                    *Admin akan merespon untuk memilih posisi tempat duduk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LocalizationProvider>
  );
}
