import Image from "next/image";
import Link from "next/link";
import { Member } from "@/components/Member";
import { Button } from "@/components/ui/button";
import { ApeCard, WalkingApesCard, ShibaCard } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Subscribe } from "@/components/Subscribe";
import { SPEAKERS } from "../constants";
import interviewApeImg from "./interview-ape.png";
import ViewlineIcon from "./viewline.svg";

export default function SpeakersPage() {
  return (
    <main className="flex flex-col gap-32 items-center">
      <Banner
        title="Meet Our Speakers"
        subtitle="Meet the visionaries and pioneers with the crazy ideas that might just work."
      />

      <div className="flex flex-col xl:grid grid-cols-4 gap-[60px] xl:gap-[120px] w-[1000px] mb-12">
        {[...SPEAKERS, ...SPEAKERS, ...SPEAKERS].map(
          (member, index) => (
            <Member
              key={index}
              avatar={member.avatar}
              name={member.name}
              description={member.title}
              xLink={member.xLink}
            />
          )
        )}
      </div>

      <div className="flex flex-col items-center gap-16">
        <div className="font-articulatCF font-extrabold italic text-5xl text-[#FD480D]">
          SPEAKER APPLICATION
        </div>

        <div className="flex items-start">
          <Image
            className="hidden xl:block z-[2] max-w-none"
            src={interviewApeImg.src}
            height={interviewApeImg.height}
            width={interviewApeImg.width}
            alt="interview ape"
            priority
          />
          <div className="relative flex flex-col gap-4 items-start w-[300px] mb-[160px] xl:mb-0 xl:w-[577px] xl:-ml-[40px] border-2 border-[#FD480D] rounded-[40px] xl:py-9 xl:px-14 p-9">
            <div className="font-articulatCF font-semibold text-3xl text-[#FD480D]">
              Apply to speak at CKCON!
            </div>
            <ViewlineIcon className="text-[#FD480D] w-full" />
            <div>
              The industry thrives on the wacky ideas from builders who are
              passionate about making the world a better place. We’re looking
              for the bright minds interested in bringing their vision to
              fruition.
            </div>

            <Button size="sm" className="mt-8">
              APPLY NOW
            </Button>

            <Image
              className="absolute xl:hidden z-[2] max-w-none -bottom-[160px] -right-[100px]"
              src={interviewApeImg.src}
              height={285}
              width={226}
              alt="interview ape"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-6">
          <ShibaCard className="flex-1" />
          <WalkingApesCard className="flex-1" />
        </div>

        <Subscribe />
      </div>

      <Footer />
    </main>
  );
}
