"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Typography } from "../../../components/ui/typography";
import Image from "next/image";
import ImageClient from "@/public/assets/img/company/pexels-godisable-jacob-718978.jpg";
import Link from "next/link";
import { PiHandCoins, PiIdentificationCardBold } from "react-icons/pi";
import { FaBirthdayCake, FaQuestionCircle } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsBalloonHeart } from "react-icons/bs";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiBagSimple } from "react-icons/pi";
import { VscBellDot, VscLocation } from "react-icons/vsc";
import { MdOutlineBusinessCenter } from "react-icons/md";
import CardItems from "@/components/pages/card-items";
import { DataTable } from "../clients/data-table";
import { Payment } from "../clients/columns";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { AiFillEye } from "react-icons/ai";
import { Checkbox } from "@/components/ui/checkbox";
import { BsFilterSquare } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { FaDownLong } from "react-icons/fa6";
import { LuFileX2 } from "react-icons/lu";

import { Input } from "@/components/ui/input";
import { getIndicateurClient } from "@/services/indicateur-services";
import { getDetailClientPhysique } from "@/services/detailsPersonnePhysique";
import { truncateText } from "@/lib/utils";

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "numero_contrat",
    header: "Numero de police",
  },
  {
    accessorKey: "risque",
    header: "Produit",
  },
  {
    accessorKey: "nom_prenom_client",
    header: "Client",
  },

  {
    accessorKey: "date_effet",
    header: "Date effet",
  },

  {
    accessorKey: "date_expiration",
    header: "Date fin",
  },


  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Link href={"/dashboard/detail-contrat"}>
          <Button className="flex justify-items-center gap-2 bg-[#CCD9FF]">
            {" "}
            <AiFillEye color="black" />{" "}
            <Typography className="text-black font-bold" variant="small">
              Voir
            </Typography>
          </Button>
        </Link>
      );
    },
  },
];

export const payments: Payment[] = [
  {
    id: "0002",
    nomPrenoms: "Karamoko Vadiahoue",
    nationality: "Ivoirienne",
    telNumber: "0705040302",
    anciennete: "Vie",
  },
  {
    id: "0003",
    nomPrenoms: "Goue Bi Roméo",
    nationality: "Ivoirienne",
    telNumber: "0784511145",
    anciennete: "Non-vie",
  },
  {
    id: "0004",
    nomPrenoms: "Sanogo Aboudramane",
    nationality: "Ivoirienne",
    telNumber: "0787458742",
    anciennete: "Non-vie",
  },
  {
    id: "0005",
    nomPrenoms: "Anicet Kacou",
    nationality: "Ivoirienne",
    telNumber: "0787448841",
    anciennete: "Vie",
  },
  {
    id: "0005",
    nomPrenoms: "Serge Dele",
    nationality: "Ivoirienne",
    telNumber: "0763551234",
    anciennete: "Non-Vie",
  },
  {
    id: "0005",
    nomPrenoms: "Seri Christophe",
    nationality: "Ivoirienne",
    telNumber: "0790808855",
    anciennete: "Vie",
  },
  {
    id: "0005",
    nomPrenoms: "N'cho Fréjus",
    nationality: "Ivoirienne",
    telNumber: "0797878784",
    anciennete: "Non-vie",
  },
];
export default function Page() {

  const [data, setData] = useState<any>();
  useEffect(() => {
    getDetailClientPhysique().then((res) => {
      console.log(res?.data);
      setData(res?.data);
    });
  }, []);
  console.log(data);
  

  return (
    <div className="w-full p-5">
         <nav className="border-b py-4  flex items-center justify-between">
          <div className="pl-10">
            <Typography className="font-bold" variant="h5">
              Détail client
            </Typography>

            <nav className="flex pt-2" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-500  md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Clients
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-[#D89D37]  md:ml-2 dark:text-gray-400">
                      Détail client
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex gap-2 pr-40">
            <VscBellDot color="blue" size={20} />
            <FaQuestionCircle size={20} />
          </div>
        </nav>
      <div className=" w-full flex">
        <div className="w-3/5 h-auto">
          <div className="  flex items-center">
            <div className="bg-[#CCD9FF]/50 w-48 px-3 p-2 flex gap-1 flex-col items-center ">
              <div className="w-20 h-20 rounded-full relative bg-white ">
                <Image
                  className="object-cover object-center rounded-full"
                  fill
                  src={ImageClient}
                  alt="La photo du client"
                />
              </div>
              <Typography variant="p" className="font-bold">
                {data?.nom} {data?.prenom}
              </Typography>
              <Typography
                className="text-center text-sm text-muted-foreground"
                variant="small"
              >
                {data?.adresse}
              </Typography>
              <Typography
                className="text-sm text-muted-foreground" 
                variant="small"
              >
                {data?.tel}
              </Typography>
            </div>

            <div className="flex flex-col w-48 gap-5 px-2">
              <div className="flex gap-2">
                <PiIdentificationCardBold />
                <Typography variant="small">{data?.nationalite}</Typography>
              </div>
              <div className="flex gap-2">
                <BsBalloonHeart />
                <Typography variant="small">{data?.statut_matrimonial}</Typography>
              </div>
              <div className="flex gap-2">
                <MdOutlineLocalPostOffice />
                <Typography variant="small">{data?.email && truncateText(data?.email,15)}</Typography>
              </div>
              <div className="flex gap-2">
                <FaBirthdayCake />
                <Typography variant="small">{data?.date_naissance}</Typography>
              </div>
            </div>

            <div className="flex flex-col  w-48 gap-5 px-2">
              <div className=" invisible flex gap-2 ">
                <FaBirthdayCake />
                <Typography variant="small">Féminin</Typography>
              </div>
              <div className="flex gap-2">
                <PiGenderIntersexBold />
                <Typography variant="small">{data?.sexe}</Typography>
              </div>
              <div className="flex gap-2">
                <PiBagSimple />
                <Typography variant="small">{data?.profession}</Typography>
              </div>
              <div className="flex gap-2">
                <VscLocation />
                <Typography variant="small">{data?.lieu_de_naissance}</Typography>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full pt-5 py-5">
              <div className="flex items-center justify-between pt-4">
                <Typography className="font-bold" variant="h5">
                  Contrats
                </Typography>
                <div className="flex w-1/2 gap-4 items-center mr-7">
                  <div className="flex items-center gap-2 ">
                    <Typography className="font-bold" variant="p">
                      Filtrer
                    </Typography>

                    <BsFilterSquare size={25} />
                  </div>

                  <div className=" flex gap-4 items-center">
                    <div className="items-center flex gap-2 ">
                      <Checkbox id="terms1" />
                      <div className="grid leading-none">
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Vie
                        </label>
                      </div>
                    </div>
                    <div className="items-center flex gap-2 ">
                      <Checkbox id="terms2" />
                      <div className="grid leading-none">
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Non-Vie
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-start pr-4">
              <DataTable columns={columns} data={data?.liste_contrats ?? []} />
            </div>
          </div>
        </div>

        <div className=" w-2/5 ">
          <div className="gap-10 col-span-2 grid grid-cols-2">
            <CardItems
              color="card3"
              title="Contrats"
              icon={BsClipboard}
              total={data?.indicateurs?.nombre_contrats}
            />
            <CardItems
              color="card5"
              title="Règlement encaissé"
              icon={PiHandCoins}
              total={data?.indicateurs?.nombre_encaissements}
            />
            <CardItems
              color="card4"
              title="Nombres total de sinistre"
              icon={LuFileX2}
              total={data?.indicateurs?.nombre_contrats}
            />
            <CardItems
              color="card5"
              title="Nombres total de prestation"
              icon={BsClipboard}
              total={data?.indicateurs?.nombre_total_prestations_vie}
            />
            <CardItems
              color="card6"
              title="Taux d'engagements"
              icon={FaDownLong}
              total={(data?.indicateurs?.staturation_client)+'%'}
            />
          </div>
        </div>
      </div>
    </div>
  );

 
  
}
