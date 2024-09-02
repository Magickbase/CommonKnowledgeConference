import Image from "next/image";
import { ApeCard, WalkingApesCard, ShibaCard } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Subscribe } from "@/components/Subscribe";

import ckbEcoFundLogo from "./logo/ckb-eco-fund.png";
import cryptapeLogo from "./logo/cryptape.png";
import didLogo from "./logo/did.png";
import magickbaseLogo from "./logo/magickbase.png";
import nervapeLogo from "./logo/nervape.png";
import nervosLogo from "./logo/nervos.png";
import nftnationLogo from "./logo/nftnation.png";
import omigaLogo from "./logo/omiga.png";
import polycryptLogo from "./logo/polycrypt.png";
import sporeLogo from "./logo/spore.png";
import stableppLogo from "./logo/stablepp.png";

export default function PartnersPage() {
  return (
    <main className="flex flex-col gap-32 items-center">
      <Banner
        title="Partners & Sponsors"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="flex flex-col items-center gap-20 xl:grid grid-cols-4">
        <Image
          src={nervosLogo.src}
          height={nervosLogo.height}
          width={nervosLogo.width}
          alt="nervos"
          priority
        />
        <Image
          src={cryptapeLogo.src}
          height={cryptapeLogo.height}
          width={cryptapeLogo.width}
          alt="cryptape"
          priority
        />
        <Image
          src={polycryptLogo.src}
          height={polycryptLogo.height}
          width={polycryptLogo.width}
          alt="polycrypt"
          priority
        />
        <Image
          src={didLogo.src}
          height={didLogo.height}
          width={didLogo.width}
          alt="did"
          priority
        />
        <Image
          src={nftnationLogo.src}
          height={nftnationLogo.height}
          width={nftnationLogo.width}
          alt="nftnation"
          priority
        />
        <Image
          src={nervapeLogo.src}
          height={nervapeLogo.height}
          width={nervapeLogo.width}
          alt="nervape"
          priority
        />
        <Image
          src={stableppLogo.src}
          height={stableppLogo.height}
          width={stableppLogo.width}
          alt="stablepp"
          priority
        />
        <Image
          src={ckbEcoFundLogo.src}
          height={ckbEcoFundLogo.height}
          width={ckbEcoFundLogo.width}
          alt="ckbEcoFund"
          priority
        />
        <Image
          src={magickbaseLogo.src}
          height={magickbaseLogo.height}
          width={magickbaseLogo.width}
          alt="magickbase"
          priority
        />
        <Image
          src={omigaLogo.src}
          height={omigaLogo.height}
          width={omigaLogo.width}
          alt="omiga"
          priority
        />
        <Image
          src={sporeLogo.src}
          height={sporeLogo.height}
          width={sporeLogo.width}
          alt="spore"
          priority
        />
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
