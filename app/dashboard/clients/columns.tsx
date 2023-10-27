"use client"

import { ColumnDef , flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable, } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiFillEye } from "react-icons/ai"
import { Typography } from '../../../components/ui/typography';
import Link from "next/link"

export type Payment = {
    id: string
    nomPrenoms: string
    nationality: string
    telNumber: string
    anciennete: string
  }
   
  export const payments: Payment[] = [
    {
      id: "728ed52f",
      nomPrenoms: "100",
      nationality: "pending",
      telNumber: "m@example.com",
      anciennete: "m@example.com",
    },
    {
      id: "489e1d42",
      nomPrenoms: "125",
      nationality: "processing",
      telNumber: "example@gmail.com",
      anciennete: "example@gmail.com",
    },
  ]

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "id",
        header: "ID unique",
      },
      {
        accessorKey: "nomPrenoms",
        header: "Nom et prénoms",
      },
      {
        accessorKey: "nationality",
        header: "Nationalité",
      },
  
      {
        accessorKey: "telNumber",
        header: "Numéro de téléphone",
      },
  
      {
        accessorKey: "anciennete",
        header: "Ancieneté",
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
