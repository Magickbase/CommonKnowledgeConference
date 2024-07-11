import Image from "next/image";
import bgImg from "./bg.png";
import { Subscribe } from "./Subscribe";
import { InfoDialog } from "./InfoDialog";

export default function Home() {
  return (
    <main className="w-full py-4 flex flex-col items-center h-screen overflow-hidden">
      <div className="md:px-12 px-4 mb-auto">
        <div className="font-veneer w-full text-justify md:[text-align-last:justify] [text-align-last:center] xl:text-[8vw] md:text-[7vw] text-5xl leading-none -mb-[1vw]">
          COMMON KNOWLEDGE CONFERENCE
        </div>
        <div className="flex w-full  font-articulatCF">
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
            className="max-md:object-cover select-none max-md:h-[240px]"
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

        <Subscribe className="2xl:mt-12 mt-8 w-full md:px-12 px-4" />
      </div>

      <div className="flex md:px-12 px-4 mt-auto w-full md:text-base md:font-normal text-xs font-light font-articulatCF">
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
