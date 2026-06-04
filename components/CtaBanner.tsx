import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="relative rounded-[40px] sm:rounded-[50px] overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px] flex items-center bg-gradient-to-br from-red-600 via-red-700 to-rose-900 group">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-black/20 rounded-full blur-[120px]" />
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 sm:px-12 md:px-20 py-16">
          
          {/* SISI TEKS */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center z-20">
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 w-fit mx-auto lg:mx-0 shadow-sm">
              Penawaran Spesial
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Siap Menjelajahi <br />
              <span className="text-red-200">Perjalanan?</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base lg:text-lg mb-10 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Nikmati kenyamanan berkendara dengan armada terbaru kami. Dapatkan
              diskon spesial hingga 20% untuk penyewaan di atas 7 hari hanya di
              Rahayu Trans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/armada" className="w-full sm:w-auto contents">
                <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group cursor-pointer border border-slate-700">
                  <span className="font-semibold text-sm md:text-base">Booking Sekarang</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </button>
              </Link>
              <Link href="https://wa.me/6285784809074" className="w-full sm:w-auto contents">
                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-red-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 cursor-pointer group">
                  <span className="font-semibold text-sm md:text-base">Hubungi CS</span>
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* SISI GAMBAR */}
          <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full flex items-center justify-center order-1 lg:order-2 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-full blur-3xl scale-75 opacity-50 translate-y-20"></div>
            <Image
              src="/img/car/platinum-white-pearl-mc-split.png"
              alt="Premium Fleet Rahayu Trans"
              fill
              className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] lg:scale-125 lg:translate-x-10 transition-transform duration-700 lg:group-hover:scale-[1.3] lg:group-hover:translate-x-6"
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
