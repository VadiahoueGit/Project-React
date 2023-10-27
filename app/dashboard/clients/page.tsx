import React from "react";
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

export default async function page() {
  const data = await getData();

  return (
    <div>
      <div className="w-full p-5">
        <Typography className="font-bold" variant="h5">
          Clients
        </Typography>
        <div className="flex items-center justify-between pt-4">
          <div className=" p-2 w-1/2 flex items-center rounded-xl">
            <Select>
              <SelectTrigger className="w-[100px] text-white bg-blue-500">
                <SelectValue placeholder="Catégories" />
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
        <DataTable columns={columns} data={payments} />
      </div>
    </div>
  );
}
