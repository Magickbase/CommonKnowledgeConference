import apeImg from "./ape.png";
import shibaImg from "./shiba.png";
import walkingApesImg from "./walking-apes.png";
import { ComponentProps } from "react";
import clsx from "clsx";

const Card = ({
  className,
  children,
  title,
  ...props
}: ComponentProps<"div"> & {
  title: string;
}) => (
  <div
    className={clsx(
      "bg-[#FD480D] rounded-[50px] p-10 flex flex-col gap-4 w-80",
      className
    )}
    {...props}
  >
    <div className="relative w-full h-48">{children}</div>
    <div className="font-articulatCF font-extrabold italic text-4xl text-white uppercase">
      {title}
    </div>
  </div>
);

export const ApeCard = (props: ComponentProps<"div">) => (
  <Card title="Become a Speaker" {...props}>
    <div
      className="absolute bottom-0 -top-20 w-full"
      style={{ background: `url(${apeImg.src}) no-repeat bottom/contain` }}
    />
  </Card>
);

export const ShibaCard = (props: ComponentProps<"div">) => (
  <Card title="Get Tickets" {...props}>
    <div
      className="absolute bottom-0 -top-20 w-full"
      style={{ background: `url(${shibaImg.src}) no-repeat bottom/contain` }}
    />
  </Card>
);

export const WalkingApesCard = (props: ComponentProps<"div">) => (
  <Card title="Support CKCon" {...props}>
    <div
      className="absolute bottom-0 -left-20 -right-20 -top-20"
      style={{ background: `url(${walkingApesImg.src}) no-repeat bottom/contain` }}
    />
  </Card>
);
