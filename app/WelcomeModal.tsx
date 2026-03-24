"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Car } from "lucide-react";
import Image from "next/image";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mengecek apakah user sudah pernah melihat modal ini
    const hasSeenModal = localStorage.getItem("rahayu_welcome_seen");

    if (!hasSeenModal) {
      // Muncul setelah delay 500ms agar halaman dirender sempurna dulu
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Menyimpan data ke local storage agar tidak muncul lagi saat di-refresh
    localStorage.setItem("rahayu_welcome_seen", "true");
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              y: 10,
              transition: { ease: "easeIn", duration: 0.2 },
            }}
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-2xl"
          >
            {/* Tombol Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-[100] p-2 bg-white/80 hover:bg-white rounded-full text-slate-900 transition-all shadow-sm active:scale-90 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Banner Image */}
            <div className="relative h-[250px] md:h-[260px] w-full bg-slate-100 overflow-hidden">
              <Image
                src="/img/slider/promo-opening.png"
                alt="Welcome to Rahayu Transport"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-[1]"></div>
            </div>

            {/* Konten Modal */}
            <div className="relative z-10 p-8 pt-10 text-left">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                  Promo Spesial
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="relative z-20 mb-4 text-2xl font-black tracking-tight md:text-2xl text-slate-900"
              >
                Perjalanan Nyaman Dimulai dari Sini
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="relative z-20 mb-8 text-sm leading-relaxed text-slate-500"
              >
                Selamat datang di Rahayu Transport. Kami siap melayani kebutuhan
                transportasi Anda di Kota Surabaya, Yogyakarta, Bandung, Bali,
                dan sekitarnya dengan armada terbaik, bersih, dan supir yang
                profesional dan handal.
              </motion.p>

              <motion.button
                variants={itemVariants}
                onClick={handleClose}
                className="group relative z-30 w-full py-4 bg-red-600 text-white rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-[0.98] shadow-xl shadow-red-200 cursor-pointer"
              >
                Lihat Armada Kami
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
