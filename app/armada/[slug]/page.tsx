import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FLEET_DATA } from "@/data/fleet";
import ArmadaDetailClient from "./ArmadaDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const vehicle = FLEET_DATA.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) return { title: "Unit Tidak Ditemukan" };

  const title = `Sewa Mobil ${vehicle.name} Surabaya | Rahayu Transport`;
  const description = `Sewa mobil ${vehicle.name} Surabaya. ${vehicle.description.slice(0, 120)}... Harga Rp ${vehicle.pricePerDay.toLocaleString("id-ID")}/hari.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [vehicle.images[0]],
      url: `https://rahayutransport.web.id/armada/${vehicle.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [vehicle.images[0]],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const vehicleExists = FLEET_DATA.some((v) => v.slug === resolvedParams.slug);

  if (!vehicleExists) notFound();

  return <ArmadaDetailClient params={params} />;
}
