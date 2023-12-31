"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "../../../components/ui/typography";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type ClassValue } from "clsx";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Checkbox } from "@/components/ui/checkbox";
import { BsFilterSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import {FaArrowAltCircleLeft, FaQuestionCircle} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import companyLogo from "@/public/assets/img/company/MicrosoftTeams-image (5).png";
import { getListeClient } from "@/services/listClient-services";
import HeaderItems from "@/components/pages/header-items";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "0001",
      nomPrenoms: "Karamoko Vadiahoue",
      nationality: "Ivoirienne",
      telNumber: "0705040302",
      anciennete: "1mois",
    },
  ];
}


export default function Page() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getListeClient().then((res) => {
      console.log(res?.data);
      setData(res?.data);
    });
  }, []);

  // const data = await getData();

  return (
    <div>
      <div className="w-full p-5">
        <HeaderItems title="Clients" icons1={FaArrowAltCircleLeft } icons2={VscBellDot} icons3={FaQuestionCircle} hideBrundcrumbs={false} />


        <div className="flex items-center justify-between pt-4">
          <div className=" p-2 w-1/2 flex items-center rounded-xl">
            <Select>
              <SelectTrigger className="w-[100px] text-white bg-blue-500">
                <SelectValue placeholder="Catégories" />
                {/* <IoMdArrowDropdown color="white" size={500}/> */}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="1">Nom et prenoms</SelectItem>
                  <SelectItem value="2">Nationalité</SelectItem>
                  <SelectItem value="3">Id client</SelectItem>
                  <SelectItem value="4">Numéro de téléphone</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input type="search" placeholder="Recherche" />
            <div className="bg-[#CCD9FF]  w-20 h-10 rounded-md">
              <div className="p-3.5 pt-2">
                <BsSearch size={25} />
              </div>
            </div>
          </div>

          <div className="flex w-1/4 gap-4 items-center mr-7">
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
      <div className="mx-auto p-6 py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
