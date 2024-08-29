import { ComponentProps } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Member } from "@/components/Member";
import { Button } from "@/components/ui/button";
import { ApeCard, WalkingApesCard, ShibaCard } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Subscribe } from "@/components/Subscribe";
import { SPEAKERS } from "./constants";
import Logo from "./logo.svg";
import ckconBgImg from "./ckcon-bg.png";
import walkingApesImg from "./walking-apes2.png";
import carImg from "./car.png";
import "./message.css";

const Hero = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx("w-[330px] xl:w-[1000px] text-center", className)}
      {...props}
    >
      <div className="flex font-articulatCF font-semibold text-sm xl:text-xl uppercase mb-10">
        <div>Chiang Mai, Thailand</div>
        <div className="ml-auto">November 9, 2024</div>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-[180px] xl:mb-[360px] ">
        <Logo className="w-full" />

        <Image
          className="absolute -left-[40px] xl:-left-[140px] -bottom-[180px] xl:-bottom-[340px] max-w-none h-[184px] w-[525px] xl:h-[372px] xl:w-[1280px] object-contain"
          src={ckconBgImg.src}
          height={ckconBgImg.height}
          width={ckconBgImg.width}
          alt="background"
          priority
        />
      </div>
      <div className="font-chakraPetch font-bold text-4xl xl:text-5xl uppercase mb-4">
        Common Knowledge Conference
      </div>
      <div className="font-articulatCF font-semibold text-xl xl:text-2xl text-[#FD480D] mb-4">
        Innovation Begins with Common Knowledge
      </div>
      <div className="font-articulatCF font-semibold text-base xl:text-xl">
        “CKCon is more than just a gathering; it&apos;s a movement that
        champions innovation and explores uncharted territories in blockchain
        without compromising the cypherpunk ideals.”
      </div>
    </div>
  );
};

const CkConDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx(className, "pb-32 flex flex-col items-center w-[320px] xl:w-[1060px] gap-20")}
      {...props}
    >
      <div className="font-chakraPetch font-bold text-5xl xl:text-6xl text-[#FD480D] text-center">
        What is CKCON?
      </div>

      <div className="flex flex-col xl:flex-row gap-[50px] items-center">
        <div className="flex-1 flex flex-col gap-[26px]">
          <div className="font-articulatCF font-bold italic text-lg xl:text-2xl text-[#FD480D]">
            We are pleased to bring you CKCon—the Common Knowledge Conference.
          </div>

          <p className="text-sm xl:text-base">
            CKCon is more than just a gathering; it&apos;s a movement that
            champions innovation and explores uncharted territories in the
            blockchain industry without compromising the cypherpunk ideals.
          </p>

          <p className="text-sm xl:text-base">
            In our community, we have stood by these ideals, often going against
            the status quo to chart our own path. While this journey was lonely
            at times, today we see many projects converging on similar paths to
            ours, and we are now on the cutting edge of the industry.
          </p>

          <p className="text-sm xl:text-base">
            The same theses that once alienated us from others have been
            validated. When others tried to scale on Layer 1, we embraced a
            layered approach. While others moved to Proof of Stake and pursued
            the account model, we stuck with Proof-of-Work and UTXOs. Instead of
            the EVM, we built around a VM we believed in, one powered by RISC-V.
          </p>
        </div>

        <Image
          src={carImg.src}
          height={carImg.height}
          width={carImg.width}
          alt="car"
          priority
        />
      </div>

      <div className="flex gap-[50px] items-center">
        <div className="hidden flex-1 xl:flex flex-col items-center">
          <div className="grid grid-cols-2 gap-[52px] mb-12">
            {SPEAKERS.map((member) => (
              <Member
                key={member.name}
                avatar={member.avatar}
                name={member.name}
              />
            ))}
          </div>

          <Link href="/2024/speakers">
            <Button size="sm">See all Speakers</Button>
          </Link>
        </div>

        <div className="flex-1">
          <p className="text-sm xl:text-base mb-[40px]">
            The same theses that once alienated us from others have been
            validated. When others tried to scale on Layer 1, we embraced a
            layered approach. While others moved to Proof of Stake and pursued
            the account model, we stuck with Proof-of-Work and UTXOs. Instead of
            the EVM, we built around a VM we believed in, one powered by RISC-V.
          </p>

          <div className="flex flex-col items-center">

            <div className="speech-bubble pbottom aright text-white w-120 uppercase">
              Please join us in Chiang Mai on November 9th, for the greatest
              gathering of our community yet!
            </div>
      
            <Image
              src={walkingApesImg.src}
              height={walkingApesImg.height}
              width={walkingApesImg.width}
              alt="sayhi"
              priority
            />
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-[52px] xl:hidden">
          {SPEAKERS.map((member) => (
            <Member
              key={member.name}
              avatar={member.avatar}
              name={member.name}
            />
          ))}

          <Link href="/2024/speakers">
            <Button size="sm">See all Speakers</Button>
          </Link>
        </div>
    </div>
  );
};

export default function CKConPage() {
  return (
    <main className="w-full px-3 xl:px-[120px] flex flex-col gap-32 items-center">
      <Hero className="pt-11" />
      <CkConDescription />

      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-6">
          <ApeCard className="flex-1" />
          <ShibaCard className="flex-1" />
          <WalkingApesCard className="flex-1" />
        </div>
        <Subscribe />
      </div>

      <Footer />
    </main>
  );
}
