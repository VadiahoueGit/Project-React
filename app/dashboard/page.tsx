"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import React, { Fragment, useEffect, useState } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiVoiceprintFill } from "react-icons/ri";
import { FaMicrochip } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { LuFileX2 } from "react-icons/lu";
import CardItems from "@/components/pages/card-items";
import { clsx } from "clsx";
import { Input } from "@/components/ui/input";
import { VscBellDot } from "react-icons/vsc";
import { FaQuestionCircle } from "react-icons/fa";
import { getDashboardInfo } from "@/services/dashboard-services";

export default function Page() {
  const [data, setData] = useState<{
    nombre_total_clients: string;
    nombre_total_affaires_nouvelles: string;
    nombre_sinistres_en_cours: string;
  }>();
  useEffect(() => {
    getDashboardInfo().then((res) => {
      console.log(res?.data);
      setData(res?.data);
    });
  }, []);
  return (
    <>
      <nav className="border-b py-4  flex items-center justify-between">
        <div className="pl-10">
          <Typography className="font-bold" variant="h5">
            Bienvenue,
          </Typography>
          <Typography variant="small">sur votre tableau de bord</Typography>
        </div>

        <div className="flex gap-2 pr-40">
          <VscBellDot color="blue" size={20} />
          <FaQuestionCircle size={20} />
        </div>
      </nav>
      <div className="w-full p-8 mt-7">
        <div className="py-2">
          <Typography className="font-bold" variant="p">
            Vue d'ensemble
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="gap-3 col-span-2 grid grid-cols-2">
            <CardItems
              url="/dashboard/clients"
              color="card1"
              title="Clients"
              subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cupiditate dolore. Ad ducimus distinctio pariatur?"
              icon={GoPeople}
              total={data?.nombre_total_clients}
            />
            <CardItems
              url="/dashboard"
              color="card2"
              title="Affaires nouvelles"
              subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cupiditate dolore. Ad ducimus distinctio pariatur?"
              icon={MdOutlineBusinessCenter}
              total={data?.nombre_total_affaires_nouvelles}
            />

            <div className="bg-[#FFEFE7] col-span-2 px-4 py-4 rounded-lg">
              <div className=" items-center flex justify-between gap-4">
                <div>
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#E89271]">
                    <LuFileX2 color="white" size={25} />
                  </div>
                </div>

                <div className="">
                  <Typography className="font-bold" variant="p">
                    Sinistres Ouvert
                  </Typography>

                  <Typography variant="small">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur cupiditate dolore. Ad ducimus distinctio pariatur?
                  </Typography>
                </div>
                <div className="">
                  <Typography className=" font-bold" variant="h2">
                    {data?.nombre_sinistres_en_cours}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#35487E] rounded-lg p-5 ">
            <Typography className="text-white" variant="p">
              Intelligences Artificielles (IA)
            </Typography>
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <div className=" bg-green-300 h-10 w-10 flex items-center justify-center rounded-full">
                  <TbReportAnalytics color="white" size={20} />
                </div>
                <Typography className="text-white" variant="h4">
                  18
                </Typography>
              </div>
              <Typography className="text-white pt-2 " variant="small">
                Urgences à gérer
              </Typography>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <div className="border rounded-full w-7 h-7 flex items-center justify-center bg-white">
                  <FaMicrochip color="black" size={20} />
                </div>
                <Typography className="text-white" variant="p">
                  Unification de données client(IA)
                </Typography>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="border rounded-full w-7 h-7 flex items-center justify-center bg-white">
                  <FiServer color="black" size={20} />
                </div>
                <Typography className="text-white" variant="p">
                  Assistance du souscripteur(IA)
                </Typography>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="border rounded-full w-7 h-7 flex items-center justify-center bg-white">
                  <RiVoiceprintFill color="black" size={20} />
                </div>
                <Typography className="text-white" variant="p">
                  Le chun rate(IA)
                </Typography>
              </div>
            </div>
            <Button variant={"outline"} className="mt-5 ">
              Traiter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
