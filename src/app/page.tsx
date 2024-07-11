import Image from "next/image";
import bgImg from "./bg.png";
import { Subscribe } from "./Subscribe";
import { InfoDialog } from "./InfoDialog";

export default function Home() {
  return (
    <main className="w-full 3xl:py-12 py-4 flex flex-col items-center h-screen">
      <div className="w-[350px] md:w-[692px] xl:w-[1117px] 2xl:w-[1808px] 3xl:w-[2403px] 4xl:w-[3251px] mb-auto">
        <div className="font-veneer w-full text-center leading-none text-[48px] md:text-[60px] xl:text-[96px] 2xl:text-[156px] 3xl:text-[208px] 4xl:text-[282px]">
          COMMON KNOWLEDGE CONFERENCE
        </div>
        <div className="flex w-full font-articulatCF 4xl:text-5xl 2xl:text-2xl leading-none">
          <div>
            <div>NOVEMBER 9</div>
            <div>2024</div>
          </div>

          <div className="ml-auto">
            <div>CHIANG MAI</div>
            <div>THAILAND</div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <Image
            className="max-md:object-cover select-none h-[240px] w-[750px] xl:h-[384px] xl:w-[1200px] 2xl:h-[615px] 2xl:w-[1920px] 3xl:h-[744px] 3xl:w-[2560px] 4xl:h-[1115px] 4xl:w-[3840px]"
            src={bgImg.src}
            height={bgImg.height}
            width={bgImg.width}
            alt="background"
            priority
          />

          <InfoDialog>
            <div
              className={
                "top-[36%] left-[51.5%] cursor-pointer transition-all duration-500 w-6 h-6 absolute flex items-center justify-center"
              }
            >
              <span
                className={
                  "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                }
                style={{ animationDuration: "2200ms" }}
              />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
            </div>
          </InfoDialog>
        </div>

        <Subscribe className="4xl:mt-20 3xl:mt-12 mt-8 w-full md:px-12 px-4" />
      </div>

      <div className="flex w-[350px] md:w-[692px] xl:w-[1117px] 2xl:w-[1808px] 3xl:w-[2403px] 4xl:w-[3251px] mt-auto 4xl:text-3xl 2xl:text-2xl md:text-base md:font-normal text-xs font-light font-articulatCF">
        <div className="mr-auto">
          PRESENTED BY{" "}
          <a
            className="underline"
            href="https://www.nervos.org/foundation"
            target="_blank"
          >
            NERVOS FOUNDATION
          </a>
        </div>
        <div className="min-w-[60px] flex items-center">© 2024</div>
        <div className="ml-auto">
          BUILT BY{" "}
          <a
            className="underline"
            href="https://www.nervape.com/"
            target="_blank"
          >
            NERVAPE STUDIO
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href="https://www.magickbase.com/"
            target="_blank"
          >
            MAGICKBASE
          </a>
        </div>
      </div>
    </main>
  );
}
