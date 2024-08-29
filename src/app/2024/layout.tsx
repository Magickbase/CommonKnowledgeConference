import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.svg";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, X, ExternalLink } from "lucide-react";

const menus = [
  {
    label: "SPEAKERS",
    link: "/2024/speakers",
  },
  {
    label: "ATTEND",
    link: "/2024/attend",
  },
  {
    label: "PARTNERS",
    link: "/2024/partners",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      <div className="flex w-full items-center py-3 px-3 xl:py-6 xl:px-8">
        <div className="flex gap-4 items-center">
          <Link href="/2024/">
            <Logo className="max-w-none h-9 w-[90px] xl:h-[60px] xl:w-[154px]" />
          </Link>
          <div className="font-medium hidden xl:block">
            <div>Chiang Mai, Thailand</div>
            <div>November 9, 2024</div>
          </div>
        </div>

        <ul className="gap-8 ml-auto mr-8 hidden xl:flex">
          {menus.map((menu) => (
            <Link href={menu.link} key={menu.label}>
              <li className="font-semibold text-xl font-articulatCF">
                {menu.label}
              </li>
            </Link>
          ))}
        </ul>

        <Link
          className="hidden xl:block"
          href="https://lu.ma/event/evt-9nI8QgjrKVCXAzm "
          target="_blank"
        >
          <Button>TICKETS</Button>
        </Link>

        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button className="ml-auto xl:hidden text-[#FD480D]">
              <MenuIcon size={30} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-60 rounded-none bg-[#F4EFE2]">
            <div className="flex h-[60px] ml-auto px-3">
              <DrawerClose>
                <X className="text-[#FD480D]" size={30} />
              </DrawerClose>
            </div>
            <div className="flex flex-col gap-4 p-6">
              {menus.map((menu) => (
                <DrawerClose key={menu.label} asChild>
                  <Link
                    href={menu.link}
                    className="font-semibold text-xl font-articulatCF flex gap-4 items-center"
                  >
                    {menu.label}
                    <ExternalLink size={16} />
                  </Link>
                </DrawerClose>
              ))}

              <Link
                href="https://lu.ma/event/evt-9nI8QgjrKVCXAzm "
                target="_blank"
              >
                <Button size="sm">TICKETS</Button>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      {children}
    </div>
  );
}
