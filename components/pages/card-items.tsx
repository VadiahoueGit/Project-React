'use client'
import React from 'react'
import { GoPeople } from 'react-icons/go'
import { Typography } from '../ui/typography'
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
    total?: string;
    title?: string;
    subtitle?: string;
    icon: IconType;
    color?: string;
    url?: string;
}

export default function CardItems({color,...props}:Props) {
    console.log(color)
    let colorCustom
    let colorCustomBg
    if(color === "card1"){
        colorCustomBg = "bg-card1/10"
        colorCustom = "bg-card1"
    }else if (color === "card2"){
      colorCustomBg = "bg-card2/10"
        colorCustom = "bg-card2"
    }else
    if(color === "card3"){
      colorCustomBg = "bg-card3/10"
      colorCustom = "bg-card3"
    }else if(color === "card4"){
      colorCustomBg = "bg-card4/10"
      colorCustom = "bg-card4"
    }
    else if(color === "card5"){
      colorCustomBg = "bg-card5/10"
      colorCustom = "bg-card5"
    }else{
      colorCustomBg = "bg-card6/10"
      colorCustom = "bg-card6"
    }

  return (
    <Link href={props.url ?? "/"}>
    <div className={cn( colorCustomBg,`rounded-2xl px-4 py-8`)}>
    <div className=" items-center grid grid-cols-2 gap-4">
      <div className= {cn( colorCustom,`h-14 w-14  flex items-center justify-center rounded-full`)}>
        <props.icon color="white" size={25}/>
      </div>

      <div className="">
        <Typography className=" font-extrabold" variant="h3">
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
