import React, { CSSProperties } from "react";
import { Typography } from "../ui/typography";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import router from "next/router";
import Link from "next/link";

interface props {
  text: string;
  icons: IconType;
  className?: string;
  url?: string;
}

export default function NavItems(props: props) {
  console.log(props);
  return (
    <Link
      href={props.url ?? "/"}
      className={cn(
        "gap-5 flex items-center justify-center lg:justify-start rounded-md px-4 duration-300 cursor-pointer text-black",
        props.className
      )}
    >
      <div className="h-10 w-10   lg:h-5 lg:w-5 ">
        <props.icons size={"100%"} />
      </div>
      <Typography variant="body-base" className="hidden lg:block">
        {props.text}
      </Typography>
    </Link>
  );
}
