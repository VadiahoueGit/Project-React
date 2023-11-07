import React, { ReactNode } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcBusiness } from "react-icons/fc";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { FaQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import companyLogo from "@/public/assets/img/company/MicrosoftTeams-image (5).png";
import companyLogoNSIA from "@/public/assets/img/logo_NSIA.png";
import { Typography } from "@/components/ui/typography";
import NavItems from "@/components/pages/nav-items";
import { clsx } from "clsx";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex">
      <div className=" w-1/4 flex flex-col h-screen  text-center border-r">
        <div className="mt-16 mb-20 flex justify-center">
          <Image
            src={companyLogo}
            alt="logo du site"
            className="hidden lg:block "
            width={200}
            height={200}
          />
          <Image
            src={companyLogoNSIA}
            alt="logo du site"
            className="block lg:hidden "
            width={100}
            height={100}
          />
        </div>
        <div className=" gap-6 flex flex-col h-full">
          <NavItems
            url="/dashboard"
            className="font-bold"
            text="Tableau de bord"
            icons={BsGrid3X3Gap}
          />
          <NavItems
            url="/dashboard/clients"
            text="Clients"
            icons={MdPeopleAlt}
          />
          <NavItems text="Rapports" icons={TfiStatsUp} />
          <NavItems text="Finances" icons={FaMoneyBillAlt} />
          <NavItems text="Recrutement" icons={FcBusiness} />
          <NavItems text="Paramètres" icons={AiOutlineSetting} />
        </div>
        <NavItems text="Déconnexion" icons={BiLogOut} />
      </div>
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default Layout;
