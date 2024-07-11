import Image from "next/image";
import bgImg from "./bg.png";
import { Subscribe } from "./Subscribe";
import { InfoDialog } from "./InfoDialog";

export default function Home() {
  return (
    <main className="w-full pt-4 pb-4 flex flex-col items-center h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-fit">
        <div className="font-veneer md:text-[8vw] leading-none -mb-[1vw] text-center text-5xl">
          COMMON KNOWLEDGE CONFERENCE
        </div>
        <div className="flex w-full md:px-0 px-4">
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

      <div className="relative md:my-0 mt-[12vh] mb-[8vh]">
        <Image
          className="md:h-[50vh] md:max-w-[160vh] object-cover select-none h-[30vh] max-w-[100vh]"
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

      <Subscribe className="mt-4 w-full md:px-0 px-4" />

      <div className="flex mt-auto w-full md:px-8 px-4 md:text-base text-sm">
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
