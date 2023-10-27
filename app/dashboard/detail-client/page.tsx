"use client";

import React from "react";
import { Typography } from "../../../components/ui/typography";
import Image from "next/image";
import ImageClient from "@/public/assets/img/company/pexels-godisable-jacob-718978.jpg";
import Link from "next/link"
import { PiIdentificationCardBold } from "react-icons/pi";
import { FaBirthdayCake } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsBalloonHeart } from "react-icons/bs";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiBagSimple } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineBusinessCenter } from "react-icons/md";
import CardItems from "@/components/pages/card-items";
import { DataTable } from "../clients/data-table";
import { Payment, } from "../clients/columns";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { AiFillEye } from "react-icons/ai";



 const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "id",
        header: "Contrats",
      },
      {
        accessorKey: "nomPrenoms",
        header: "Nom et prénoms",
      },
      {
        accessorKey: "nationality",
        header: "Date effet",
      },
  
      {
        accessorKey: "telNumber",
        header: "Date fin",
      },
  
      {
        accessorKey: "anciennete",
        header: "Branches",
      },
  
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <Link href={"/dashboard/detail-client"}>
        <Button className="flex justify-items-center gap-2 bg-[#CCD9FF]"> <AiFillEye color="black"/> <Typography className="text-black font-bold" variant="small">Voir</Typography></Button>
        </Link>
      )
    },
  },
 
]

export const payments: Payment[] = [
    {
      id: "0002",
      nomPrenoms: "Karamoko Vadiahoue",
      nationality: "Ivoirienne",
      telNumber: "0705040302",
      anciennete: "1mois",
    },
    {
      id: "0003",
      nomPrenoms: "Karamoko Vadiahoue",
      nationality: "Ivoirienne",
      telNumber: "0705040302",
      anciennete: "1mois",
    },
    {
      id: "0004",
      nomPrenoms: "Karamoko Vadiahoue",
      nationality: "Ivoirienne",
      telNumber: "0705040302",
      anciennete: "1mois",
    },
  ];
export default function page() {
  return (
    <div className="w-full p-5">
      <Typography className="font-bold" variant="h5">
        {" "}
        Détail client
      </Typography>
      <div className=" w-full flex">
        <div className="w-3/5 h-auto">
          <div className="  flex items-center">
            <div className="bg-[#CCD9FF]/50 w-48 px-3 p-2 flex gap-1 flex-col items-center">
              <div className="w-20 h-20 rounded-full relative bg-white">
                <Image
                  className="object-cover object-center rounded-full"
                  fill
                  src={ImageClient}
                  alt="La photo du client"
                />
              </div>
              <Typography variant="p" className="font-bold">
                Mariam Touré
              </Typography>
              <Typography
                className="text-center text-sm text-muted-foreground"
                variant="small"
              >
                Habite, abidjan, koumassi
              </Typography>
              <Typography
                className="text-sm text-muted-foreground"
                variant="small"
              >
                0707070707
              </Typography>
            </div>

            <div className="flex flex-col w-48 gap-5 px-2">
              <div className="flex gap-2">
                <PiIdentificationCardBold />
                <Typography variant="small">Ivoirienne</Typography>
              </div>
              <div className="flex gap-2">
                <BsBalloonHeart />
                <Typography variant="small">Célibataire</Typography>
              </div>
              <div className="flex gap-2">
                <MdOutlineLocalPostOffice />
                <Typography variant="small">m.kone@gmail.com</Typography>
              </div>
              <div className="flex gap-2">
                <FaBirthdayCake />
                <Typography variant="small">12 Decembre 2022</Typography>
              </div>
            </div>

            <div className="flex flex-col  w-48 gap-5 px-2">
              <div className=" invisible flex gap-2 ">
                <FaBirthdayCake />
                <Typography variant="small">Féminin</Typography>
              </div>
              <div className="flex gap-2">
                <PiGenderIntersexBold />
                <Typography variant="small">Féminin</Typography>
              </div>
              <div className="flex gap-2">
                <PiBagSimple />
                <Typography variant="small">Architecte</Typography>
              </div>
              <div className="flex gap-2">
                <VscLocation />
                <Typography variant="small">Née à Bouaké</Typography>
              </div>
            </div>
          </div>
          <div>
          <div className="container mx-auto py-10">
        <DataTable columns={columns} data={payments} />
      </div>
          </div>
        </div>

        <div className=" w-2/5 ">
          <div className="gap-10 col-span-2 grid grid-cols-2">
            <CardItems
              color="card3"
              title="Contrats"
              icon={MdOutlineBusinessCenter}
              total="45"
            />
            <CardItems
              color="card5"
              title="Règlement encaissé"
              icon={MdOutlineBusinessCenter}
              total="17"
            />
            <CardItems
              color="card4"
              title="Nombres total de sinistre"
              icon={MdOutlineBusinessCenter}
              total="45"
            />
            <CardItems
              color="card5"
              title="Nombres total de prestation"
              icon={MdOutlineBusinessCenter}
              total="45"
            />
            <CardItems
              color="card6"
              title="Taux d'engagements"
              icon={MdOutlineBusinessCenter}
              total="45"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
