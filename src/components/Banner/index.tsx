import { ComponentProps } from "react";
import clsx from "clsx";
import bannerImg from "./banner.png";


export const Banner = ({ title, subtitle, className, ...props }: ComponentProps<"div"> & {
  title: string
  subtitle: string
}) => (
  <div
    className={clsx("w-full h-[calc(100vh-60px)] xl:h-[calc(100vh-109px)] flex flex-col gap-4 items-center pb-[89px]", className)}
    style={{ background: `url(${bannerImg.src}) center/cover` }}
    {...props}
  >
    <div className="mt-auto uppercase font-chakraPetch font-bold italic text-4xl max-w-[300px] md:max-w-[630px] md:text-5xl text-[#FD480D] text-center">
      {title}
    </div>
    <div className="font-articulatCF font-semibold text-white text-xl max-w-[300px] md:max-w-[660px] text-center">
      {subtitle.split('\\n').map(str => <span key={str}>{str}<br /></span>)}
    </div>
  </div >
);
