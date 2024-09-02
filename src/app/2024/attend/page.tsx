import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { ApeCard, WalkingApesCard, ShibaCard } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Subscribe } from "@/components/Subscribe";
import couchApeImg from "./couch-ape.png";
import ViewlineIcon from "./viewline.svg";
import { ComponentProps } from "react";
import clsx from "clsx";

const AttendCard = ({
  className,
  children,
  title,
  ...props
}: ComponentProps<"div"> & {
  title: string;
}) => {
  return (
    <div
      className={clsx(
        "w-full border-2 border-[#FD480D] rounded-[30px] py-9 xl:py-[60px] px-8 xl:px-[75px] flex flex-col items-center gap-4",
        className
      )}
      {...props}
    >
      <div className="font-chakraPetch font-bold text-2xl text-[#FD480D] uppercase">
        {title}
      </div>
      <ViewlineIcon className="text-[#FD480D] w-full" />
      {children}
    </div>
  );
};

const LocationCard = (props: ComponentProps<"div">) => (
  <AttendCard title="Location" {...props}>
    <div className={clsx("font-articulatCF font-semibold text-xl")}>
      Chiang Mai, Thailand
    </div>
  </AttendCard>
);

const VenueCard = (props: ComponentProps<"div">) => (
  <AttendCard title="Venue" {...props}>
    <div className="font-articulatCF font-semibold text-xl">
      Melia, Chiang Mai
    </div>
    <div className="font-articulatCF font-medium text-base text-center">
      46, 48 Charoenprathet Road Chang Khlan, Thailand
    </div>
    <div className="font-articulatCF font-medium text-2xl flex gap-2 items-center text-[#FD480D]">
      <MapPin width={29} />
      See on map
    </div>
  </AttendCard>
);

const TicketsCard = (props: ComponentProps<"div">) => (
  <AttendCard title="Tickets" {...props}>
    <div className="font-articulatCF font-semibold text-2xl text-center">
      Tickets are all inclusive! Event admission, food, drinks, and afterparty-
      Only $20
    </div>
  </AttendCard>
);

export default function AttendPage() {
  return (
    <main className="flex flex-col gap-32 items-center">
      <Banner
        title="Attend"
        subtitle="“We're celebrating our ecosystem's rapid expansion with you: the builders, visionaries, outcasts... the cypherpunks!”"
      />

      <div className="flex gap-[50px] items-start">
        <div className="hidden xl:flex flex-col items-center gap-[30px] xl:gap-[50px] w-[310px] xl:w-[470px]">
          <LocationCard />

          <VenueCard />

          <TicketsCard />
        </div>

        <div className="flex flex-col items-center gap-[30px] xl:gap-[50px] w-[310px] xl:w-[470px]">
          <LocationCard className="xl:hidden" />

          <VenueCard className="xl:hidden" />

          <TicketsCard className="xl:hidden" />

          <AttendCard title="Accommodation">
            <div className="font-articulatCF font-medium text-base text-center">
              Highly rated accommodations nearby:
            </div>

            <div className="font-articulatCF font-semibold text-2xl text-center underline">
              Melia, Chiang Mai
            </div>
            <div className="font-articulatCF font-semibold text-2xl text-center underline">
              Chiang Mai Marriott Hotel
            </div>
            <div className="font-articulatCF font-semibold text-2xl text-center underline">
              dusitD2, Chiang Mai
            </div>
            <div className="font-articulatCF font-semibold text-2xl text-center underline">
              Ama&apos;s House
            </div>
            <div className="font-articulatCF font-medium text-base text-center">
              There are plenty of alternative hotel options in the area in
              addition to hotels to match your price range.
            </div>
          </AttendCard>

          <AttendCard title="Contact">
            <a href="mailto:annalese@nervos.org">
              <Button size="sm">Media Inquiry</Button>
            </a>
            <a href="mailto:annalese@nervos.org">
              <Button size="sm">Partner Inquiry</Button>
            </a>
          </AttendCard>

          <Image
            className="z-[2] max-w-none -mt-[60px] xl:-mt-[100px]"
            src={couchApeImg.src}
            height={couchApeImg.height}
            width={couchApeImg.width}
            alt="interview ape"
            priority
          />
        </div>
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
