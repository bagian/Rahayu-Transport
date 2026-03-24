"use client";

import { useMemo, use, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  Settings2,
  ArrowLeft,
  ShieldCheck,
  Fuel,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MessageSquare,
  Briefcase,
  Calendar,
  Zap,
  CheckCircle2,
  Info,
  ChevronRight as ChevronSmall,
  Car,
  UsersRound,
  UserRoundX,
} from "lucide-react";

// MUI Components & Dayjs
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/id";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { FLEET_DATA } from "@/data/fleet";

interface ArmadaParams {
  slug: string;
}

export default function ArmadaDetail({
  params,
}: {
  params: Promise<ArmadaParams>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  // STATE BARU: Untuk Opsi Supir (Default: false / Lepas Kunci)
  const [withDriver, setWithDriver] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const vehicle = useMemo(() => {
    return FLEET_DATA.find((v) => v.slug === slug);
  }, [slug]);

  if (!vehicle) notFound();

  // UPDATE PESAN WA
  const handleBooking = () => {
    const start = startDate ? startDate.format("DD/MM/YYYY") : "-";
    const end = endDate ? endDate.format("DD/MM/YYYY") : "-";
    const layanan = withDriver ? "Dengan Supir" : "Tanpa Supir";

    const message = `Halo Rahayu Trans, saya ingin reservasi mobil:\n\nUnit: ${vehicle.name}\nLayanan: ${layanan}\nMulai: ${start}\nSelesai: ${end}\n\nApakah unit tersedia?`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
      <div className="min-h-screen pb-20 selection:bg-red-100 pt-28">
        <nav className="sticky top-0 z-[60] border-b border-slate-100 h-16 flex items-center">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <Link
              href="/armada"
              className="flex items-center gap-2 text-sm transition-colors cursor-pointer text-slate-500 hover:text-red-600"
            >
              <ArrowLeft size={18} />
              <span className="font-medium">Kembali ke Katalog</span>
            </Link>
            <div className="items-center hidden gap-2 text-xs md:flex text-slate-400">
              <Link href="/" className="cursor-pointer hover:text-red-600">
                Home
              </Link>
              <ChevronSmall size={12} />
              <Link
                href="/armada"
                className="cursor-pointer hover:text-red-600"
              >
                Armada
              </Link>
              <ChevronSmall size={12} />
              <span className="font-medium text-slate-900">{vehicle.name}</span>
            </div>
          </div>
        </nav>

        <main className="container px-4 pt-8 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 xl:gap-12">
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Gallery Swiper Section */}
              <div className="relative group">
                <div className="rounded-[1.5rem] overflow-hidden bg-white border border-slate-100 aspect-video relative shadow-sm">
                  <Swiper
                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                    effect="fade"
                    speed={600}
                    navigation={{ nextEl: ".next-v", prevEl: ".prev-v" }}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    className="w-full h-full"
                  >
                    {vehicle.images.map((img, i) => (
                      <SwiperSlide key={`main-${i}`}>
                        <div className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                            unoptimized
                            priority={i === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className="absolute z-10 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 border shadow-xl opacity-0 cursor-pointer prev-v left-6 top-1/2 rounded-2xl bg-white/90 border-slate-100/20 text-slate-900 hover:bg-red-600 hover:text-white group-hover:opacity-100">
                    <ChevronLeft size={24} />
                  </button>
                  <button className="absolute z-10 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 border shadow-xl opacity-0 cursor-pointer next-v right-6 top-1/2 rounded-2xl bg-white/90 border-slate-100/20 text-slate-900 hover:bg-red-600 hover:text-white group-hover:opacity-100">
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="mt-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[FreeMode, Thumbs]}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="thumb-nav"
                  >
                    {vehicle.images.map((img, i) => (
                      <SwiperSlide
                        key={`thumb-${i}`}
                        className="!w-18 !h-18 cursor-pointer"
                      >
                        <div className="relative w-full h-full overflow-hidden transition-all border-2 border-transparent rounded-2xl thumb-overlay">
                          <Image
                            src={img}
                            alt="thumb"
                            fill
                            quality={100}
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-red-600 rounded-full" />
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Spesifikasi Kendaraan
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {[
                    { icon: Zap, label: "Engine", val: vehicle.engine },
                    {
                      icon: Users,
                      label: "Kapasitas",
                      val: `${vehicle.capacity} Kursi`,
                    },
                    {
                      icon: Briefcase,
                      label: "Bagasi",
                      val: `${vehicle.luggage} Koper`,
                    },
                    { icon: Calendar, label: "Tahun", val: vehicle.year },
                    { icon: Fuel, label: "Bahan Bakar", val: vehicle.fuelType },
                    {
                      icon: Settings2,
                      label: "Transmisi",
                      val: vehicle.transmission,
                    },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-[1.5rem] border border-slate-200 flex flex-col items-center text-center group hover:border-red-200 transition-all cursor-default"
                    >
                      <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-red-600">
                        <spec.icon size={22} />
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 bg-white rounded-[1.5rem] border border-slate-200">
                {/* TENTANG UNIT */}
                <section className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 rounded-xl">
                      <Info className="text-red-600" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Tentang Unit
                    </h3>
                  </div>
                  <p className="text-sm antialiased leading-relaxed text-slate-500">
                    {vehicle.description}
                  </p>

                  {/* Badge Keamanan Tambahan */}
                  <div className="flex items-center gap-4 p-4 mt-8 border border-dashed bg-slate-50 rounded-2xl border-slate-200">
                    <ShieldCheck
                      className="text-slate-400 shrink-0"
                      size={24}
                    />
                    <div className="text-[11px] leading-tight text-slate-500">
                      <p className="font-bold text-slate-700">
                        Unit Terawat & Higienis
                      </p>
                      <p>
                        Service rutin berkala dan pembersihan interior setiap
                        sebelum serah terima.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FITUR UTAMA */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 rounded-xl">
                      <Zap className="text-red-600" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Fitur & Fasilitas
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 font-medium sm:grid-cols-2 md:grid-cols-2 gap-y-3 gap-x-6">
                    {vehicle.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 transition-colors rounded-lg cursor-default group hover:bg-slate-50"
                      >
                        <div className="flex items-center justify-center w-6 h-6 transition-colors bg-red-100 rounded-full group-hover:bg-red-600">
                          <CheckCircle2
                            size={14}
                            className="text-red-600 transition-colors group-hover:text-white"
                          />
                        </div>
                        <span className="text-sm transition-colors text-slate-600 group-hover:text-slate-900">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-8 bg-white p-8 rounded-[1.5rem] border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-red-600" size={22} />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Ketentuan & Persyaratan Sewa
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Identitas Diri",
                      desc: "Wajib menyerahkan KTP Asli (Domisili Sidoarjo/Surabaya) atau Paspor yang masih berlaku.",
                    },
                    {
                      title: "Kualifikasi Pengemudi",
                      desc: "Memiliki SIM A aktif dan berusia minimal 21 tahun demi keamanan berkendara.",
                    },
                    {
                      title: "Jaminan Kendaraan",
                      desc: "Meninggalkan sepeda motor beserta STNK asli atas nama pribadi sebagai jaminan unit.",
                    },
                    {
                      title: "Dokumentasi Unit",
                      desc: "Penyewa bersedia melakukan sesi foto serah terima bersama unit saat pengambilan.",
                    },
                    {
                      title: "Metode Sewa",
                      desc: "Tersedia pilihan dengan menggunakan supir maupun tanpa supir. Supir kami berpengalaman dengan kendaraan kami.",
                    },
                    {
                      title: "Kebijakan Durasi",
                      desc: "Hitungan sewa adalah per hari (24 jam). Keterlambatan akan dikenakan biaya overtime.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 transition-all border bg-slate-50 rounded-2xl border-slate-100 hover:bg-white hover:border-red-100"
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

              <div className="mt-8 bg-white p-8 rounded-[1.5rem] border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-red-600" size={22} />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Tanggung Jawab & Asuransi
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Kecelakaan & Kerusakan",
                      desc: "Penyewa bertanggung jawab atas biaya klaim asuransi (Own Risk) sekitar Rp300.000/titik untuk kerusakan ringan atau berat.",
                    },
                    {
                      title: "Kehilangan Kendaraan",
                      desc: "Kehilangan unit akibat kelalaian penyewa (seperti kunci tertinggal atau parkir tidak aman) sepenuhnya menjadi tanggung jawab penyewa.",
                    },
                    {
                      title: "Barang Pribadi",
                      desc: "Asuransi tidak menanggung kehilangan barang berharga pribadi (HP, Laptop, perhiasan) yang tertinggal di dalam kendaraan.",
                    },
                    {
                      title: "Kepatuhan Hukum",
                      desc: "Segala bentuk pelanggaran lalu lintas (E-Tilang) dan penggunaan unit untuk tindak kriminal adalah tanggung jawab penuh penyewa.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 transition-all border bg-slate-50 rounded-2xl border-slate-100 hover:bg-white hover:border-red-100"
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

                <p className="mt-6 text-[10px] text-slate-400 italic text-center">
                  * Dengan menyewa, Anda dianggap telah menyetujui seluruh
                  syarat dan ketentuan yang berlaku di Rahayu Trans.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: BOOKING CARD */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white rounded-[1.5rem] p-8 md:p-8 border border-slate-200 shadow-2xl shadow-slate-200/50 sticky top-24">
                <div className="mb-8">
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-4 inline-block">
                    Informasi Booking
                  </span>
                  <h1 className="mb-2 text-2xl font-semibold leading-tight text-slate-900">
                    {vehicle.name}
                  </h1>
                  <div className="flex items-center gap-4 pt-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {vehicle.capacity} Kursi
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings2 size={14} /> {vehicle.transmission}
                    </div>
                  </div>
                </div>

                <div className="py-6 border-y border-slate-50">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">
                    Harga Sewa / Hari
                  </p>
                  <div className="flex items-baseline gap-2 text-slate-900">
                    <span className="text-3xl font-semibold text-slate-900">
                      Rp {vehicle.pricePerDay.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs text-slate-400">/ Hari</span>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {/* PENAMBAHAN OPSI SUPIR DISINI */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Opsi Layanan
                    </label>
                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                      <button
                        onClick={() => setWithDriver(false)}
                        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                          !withDriver
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-400 hover:text-slate-600 cursor-pointer"
                        }`}
                      >
                        <UserRoundX size={16} /> Tanpa Supir
                      </button>
                      <button
                        onClick={() => setWithDriver(true)}
                        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                          withDriver
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-400 hover:text-slate-600 cursor-pointer"
                        }`}
                      >
                        <UsersRound size={16} /> Dengan Supir
                      </button>
                    </div>
                  </div>

                  {/* DATEPICKER MULAI */}
                  <div className="mt-4 space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Mulai Perjalanan
                    </label>
                    <div className="relative w-full">
                      <CalendarDays
                        className="absolute z-30 text-red-500 -translate-y-1/2 pointer-events-none left-5 top-1/2"
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
                            placeholder: startDate ? "" : "Tgl Mulai",
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

                  {/* DATEPICKER SELESAI */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Selesai Perjalanan
                    </label>
                    <div className="relative w-full">
                      <CalendarDays
                        className="absolute z-30 text-red-500 -translate-y-1/2 pointer-events-none left-5 top-1/2"
                        size={20}
                      />
                      <MobileDatePicker
                        open={openEnd}
                        onOpen={() => setOpenEnd(true)}
                        onClose={() => setOpenEnd(false)}
                        value={endDate}
                        minDate={startDate || dayjs()}
                        onChange={(newValue) => {
                          setEndDate(newValue as Dayjs | null);
                          setOpenEnd(false);
                        }}
                        slots={{ openPickerIcon: () => null }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            placeholder: endDate ? "" : "Tgl Selesai",
                            inputProps: { readOnly: true },
                            onClick: () => setOpenEnd(true),
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
                  <MessageSquare size={20} /> Booking Sekarang
                </button>
                <div className="flex flex-col gap-3 mt-6">
                  <Link
                    href="/contact"
                    className="text-center text-red-600 text-[10px] font-bold uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Butuh Bantuan Customer Service?
                  </Link>
                  <p className="text-center text-slate-400 text-[10px]">
                    *Admin Rahayu Trans akan segera menghubungi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .thumb-nav .swiper-slide-thumb-active .thumb-overlay {
          border-color: #dc2626 !important;
          opacity: 1 !important;
        }
        .thumb-overlay {
          opacity: 0.5;
          border-width: 2px;
          transition: all 0.3s ease;
        }
      `}</style>
    </LocalizationProvider>
  );
}
