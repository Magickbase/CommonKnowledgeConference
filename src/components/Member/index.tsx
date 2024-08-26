"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import XIcon from "./x.svg";
import clsx from "clsx";

export const Member = ({
  xLink,
  ...props
}: {
  className?: string;
  avatar: string;
  alt?: string;
  fallback?: string;
  size?: number;
  name: string;
  description?: string;
  xLink?: string;
}) => {
  return (
    <div className={clsx("flex flex-col gap-[20px] items-center", props.className)}>
      <Avatar
        className={clsx("border border-[#FD480D] bg-transparent w-44 h-44")}
      >
        <AvatarImage src={props.avatar} alt={props.alt ?? props.name} />
        <AvatarFallback>{props.fallback ?? props.name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 items-center">
        <div className="font-articulatCF font-bold italic text-lg text-[#FD480D]">
          {props.name}
        </div>
        {props.description && (
          <div className="font-articulatCF font-bold italic text-base text-[#717171]">
            {props.name}
          </div>
        )}
        {xLink && (
          <a
            className="text-[#FD480D] border rounded-full border-[#FD480D] p-2 transition-all duration-200 hover:bg-[#FD480D] hover:text-white"
            href={xLink}
          >
            <XIcon width={20} height={20} />
          </a>
        )}
      </div>
    </div>
  );
};
