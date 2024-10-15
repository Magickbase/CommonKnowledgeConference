"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Profile } from "@/app/2024/speakers/list";
import XIcon from "./x.svg";
import LinktrIcon from './linktr.svg'
import { GithubIcon, GlobeIcon } from "lucide-react";

export const Member = ({ name, profile, isSimple = false
}: {
  name: string, profile: Profile, isSimple?: boolean
}) => {
  return (
    <div className="flex flex-col gap-[20px] items-center">
      <Avatar className="border border-[#FD480D] bg-transparent w-44 h-44">
        <AvatarImage src={profile.avatar} alt={name} title={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 items-center">
        <div className="font-articulatCF font-extrabold uppercase italic text-lg text-[#FD480D]">
          {name}
        </div>
        {!isSimple && profile.title && (
          <div className="font-articulatCF font-bold text-base text-nowrap text-[#717171]">
            {profile.title}
          </div>
        )}
        {!isSimple && profile.x ? (
          <a
            className="text-[#FD480D] border rounded-full border-[#FD480D] p-2 transition-all duration-200 hover:bg-[#FD480D] hover:text-white"
            href={profile.x}
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon width={20} height={20} />
          </a>
        ) : null}

        {
          !isSimple && profile.linktr ?
            <a
              className="text-[#FD480D] border rounded-full border-[#FD480D] p-2 transition-all duration-200 hover:bg-[#FD480D] hover:text-white"
              href={profile.linktr}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinktrIcon width={20} height={20} />
            </a>
            : null
        }

        {
          !isSimple && profile.github ?
            <a
              className="text-[#FD480D] border rounded-full border-[#FD480D] p-2 transition-all duration-200 hover:bg-[#FD480D] hover:text-white"
              href={profile.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon width="20" height="20" />
            </a>
            : null
        }
        {
          !isSimple && profile.website ?
            <a
              className="text-[#FD480D] border rounded-full border-[#FD480D] p-2 transition-all duration-200 hover:bg-[#FD480D] hover:text-white"
              href={profile.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GlobeIcon width="20" height="20" />
            </a>
            : null
        }
      </div>
    </div>
  );
};
