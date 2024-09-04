import Image from "next/image";
import { ApeCard, WalkingApesCard, ShibaCard } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Subscribe } from "@/components/Subscribe";

import PARTNERS from './list'

export default function PartnersPage() {
  return (
    <main className="flex flex-col gap-32 items-center">
      <Banner
        title="Partners & Sponsors"
        subtitle="CKCon would not be possible without the participation\nand growth of the ecosystem  supporting partners."
      />

      <div className="flex flex-col items-center gap-20 xl:grid grid-cols-4">
        {PARTNERS.map(p => <Image key={p.title} width={162} height={46} src={p.logo} alt={p.title} title={p.title} priority />)}
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-6">
          <ApeCard />
          <ShibaCard className="flex-1" />
          <WalkingApesCard className="flex-1" />
        </div>

        <Subscribe />
      </div>

      <Footer />
    </main>
  );
}
