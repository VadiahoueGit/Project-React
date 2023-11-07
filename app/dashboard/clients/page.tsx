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
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import companyLogo from "@/public/assets/img/company/MicrosoftTeams-image (5).png";
import { getListeClient } from "@/services/listClient-services";

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
        <nav className="border-b py-4  flex items-center justify-between">
          <div className="pl-10">
            <Typography className="font-bold" variant="h5">
              Clients
            </Typography>

            <nav className="flex pt-2" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                      className="ml-1 text-sm font-medium text-[#D89D37] hover:text-[#D89D37] md:ml-2 dark:text-gray-400 dark:hover:text-white"
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
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
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
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
