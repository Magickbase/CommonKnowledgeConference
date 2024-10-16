import Image from "next/image";
import bgImg from "./bg.png";
import bgMobileImg from "./bg-mobile.png";
import { Subscribe } from "./Subscribe";
import { InfoDialog } from "./InfoDialog";
import clsx from "clsx";
import Link from "next/link";

const LUMA_URL = "https://lu.ma/embed/event/evt-9nI8QgjrKVCXAzm/simple"

export default function Home() {
  return (
    <main className="w-full 3xl:py-12 md:py-4 py-12 flex flex-col items-center h-screen">
      <div
        className={clsx(
          "mb-auto",
          "w-[350px] md:w-[692px] xl:w-[1117px] 2xl:w-[1808px] 3xl:w-[2403px] 4xl:w-[3060px]"
        )}
      >
        <div
          className={clsx(
            "font-veneer w-full text-center -tracking-[0.03em] relative",
            "leading-[48px] text-[52px] ",
            "md:text-[64px] md:leading-[63.7px] md:-bottom-[.1em]",
            "xl:text-[104px] xl:leading-[102.9px] xl:-bottom-[.14em]",
            "2xl:text-[168px] 2xl:leading-[166.6px] 2xl:-bottom-[.15em]",
            "3xl:text-[224px] 3xl:leading-[221.48px] 3xl:-bottom-[.17em]",
            "4xl:text-[282px] 4xl:leading-[276.36px] 4xl:-bottom-[.12em]"
          )}
        >
          COMMON KNOWLEDGE CONFERENCE
          <Link href={LUMA_URL}
            className="
            absolute 
            top-36 ticket-sm:top-6 md:top-24 ticket-md:-top-1 xl:top-32 ticket-xl:top-3 2xl:top-[200px] ticket-2xl:top-8 3xl:top-60 ticket-3xl:top-12 4xl:top-12 ticket-4xl:top-16
            right-0 ticket-sm:-right-20 md:right-0 ticket-md:-right-28 xl:right-0 ticket-xl:-right-28 2xl:right-0 ticket-2xl:-right-28 3xl:right-0 ticket-3xl:-right-28
            flex justify-center items-center
            w-min h-min
            tracking-normal
            rounded-full
font-articulatCF
            font-bold  
            text-xs md:text-xl
            border md:border-2
            border-solid
            border-black
            transition-all
            duration-300
            bg-[#E2892B]
            hover:bg-[#EBAC6B] 
            px-4 md:px-6 
            py-2 md:py-3
            "
            target="_blank"
            rel="noopener noreferrer"
            title="Ticket">Ticket</Link>
        </div>
        <div className="flex w-full font-light font-articulatCF 4xl:text-5xl 2xl:text-2xl leading-none 2xl:leading-none 4xl:leading-none">
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

      <div className="py-8">
        <div className="relative">
          <Image
            className={clsx(
              "max-md:hidden object-contain select-none",
              "xl:h-[312px] xl:w-[1200px]",
              "2xl:h-[500px] 2xl:w-[1920px]",
              "3xl:h-[664px] 3xl:w-[2560px]",
              "4xl:h-[1000px] 4xl:w-[3840px]"
            )}
            src={bgImg.src}
            height={bgImg.height}
            width={bgImg.width}
            alt="background"
            priority
          />
          <Image
            className="md:hidden object-cover select-none h-[195px] w-[750px]"
            src={bgMobileImg.src}
            height={bgMobileImg.height}
            width={bgMobileImg.width}
            alt="background"
            priority
          />

          <InfoDialog>
            <div
              className={
                "top-[32%] left-[51%] cursor-pointer transition-all duration-500 w-6 h-6 absolute flex items-center justify-center"
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

      <div
        className={clsx(
          "w-[350px] md:w-[692px] xl:w-[1117px] 2xl:w-[1808px] 3xl:w-[2403px] 4xl:w-[3060px]",
          "flex mt-auto 4xl:text-3xl 2xl:text-2xl md:text-base md:font-normal text-xs font-light font-articulatCF"
        )}
      >
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
