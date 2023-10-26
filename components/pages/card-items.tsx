'use client'
import React from 'react'
import { GoPeople } from 'react-icons/go'
import { Typography } from '../ui/typography'
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
    total: string;
    title: string;
    subtitle: string;
    icon: IconType;
    color: string;
    url?: string;
}

export default function CardItems({color,...props}:Props) {
    console.log(color)
    let colorCustom
    let colorCustomBg
    if(color === "card1"){
        colorCustomBg = "bg-card1/30"
        colorCustom = "bg-card1"
    }else{
      colorCustomBg = "bg-card2/30"
        colorCustom = "bg-card2"
    }
  return (
    <Link href={props.url ?? "/"}>
    <div className={cn( colorCustomBg,`rounded-lg px-4 py-8`)}>
    <div className=" grid grid-cols-2 gap-4">
      <div className= {cn( colorCustom,`h-14 w-14  flex items-center justify-center rounded-full`)}>
        <props.icon color="white" size={25}/>
      </div>

      <div className="">
        <Typography className=" font-bold" variant="h2">
        {props.total}
        </Typography>
      </div>

      <div className="col-span-2">
        <Typography className="font-bold" variant="p">
        {props.title}
        </Typography>

        <Typography variant="small">
        {props.subtitle}
        </Typography>
      </div>
    </div>
  </div>
    </Link>
  )
}
