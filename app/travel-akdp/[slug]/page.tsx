import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AKDP_DATA } from "@/data/akdp";
import TravelAKDPDetailClient from "./TravelAKDPDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const travel = AKDP_DATA.find((t) => t.slug === slug);

  if (!travel) {
    return { title: "Tiket Travel Tidak Ditemukan | Rahayu Transport" };
  }

  const title = `Tiket ${travel.name} ${travel.route} | Rahayu Transport`;
  const description = `Pesan tiket travel ${travel.name} rute ${travel.route}. Jadwal keberangkatan ${travel.departureTime} via ${travel.via}. Harga tiket mulai Rp ${travel.price.toLocaleString("id-ID")}/orang.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [travel.image],
      url: `https://rahayutransport.web.id/travel-akdp/${travel.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [travel.image],
    },
  };
}

export default async function TravelDetailPage({ params }: Props) {
  const { slug } = await params;
  const travelExists = AKDP_DATA.some((t) => t.slug === slug);

  if (!travelExists) {
    notFound();
  }

  return <TravelAKDPDetailClient params={params} />;
}
