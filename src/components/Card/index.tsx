import apeImg from "./ape.png";
import shibaImg from "./shiba.png";
import walkingApesImg from "./walking-apes.png";
import { ComponentProps } from "react";
import clsx from "clsx";
import Link from "next/link";

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
      "bg-[#FD480D] rounded-[50px] p-10 h-full flex flex-col gap-4 w-80 cursor-pointer hover:scale-105 transition-all duration-200",
      className
    )}
    {...props}
  >
    <div className="relative w-full h-48">{children}</div>
    <div className="font-chakraPetch font-bold text-3xl text-[#FEFFF5] uppercase">
      {title}
    </div>
  </div>
);

export const ApeCard = (props: ComponentProps<"div">) => (
  <Link href="https://forms.gle/Frsphz2tsHNQUyGh7" target="_blank">
    <Card title="Become a Speaker" {...props}>
      <div
        className="absolute bottom-0 -top-20 w-full"
        style={{ background: `url(${apeImg.src}) no-repeat bottom/contain` }}
      />
    </Card>
  </Link>
);

export const ShibaCard = (props: ComponentProps<"div">) => (
  <Link href="https://lu.ma/yfh20rrr" target="_blank" className={props.className}>
    <Card title="Get Tickets" {...props}>
      <div
        className="absolute bottom-0 -top-20 w-full"
        style={{ background: `url(${shibaImg.src}) no-repeat bottom/contain` }}
      />
    </Card>
  </Link>
);

export const WalkingApesCard = (props: ComponentProps<"div">) => (
  <Link href="mailto:annalese@nervos.org" className={props.className}>
    <Card title="Support CKCon" {...props}>
      <div
        className="absolute bottom-0 -left-20 -right-20 -top-20"
        style={{
          background: `url(${walkingApesImg.src}) no-repeat bottom/contain`,
        }}
      />
    </Card>
  </Link>
);
