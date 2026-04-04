"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    name: "Bank BRI",
    src: "/img/logo/bri-logo.png",
  },
  {
    name: "Cetakin",
    src: "/img/logo/cetakin-logo.png",
  },
  {
    name: "Yellow Event",
    src: "/img/logo/yellow-event-logo.png",
  },
  {
    name: "Jamkrindo",
    src: "/img/logo/jamkrindo-logo.png",
  },
  {
    name: "Kereta Api Indonesia",
    src: "/img/logo/kai-logo.png",
  },
  {
    name: "Len",
    src: "/img/logo/len-logo.png",
  },
  {
    name: "Leni",
    src: "/img/logo/leni-logo.png",
  },
  {
    name: "Bank Mandiri",
    src: "/img/logo/mandiri-logo.png",
  },
  {
    name: "Pertamina",
    src: "/img/logo/pertamina-logo.png",
  },
  {
    name: "Pindad",
    src: "/img/logo/pindad-logo.png",
  },
  {
    name: "Kabupaten Sidoarjo",
    src: "/img/logo/sidoarjo-logo.png",
  },
  {
    name: "Sulawesi Tenggara",
    src: "/img/logo/sulawesi-tenggara-logo.png",
  },
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

export default function Partners() {
  return (
    <section className="py-20 border-y border-slate-100 bg-transparent overflow-hidden w-full antialiased suppress-hydration-warning">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Trusted Partner & Collaboration
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex flex-row flex-nowrap min-w-max will-change-transform transform-gpu"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative shrink-0 flex items-center justify-center"
              style={{
                height: "var(--logo-height)",
                width: "var(--logo-width)",
                margin: "0 var(--logo-margin)",
              }}
            >
              <style jsx>{`
                div {
                  --logo-height: 40px;
                  --logo-width: 128px;
                  --logo-margin: 16px; /* Mobile (default) */
                }
                @media (min-width: 768px) {
                  div {
                    --logo-height: 48px;
                    --logo-width: 140px;
                    --logo-margin: 32px; /* Tablet */
                  }
                }
                @media (min-width: 1024px) {
                  div {
                    --logo-height: 64px;
                    --logo-width: 150px;
                    --logo-margin: 58px; /* Desktop */
                  }
                }
              `}</style>

              <Image
                src={logo.src}
                alt={`${logo.name} Partner Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                priority
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
